"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "./language-provider"

export function Projects() {
  const { t } = useLanguage()

  const categories = [t("projects.all"), t("projects.webapp"), t("projects.landing"), t("projects.ecommerce")]
  const [activeCategory, setActiveCategory] = useState(t("projects.all"))

  const projects = [
    {
      title: "Duolingo Clone",
      description: "A responsive language learning web application.",
      image: "/duolingo.png",
      category: t("projects.webapp"),
      tags: ["React", "Next.js", "Tailwind CSS"],
      demoLink: "https://duolingo-clone-nu.vercel.app/",
      githubLink: "https://github.com/dimitrispalamidas/duolingo-clone",
    },
    {
      title: "Car Dealership Website",
      description: "A car dealership website with admin panel and contact form.",
      image: "/autostylecars.png",
      category: t("projects.webapp"),
      tags: ["React", "Next.js", "Tailwind CSS"],
      demoLink: "https://car-website-coral-alpha.vercel.app/",
      githubLink: "https://github.com/dimitrispalamidas/v0-car-website-clone",
    },
    {
      title: "Messenger App",
      description: "A responsive live chat application.",
      image: "/messenger.png",
      category: t("projects.webapp"),
      tags: ["React", "Next.js", "Tailwind CSS"],
      demoLink: "https://messenger-clone-pi-tawny.vercel.app/",
      githubLink: "https://github.com/dimitrispalamidas/messenger-clone",
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
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.demo")}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      {t("projects.code")}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
