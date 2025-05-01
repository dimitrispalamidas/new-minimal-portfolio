"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Zap } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Skills() {
  const { t } = useLanguage()

  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Angular", level: 85 },
    { name: "React Native", level: 75 },
    { name: "TailwindCSS", level: 90 },
    { name: "Node.js", level: 75 },
    { name: "SQL/NoSQL", level: 70 },
    { name: "Git/GitHub", level: 80 },
  ]

  const categories = [
    {
      title: t("skills.frontend"),
      description: t("skills.frontend.desc"),
      icon: <Code className="h-10 w-10" />,
    },
    {
      title: t("skills.uiux"),
      description: t("skills.uiux.desc"),
      icon: <Palette className="h-10 w-10" />,
    },
    {
      title: t("skills.mobile"),
      description: t("skills.mobile.desc"),
      icon: <Smartphone className="h-10 w-10" />,
    },
    {
      title: t("skills.fullstack"),
      description: t("skills.fullstack.desc"),
      icon: <Zap className="h-10 w-10" />,
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t("skills.title")}</h2>
          <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300">{t("skills.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="text-gray-500 dark:text-gray-400 mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gray-500 dark:bg-gray-400 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
