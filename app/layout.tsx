import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { ReactNode } from "react"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
// import { GoogleAnalytics } from "./google-analytics" // Uncomment when you get your GA ID

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dimitris Palamidas | Full Stack & AI Engineer",
  description:
    "Full Stack & AI Engineer based in Athens, Greece. Building production-ready AI workflows and web products with React, Next.js, Angular, Python, FastAPI, and cloud AI services.",
  icons: {
    icon: '/logo-gray.png',
    shortcut: '/logo-gray.png',
    apple: '/logo-gray.png',
  },
  keywords: [
    "Dimitris Palamidas",
    "Full Stack Engineer",
    "AI Engineer",
    "React Developer",
    "Angular Developer",
    "Python Developer",
    "FastAPI Developer",
    "LLM Engineer",
    "RAG Systems",
    "Vertex AI",
    "Gemini",
    "Next.js Developer",
    "Web Developer Athens",
    "UI/UX Developer",
    "CloudFin Developer",
    "Greece Software Engineer",
    "Dimitris Palamidas Portfolio",
    "Telerik Kendo UI Developer",
    "Supabase Developer",
    "RxJS Developer",
    "Angular Signals",
    "Enterprise Web Applications",
    "Freelance Developer Greece"
  ],
  authors: [{ name: "Dimitris Palamidas" }],
  creator: "Dimitris Palamidas",
  publisher: "Dimitris Palamidas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dimitrispalamidas.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dimitris Palamidas | Full Stack & AI Engineer",
    description:
      "Building production-ready AI workflows and full stack web products for enterprise teams and growing businesses.",
    url: 'https://dimitrispalamidas.com',
    siteName: 'Dimitris Palamidas Portfolio',
    images: [
      {
        url: '/dimitrispalamidas.jpg',
        width: 600,
        height: 600,
        alt: "Dimitris Palamidas - Full Stack & AI Engineer",
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dimitris Palamidas | Full Stack & AI Engineer",
    description:
      "Full-time at CloudFin and freelance for clients. Building AI-assisted and full stack products with modern web technologies.",
    images: ['/dimitrispalamidas.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'r-jB5H88Xpu4DdV-CdFwBga0675VQ-fiMFQ91_KzJLE',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dimitris Palamidas",
    "alternateName": ["Dimitris Palamidas Developer", "Dimitris Palamidas Full Stack", "Dimitris Palamidas AI Engineer"],
    "url": "https://dimitrispalamidas.com",
    "image": "https://dimitrispalamidas.com/dimitrispalamidas.jpg",
    "jobTitle": "Full Stack & AI Engineer",
    "description": "Full Stack & AI Engineer building production-ready AI workflows and full stack web products.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Athens",
      "addressCountry": "Greece"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University"
    },
    "knowsAbout": [
      "React",
      "Angular",
      "Python",
      "FastAPI",
      "Large Language Models",
      "RAG",
      "Vertex AI",
      "Gemini",
      "Next.js",
      "Front-End Development",
      "Full Stack Development",
      "UI/UX Design",
      "Responsive Design",
      "Telerik Kendo UI",
      "Supabase",
      "PostgreSQL",
      "SQL Server",
      "Docker",
      "RxJS",
      "Angular Signals",
      "Git",
      "GitHub",
      "Agile"
    ],
    "sameAs": [
      "https://github.com/dimitrispalamidas",
      "https://linkedin.com/in/dimitrispalamidas"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "CloudFin"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Uncomment and add your GA measurement ID when ready */}
        {/* <GoogleAnalytics measurementId="G-XXXXXXXXXX" /> */}
        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
