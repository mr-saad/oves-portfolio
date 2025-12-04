import { Route, Routes, useLocation } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import Skills from "./routes/Skills"
import Contact from "./routes/Contact"
import { AnimatePresence } from "framer-motion"
import Footer from "./components/Footer"

function App() {
  const location = useLocation()
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-7 py-3">
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
    </div>
  )
}

export default App
