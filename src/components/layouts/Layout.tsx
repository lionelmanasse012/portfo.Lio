import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import ThemeToggle from "../ThemeToggle"
import LanguageToggle from "../LanguageToggle"

import { useLanguage } from "../../contexts/LanguageContext"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const { t } = useLanguage()
  const pathname = location.pathname

  return (
    <div className={`min-h-screen bg-[#f0f0f2] text-[#333333] dark:bg-[#191919] dark:text-[#f0f0f2] theme-transition`}>
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-sm bg-[#f0f0f2]/80 dark:bg-[#191919]/80 theme-transition">
        <Link to="/" className="text-lg font-light tracking-wide z-50 cursor-hover">
          <span className="text-[#8696a0] dark:text-[#8696a0]">portfo.</span>
          <span className="text-[#333333] dark:text-[#f0f0f2]">Lio</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-sm font-light tracking-wide transition-colors cursor-hover ${
              pathname === "/"
                ? "text-[#333333] dark:text-[#f0f0f2]"
                : "text-[#8696a0] hover:text-[#333333] dark:hover:text-[#f0f0f2]"
            }`}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/work"
            className={`text-sm font-light tracking-wide transition-colors cursor-hover ${
              pathname === "/work"
                ? "text-[#333333] dark:text-[#f0f0f2]"
                : "text-[#8696a0] hover:text-[#333333] dark:hover:text-[#f0f0f2]"
            }`}
          >
            {t("nav.work")}
          </Link>
          <Link
            to="/about"
            className={`text-sm font-light tracking-wide transition-colors cursor-hover ${
              pathname === "/about"
                ? "text-[#333333] dark:text-[#f0f0f2]"
                : "text-[#8696a0] hover:text-[#333333] dark:hover:text-[#f0f0f2]"
            }`}
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-light tracking-wide transition-colors cursor-hover ${
              pathname === "/contact"
                ? "text-[#333333] dark:text-[#f0f0f2]"
                : "text-[#8696a0] hover:text-[#333333] dark:hover:text-[#f0f0f2]"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageToggle />

          <button
            className="md:hidden z-50 cursor-hover ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span
                className={`h-px bg-[#333333] dark:bg-[#f0f0f2] block transition-all ${
                  menuOpen ? "rotate-45 translate-y-2 w-6" : "w-6"
                }`}
              />
              <span
                className={`h-px bg-[#333333] dark:bg-[#f0f0f2] block transition-all ${
                  menuOpen ? "opacity-0 w-4" : "opacity-100 w-4"
                }`}
              />
              <span
                className={`h-px bg-[#333333] dark:bg-[#f0f0f2] block transition-all ${
                  menuOpen ? "-rotate-45 -translate-y-2 w-6" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-[#f0f0f2] dark:bg-[#191919] z-40 flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center space-y-8">
            <Link
              to="/"
              className={`text-2xl font-light cursor-hover ${pathname === "/" ? "text-[#333333] dark:text-[#f0f0f2]" : "text-[#8696a0]"}`}
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/work"
              className={`text-2xl font-light cursor-hover ${pathname === "/work" ? "text-[#333333] dark:text-[#f0f0f2]" : "text-[#8696a0]"}`}
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.work")}
            </Link>
            <Link
              to="/about"
              className={`text-2xl font-light cursor-hover ${pathname === "/about" ? "text-[#333333] dark:text-[#f0f0f2]" : "text-[#8696a0]"}`}
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={`text-2xl font-light cursor-hover ${pathname === "/contact" ? "text-[#333333] dark:text-[#f0f0f2]" : "text-[#8696a0]"}`}
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
      )}

      <main className="pt-24">{children}</main>

      <footer className="py-8 px-6 md:px-12 lg:px-24 text-center text-xs font-light text-[#8696a0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
            <div>
              <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-4">
                {t("contact.info.email")}
              </h3>
              <a
                href="mailto:lionelmutombo.mtb@gmail.com"
                className="block font-light hover:text-[#333333] dark:hover:text-[#f0f0f2] transition-colors cursor-hover"
              >
                lionelmutombo.mtb@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-4">
                {t("about.info.social")}
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
            <div>
              <h3 className="text-sm font-light uppercase tracking-widest text-[#8696a0] mb-4">
                {t("about.info.location")}
              </h3>
              <p className="font-light">Kinshasa, RD Congo</p>
            </div>
          </div>
          <div className="border-t border-[#e6e6e8] dark:border-[rgba(255,255,255,0.1)] pt-8">
            {t("footer.copyright")} {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  )
}