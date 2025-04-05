import { useRef, useState, useEffect } from "react"
import { useLanguage } from "../../contexts/LanguageContext"

export default function About() {
    const containerRef = useRef(null)
    const [isMounted, setIsMounted] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 opacity-0 animate-fadeIn">
                        {isMounted ? t("about.title") : "About Me"}
                    </h1>
                    <p className="text-[#8696a0] text-lg font-light max-w-2xl opacity-0 animate-fadeInDelay">
                        {isMounted ? t("about.subtitle") : "Full Stack Developer passionate about creating performant applications"}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                    <div>
                        <div className="aspect-[4/5] relative mb-8 bg-[#e6e6e8] dark:bg-[rgba(255,255,255,0.05)] overflow-hidden opacity-0 animate-fadeIn">
                            <img
                                src="/placeholder.svg?height=1000&width=800"
                                alt="Lionel Mutombo portrait"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="space-y-6">
                            <div className="opacity-0 animate-fadeInDelay">
                                <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                                    {isMounted ? t("about.info.location") : "Location"}
                                </h3>
                                <p className="font-light">Kinshasa, DR Congo</p>
                            </div>

                            <div className="opacity-0 animate-fadeInDelay delay-1">
                                <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                                    {isMounted ? t("about.info.contact") : "Contact"}
                                </h3>
                                <p className="font-light">lionelmutombo.mtb@gmail.com</p>
                                <p className="font-light">+243 828378582</p>
                            </div>

                            <div className="opacity-0 animate-fadeInDelay delay-2">
                                <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                                    {isMounted ? t("about.info.social") : "Social"}
                                </h3>
                                <div className="space-y-1">
                                    <p className="font-light cursor-hover">GitHub</p>
                                    <p className="font-light cursor-hover">LinkedIn</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="opacity-0 animate-fadeInDelay">
                            <h2 className="text-2xl font-light mb-6">{isMounted ? t("about.biography.title") : "Biography"}</h2>
                            <div className="space-y-6">
                                <p className="font-light text-lg leading-relaxed">
                                    {isMounted
                                        ? t("about.biography.p1")
                                        : "As a Full Stack Developer passionate about creating performant and user-friendly applications, I combine technical expertise and design sensibility to build comprehensive digital solutions."}
                                </p>
                                <p className="font-light text-lg leading-relaxed">
                                    {isMounted
                                        ? t("about.biography.p2")
                                        : "With a background in Computer Engineering and practical experience in web and mobile development, I master the entire creation process, from database design to intuitive user interface implementation."}
                                </p>
                                <p className="font-light text-lg leading-relaxed">
                                    {isMounted
                                        ? t("about.biography.p3")
                                        : "My approach combines technical rigor, creativity, and attention to detail to develop applications that precisely meet user needs while providing a smooth and enjoyable experience."}
                                </p>
                            </div>
                        </div>

                        <div className="opacity-0 animate-fadeInDelay delay-1">
                            <h2 className="text-2xl font-light mb-6">
                                {isMounted ? t("about.experience.title") : "Professional Journey"}
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-light">
                                            {isMounted ? t("about.experience.senior.title") : "Full Stack Developer"}
                                        </h3>
                                        <span className="text-[#8696a0] text-sm">
                                            {isMounted ? t("about.experience.senior.period") : "2023 - Present"}
                                        </span>
                                    </div>
                                    <p className="text-[#8696a0] font-light mb-2">
                                        {isMounted ? t("about.experience.senior.company") : "Independent & Collaborative Projects"}
                                    </p>
                                    <p className="font-light">
                                        {isMounted
                                            ? t("about.experience.senior.description")
                                            : "Design and development of complete web and mobile applications"}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-light">
                                            {isMounted ? t("about.experience.web.title") : "Technical Assistant at Network Operations Center"}
                                        </h3>
                                        <span className="text-[#8696a0] text-sm">
                                            {isMounted ? t("about.experience.web.period") : "2022"}
                                        </span>
                                    </div>
                                    <p className="text-[#8696a0] font-light mb-2">
                                        {isMounted ? t("about.experience.web.company") : "OrionCom, Kinshasa"}
                                    </p>
                                    <p className="font-light">
                                        {isMounted
                                            ? t("about.experience.web.description")
                                            : "Network performance supervision and maintenance of client infrastructures"}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-light">
                                            {isMounted ? t("about.experience.uiux.title") : "Bachelor's Degree in Computer Engineering"}
                                        </h3>
                                        <span className="text-[#8696a0] text-sm">
                                            {isMounted ? t("about.experience.uiux.period") : "2023 - 2025"}
                                        </span>
                                    </div>
                                    <p className="text-[#8696a0] font-light mb-2">
                                        {isMounted ? t("about.experience.uiux.company") : "University of Kinshasa"}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-light">Web & Mobile Development Training</h3>
                                        <span className="text-[#8696a0] text-sm">2024</span>
                                    </div>
                                    <p className="text-[#8696a0] font-light mb-2">Kadea Academy, Kinshasa</p>
                                    <p className="font-light">Front-end & Back-end Development, Databases, Web Security</p>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-light">Associate Degree in Computer Science</h3>
                                        <span className="text-[#8696a0] text-sm">2019 - 2022</span>
                                    </div>
                                    <p className="text-[#8696a0] font-light mb-2">University of Kinshasa</p>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-0 animate-fadeInDelay delay-2">
                            <h2 className="text-2xl font-light mb-6">{isMounted ? t("about.skills.title") : "Skills & Expertise"}</h2>
                            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                <div>
                                    <h3 className="text-lg font-light mb-3">
                                        {isMounted ? t("about.skills.development") : "Development"}
                                    </h3>
                                    <ul className="font-light text-[#8696a0] space-y-2">
                                        <li>HTML5 & CSS3</li>
                                        <li>JavaScript</li>
                                        <li>React JS</li>
                                        <li>Tailwind CSS</li>
                                        <li>React Native</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-light mb-3">Back-end</h3>
                                    <ul className="font-light text-[#8696a0] space-y-2">
                                        <li>AdonisJs</li>
                                        <li>ExpressJs</li>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                        <li>PostgreSQL</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-light mb-3">{isMounted ? t("about.skills.design") : "Design"}</h3>
                                    <ul className="font-light text-[#8696a0] space-y-2">
                                        <li>Figma</li>
                                        <li>Adobe XD</li>
                                        <li>Photoshop</li>
                                        <li>Illustrator</li>
                                        <li>Canva</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-light mb-3">{isMounted ? t("about.skills.languages") : "Languages"}</h3>
                                    <ul className="font-light text-[#8696a0] space-y-2">
                                        <li>Lingala (Native)</li>
                                        <li>French (Professional proficiency)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}