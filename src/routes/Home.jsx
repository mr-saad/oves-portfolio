import { motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"

export default function Home() {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mt-4 sm:mt-6 md:mt-10"
    >
      <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight">
        Hey!
        <br /> I’m <span className="highlight">Ovesarora</span>{" "}
        Exploring <br /> & Learning
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
