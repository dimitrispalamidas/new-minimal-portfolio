"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "./language-provider"

export function Projects() {
  const { t, language } = useLanguage()

  const categories = [t("projects.all"), t("projects.webapp"), t("projects.landing"), t("projects.ecommerce")]
  const [activeCategory, setActiveCategory] = useState(t("projects.all"))

  // Reset category when language changes
  useEffect(() => {
    setActiveCategory(t("projects.all"))
  }, [language, t])

  const projects = [
    {
      title: "Kids E-Commerce Platform",
      description: {
        en: "A full-featured online store for children's clothing and footwear. Built with seamless payment processing, shipping integration, and an intuitive admin panel to manage everything.",
        el: "Ένα ολοκληρωμένο ηλεκτρονικό κατάστημα για παιδικά ρούχα και παπούτσια. Διαθέτει εύκολες πληρωμές, ενσωμάτωση αποστολών και φιλικό admin panel για πλήρη διαχείριση.",
      },
      image: "/tinkerbell.png",
      category: t("projects.ecommerce"),
      tags: {
        en: ["Next.js", "E-commerce", "Payment Gateway", "Admin Panel"],
        el: ["Next.js", "E-shop", "Ηλεκτρονικές Πληρωμές", "Admin Panel"],
      },
      demoLink: "https://tinkerbell-e-shop.vercel.app/",
    },
    {
      title: "Vehicle Marketplace",
      description: {
        en: "A sleek marketplace connecting car buyers and sellers. Features smart search filters, live inventory tracking, and an automated system to handle inquiries from international buyers.",
        el: "Μια σύγχρονη marketplace πλατφόρμα που συνδέει αγοραστές και πωλητές αυτοκινήτων. Περιλαμβάνει έξυπνα φίλτρα αναζήτησης, real-time αποθέματα και αυτοματοποιημένες αιτήσεις ενδιαφέροντος.",
      },
      image: "/autostylecars.png",
      category: t("projects.webapp"),
      tags: {
        en: ["Next.js", "Marketplace", "Search", "Contact System"],
        el: ["Next.js", "Marketplace", "Έξυπνη Αναζήτηση", "Σύστημα Επικοινωνίας"],
      },
      demoLink: "https://car-website-coral-alpha.vercel.app/",
      githubLink: "https://github.com/dimitrispalamidas/v0-car-website-clone",
    },
  ]

  const filteredProjects =
    activeCategory === t("projects.all") ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("projects.title")}</h2>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{t("projects.description")}</p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={
                    language === "en"
                      ? `${project.title} - Web project by Dimitris Palamidas`
                      : `${project.title} - Web project από τον Dimitris Palamidas`
                  }
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description[language]}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags[language].map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoLink && project.demoLink !== "#" && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t("projects.demo")}
                      </a>
                    </Button>
                  )}
                  {project.githubLink && project.githubLink !== "#" && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {t("projects.code")}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
