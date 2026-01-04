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
      className="mt-30"
    >
      <h1 className="md:text-4xl text-[1.8rem] font-extralight mt-10">
        Hey!
        <br /> I’m <span className="highlight font-light">Ovesarora</span>
        Exploring <br /> & Learning
      </h1>
      <p className="my-10">
        I am a passionate UI/UX design aspirant focused on creating clean,
        minimal, intuitive, and user-centered digital experiences. I enjoy
        turning complex problem into simple, elegant interfaces through
        thoughtful research, wireframing, and modern visual design. Constantly
        learning and exploring new tools, I bring fresh creativity, attention to
        detail, and a strong desire to craft meaningful products that truly
        improve the user’s journey
      </p>
      <a download href="/OvesAroraResume.pdf" className="btn group">
        Download Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#780606"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="rounded-full transition bg-[#d5d5d5] group-hover:bg-transparent group-focus-visible:bg-transparent group-hover:translate-x-2
group-focus-visible:translate-x-2 p-0.5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  )
}
