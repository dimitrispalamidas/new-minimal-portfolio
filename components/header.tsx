"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Moon, Sun, Menu, X, Globe, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

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

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "el" : "en")
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

          <div className="flex items-center space-x-2">
            {/* Settings Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full" aria-label="Settings">
                  <Settings className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                {/* Language */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">Language</div>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "font-bold text-primary" : ""}
                >
                  {language === "en" && <span className="mr-2">✓</span>} EN
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("el")}
                  className={language === "el" ? "font-bold text-primary" : ""}
                >
                  {language === "el" && <span className="mr-2">✓</span>} GR
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* Theme */}
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">Theme</div>
                <DropdownMenuItem asChild>
                  <div className="flex items-center justify-between w-full">
                    <span className="flex items-center gap-2">
                      {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                      {theme === "dark" ? "Dark" : "Light"}
                    </span>
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                      aria-label="Toggle theme"
                    />
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2 rounded-full">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* Language Switcher */}
          <div className="flex items-center border rounded-full px-2 py-1 bg-secondary/60 dark:bg-secondary/30">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 text-sm font-semibold transition-colors ${
                language === "en"
                  ? "text-primary underline underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={language === "en"}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="mx-1 text-muted-foreground">|</span>
            <button
              onClick={() => setLanguage("el")}
              className={`px-2 text-sm font-semibold transition-colors ${
                language === "el"
                  ? "text-primary underline underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={language === "el"}
              aria-label="Switch to Greek"
            >
              GR
            </button>
          </div>

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
