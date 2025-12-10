import { useState } from "react"
import { Link, useLocation } from "react-router"
import { AnimatePresence, motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"
import { links } from "../lib/links"

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
            className={`bg-white duration-500 transition origin-top-right w-8 h-[3px] rounded-full ${
              showUl && "-rotate-45 w-8!"
            }`}
          ></span>
          <span
            className={`bg-white duration-500 transition-[width] w-10 h-[3px] rounded-full ${
              showUl && "w-0!"
            }`}
          ></span>
          <span
            className={`bg-white duration-500 transition origin-bottom-right w-6 h-[3px] rounded-full ${
              showUl && "rotate-45 w-8!"
            }`}
          ></span>
        </button>
        <AnimatePresence>
          {showUl && (
            <motion.ul
              key={"uniq"}
              transition={{ duration: 0.3 }}
              variants={pageAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              className="z-2 grid content-center text-center text-3xl text-[#777] justify-center gap-5 fixed top-0 left-0 w-full h-full bg-black"
            >
              {links.map((link, index) => {
                return (
                  <motion.li
                    transition={{
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <Link
                      onClick={closeUl}
                      to={link.route}
                      className={`transition hover:text-[#550000] ${
                        pathname === link.route ? "text-[#550000]" : ""
                      }`}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                )
              })}
              {/* <li>
                <Link
                  onClick={closeUl}
                  to={"/projects"}
                  className={`transition hover:text-[#550000] ${
                    pathname === "/projects" ? "text-[#550000]" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeUl}
                  to={"/skills"}
                  className={`transition hover:text-[#550000] ${
                    pathname === "/skills" ? "text-[#550000]" : ""
                  }`}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeUl}
                  to={"/contact"}
                  className={`transition hover:text-[#550000] ${
                    pathname === "/contact" ? "text-[#550000]" : ""
                  }`}
                >
                  Contact
                </Link>
              </li> */}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}
