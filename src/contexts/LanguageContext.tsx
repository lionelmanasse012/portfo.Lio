import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations } from "../translations"

type Language = "en" | "fr"

interface LanguageContextType {
    language: Language
    toggleLanguage: () => void
    t: (key: string) => string
}

const defaultTranslate = (key: string) => key

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    toggleLanguage: () => {},
    t: defaultTranslate,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")
    const [isInitialized, setIsInitialized] = useState(false)

    // Initialize language from storage or browser preference
    useEffect(() => {
        try {
            const savedLanguage = localStorage.getItem("language") as Language | null
            
            if (savedLanguage) {
                setLanguage(savedLanguage)
            } else {
                // Default to browser language if available, otherwise 'en'
                const browserLang = navigator.language.split("-")[0]
                setLanguage(browserLang === "fr" ? "fr" : "en")
            }
        } catch (error) {
            console.error("Error initializing language:", error)
            setLanguage("en") // Fallback to English
        } finally {
            setIsInitialized(true)
        }
    }, [])

    // Persist language changes
    useEffect(() => {
        if (!isInitialized) return

        try {
            localStorage.setItem("language", language)
            document.documentElement.lang = language
        } catch (error) {
            console.error("Error persisting language:", error)
        }
    }, [language, isInitialized])

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === "en" ? "fr" : "en"))
    }

    const t = (key: string): string => {
        if (!key) return ""

        try {
            const keys = key.split(".")
            let result: any = translations[language]

            for (const k of keys) {
                if (!result?.[k]) {
                    console.warn(`Translation key not found: ${key}`)
                    return key
                }
                result = result[k]
            }

            return typeof result === "string" ? result : key
        } catch (error) {
            console.error("Translation error:", error)
            return key
        }
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)