import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"

export default function Project() {
    const containerRef = useRef(null)
    const [isMounted, setIsMounted] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const projects = [
        {
            id: 1,
            title: isMounted ? t("work.projects.taskApp") : "Task Management App",
            category: "React JS, Express, MongoDB",
            image: "/placeholder.svg?height=800&width=1200",
            slug: "task-management-app",
            featured: true,
        },
        {
            id: 2,
            title: isMounted ? t("work.projects.ecommerce") : "E-commerce Website",
            category: "React JS, AdonisJS, PostgreSQL",
            image: "/placeholder.svg?height=800&width=1200",
            slug: "ecommerce-website",
        },
        {
            id: 3,
            title: isMounted ? t("work.projects.delivery") : "Delivery Mobile App",
            category: "React Native, Express, MongoDB",
            image: "/placeholder.svg?height=800&width=1200",
            slug: "delivery-mobile-app",
        },
        {
            id: 4,
            title: isMounted ? t("work.projects.portfolio") : "Personal Portfolio",
            category: "Next.js, Tailwind CSS",
            image: "/placeholder.svg?height=800&width=1200",
            slug: "personal-portfolio",
        },
        {
            id: 5,
            title: isMounted ? t("work.projects.dashboard") : "Admin Dashboard",
            category: "React JS, Express, MySQL",
            image: "/placeholder.svg?height=800&width=1200",
            slug: "admin-dashboard",
        },
    ]

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 opacity-0 animate-fadeIn">
                        {isMounted ? t("work.title") : "Selected Work"}
                    </h1>
                    <p className="text-[#8696a0] text-lg font-light max-w-2xl opacity-0 animate-fadeInDelay">
                        {isMounted ? t("work.subtitle") : "A collection of projects I've worked on"}
                    </p>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`opacity-0 animate-fadeIn delay-${index * 2}`}>
                            <Link to={`/work/${project.slug}`} className="block group">
                                <div className="image-container aspect-[16/9] w-full bg-[#e6e6e8] dark:bg-[rgba(255,255,255,0.05)] mb-6 overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-[#333333] dark:bg-[#f0f0f2] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-white dark:text-[#191919] font-light text-lg tracking-wide px-6 py-3 border border-white/30 dark:border-black/30 rounded-full backdrop-blur-sm bg-black/10 dark:bg-white/10">
                                                {isMounted ? t("project.viewProject") : "View Project"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center mb-2">
                                            {project.featured && (
                                                <span className="text-xs font-light uppercase tracking-wider text-[#8696a0] border border-[#8696a0] px-2 py-0.5 mr-3 rounded-full">
                                                    Featured
                                                </span>
                                            )}
                                            <h2 className="text-2xl md:text-3xl font-light">{project.title}</h2>
                                        </div>
                                        <p className="text-[#8696a0] font-light">{project.category}</p>
                                    </div>
                                    <div className="border border-[#8696a0] rounded-full p-2 group-hover:bg-[#333333] dark:group-hover:bg-[#f0f0f2] group-hover:border-[#333333] dark:group-hover:border-[#f0f0f2] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                        <ArrowUpRight className="w-4 h-4 text-[#8696a0] group-hover:text-white dark:group-hover:text-[#191919] transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}