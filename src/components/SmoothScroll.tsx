import { useEffect, type ReactNode } from "react"
import Lenis from "@studio-freight/lenis"

interface SmoothScrollProps {
    children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        let lenis: Lenis | null = null

        if (typeof window !== "undefined") {
            try {
                lenis = new Lenis({
                    duration: 1.2,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    touchMultiplier: 2,
                })

                function raf(time: number) {
                    lenis?.raf(time)
                    requestAnimationFrame(raf)
                }

                requestAnimationFrame(raf)
            } catch (error) {
                console.error("Error initializing smooth scroll:", error)
            }
        }

        return () => {
            lenis?.destroy()
        }
    }, [])

    return <>{children}</>
}