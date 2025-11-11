"use client"

import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Dimitris Palamidas. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
