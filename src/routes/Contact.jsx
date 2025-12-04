import { motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"
export default function Contact() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="highlight text-3xl font-medium mb-10">Contact</h1>
      <h2 className="highlight text-2xl mb-10 text-center">Get in Touch</h2>
      <form className="grid gap-5 max-w-md mx-auto">
        <input
          name="name"
          placeholder="Name"
          className="px-4 py-2 rounded-full border outline-[#06923E] focus-visible:outline-none focus-visible:border-[#06923E] transition border-[#d5d5d5] text-[#d5d5d5]"
          type="text"
        />
        <input
          name="email"
          placeholder="E-Mail"
          className="px-4 py-2 rounded-full border outline-[#06923E] focus-visible:outline-none focus-visible:border-[#06923E] transition border-[#d5d5d5] text-[#d5d5d5]"
          type="text"
        />
        <textarea
          className="px-4 py-2 rounded-xl border outline-[#06923E] focus-visible:outline-none focus-visible:border-[#06923E] transition border-[#d5d5d5] max-h-40 min-h-4 text-[#d5d5d5]"
          name="message"
          id="message"
          placeholder="Type Something"
        ></textarea>
        <button className="btn group justify-self-start">
          Send Message
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#06923E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rounded-full transition bg-[#d5d5d5] group-hover:bg-transparent group-focus-visible:bg-transparent group-hover:translate-x-2
group-focus-visible:translate-x-2 p-0.5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </form>
    </motion.div>
  )
}
