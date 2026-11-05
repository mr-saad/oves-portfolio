import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"

/**
 * Bio statement text for scroll word reveal animation.
 */
const BIO_TEXT =
  "I am a passionate UI/UX design aspirant focused on creating clean, minimal, intuitive and user-centered digital experiences. I enjoy turning complex problem into simple, elegant interfaces through thoughtful research, wireframing and modern visual design. Constantly learning and exploring new tools, I bring fresh creativity, attention to detail and a strong desire to craft meaningful products that truly improve the user’s journey."

const START_OPACITY = 0.15
const SPREAD = 0.8
const WORD_DURATION = 0.2

function getWordProgressRange(index, count) {
  const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD
  return {
    start,
    end: Math.min(1, start + WORD_DURATION),
  }
}

function getWordOpacity(progress, { start, end }, startOpacity = START_OPACITY) {
  if (progress <= start) return startOpacity
  if (progress >= end) return 1
  const wordProgress = (progress - start) / (end - start)
  return startOpacity + (1 - startOpacity) * wordProgress
}

/**
 * ScrollWordReveal Component
 * Official Motion.dev Scroll Word Reveal implementation.
 * Starts with no text filled (opacity 0.15). As user scrolls,
 * words progressively illuminate to full white opacity 1.0.
 */
function ScrollWordReveal({ text, className, progress }) {
  const words = text.split(" ")

  return (
    <p className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={progress}
          index={i}
          count={words.length}
        >
          {word}
        </Word>
      ))}
    </p>
  )
}

function Word({ children, progress, index, count }) {
  const range = getWordProgressRange(index, count)
  const opacity = useTransform(progress, (latest) =>
    getWordOpacity(latest, range, START_OPACITY)
  )

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.32em] text-[#d5d5d5] font-normal"
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
  const containerRef = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  // Track scroll travel through the pinned storytelling container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100px", "end end"],
  })

  // Word reveal: Progresses slowly and smoothly from 0 to 1 over the scroll track
  const wordProgress = useTransform(scrollYProgress, [0, 0.85], [0, 1])

  // Resume button: Hidden by default (opacity 0, pointer-events none).
  // Smoothly reveals once the scroll word reveal animation completes (85% to 96% scroll).
  const buttonOpacity = useTransform(scrollYProgress, [0.85, 0.96], [0, 1])
  const buttonY = useTransform(scrollYProgress, [0.85, 0.96], [16, 0])
  const buttonScale = useTransform(scrollYProgress, [0.85, 0.96], [0.94, 1])
  const buttonPointerEvents = useTransform(scrollYProgress, (v) =>
    v >= 0.88 ? "auto" : "none"
  )

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

  // Hide and remove the blinking cursor once typing completes
  useEffect(() => {
    if (index >= tokens.length) {
      const hideTimer = setTimeout(() => {
        setShowCursor(false)
      }, 400)
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
      {/* Pinned Scroll Track: Screen stays pinned in this section while scroll drives the word reveal */}
      <div ref={containerRef} className="relative min-h-[275vh]">
        <div className="sticky top-[96px] sm:top-[104px] md:top-[116px]">
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
            {showCursor && (
              <span
                aria-hidden="true"
                className="inline-block text-[#A65F1B] font-light ml-0.5 typewriter-cursor"
              >
                |
              </span>
            )}
          </h1>

          {/* Bio Summary Section with Progress Indicator Line & "SCROLL TO REVEAL" Header */}
          <div className="my-6 sm:my-8 md:my-10 max-w-2xl">
            <div className="relative pl-5 sm:pl-6">
              {/* Left vertical progress track indicator (compact height matching design) */}
              <div className="absolute left-0 top-1 h-[120px] sm:h-[130px] w-[1px] bg-white/10 overflow-hidden">
                <motion.div
                  style={{ scaleY: wordProgress }}
                  className="w-full h-full bg-[#d5d5d5] origin-top"
                />
              </div>

              {/* "SCROLL TO REVEAL" label (smaller, non-bold font) */}
              <p className="text-[10px] sm:text-[10.5px] font-normal tracking-[0.26em] uppercase text-neutral-400 mb-3 sm:mb-4 select-none">
                SCROLL TO REVEAL
              </p>

              {/* Bio Summary with Scroll Word Reveal driven by pinned scroll progress */}
              <ScrollWordReveal
                text={BIO_TEXT}
                progress={wordProgress}
                className="text-sm sm:text-base leading-relaxed"
              />
            </div>

            {/* Resume Download CTA (Hidden by default, smoothly appears when word reveal completes) */}
            <motion.div
              style={{
                opacity: buttonOpacity,
                y: buttonY,
                scale: buttonScale,
                pointerEvents: buttonPointerEvents,
              }}
              className="w-fit mt-6 sm:mt-8 pl-5 sm:pl-6"
            >
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
          </div>
        </div>
      </div>
    </motion.div>
  )
}
