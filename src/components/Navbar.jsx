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
        <h1 className="highlight text-3xl md:text-4xl relative z-30">
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
          className="grid relative z-30 justify-items-end gap-2 cursor-pointer scale-70 md:scale-100"
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
              transition={{ duration: 0.45, ease: "easeOut" }}
              variants={pageAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              className="z-20 grid content-center text-center text-2xl sm:text-[1.65rem] font-bold text-[#777] justify-center gap-4 sm:gap-5 fixed inset-0 w-full h-full bg-black"
            >
              {links.map((link, index) => (
                <motion.li
                  key={link.route}
                  transition={{
                    duration: 0.75,
                    ease: [0.25, 1, 0.5, 1],
                    delay: 0.12 + index * 0.18,
                  }}
                  initial={{ y: 20, opacity: 0 }}
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
