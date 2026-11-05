import { Link, useLocation } from "react-router"
import { Github, Instagram, Linkedin, MapPin, Phone } from "lucide-react"
import { links } from "../lib/links"

/**
 * Footer Component
 * Global footer with newsletter subscription, smooth scroll-to-top navigation,
 * external social profiles, contact details, and copyright.
 */
export default function Footer() {
  const { pathname } = useLocation()

  /**
   * RAF-driven cubic ease-in-out smooth scroll to the top of the page.
   * @param {number} duration - Animation duration in milliseconds (default: 900ms)
   */
  const smoothScrollToTop = (duration = 900) => {
    const startPosition = window.pageYOffset || document.documentElement.scrollTop
    if (startPosition === 0) return
    const startTime = performance.now()

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startPosition * (1 - ease))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <footer className="w-full border-t border-white/15 mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-10">
        {/* Newsletter Subscription Input */}
        <div className="max-w-sm flex items-center justify-between rounded-full pl-5 p-3 bg-[#0a0a0a] border border-white/15 transition-all duration-300 focus-within:border-white/45 focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]">
          <input
            type="email"
            placeholder="E-Mail"
            className="outline-none min-w-0 text-[#d5d5d5] placeholder:text-zinc-500 bg-transparent w-full"
          />
          <button
            type="button"
            aria-label="Subscribe"
            className="cursor-pointer group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rounded-full bg-[#A65F1B] p-1 scale-120 outline-1 outline-[#A65F1B] transition-all duration-700 hover:bg-transparent hover:stroke-[#A65F1B] group-focus:bg-transparent group-focus:stroke-[#A65F1B]"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Footer Navigation & Details Grid */}
        <div className="grid gap-5 md:grid-cols-3 my-10">
          {/* Internal Page Links (with smooth slow scroll to top) */}
          <ul className="grid gap-2">
            {links.map((link) => (
              <li key={link.route}>
                <Link
                  to={link.route}
                  onClick={() => smoothScrollToTop(900)}
                  className={`transition hover:text-[#A65F1B]! highlight text-xl ${
                    pathname === link.route ? "text-[#A65F1B]!" : ""
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Profiles */}
          <div className="md:justify-self-center-safe">
            <p className="mb-2">
              <a
                className="transition hover:text-[#d5d5d5]"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/oves-arora-4a95a52a6"
              >
                <Linkedin strokeWidth={1} className="inline-block mr-1" /> Linkedin
              </a>
            </p>
            <p className="mb-2">
              <a
                className="transition hover:text-[#d5d5d5]"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/oves-arora"
              >
                <Github strokeWidth={1} className="inline-block mr-1" /> Github
              </a>
            </p>
            <p className="mb-2">
              <a
                className="transition hover:text-[#d5d5d5]"
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/youngoves"
              >
                <Instagram strokeWidth={1} className="inline-block mr-1" /> Instagram
              </a>
            </p>
          </div>

          {/* Location & Phone Contact */}
          <div className="md:justify-self-end-safe">
            <p className="mb-2">
              <MapPin strokeWidth={1} className="inline-block mr-1" /> Bhuj - India
            </p>
            <p className="mb-2">
              <a
                className="transition hover:text-[#d5d5d5]"
                href="tel:919979672226"
              >
                <Phone strokeWidth={1} className="inline-block mr-1" /> +91 99796 72226
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Notice */}
        <p className="text-center">
          &copy; {new Date().getFullYear()} -{" "}
          <Link
            to="/"
            onClick={() => smoothScrollToTop(900)}
            className="hover:text-white transition-colors"
          >
            ovesarora
          </Link>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
