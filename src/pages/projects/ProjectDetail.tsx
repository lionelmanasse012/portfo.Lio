import { useRef, useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"

interface ProjectContent {
    type: "text" | "image"
    content?: {
        en: string
        fr: string
    }
    src?: string
    alt?: {
        en: string
        fr: string
    }
}

interface Project {
    title: {
        en: string
        fr: string
    }
    description: {
        en: string
        fr: string
    }
    client: {
        en: string
        fr: string
    }
    year: string
    role: {
        en: string
        fr: string
    }
    technologies: string[]
    image: string
    content: ProjectContent[]
    nextProject: {
        slug: string
        title: {
            en: string
            fr: string
        }
    }
}

interface Projects {
    [key: string]: Project
}

export default function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>()
    const containerRef = useRef<HTMLDivElement>(null)
    const [isMounted, setIsMounted] = useState(false)
    const { t, language } = useLanguage()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const projects: Projects = {
        "task-management-app": {
            title: {
                en: "Task Management App",
                fr: "Application de Gestion de Tâches",
            },
            description: {
                en: "A complete web application allowing users to manage their daily tasks, with features for categorization, reminders, and progress tracking.",
                fr: "Une application web complète permettant aux utilisateurs de gérer leurs tâches quotidiennes, avec des fonctionnalités de catégorisation, de rappels et de suivi de progression.",
            },
            client: {
                en: "Personal Project",
                fr: "Projet Personnel",
            },
            year: "2024",
            role: {
                en: "Full Stack Development",
                fr: "Développement Full Stack",
            },
            technologies: ["React JS", "Express", "MongoDB", "Tailwind CSS"],
            image: "/placeholder.svg?height=800&width=1600",
            content: [
                {
                    type: "text",
                    content: {
                        en: "This project is a complete task management web application. The goal was to create an intuitive interface allowing users to effectively manage their daily tasks.",
                        fr: "Ce projet est une application web complète de gestion de tâches. L'objectif était de créer une interface intuitive permettant aux utilisateurs de gérer efficacement leurs tâches quotidiennes.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=600&width=1200",
                    alt: {
                        en: "Application interface",
                        fr: "Interface de l'application",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The design process began with an analysis of user needs and the creation of wireframes in Figma. I explored different layouts and interactions to find the right balance between aesthetics and functionality.",
                        fr: "Le processus de conception a commencé par une analyse des besoins des utilisateurs et la création de wireframes dans Figma. J'ai exploré différentes dispositions et interactions pour trouver le bon équilibre entre esthétique et fonctionnalité.",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "For development, I chose React JS for the front-end, Express for the backend API, and MongoDB as the database. Tailwind CSS was used for rapid and consistent styling of the interface.",
                        fr: "Pour le développement, j'ai choisi React JS pour le front-end, Express pour l'API backend et MongoDB comme base de données. Tailwind CSS a été utilisé pour le styling rapide et cohérent de l'interface.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=800&width=1200",
                    alt: {
                        en: "Project details",
                        fr: "Détails du projet",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The result is a modern and responsive application that allows users to create, organize, and track their tasks efficiently across all devices.",
                        fr: "Le résultat est une application moderne et réactive qui permet aux utilisateurs de créer, organiser et suivre leurs tâches efficacement sur tous les appareils.",
                    },
                },
            ],
            nextProject: {
                slug: "ecommerce-website",
                title: {
                    en: "E-commerce Website",
                    fr: "Site E-commerce",
                },
            },
        },
        "ecommerce-website": {
            title: {
                en: "E-commerce Website",
                fr: "Site E-commerce",
            },
            description: {
                en: "A complete e-commerce platform with product management, shopping cart, secure payments, and admin dashboard.",
                fr: "Une plateforme e-commerce complète avec gestion des produits, panier d'achat, paiements sécurisés et tableau de bord administrateur.",
            },
            client: {
                en: "Local Shop",
                fr: "Boutique Locale",
            },
            year: "2023",
            role: {
                en: "Full Stack Development",
                fr: "Développement Full Stack",
            },
            technologies: ["React JS", "AdonisJS", "PostgreSQL", "Tailwind CSS"],
            image: "/placeholder.svg?height=800&width=1600",
            content: [
                {
                    type: "text",
                    content: {
                        en: "This project is a complete e-commerce platform developed for a local shop. The goal was to create a smooth and secure online shopping experience.",
                        fr: "Ce projet est une plateforme e-commerce complète développée pour une boutique locale. L'objectif était de créer une expérience d'achat en ligne fluide et sécurisée.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=600&width=1200",
                    alt: {
                        en: "E-commerce website interface",
                        fr: "Interface du site e-commerce",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The design began with an in-depth analysis of the client's needs and e-commerce best practices. I created detailed mockups in Figma to visualize the user experience.",
                        fr: "La conception a débuté par une analyse approfondie des besoins du client et des meilleures pratiques en matière d'e-commerce. J'ai créé des maquettes détaillées dans Figma pour visualiser l'expérience utilisateur.",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "For development, I used React JS for the front-end, AdonisJS for the backend API, and PostgreSQL as a relational database. The integration of secure payment gateways was a priority.",
                        fr: "Pour le développement, j'ai utilisé React JS pour le front-end, AdonisJS pour l'API backend et PostgreSQL comme base de données relationnelle. L'intégration de passerelles de paiement sécurisées a été une priorité.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=800&width=1200",
                    alt: {
                        en: "Admin dashboard",
                        fr: "Tableau de bord administrateur",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The result is a complete and secure e-commerce platform that has allowed the client to increase online sales and improve inventory management.",
                        fr: "Le résultat est une plateforme e-commerce complète et sécurisée qui a permis au client d'augmenter ses ventes en ligne et d'améliorer la gestion de son inventaire.",
                    },
                },
            ],
            nextProject: {
                slug: "delivery-mobile-app",
                title: {
                    en: "Delivery Mobile App",
                    fr: "Application Mobile de Livraison",
                },
            },
        },
        "delivery-mobile-app": {
            title: {
                en: "Delivery Mobile App",
                fr: "Application Mobile de Livraison",
            },
            description: {
                en: "A mobile application allowing users to order meals from local restaurants and track their deliveries in real-time.",
                fr: "Une application mobile permettant aux utilisateurs de commander des repas auprès de restaurants locaux et de suivre leurs livraisons en temps réel.",
            },
            client: {
                en: "Local Startup",
                fr: "Startup Locale",
            },
            year: "2024",
            role: {
                en: "Mobile Development",
                fr: "Développement Mobile",
            },
            technologies: ["React Native", "Express", "MongoDB", "Google Maps API"],
            image: "/placeholder.svg?height=800&width=1600",
            content: [
                {
                    type: "text",
                    content: {
                        en: "This project is a food delivery mobile application developed for a local startup. The goal was to create a smooth user experience for ordering and tracking deliveries.",
                        fr: "Ce projet est une application mobile de livraison de repas développée pour une startup locale. L'objectif était de créer une expérience utilisateur fluide pour la commande et le suivi des livraisons.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=600&width=1200",
                    alt: {
                        en: "Mobile app interface",
                        fr: "Interface de l'application mobile",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The design started with extensive user research and wireframing in Figma. I paid particular attention to the navigation experience and ordering process.",
                        fr: "La conception a commencé par une recherche utilisateur approfondie et la création de wireframes dans Figma. J'ai accordé une attention particulière à l'expérience de navigation et au processus de commande.",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "For development, I chose React Native to create a cross-platform application, Express for the backend API, and MongoDB as the database. The integration of the Google Maps API enabled real-time delivery tracking.",
                        fr: "Pour le développement, j'ai choisi React Native pour créer une application cross-platform, Express pour l'API backend et MongoDB comme base de données. L'intégration de l'API Google Maps a permis le suivi en temps réel des livraisons.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=800&width=1200",
                    alt: {
                        en: "Real-time tracking feature",
                        fr: "Fonctionnalité de suivi en temps réel",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The result is an intuitive mobile application that has allowed the startup to launch its delivery service and quickly acquire satisfied users.",
                        fr: "Le résultat est une application mobile intuitive qui a permis à la startup de lancer son service de livraison et d'acquérir rapidement des utilisateurs satisfaits.",
                    },
                },
            ],
            nextProject: {
                slug: "personal-portfolio",
                title: {
                    en: "Personal Portfolio",
                    fr: "Portfolio Personnel",
                },
            },
        },
        "personal-portfolio": {
            title: {
                en: "Personal Portfolio",
                fr: "Portfolio Personnel",
            },
            description: {
                en: "A modern and responsive portfolio website to showcase my projects and skills in web and mobile development.",
                fr: "Un site web portfolio moderne et réactif pour présenter mes projets et compétences en développement web et mobile.",
            },
            client: {
                en: "Personal Project",
                fr: "Projet Personnel",
            },
            year: "2024",
            role: {
                en: "Design & Development",
                fr: "Design & Développement",
            },
            technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
            image: "/placeholder.svg?height=800&width=1600",
            content: [
                {
                    type: "text",
                    content: {
                        en: "This project is my personal portfolio, designed to showcase my skills and projects in an elegant and professional manner. The goal was to create a minimalist yet impactful site.",
                        fr: "Ce projet est mon portfolio personnel, conçu pour présenter mes compétences et projets de manière élégante et professionnelle. L'objectif était de créer un site minimaliste mais impactant.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=600&width=1200",
                    alt: {
                        en: "Portfolio homepage",
                        fr: "Page d'accueil du portfolio",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The design began with research on current portfolio design trends and the creation of mockups in Figma. I explored different layouts to find the right balance between aesthetics and functionality.",
                        fr: "La conception a débuté par une recherche sur les tendances actuelles en matière de design de portfolio et la création de maquettes dans Figma. J'ai exploré différentes mises en page pour trouver le bon équilibre entre esthétique et fonctionnalité.",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "For development, I chose Next.js for its performance and SEO benefits, and Tailwind CSS for rapid and consistent styling. Framer Motion was used to add subtle animations that enhance the user experience.",
                        fr: "Pour le développement, j'ai choisi Next.js pour ses avantages en termes de performance et de SEO, et Tailwind CSS pour un styling rapide et cohérent. Framer Motion a été utilisé pour ajouter des animations subtiles qui améliorent l'expérience utilisateur.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=800&width=1200",
                    alt: {
                        en: "Projects page",
                        fr: "Page de projets",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The result is a modern and responsive portfolio that effectively showcases my skills and projects while providing a smooth user experience across all devices.",
                        fr: "Le résultat est un portfolio moderne et réactif qui présente efficacement mes compétences et projets tout en offrant une expérience utilisateur fluide sur tous les appareils.",
                    },
                },
            ],
            nextProject: {
                slug: "admin-dashboard",
                title: {
                    en: "Admin Dashboard",
                    fr: "Dashboard Administrateur",
                },
            },
        },
        "admin-dashboard": {
            title: {
                en: "Admin Dashboard",
                fr: "Dashboard Administrateur",
            },
            description: {
                en: "A comprehensive admin dashboard for managing users, products, and orders of an e-commerce platform.",
                fr: "Un tableau de bord administrateur complet pour la gestion des utilisateurs, des produits et des commandes d'une plateforme e-commerce.",
            },
            client: {
                en: "Local Business",
                fr: "Entreprise Locale",
            },
            year: "2023",
            role: {
                en: "Full Stack Development",
                fr: "Développement Full Stack",
            },
            technologies: ["React JS", "Express", "MySQL", "Chart.js"],
            image: "/placeholder.svg?height=800&width=1600",
            content: [
                {
                    type: "text",
                    content: {
                        en: "This project is an admin dashboard developed for a local business. The goal was to create an intuitive interface allowing administrators to effectively manage their e-commerce platform.",
                        fr: "Ce projet est un tableau de bord administrateur développé pour une entreprise locale. L'objectif était de créer une interface intuitive permettant aux administrateurs de gérer efficacement leur plateforme e-commerce.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=600&width=1200",
                    alt: {
                        en: "Dashboard interface",
                        fr: "Interface du tableau de bord",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The design began with an in-depth analysis of administrator needs and the creation of wireframes in Figma. I paid particular attention to data organization and ease of use.",
                        fr: "La conception a commencé par une analyse approfondie des besoins des administrateurs et la création de wireframes dans Figma. J'ai accordé une attention particulière à l'organisation des données et à la facilité d'utilisation.",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "For development, I used React JS for the front-end, Express for the backend API, and MySQL as a relational database. Chart.js was integrated to create clear and informative data visualizations.",
                        fr: "Pour le développement, j'ai utilisé React JS pour le front-end, Express pour l'API backend et MySQL comme base de données relationnelle. Chart.js a été intégré pour créer des visualisations de données claires et informatives.",
                    },
                },
                {
                    type: "image",
                    src: "/placeholder.svg?height=800&width=1200",
                    alt: {
                        en: "Data visualizations",
                        fr: "Visualisations de données",
                    },
                },
                {
                    type: "text",
                    content: {
                        en: "The result is a powerful and intuitive admin dashboard that has allowed the business to significantly improve its management of products, users, and orders, while gaining valuable insights through data visualizations.",
                        fr: "Le résultat est un tableau de bord administrateur puissant et intuitif qui a permis à l'entreprise d'améliorer significativement sa gestion des produits, des utilisateurs et des commandes, tout en obtenant des insights précieux grâce aux visualisations de données.",
                    },
                },
            ],
            nextProject: {
                slug: "task-management-app",
                title: {
                    en: "Task Management App",
                    fr: "Application de Gestion de Tâches",
                },
            },
        },
    }

    const project = slug && projects[slug] ? projects[slug] : projects["task-management-app"]
    const currentLanguage = language === "fr" ? "fr" : "en"

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* Hero Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <Link
                    to="/work"
                    className="inline-flex items-center text-sm font-light text-[#8696a0] hover:text-[#333333] dark:hover:text-[#f0f0f2] transition-colors mb-16"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {isMounted ? t("project.backToProjects") : "Back to all projects"}
                </Link>

                <div className="mb-12 opacity-0 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                        {project.title[currentLanguage]}
                    </h1>
                    <p className="text-[#8696a0] text-lg font-light max-w-2xl">
                        {project.description[currentLanguage]}
                    </p>
                </div>

                <div className="image-container aspect-[16/9] w-full bg-[#e6e6e8] dark:bg-[rgba(255,255,255,0.05)] mb-16 overflow-hidden opacity-0 animate-fadeInDelay">
                    <div className="relative w-full h-full">
                        <img
                            src={project.image}
                            alt={project.title[currentLanguage]}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-16 opacity-0 animate-fadeInDelay delay-1">
                    <div>
                        <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                            {isMounted ? t("project.client") : "Client"}
                        </h3>
                        <p className="font-light">{project.client[currentLanguage]}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                            {isMounted ? t("project.year") : "Year"}
                        </h3>
                        <p className="font-light">{project.year}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                            {isMounted ? t("project.role") : "Role"}
                        </h3>
                        <p className="font-light">{project.role[currentLanguage]}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                            {isMounted ? t("project.technologies") : "Technologies"}
                        </h3>
                        <div className="space-y-1">
                            {project.technologies.map((tech, index) => (
                                <p key={index} className="font-light">
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Content */}
            <section className="py-12 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto space-y-16">
                    {project.content.map((item, index) => (
                        <div key={index} className={`opacity-0 animate-fadeIn delay-${index}`}>
                            {item.type === "text" ? (
                                <p className="font-light text-lg leading-relaxed">
                                    {item.content?.[currentLanguage]}
                                </p>
                            ) : (
                                <div className="image-container aspect-[16/9] w-full bg-[#e6e6e8] dark:bg-[rgba(255,255,255,0.05)] overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <img
                                            src={item.src || "/placeholder.svg"}
                                            alt={item.alt?.[currentLanguage] || ""}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Next Project */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="border-t border-[#e6e6e8] dark:border-[rgba(255,255,255,0.1)] pt-16">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sm font-light uppercase tracking-widest text-[#8696a0]">
                            {isMounted ? t("project.nextProject") : "Next Project"}
                        </h2>
                        <Link
                            to={`/work/${project.nextProject.slug}`}
                            className="group inline-flex items-center text-lg font-light hover:text-[#8696a0] transition-colors"
                        >
                            {project.nextProject.title[currentLanguage]}
                            <span className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-block">
                                <ArrowUpRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}