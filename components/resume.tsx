"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function Resume() {
  const { t, language } = useLanguage()

  const experiences = [
    {
      title: language === "en" ? "Front End Developer" : "Front End Developer",
      company: "CloudFin",
      period: language === "en" ? "11/2024 - Present" : "11/2024 - Παρόν",
      description:
        language === "en"
          ? "Building web applications for financial systems—creating features for purchase orders, invoicing, and document management. Working with an awesome team to deliver solutions that help businesses run smoother."
          : "Δημιουργία web εφαρμογών για οικονομικά συστήματα—φτιάχνοντας features για παραγγελίες, τιμολόγηση και διαχείριση εγγράφων. Συνεργασία με μια υπέροχη ομάδα για να παραδίδουμε λύσεις που βοηθούν τις επιχειρήσεις να τρέχουν πιο ομαλά.",
    },
    {
      title: language === "en" ? "Full Stack Developer" : "Full Stack Developer",
      company: language === "en" ? "Self-employed" : "Αυτοαπασχολούμενος",
      period: language === "en" ? "11/2023 - Present" : "11/2023 - Παρόν",
      description:
        language === "en"
          ? "Creating custom web solutions for clients—from e-commerce stores to marketplace platforms and portfolios. I handle the whole journey: design, development, and launch. It's all about bringing ideas to life."
          : "Δημιουργία custom web λύσεων για πελάτες—από e-commerce καταστήματα μέχρι marketplace πλατφόρμες και portfolios. Διαχειρίζομαι όλο το ταξίδι: design, development και launch. Όλα γυρνούν γύρω από το να φέρουμε ιδέες στη ζωή.",
    },
  ]

  const education = [
    {
      degree: language === "en" ? "Computer Software" : "Πληροφορική",
      institution:
        language === "en"
          ? "Coding Factory, Athens University of Economics and Business"
          : "Coding Factory, Οικονομικό Πανεπιστήμιο Αθηνών",
      period: language === "en" ? "10/2023" : "10/2023",
      description:
        language === "en"
          ? "Received a Vocational Education and Training Certificate on a 7-month boot camp."
          : "Έλαβα Πιστοποιητικό Επαγγελματικής Εκπαίδευσης και Κατάρτισης σε ένα 7μηνο boot camp.",
    },
    {
      degree: language === "en" ? "Merchant Marine Officer" : "Αξιωματικός Εμπορικού Ναυτικού",
      institution:
        language === "en" ? "Merchant Marine Academy of Aspropyrgos" : "Ακαδημία Εμπορικού Ναυτικού Ασπροπύργου",
      period: language === "en" ? "10/2019" : "10/2019",
      description:
        language === "en"
          ? "Received a Merchant Marine Officer Degree - (Bachelor)"
          : "Έλαβα πτυχίο Αξιωματικού Εμπορικού Ναυτικού - (Bachelor)",
    },
  ]

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("resume.title")}</h2>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{t("resume.description")}</p>
          <Button asChild className="rounded-full gap-2">
            <a href="/files/dimitris-palamidas-resume.pdf" download>
              <Download className="h-4 w-4" />
              {t("resume.download")}
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-gray-500 dark:text-gray-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("resume.experience")}</h3>
            </div>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-3">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-gray-500 dark:text-gray-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("resume.education")}</h3>
            </div>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-3">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
