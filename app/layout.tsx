import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { ReactNode } from "react"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from 'next'
// import { GoogleAnalytics } from "./google-analytics" // Uncomment when you get your GA ID

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dimitris Palamidas | React Developer & Angular Developer | Front-End Developer Portfolio",
  description: "Dimitris Palamidas - Experienced React Developer and Angular Developer specializing in modern web applications. Front-End Developer with expertise in TypeScript, Next.js, and responsive UI/UX design. Based in Athens, Greece.",
  icons: {
    icon: '/logo-gray.png',
    shortcut: '/logo-gray.png',
    apple: '/logo-gray.png',
  },
  keywords: [
    "Dimitris Palamidas",
    "React Developer",
    "Angular Developer",
    "Front-End Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Web Developer Athens",
    "JavaScript Developer",
    "React Native Developer",
    "UI/UX Developer",
    "Full Stack Developer",
    "CloudFin Developer",
    "Greece Front-End Developer",
    "Dimitris Palamidas Portfolio",
    "React Angular Developer"
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
    title: "Dimitris Palamidas | React & Angular Developer",
    description: "Experienced React Developer and Angular Developer specializing in modern, scalable web applications. Expert in TypeScript, Next.js, and responsive design.",
    url: 'https://dimitrispalamidas.com',
    siteName: 'Dimitris Palamidas Portfolio',
    images: [
      {
        url: '/dimitrispalamidas.jpg',
        width: 600,
        height: 600,
        alt: 'Dimitris Palamidas - React & Angular Developer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimitris Palamidas | React & Angular Developer',
    description: 'Experienced React Developer and Angular Developer specializing in modern web applications with TypeScript and Next.js.',
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
    "alternateName": ["Dimitris Palamidas Developer", "Dimitris Palamidas React", "Dimitris Palamidas Angular"],
    "url": "https://dimitrispalamidas.com",
    "image": "https://dimitrispalamidas.com/dimitrispalamidas.jpg",
    "jobTitle": "Front-End Developer",
    "description": "Experienced React Developer and Angular Developer specializing in modern web applications with TypeScript, Next.js, and responsive design.",
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
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React Native",
      "Front-End Development",
      "Web Development",
      "UI/UX Design",
      "TailwindCSS",
      "HTML5",
      "CSS3",
      "Responsive Design"
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
      </body>
    </html>
  )
}
