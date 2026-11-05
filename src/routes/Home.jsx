import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"

/**
 * Bio statement text for scroll word reveal animation.
 */
const BIO_TEXT =
  "I am a passionate UI/UX design aspirant focused on creating clean, minimal, intuitive and user-centered digital experiences. I enjoy turning complex problem into simple, elegant interfaces through thoughtful research, wireframing and modern visual design. Constantly learning and exploring new tools, I bring fresh creativity, attention to detail and a strong desire to craft meaningful products that truly improve the user’s journey."

/**
 * ScrollWordReveal Component
 * Reveals words progressively as the user scrolls, transitioning opacity
 * and color from subtle muted zinc to illuminated white.
 */
function ScrollWordReveal({ text, className }) {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.35"],
  })

  const words = text.split(" ")

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <ScrollWord key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </ScrollWord>
        )
      })}
    </p>
  )
}

function ScrollWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.25, 1])
  const color = useTransform(progress, range, ["#52525b", "#d5d5d5"])

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em]"
    >
      {children}
    </motion.span>
  )
}

/**
 * Character tokens defining the natural typewriter sequence.
 * Includes characters, highlighted name letters, and line break markers.
 */
const tokens = [
  // Line 1: Greeting
  { char: "H" },
  { char: "e" },
  { char: "y" },
  { char: "!" },
  { isLineBreak: true },

  // Line 2: Name with white highlight + exploring
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

  // Line 3: Learning
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

/**
 * Home Component
 * Landing page with natural typewriter heading, bio summary, and resume download.
 */
export default function Home() {
  const [hasStarted, setHasStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  // Delay typewriter initiation until splash screen completes (if present)
  useEffect(() => {
    const isSplashPresent = !!document.querySelector(".fill-text-anim")
    const startDelay = isSplashPresent ? 3600 : 350

    const timer = setTimeout(() => {
      setHasStarted(true)
    }, startDelay)

    return () => clearTimeout(timer)
  }, [])

  // Natural typing cadence loop with variable delays and punctuation pauses
  useEffect(() => {
    if (!hasStarted) return
    if (index >= tokens.length) return

    const currentToken = tokens[index]
    let delay = Math.floor(Math.random() * 30) + 40 // Realistic 40-70ms human typing variance

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

  // Hide and stop the blinking cursor once typing completes
  useEffect(() => {
    if (index >= tokens.length) {
      const hideTimer = setTimeout(() => {
        setShowCursor(false)
      }, 500)
      return () => clearTimeout(hideTimer)
    }
  }, [index])

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mt-4 sm:mt-6 md:mt-10"
    >
      {/* Typewriter Heading with Animated Blinking Caret */}
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
        <AnimatePresence>
          {showCursor && (
            <motion.span
              key="cursor"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              exit={{ opacity: 0 }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="inline-block text-[#A65F1B] font-light ml-0.5"
            >
              |
            </motion.span>
          )}
        </AnimatePresence>
      </h1>

      {/* Bio Summary with Scroll Word Reveal */}
      <ScrollWordReveal
        text={BIO_TEXT}
        className="my-6 sm:my-8 md:my-10 text-sm sm:text-base leading-relaxed max-w-2xl"
      />

      {/* Resume Download CTA */}
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
