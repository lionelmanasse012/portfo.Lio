import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { },
})

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light")
    const [mounted, setMounted] = useState(false)

    // Only run on client side
    useEffect(() => {
        setMounted(true)

        // Check if user has a saved preference
        try {
            const savedTheme = localStorage.getItem("theme") as Theme | null

            if (savedTheme) {
                setTheme(savedTheme)
            } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                // Use system preference if no saved preference
                setTheme("dark")
            }
        } catch (error) {
            console.error("Error accessing localStorage:", error)
        }
    }, [])

    useEffect(() => {
        if (!mounted) return

        // Update document class when theme changes
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

        // Save preference to localStorage
        try {
            localStorage.setItem("theme", theme)
        } catch (error) {
            console.error("Error writing to localStorage:", error)
        }
    }, [theme, mounted])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    return useContext(ThemeContext)
}