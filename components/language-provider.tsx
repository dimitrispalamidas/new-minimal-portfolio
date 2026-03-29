"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "el"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  "en": {
    "hero.greeting": "Hi, I'm",
    "hero.role": "Full Stack & AI Engineer",
    "hero.description": "I build production-ready AI and web products for enterprise teams and ambitious businesses.",
    "hero.contact": "Get in touch",
    "hero.work": "View my work",
    "about.title": "About Me",
    "about.subtitle": "Who I Am",
    "about.paragraph1": "I'm a Full Stack & AI Engineer focused on production-ready web and AI systems. I work across React, Next.js, Angular, and Python backends to deliver solutions that scale.",
    "about.paragraph2": "By day, I build enterprise platforms at CloudFin. In parallel, I deliver freelance products for clients, from SaaS and marketplaces to e-commerce systems with real business impact.",
    "about.paragraph3": "This portfolio is built for both recruiters and clients: if you are hiring for an engineering role or looking for a reliable partner to ship your product, let's talk.",
    "skills.title": "My Skills",
    "skills.description": "Core technologies I use to design, build, and deploy full stack and AI-powered products.",
    "skills.frontend": "Application Architecture & Design",
    "skills.frontend.desc": "Defining system architecture, technical direction, and implementation plans from concept to production.",
    "skills.uiux": "UI/UX Design",
    "skills.uiux.desc": "Designing user flows and interfaces that improve usability and conversion.",
    "skills.mobile": "AI & Automation",
    "skills.mobile.desc": "Building AI-assisted workflows with LLMs, prompt engineering, and practical automation.",
    "skills.fullstack": "Full Stack Development",
    "skills.fullstack.desc": "Developing backend services, data pipelines, and AI integrations that power complete products.",
    "projects.title": "My Projects",
    "projects.description": "Here's a selection of my recent work.",
    "projects.all": "All",
    "projects.webapp": "Web App",
    "projects.landing": "Landing Page",
    "projects.ecommerce": "E-commerce",
    "projects.demo": "Live Demo",
    "projects.code": "Code",
    "resume.title": "My Resume",
    "resume.description": "A quick overview of my full-time and freelance engineering journey.",
    "resume.download": "Download CV",
    "resume.experience": "Experience",
    "resume.education": "Education",
    "contact.title": "Get In Touch",
    "contact.description": "Open to engineering roles and freelance collaborations. Share your goals and I will get back to you.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent!",
    "contact.success.desc": "Thank you for your message. I'll get back to you soon.",
    "footer.rights": "All rights reserved.",
    "language": "Ελληνικά"
  },
  "el": {
    "hero.greeting": "Γεια, είμαι",
    "hero.role": "Full Stack & AI Engineer",
    "hero.description": "Δημιουργώ production-ready AI και web προϊόντα για επιχειρηματικές ομάδες και φιλόδοξες εταιρείες.",
    "hero.contact": "Επικοινωνία",
    "hero.work": "Δείτε τη δουλειά μου",
    "about.title": "Σχετικά με εμένα",
    "about.subtitle": "Ποιος είμαι",
    "about.paragraph1": "Είμαι Full Stack & AI Engineer με έμφαση σε production-ready web και AI συστήματα. Εργάζομαι με React, Next.js, Angular και Python backends για λύσεις που κλιμακώνονται.",
    "about.paragraph2": "Καθημερινά χτίζω enterprise πλατφόρμες στην CloudFin. Παράλληλα, παραδίδω freelance προϊόντα για πελάτες, από SaaS και marketplaces μέχρι e-commerce συστήματα με πραγματικό επιχειρηματικό αντίκτυπο.",
    "about.paragraph3": "Αυτό το portfolio απευθύνεται σε recruiters και πελάτες: αν αναζητάτε μηχανικό ή έναν αξιόπιστο συνεργάτη για το προϊόν σας, ας μιλήσουμε.",
    "skills.title": "Δεξιότητές μου",
    "skills.description": "Βασικές τεχνολογίες που χρησιμοποιώ για να σχεδιάζω, να υλοποιώ και να παραδίδω full stack και AI προϊόντα.",
    "skills.frontend": "Αρχιτεκτονική & Σχεδιασμός Εφαρμογών",
    "skills.frontend.desc": "Ορίζω την αρχιτεκτονική, την τεχνική κατεύθυνση και το πλάνο υλοποίησης από την ιδέα ως το production.",
    "skills.uiux": "Σχεδιασμός UI/UX",
    "skills.uiux.desc": "Σχεδιάζω user flows και διεπαφές που βελτιώνουν τη χρηστικότητα και τη μετατροπή.",
    "skills.mobile": "AI & Αυτοματοποίηση",
    "skills.mobile.desc": "Υλοποιώ AI-assisted workflows με LLMs, prompt engineering και πρακτική αυτοματοποίηση.",
    "skills.fullstack": "Full Stack Ανάπτυξη",
    "skills.fullstack.desc": "Ανάπτυξη backend υπηρεσιών, data pipelines και AI integrations που στηρίζουν ολοκληρωμένα προϊόντα.",
    "projects.title": "Έργα μου",
    "projects.description": "Δείτε μια επιλογή από πρόσφατες δουλειές μου.",
    "projects.all": "Όλα",
    "projects.webapp": "Web Εφαρμογή",
    "projects.landing": "Landing Page",
    "projects.ecommerce": "E-commerce",
    "projects.demo": "Ζωντανή Επίδειξη",
    "projects.code": "Κώδικας",
    "resume.title": "Βιογραφικό",
    "resume.description": "Μια σύντομη παρουσίαση της full-time και freelance πορείας μου ως μηχανικός.",
    "resume.download": "Κατεβάστε το Βιογραφικό",
    "resume.experience": "Εμπειρία",
    "resume.education": "Εκπαίδευση",
    "contact.title": "Επικοινωνία",
    "contact.description": "Ανοιχτός σε engineering ρόλους και freelance συνεργασίες. Μοιραστείτε τους στόχους σας και θα απαντήσω σύντομα.",
    "contact.email": "Email",
    "contact.phone": "Τηλέφωνο",
    "contact.location": "Τοποθεσία",
    "contact.name": "Όνομα",
    "contact.subject": "Θέμα",
    "contact.message": "Μήνυμα",
    "contact.send": "Αποστολή Μηνύματος",
    "contact.sending": "Αποστολή...",
    "contact.success": "Το μήνυμα εστάλη!",
    "contact.success.desc": "Ευχαριστώ για το μήνυμά σας. Θα επικοινωνήσω σύντομα.",
    "footer.rights": "Με επιφύλαξη παντός δικαιώματος.",
    "language": "Ελληνικά"
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isClient, setIsClient] = useState(false)

  // Function to translate text
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Load language preference from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "el")) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  // Don't render children until after hydration
  if (!isClient) {
    return null
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
