import { motion } from "framer-motion"
import { useForm, ValidationError } from "@formspree/react"
import pageAnimation from "../lib/pageAnimation"

/**
 * Contact Component
 * Direct messaging inquiry form integrated with Formspree.
 */
export default function Contact() {
  const formKey = import.meta.env.VITE_FORMSPREE_KEY || "xwpgqjoj"
  const [state, sendFn] = useForm(formKey)

  // Handle form submission and success notifications
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
      className="mt-6 sm:mt-10 md:mt-14"
    >
      <h1 className="highlight text-3xl font-medium mb-8 text-center">
        Contact
      </h1>

      <form onSubmit={submitFn} className="grid gap-5 max-w-md mx-auto">
        {/* Name Input */}
        <input
          name="Name"
          placeholder="Name"
          className="input"
          type="text"
          required
          minLength={3}
          maxLength={20}
        />

        {/* Email Input */}
        <input
          name="Email"
          placeholder="E-Mail"
          className="input"
          type="email"
          required
        />

        {/* Message Input */}
        <textarea
          rows={5}
          className="input rounded-xl!"
          name="Message"
          id="message"
          required
          placeholder="Type Something"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="btn group justify-self-start disabled:opacity-50"
        >
          <span className="relative z-10">
            {state.submitting ? "Sending..." : "Send Message"}
          </span>
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
            className="relative z-10 transition-transform duration-600 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>

        {/* Error Validation Feedback */}
        <ValidationError
          className="text-red-600"
          errors={state.errors}
          prefix="Error: "
        />
      </form>
    </motion.div>
  )
}
