import { useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"

export default function LanguageToggle() {
    const { language, toggleLanguage, t } = useLanguage()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button className="relative p-2 rounded-full cursor-hover text-sm font-light">
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <span className="text-[#333333] dark:text-white">EN</span>
                </div>
            </button>
        )
    }

    return (
        <button
            onClick={toggleLanguage}
            className="relative p-2 rounded-full cursor-hover text-sm font-light"
            aria-label={t(`language.${language === "en" ? "fr" : "en"}`)}
            title={t(`language.${language === "en" ? "fr" : "en"}`)}
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="text-[#333333] dark:text-white">{language.toUpperCase()}</span>
            </div>
        </button>
    )
}