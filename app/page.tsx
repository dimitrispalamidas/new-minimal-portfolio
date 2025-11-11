import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Resume } from "@/components/resume"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content="Dimitris Palamidas" />
        <meta itemProp="jobTitle" content="React Developer & Angular Developer" />
        <meta itemProp="description" content="Experienced React Developer and Angular Developer specializing in modern web applications" />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
