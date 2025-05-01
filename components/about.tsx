"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { useState, useEffect } from "react"

export function About() {
  const { t } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("about.title")}</h2>
            <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
          </div>
          {/* Static placeholder for motion content */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/me.jpeg"
                  alt="Dimitris Palamidas"
                  width={600}
                  height={600}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("about.subtitle")}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t("about.paragraph1")}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t("about.paragraph2")}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t("about.paragraph3")}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("about.title")}</h2>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto md:mx-0"
          >
            <div className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
              <Image
                src="/me.jpeg"
                alt="Dimitris Palamidas"
                width={600}
                height={600}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("about.subtitle")}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t("about.paragraph1")}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t("about.paragraph2")}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t("about.paragraph3")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
