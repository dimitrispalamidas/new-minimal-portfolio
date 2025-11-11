"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "el"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "Front-End Developer",
    "hero.description":
      "Turning ideas into digital reality.",
    "hero.contact": "Get in touch",
    "hero.work": "View my work",

    // About
    "about.title": "About Me",
    "about.subtitle": "Who I Am",
    "about.paragraph1":
      "As a Front-End Developer, I specialize in building modern, scalable web applications using React, Next.js, Angular, and TypeScript. I focus on creating intuitive user experiences with clean, maintainable code and attention to performance and accessibility.",
    "about.paragraph2":
      "With experience spanning freelance projects and professional development roles, I've delivered custom web solutions for diverse clients and contributed to enterprise-level applications. My approach combines technical expertise with strong problem-solving skills and a keen eye for design.",
    "about.paragraph3":
      "Currently working as a Front End Developer at CloudFin in Athens, Greece, where I develop and maintain complex user interfaces using Angular, collaborating with cross-functional teams to deliver high-quality solutions.",

    // Skills
    "skills.title": "My Skills",
    "skills.description":
      "Here are the technologies and skills I've mastered throughout my journey as a front-end developer.",
    "skills.frontend": "Front-End Development",
    "skills.frontend.desc":
      "Building responsive and interactive user interfaces with React, Angular, and modern frameworks.",
    "skills.uiux": "UI/UX Design",
    "skills.uiux.desc": "Creating intuitive and visually appealing designs that enhance user experience.",
    "skills.mobile": "Mobile Development",
    "skills.mobile.desc": "Developing cross-platform mobile applications using React Native.",
    "skills.fullstack": "Full Stack Development",
    "skills.fullstack.desc":
      "Working with both front-end and back-end technologies to build complete web applications.",

    // Projects
    "projects.title": "My Projects",
    "projects.description":
      "Here's a selection of my recent work. Each project represents different skills and challenges I've tackled.",
    "projects.all": "All",
    "projects.webapp": "Web App",
    "projects.landing": "Landing Page",
    "projects.ecommerce": "E-commerce",
    "projects.demo": "Live Demo",
    "projects.code": "Code",

    // Resume
    "resume.title": "My Resume",
    "resume.description":
      "My professional journey and educational background that have shaped my skills and expertise.",
    "resume.download": "Download CV",
    "resume.experience": "Experience",
    "resume.education": "Education",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "Have a project in mind or want to discuss potential opportunities? Feel free to reach out!",
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

    // Footer
    "footer.rights": "All rights reserved.",

    // Language
    language: "Ελληνικά",
  },
  el: {
    // Hero
    "hero.greeting": "Γεια, είμαι ο",
    "hero.role": "Front-End Developer",
    "hero.description":
      "Μετατρέπω ιδέες σε ψηφιακή πραγματικότητα.",
    "hero.contact": "Επικοινωνήστε",
    "hero.work": "Δείτε τη δουλειά μου",

    // About
    "about.title": "Σχετικά με εμένα",
    "about.subtitle": "Ποιος είμαι",
    "about.paragraph1":
      "Ως Front-End Developer, ειδικεύομαι στην ανάπτυξη σύγχρονων, επεκτάσιμων web εφαρμογών χρησιμοποιώντας React, Next.js, Angular και TypeScript. Εστιάζω στη δημιουργία διαισθητικών εμπειριών χρήστη με καθαρό, συντηρήσιμο κώδικα και προσοχή στην απόδοση και την προσβασιμότητα.",
    "about.paragraph2":
      "Με εμπειρία που εκτείνεται σε freelance projects και επαγγελματικούς ρόλους ανάπτυξης, έχω παραδώσει εξατομικευμένες web λύσεις για ποικίλους πελάτες και συνεισφέρει σε enterprise εφαρμογές. Η προσέγγισή μου συνδυάζει τεχνική εξειδίκευση με ισχυρές δεξιότητες επίλυσης προβλημάτων και έντονη αίσθηση σχεδιασμού.",
    "about.paragraph3":
      "Αυτή τη στιγμή εργάζομαι ως Front End Developer στην CloudFin στην Αθήνα, όπου αναπτύσσω και συντηρώ σύνθετες διεπαφές χρήστη χρησιμοποιώντας Angular, συνεργαζόμενος με cross-functional ομάδες για την παράδοση υψηλής ποιότητας λύσεων.",

    // Skills
    "skills.title": "Οι Δεξιότητές μου",
    "skills.description":
      "Εδώ είναι οι τεχνολογίες και οι δεξιότητες που έχω κατακτήσει κατά τη διάρκεια της πορείας μου ως front-end developer.",
    "skills.frontend": "Front-End Ανάπτυξη",
    "skills.frontend.desc":
      "Δημιουργία responsive και διαδραστικών διεπαφών χρήστη με React, Angular και σύγχρονα frameworks.",
    "skills.uiux": "UI/UX Σχεδιασμός",
    "skills.uiux.desc": "Δημιουργία διαισθητικών και οπτικά ελκυστικών σχεδίων που βελτιώνουν την εμπειρία χρήστη.",
    "skills.mobile": "Ανάπτυξη Εφαρμογών Κινητών",
    "skills.mobile.desc": "Ανάπτυξη cross-platform εφαρμογών για κινητά με χρήση React Native.",
    "skills.fullstack": "Full Stack Ανάπτυξη",
    "skills.fullstack.desc":
      "Εργασία με τεχνολογίες front-end και back-end για την κατασκευή ολοκληρωμένων web εφαρμογών.",

    // Projects
    "projects.title": "Τα Έργα μου",
    "projects.description":
      "Εδώ είναι μια επιλογή από τις πρόσφατες εργασίες μου. Κάθε έργο αντιπροσωπεύει διαφορετικές δεξιότητες και προκλήσεις που έχω αντιμετωπίσει.",
    "projects.all": "Όλα",
    "projects.webapp": "Web Εφαρμογή",
    "projects.landing": "Landing Page",
    "projects.ecommerce": "E-commerce",
    "projects.demo": "Ζωντανή Επίδειξη",
    "projects.code": "Κώδικας",

    // Resume
    "resume.title": "Το Βιογραφικό μου",
    "resume.description":
      "Η επαγγελματική μου πορεία και το εκπαιδευτικό μου υπόβαθρο που έχουν διαμορφώσει τις δεξιότητες και την εξειδίκευσή μου.",
    "resume.download": "Κατεβάστε το Βιογραφικό",
    "resume.experience": "Εμπειρία",
    "resume.education": "Εκπαίδευση",

    // Contact
    "contact.title": "Επικοινωνήστε",
    "contact.description":
      "Έχετε κάποιο project κατά νου ή θέλετε να συζητήσετε πιθανές ευκαιρίες; Μη διστάσετε να επικοινωνήσετε!",
    "contact.email": "Email",
    "contact.phone": "Τηλέφωνο",
    "contact.location": "Τοποθεσία",
    "contact.name": "Όνομα",
    "contact.subject": "Θέμα",
    "contact.message": "Μήνυμα",
    "contact.send": "Αποστολή Μηνύματος",
    "contact.sending": "Αποστολή...",
    "contact.success": "Το μήνυμα εστάλη!",
    "contact.success.desc": "Ευχαριστώ για το μήνυμά σας. Θα επικοινωνήσω σύντομα μαζί σας.",

    // Footer
    "footer.rights": "Με επιφύλαξη παντός δικαιώματος.",

    // Language
    language: "English",
  },
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
