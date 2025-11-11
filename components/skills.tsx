"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Palette, Smartphone, Zap, Plug, Layout } from "lucide-react"
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiGithub,
} from "react-icons/si"
import { useLanguage } from "./language-provider"

type Skill = {
  name: string
  color: string
  icon?: React.ReactNode
  customImage?: string
}

export function Skills() {
  const { t } = useLanguage()

  const skills: Skill[] = [
    { name: "Angular", icon: <SiAngular className="h-6 w-6" />, color: "#DD0031" },
    { name: "React.js", icon: <SiReact className="h-6 w-6" />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6" />, color: "#000000" },
    { name: "TypeScript", icon: <SiTypescript className="h-6 w-6" />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript className="h-6 w-6" />, color: "#F7DF1E" },
    { name: "HTML5", icon: <SiHtml5 className="h-6 w-6" />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 className="h-6 w-6" />, color: "#1572B6" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="h-6 w-6" />, color: "#06B6D4" },
    { name: "Telerik Kendo UI", customImage: "/kendo.png", color: "#FF6358" },
    { name: "React Native", icon: <SiReact className="h-6 w-6" />, color: "#61DAFB" },
    { name: "Supabase", icon: <SiSupabase className="h-6 w-6" />, color: "#3ECF8E" },
    { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6" />, color: "#4169E1" },
    { name: "Git & GitHub", icon: <SiGithub className="h-6 w-6" />, color: "#181717" },
    { name: "RESTful APIs", icon: <Plug className="h-5 w-5" />, color: "#6B7280" },
    { name: "Responsive Design", icon: <Layout className="h-5 w-5" />, color: "#6B7280" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                {skill.customImage ? (
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <Image src={skill.customImage} alt={skill.name} width={24} height={24} className="w-6 h-6" />
                  </div>
                ) : (
                  <div
                    style={{
                      color:
                        skill.name === "Next.js" || skill.name === "Git & GitHub" ? undefined : skill.color,
                    }}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      skill.name === "Next.js" || skill.name === "Git & GitHub" ? "text-black dark:text-white" : ""
                    }`}
                  >
                    {skill.icon}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
