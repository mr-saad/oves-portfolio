import { motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"
import { useEffect, useState } from "react"

const tokens = [
  { char: "H" },
  { char: "e" },
  { char: "y" },
  { char: "!" },
  { isLineBreak: true },
  { char: "I" },
  { char: "’" },
  { char: "m" },
  { char: " " },
  { char: "O", highlight: true },
  { char: "v", highlight: true },
  { char: "e", highlight: true },
  { char: "s", highlight: true },
  { char: "a", highlight: true },
  { char: "r", highlight: true },
  { char: "o", highlight: true },
  { char: "r", highlight: true },
  { char: "a", highlight: true },
  { char: " " },
  { char: "E" },
  { char: "x" },
  { char: "p" },
  { char: "l" },
  { char: "o" },
  { char: "r" },
  { char: "i" },
  { char: "n" },
  { char: "g" },
  { isLineBreak: true },
  { char: "&" },
  { char: " " },
  { char: "L" },
  { char: "e" },
  { char: "a" },
  { char: "r" },
  { char: "n" },
  { char: "i" },
  { char: "n" },
  { char: "g" },
]

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const isSplashPresent = !!document.querySelector(".fill-text-anim")
    const startDelay = isSplashPresent ? 3600 : 350

    const timer = setTimeout(() => {
      setHasStarted(true)
    }, startDelay)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!hasStarted) return
    if (index >= tokens.length) return

    const currentToken = tokens[index]
    let delay = Math.floor(Math.random() * 30) + 40 // 40-70ms realistic typing cadence

    if (currentToken.isLineBreak) {
      delay = 260 // Pause at line break
    } else if (currentToken.char === "!") {
      delay = 340 // Natural punctuation pause
    } else if (currentToken.char === " ") {
      delay = 85 // Slight spacebar hesitation
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1)
    }, delay)

    return () => clearTimeout(timeout)
  }, [hasStarted, index])

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mt-4 sm:mt-6 md:mt-10"
    >
      <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight min-h-[3.8em]">
        {tokens.slice(0, index).map((token, i) => {
          if (token.isLineBreak) {
            return <br key={i} />
          }
          return (
            <span
              key={i}
              className={token.highlight ? "highlight" : ""}
            >
              {token.char}
            </span>
          )
        })}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="inline-block text-[#A65F1B] font-light ml-0.5"
        >
          |
        </motion.span>
      </h1>
      <p className="my-6 sm:my-8 md:my-10 text-sm sm:text-base leading-relaxed text-[#888] sm:text-[#5E5E5E] max-w-2xl">
        I am a passionate UI/UX design aspirant focused on creating clean,
        minimal, intuitive and user-centered digital experiences. I enjoy
        turning complex problem into simple, elegant interfaces through
        thoughtful research, wireframing and modern visual design. Constantly
        learning and exploring new tools, I bring fresh creativity, attention to
        detail and a strong desire to craft meaningful products that truly
        improve the user’s journey.
      </p>
      <a download href="/OvesAroraResume.docx" className="btn group">
        <span className="relative z-10">Download Resume</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  )
}
