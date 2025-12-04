import { useState } from "react"
import { Link, useLocation } from "react-router"
import { AnimatePresence, motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"

export default function Navbar() {
  const { pathname } = useLocation()
  const [showUl, setShowUl] = useState(false)

  const closeUl = () => {
    setShowUl(false)
    document.documentElement.style.overflow = "visible"
  }
  return (
    <div className="border-b border-white/5">
      <nav className="flex justify-between items-center p-7 max-w-6xl mx-auto tracking-tight">
        <h1 onClick={closeUl} className="highlight text-3xl md:text-4xl z-3">
          <Link to={"/"}>ovesarora</Link>
        </h1>
        <button
          onClick={() => {
            setShowUl((prev) => !prev)
            !showUl
              ? (document.documentElement.style.overflow = "hidden")
              : (document.documentElement.style.overflow = "visible")
          }}
          className="grid z-3 justify-items-end gap-2 cursor-pointer scale-70 md:scale-100"
        >
          <span
            className={`bg-white transition origin-top-right w-8 h-[3px] rounded-full ${
              showUl && "-rotate-45 w-8!"
            }`}
          ></span>
          <span
            className={`bg-white transition-[width] w-10 h-[3px] rounded-full ${
              showUl && "w-0!"
            }`}
          ></span>
          <span
            className={`bg-white transition origin-bottom-right w-6 h-[3px] rounded-full ${
              showUl && "rotate-45 w-8!"
            }`}
          ></span>
        </button>
        <AnimatePresence>
          {showUl && (
            <motion.ul
              key={"uniq"}
              variants={pageAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              className="z-2 grid content-center text-center text-3xl text-[#777] justify-center gap-5 fixed top-0 left-0 w-full h-full bg-black"
            >
              <li>
                <Link
                  onClick={closeUl}
                  to={"/"}
                  className={`transition hover:text-[#06923E] ${
                    pathname === "/" ? "text-[#06923E]" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeUl}
                  to={"/projects"}
                  className={`transition hover:text-[#06923E] ${
                    pathname === "/projects" ? "text-[#06923E]" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeUl}
                  to={"/skills"}
                  className={`transition hover:text-[#06923E] ${
                    pathname === "/skills" ? "text-[#06923E]" : ""
                  }`}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeUl}
                  to={"/contact"}
                  className={`transition hover:text-[#06923E] ${
                    pathname === "/contact" ? "text-[#06923E]" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}
