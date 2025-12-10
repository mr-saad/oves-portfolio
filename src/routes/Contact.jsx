import { motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"
import { useForm, ValidationError } from "@formspree/react"

export default function Contact() {
  const [state, sendFn] = useForm("xwpgqjoj")

  const submitFn = async (e) => {
    e.preventDefault()
    try {
      sendFn(e)
      if (state.succeeded) {
        e.target.reset()
        alert("Your message is sent, I'll reply as soon as i can")
      }
    } catch (error) {
      alert(error.message)
      console.error(error)
    }
  }

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="highlight text-3xl font-medium mb-10">Contact</h1>
      <h2 className="highlight text-2xl mb-10 text-center">Get in Touch</h2>
      <form onSubmit={submitFn} className="grid gap-5 max-w-md mx-auto">
        <input
          name="Name"
          placeholder="Name"
          className="input"
          type="text"
          required
          minLength={3}
          maxLength={20}
        />
        <input
          name="Email"
          placeholder="E-Mail"
          className="input"
          type="email"
          required
        />
        <textarea
          rows={5}
          className="input rounded-3xl!"
          name="Message"
          id="message"
          required
          placeholder="Type Something"
        ></textarea>
        <button
          disabled={state.submitting}
          className="btn group justify-self-start disabled:opacity-50"
        >
          Send Message
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#550000"
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
        <ValidationError
          className="text-red-600"
          errors={state.errors}
          prefix="Error: "
        />
      </form>
    </motion.div>
  )
}
