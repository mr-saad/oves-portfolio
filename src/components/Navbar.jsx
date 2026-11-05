import { useState } from "react"
import { Link, useLocation } from "react-router"
import { AnimatePresence, motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"
import { links } from "../lib/links"

/**
 * Navbar Component
 * Responsive header navigation with animated mobile menu and smooth logo reset.
 */
export default function Navbar() {
  const { pathname } = useLocation()
  const [showUl, setShowUl] = useState(false)

  // Close mobile navigation drawer and restore document scroll
  const closeUl = () => {
    setShowUl(false)
    document.documentElement.style.overflow = "visible"
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  // Toggle mobile navigation drawer and lock/unlock document scroll
  const toggleMenu = () => {
    const nextState = !showUl
    setShowUl(nextState)
    document.documentElement.style.overflow = nextState ? "hidden" : "visible"
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/5 bg-black">
      <nav className="flex justify-between items-center py-7 px-6 sm:px-8 md:px-12 lg:px-16 w-full tracking-tight">
        {/* Brand Logo - Navigates Home & Scrolls to Top */}
        <h1 className="highlight text-3xl md:text-4xl z-3">
          <Link
            to="/"
            onClick={() => {
              closeUl()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            ovesarora
          </Link>
        </h1>

        {/* Mobile Menu Hamburger Button */}
        <button
          type="button"
          aria-label={showUl ? "Close Menu" : "Open Menu"}
          onClick={toggleMenu}
          className="grid z-3 justify-items-end gap-2 cursor-pointer scale-70 md:scale-100"
        >
          <span
            className={`bg-white duration-500 transition origin-top-right w-8 h-[3px] rounded-full ${
              showUl && "-rotate-45 w-8!"
            }`}
          />
          <span
            className={`bg-white duration-500 transition-[width] w-10 h-[3px] rounded-full ${
              showUl && "w-0!"
            }`}
          />
          <span
            className={`bg-white duration-500 transition origin-bottom-right w-6 h-[3px] rounded-full ${
              showUl && "rotate-45 w-8!"
            }`}
          />
        </button>

        {/* Fullscreen Mobile Navigation Drawer */}
        <AnimatePresence>
          {showUl && (
            <motion.ul
              key="mobile-nav"
              transition={{ duration: 0.3 }}
              variants={pageAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              className="z-2 grid content-center text-center text-3xl text-[#777] justify-center gap-5 fixed top-0 left-0 w-full h-full bg-black"
            >
              {links.map((link, index) => (
                <motion.li
                  key={link.route}
                  transition={{
                    ease: "linear",
                    delay: index * 0.15,
                  }}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    onClick={closeUl}
                    to={link.route}
                    className={`transition hover:text-[#A65F1B] ${
                      pathname === link.route ? "text-[#A65F1B]" : ""
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
