"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X } from "lucide-react"

export function LanguagePopup() {
  const { language, setLanguage } = useLanguage()
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisited")
    if (!hasVisited) {
      setShowPopup(true)
      localStorage.setItem("hasVisited", "true")
    }
  }, [])

  const handleLanguageSelect = (selectedLanguage: "en" | "el") => {
    setLanguage(selectedLanguage)
    setShowPopup(false)
  }

  const handleClose = () => setShowPopup(false)

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 32 }}
            animate={{ y: 0 }}
            exit={{ y: 32 }}
            className="relative w-full max-w-md rounded-lg border bg-card p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-black2.png"
                alt="Logo"
                width={300}
                height={100}
                className="h-10 w-auto"
                priority
              />
            </div>
            <h2 className="mb-4 text-center text-2xl font-bold text-foreground">
              Select Your Language
              <span className="block text-base font-normal text-muted-foreground">
                Επιλέξτε τη Γλώσσα σας
              </span>
            </h2>
            <div className="flex flex-col gap-4 mt-6">
              <Button
                onClick={() => handleLanguageSelect("en")}
                className="w-full text-lg"
                size="lg"
              >
                English
              </Button>
              <Button
                onClick={() => handleLanguageSelect("el")}
                className="w-full text-lg"
                size="lg"
                variant="outline"
              >
                Ελληνικά
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 