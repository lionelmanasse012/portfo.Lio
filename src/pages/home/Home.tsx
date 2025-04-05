import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"

export default function Home() {
    const containerRef = useRef(null)
    const [isMounted, setIsMounted] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Placeholder projects data
    const projects = [
        {
            id: 1,
            title: "Portfolio Redesign",
            category: "Web Development, UI/UX Design",
            image: "/placeholder.svg?height=800&width=1200",
            slug: "portfolio-redesign",
            featured: true,
        },
        {
            id: 2,
            title: "E-commerce Platform",
            category: "Web Development, UI/UX Design",
            image: "/placeholder.svg?height=800&width=1200",
            slug: "ecommerce-platform",
        },
    ]

    return (
        <div ref={containerRef}>
            {/* Hero Section */}
            <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 opacity-0 animate-fadeIn">
                        {isMounted ? t("home.hero.title") : "Lionel Mutombo, Développeur Full Stack"}
                    </h1>
                    <p className="text-[#8696a0] text-lg md:text-xl font-light max-w-2xl leading-relaxed opacity-0 animate-fadeInDelay">
                        {isMounted
                            ? t("home.hero.subtitle")
                            : "Je développe des applications web et mobiles performantes, de la base de données à l'interface utilisateur"}
                    </p>
                    <div className="mt-12 opacity-0 animate-fadeInLongDelay">
                        <Link
                            to="/work"
                            className="inline-flex items-center text-lg font-light hover:text-[#8696a0] transition-colors cursor-hover group"
                        >
                            {isMounted ? t("home.cta.viewWork") : "View my work"}
                            <span className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-block">
                                <ArrowUpRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Project */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="mb-12">
                    <h2 className="text-sm font-light uppercase tracking-widest text-[#8696a0]">
                        {isMounted ? t("home.sections.featuredProject") : "Featured Project"}
                    </h2>
                </div>

                <div className="opacity-0 animate-fadeIn">
                    <Link to={`/work/${projects[0].slug}`} className="block group">
                        <div className="image-container aspect-[16/9] w-full bg-[#e6e6e8] dark:bg-[rgba(255,255,255,0.05)] mb-6 overflow-hidden">
                            <div className="relative w-full h-full">
                                <img
                                    src={projects[0].image || "/placeholder.svg"}
                                    alt={projects[0].title}
                                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#333333] dark:bg-[#f0f0f2] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white dark:text-[#191919] font-light text-lg tracking-wide px-6 py-3 border border-white/30 dark:border-black/30 rounded-full backdrop-blur-sm bg-black/10 dark:bg-white/10">
                                        View Project
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center mb-2">
                                    <span className="text-xs font-light uppercase tracking-wider text-[#8696a0] border border-[#8696a0] px-2 py-0.5 mr-3 rounded-full">
                                        Featured
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-light">{projects[0].title}</h2>
                                </div>
                                <p className="text-[#8696a0] font-light">{projects[0].category}</p>
                            </div>
                            <div className="border border-[#8696a0] rounded-full p-2 group-hover:bg-[#333333] dark:group-hover:bg-[#f0f0f2] group-hover:border-[#333333] dark:group-hover:border-[#f0f0f2] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                <ArrowUpRight className="w-4 h-4 text-[#8696a0] group-hover:text-white dark:group-hover:text-[#191919] transition-colors" />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Recent Projects Preview */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="mb-12 flex justify-between items-end">
                    <h2 className="text-sm font-light uppercase tracking-widest text-[#8696a0]">
                        {isMounted ? t("home.sections.recentProjects") : "Recent Projects"}
                    </h2>
                    <Link
                        to="/work"
                        className="text-sm font-light text-[#8696a0] hover:text-[#333333] dark:hover:text-[#f0f0f2] transition-colors cursor-hover"
                    >
                        {isMounted ? t("home.sections.viewAll") : "View all"}
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
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
                                                View Project
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

            {/* Contact Preview */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#e6e6e8]/50 dark:bg-[rgba(255,255,255,0.03)]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 opacity-0 animate-fadeIn">
                        {isMounted ? t("home.sections.contactTitle") : "Let's create something amazing together"}
                    </h2>
                    <p className="text-[#8696a0] text-lg font-light mb-12 opacity-0 animate-fadeInDelay">
                        {isMounted ? t("home.sections.contactText") : "Have a project in mind or just want to chat?"}
                    </p>
                    <div className="opacity-0 animate-fadeInLongDelay">
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 border border-[#333333] dark:border-[#f0f0f2] text-[#333333] dark:text-[#f0f0f2] hover:bg-[#333333] dark:hover:bg-[#f0f0f2] hover:text-white dark:hover:text-[#191919] transition-colors font-light cursor-hover"
                        >
                            {isMounted ? t("home.cta.getInTouch") : "Get in touch"}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}