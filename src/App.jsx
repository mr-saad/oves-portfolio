import { useEffect, useRef, useState } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router"
import { AnimatePresence, motion } from "framer-motion"

// Navigation & Layout Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Page Routes
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import Skills from "./routes/Skills"
import Contact from "./routes/Contact"

/**
 * App Component
 * Root component managing initial splash screen, global layout alignment,
 * and page transitions. Automatically redirects to Home on fresh reload.
 */
function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const hasMounted = useRef(false)

  useEffect(() => {
    // Redirect to home page on initial cold load or browser refresh only
    if (!hasMounted.current) {
      hasMounted.current = true
      if (window.location.pathname !== "/") {
        navigate("/", { replace: true })
      }
    }

    // Dismiss splash screen after 3.5 seconds
    const timer = setTimeout(() => setLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <>
      {/* Initial Animated Splash Screen */}
      <AnimatePresence>{loading && <Initial />}</AnimatePresence>

      {/* Global Header Navigation */}
      <Navbar />

      {/* Main Content Area with Route Transitions */}
      <main className="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 mt-2 sm:mt-4 md:mt-6 pb-6 min-h-[80vh]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  )
}

export default App

/**
 * Initial Component
 * Fullscreen introductory greeting with animated gradient-filled typography.
 */
function Initial() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="inset-0 z-[100] fixed bg-black flex items-center justify-center"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-medium tracking-tight fill-text-anim"
      >
        ovesarora
      </motion.p>
    </motion.div>
  )
}
