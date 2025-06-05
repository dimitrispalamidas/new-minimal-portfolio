"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          {mounted && (
            <Image
              src={theme === "dark" ? "/logo-gray2.png" : "/logo-black2.png"}
              alt="Dimitris Palamidas Logo"
              width={100}
              height={100}
              priority
            />
          )}
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {language === "en" ? "About" : "Σχετικά"}
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {language === "en" ? "Skills" : "Δεξιότητες"}
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {language === "en" ? "Projects" : "Έργα"}
            </Link>
            <Link
              href="#resume"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {language === "en" ? "Resume" : "Βιογραφικό"}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {language === "en" ? "Contact" : "Επικοινωνία"}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
            <button
              onClick={() => setLanguage(language === "en" ? "el" : "en")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {language === "en" ? "EN" : "GR"}
            </button>
            <button
              onClick={toggleTheme}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            onClick={() => setLanguage(language === "en" ? "el" : "en")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            {language === "en" ? "EN" : "GR"}
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 shadow-lg">
          <nav className="flex flex-col py-4">
            <Link
              href="#about"
              className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === "en" ? "About" : "Σχετικά"}
            </Link>
            <Link
              href="#skills"
              className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === "en" ? "Skills" : "Δεξιότητες"}
            </Link>
            <Link
              href="#projects"
              className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === "en" ? "Projects" : "Έργα"}
            </Link>
            <Link
              href="#resume"
              className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === "en" ? "Resume" : "Βιογραφικό"}
            </Link>
            <Link
              href="#contact"
              className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === "en" ? "Contact" : "Επικοινωνία"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
