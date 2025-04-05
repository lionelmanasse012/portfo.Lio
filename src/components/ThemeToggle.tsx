import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import { useLanguage } from "../contexts/LanguageContext"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="relative p-2 rounded-full cursor-hover">
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Sun className="w-5 h-5 text-[#333333] dark:text-white" />
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full cursor-hover"
      aria-label={t(`theme.${theme === "light" ? "dark" : "light"}`)}
      title={t(`theme.${theme === "light" ? "dark" : "light"}`)}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {theme === "light" ? (
          <Sun className="w-5 h-5 text-[#333333] dark:text-white" />
        ) : (
          <Moon className="w-5 h-5 text-[#333333] dark:text-white" />
        )}
      </div>
    </button>
  )
}