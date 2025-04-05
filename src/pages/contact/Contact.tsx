import type React from "react"
import { useRef, useState, useEffect } from "react"
import { useLanguage } from "../../contexts/LanguageContext"

export default function Contact() {
    const containerRef = useRef(null)
    const [isMounted, setIsMounted] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Form submission logic would go here
        console.log(formData)
        alert(isMounted ? t("contact.form.success") : "Message sent! (This is a demo)")
    }

    return (
        <div ref={containerRef} className="min-h-screen">
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 opacity-0 animate-fadeIn">
                        {isMounted ? t("contact.title") : "Let's Connect"}
                    </h1>
                    <p className="text-[#8696a0] text-lg font-light max-w-2xl opacity-0 animate-fadeInDelay">
                        {isMounted ? t("contact.subtitle") : "Have a project in mind or just want to chat?"}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                    <div className="opacity-0 animate-fadeInDelay">
                        <h2 className="text-2xl font-light mb-8">{isMounted ? t("contact.info.title") : "Contact Information"}</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                                    {isMounted ? t("contact.info.email") : "Email"}
                                </h3>
                                <a
                                    href="mailto:lionelmutombo.mtb@gmail.com"
                                    className="text-lg font-light hover:text-[#8696a0] transition-colors cursor-hover"
                                >
                                    lionelmutombo.mtb@gmail.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                                    {isMounted ? t("contact.info.location") : "Location"}
                                </h3>
                                <p className="font-light">Kinshasa, RD Congo</p>
                                <p className="font-light mt-1">
                                    {isMounted
                                        ? t("contact.info.remote")
                                        : "Disponible pour des opportunités professionnelles en local et à distance"}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3">
                                    {isMounted ? t("contact.info.social") : "Social"}
                                </h3>
                                <div className="space-y-2">
                                    <a
                                        href="#"
                                        className="block font-light hover:text-[#333333] dark:hover:text-[#f0f0f2] transition-colors cursor-hover"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="#"
                                        className="block font-light hover:text-[#333333] dark:hover:text-[#f0f0f2] transition-colors cursor-hover"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="opacity-0 animate-fadeInDelay delay-1">
                        <h2 className="text-2xl font-light mb-8">{isMounted ? t("contact.form.title") : "Send a Message"}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3 block"
                                >
                                    {isMounted ? t("contact.form.name") : "Name"}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-[#8696a0] py-2 font-light focus:outline-none focus:border-[#333333] dark:focus:border-[#f0f0f2] transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3 block"
                                >
                                    {isMounted ? t("contact.form.email") : "Email"}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-[#8696a0] py-2 font-light focus:outline-none focus:border-[#333333] dark:focus:border-[#f0f0f2] transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-3 block"
                                >
                                    {isMounted ? t("contact.form.message") : "Message"}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-transparent border-b border-[#8696a0] py-2 font-light focus:outline-none focus:border-[#333333] dark:focus:border-[#f0f0f2] transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 px-6 py-3 border border-[#333333] dark:border-[#f0f0f2] text-[#333333] dark:text-[#f0f0f2] hover:bg-[#333333] dark:hover:bg-[#f0f0f2] hover:text-white dark:hover:text-[#191919] transition-colors font-light cursor-hover"
                            >
                                {isMounted ? t("contact.form.send") : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}