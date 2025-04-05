import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layouts/Layout"
import Home from "./pages/home/Home"
import Project from "./pages/projects/Project"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import ProjectDetail from "./pages/projects/ProjectDetail"
import CustomCursor from "./components/CustomCursor"
import SmoothScroll from "./components/SmoothScroll"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#f0f0f2] dark:bg-[#191919] text-[#333333] dark:text-[#f0f0f2]">
        <div className="mb-4 w-10 h-10 animate-spin">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="1 3"
              className="text-[#8696a0] dark:text-[#8696a0]"
            />
          </svg>
        </div>
        <p className="text-[#8696a0] dark:text-[#8696a0] font-light text-sm tracking-wide">Materializing shapes...</p>
      </div>
    )
  }

  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Project />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </SmoothScroll>
    </>
  )
}

export default App