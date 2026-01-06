import { Route, Routes, useLocation } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import Skills from "./routes/Skills"
import Contact from "./routes/Contact"
import { AnimatePresence, motion } from "framer-motion"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500)
  }, [])
  return (
    <>
      <AnimatePresence>{loading && <Initial />}</AnimatePresence>
      <Navbar />
      <main className="max-w-6xl mx-auto px-7 py-3 min-h-[80vh]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App

function Initial() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="inset-0 z-4 fixed bg-black flex items-center justify-center"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-4xl md:text-5xl text-white after:left-0 after:overflow-clip after:transition-all after:duration-3000 after:ease-in-out after:animate-[fillText_3s_500ms_ease-in-out_forwards] relative after:absolute after:w-0 after:text-[#780606] after:content-[attr(data-text)] "
        data-text="ovesarora"
      >
        <span>oves</span>arora
      </motion.p>
    </motion.div>
  )
}
