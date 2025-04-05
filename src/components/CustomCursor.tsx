import { useState, useEffect } from "react"

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState("default")
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", mouseMove)

        // Add event listeners for cursor states
        const links = document.querySelectorAll("a, button, .cursor-hover")

        const handleMouseEnter = () => setCursorVariant("hover")
        const handleMouseLeave = () => setCursorVariant("default")

        links.forEach((link) => {
            link.addEventListener("mouseenter", handleMouseEnter)
            link.addEventListener("mouseleave", handleMouseLeave)
        })

        return () => {
            window.removeEventListener("mousemove", mouseMove)

            links.forEach((link) => {
                link.removeEventListener("mouseenter", handleMouseEnter)
                link.removeEventListener("mouseleave", handleMouseLeave)
            })
        }
    }, [])

    // Only show custom cursor on desktop and when component is mounted
    if (!isMounted || (typeof window !== "undefined" && window.innerWidth < 1024)) {
        return null
    }

    return (
        <>
            <div
                className="cursor-dot hidden lg:block"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
            />
            <div
                className="cursor-outline hidden lg:block"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    width: cursorVariant === "hover" ? "64px" : "32px",
                    height: cursorVariant === "hover" ? "64px" : "32px",
                    backgroundColor:
                        cursorVariant === "hover" ? "rgba(var(--foreground-rgb), 0.1)" : "rgba(var(--foreground-rgb), 0)",
                    border:
                        cursorVariant === "hover"
                            ? "1px solid rgba(var(--foreground-rgb), 0.8)"
                            : "1px solid rgba(var(--foreground-rgb), 0.5)",
                }}
            />
        </>
    )
}