#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const ROOT = process.cwd()
const TARGET_FILE = path.join(ROOT, "components", "language-provider.tsx")
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const MODEL = process.env.OPENAI_MODEL || "gpt-4.1"

if (!OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY. Set it and run again.")
  process.exit(1)
}

function extractObjectLiteral(source, declarationStart) {
  const startIdx = source.indexOf(declarationStart)
  if (startIdx === -1) {
    throw new Error(`Could not find declaration: ${declarationStart}`)
  }

  const braceStart = source.indexOf("{", startIdx)
  if (braceStart === -1) {
    throw new Error("Could not find opening brace for translations object.")
  }

  let i = braceStart
  let depth = 0
  let inSingle = false
  let inDouble = false
  let inTemplate = false
  let escaped = false

  for (; i < source.length; i++) {
    const ch = source[i]

    if (escaped) {
      escaped = false
      continue
    }

    if (ch === "\\") {
      escaped = true
      continue
    }

    if (!inDouble && !inTemplate && ch === "'" && !inSingle) {
      inSingle = true
      continue
    } else if (!inDouble && !inTemplate && ch === "'" && inSingle) {
      inSingle = false
      continue
    }

    if (!inSingle && !inTemplate && ch === '"' && !inDouble) {
      inDouble = true
      continue
    } else if (!inSingle && !inTemplate && ch === '"' && inDouble) {
      inDouble = false
      continue
    }

    if (!inSingle && !inDouble && ch === "`" && !inTemplate) {
      inTemplate = true
      continue
    } else if (!inSingle && !inDouble && ch === "`" && inTemplate) {
      inTemplate = false
      continue
    }

    if (inSingle || inDouble || inTemplate) continue

    if (ch === "{") depth++
    if (ch === "}") {
      depth--
      if (depth === 0) {
        return {
          start: braceStart,
          end: i + 1,
          literal: source.slice(braceStart, i + 1),
        }
      }
    }
  }

  throw new Error("Could not find matching closing brace for translations object.")
}

function parseTranslationsLiteral(literal) {
  // This object literal is authored in code and trusted in this repo.
  return Function(`"use strict"; return (${literal});`)()
}

function buildPrompt(enTranslations, existingElTranslations) {
  return [
    "Translate the following English UI strings into Greek (el).",
    "Requirements:",
    "- Keep language simple, clear, and natural for a personal portfolio.",
    "- Preserve proper nouns and technical terms where appropriate (e.g. React, Next.js, LLM, AI, Full Stack, API).",
    "- Keep punctuation and sentence style concise.",
    "- Return ONLY a valid JSON object with the exact same keys.",
    "- Do not add or remove keys.",
    "",
    "English source JSON:",
    JSON.stringify(enTranslations, null, 2),
    "",
    "Current Greek JSON (use as context only):",
    JSON.stringify(existingElTranslations, null, 2),
  ].join("\n")
}

async function translateWithOpenAI(enTranslations, existingElTranslations) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are an expert EN->EL localization translator for software and product UI. Return only valid JSON.",
        },
        {
          role: "user",
          content: buildPrompt(enTranslations, existingElTranslations),
        },
      ],
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`OpenAI request failed (${response.status}): ${errorBody}`)
  }

  const data = await response.json()
  const content = data?.choices?.[0]?.message?.content
  if (!content) {
    throw new Error("OpenAI response did not contain message content.")
  }

  const translated = JSON.parse(content)
  return translated
}

function validateKeys(enTranslations, translated) {
  const expected = Object.keys(enTranslations).sort()
  const actual = Object.keys(translated).sort()

  if (expected.length !== actual.length) {
    throw new Error(
      `Key count mismatch. Expected ${expected.length} keys, got ${actual.length}.`
    )
  }

  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      throw new Error(
        `Key mismatch. Expected "${expected[i]}" but got "${actual[i]}" at position ${i}.`
      )
    }
  }
}

function buildOrderedTranslations(enTranslations, translated) {
  const orderedEl = {}
  for (const key of Object.keys(enTranslations)) {
    orderedEl[key] = translated[key]
  }

  return {
    en: enTranslations,
    el: orderedEl,
  }
}

async function main() {
  const source = await readFile(TARGET_FILE, "utf8")
  const marker = "const translations ="
  const { start, end, literal } = extractObjectLiteral(source, marker)

  const parsed = parseTranslationsLiteral(literal)
  if (!parsed?.en || !parsed?.el) {
    throw new Error("Expected translations to contain both 'en' and 'el' objects.")
  }

  const translated = await translateWithOpenAI(parsed.en, parsed.el)
  validateKeys(parsed.en, translated)
  const updatedTranslations = buildOrderedTranslations(parsed.en, translated)

  const replacement = `${marker} ${JSON.stringify(updatedTranslations, null, 2)}`
  const updatedSource = source.slice(0, source.indexOf(marker)) + replacement + source.slice(end)

  await writeFile(TARGET_FILE, updatedSource, "utf8")
  console.log(`Greek translations updated with ${MODEL} in components/language-provider.tsx`)
}

main().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
