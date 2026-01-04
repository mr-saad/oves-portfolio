import { Link, useLocation } from "react-router"
import { links } from "../lib/links"

export default function Footer() {
  const { pathname } = useLocation()
  return (
    <footer className="p-7 border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="highlight text-3xl md:text-4xl z-3 mb-5">ovesarora</h1>
        <div className="max-w-sm flex items-center justify-between rounded-full pl-5 p-3.5 bg-[#0a0a0a] focus-within:outline  focus-within:outline-[#d5d5d5]">
          <input
            type="email"
            placeholder="E-Mail"
            className="outline-none min-w-0 text-[#d5d5d5] w-full"
          />
          <button className="cursor-pointer group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d5d5d5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rounded-full bg-[#780606] p-1 scale-120 outline-1 outline-[#780606] transition hover:bg-transparent hover:stroke-[#780606] group-focus:bg-transparent group-focus:stroke-[#780606]"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <ul className="grid gap-2 mt-5">
          {links.map((link) => {
            return (
              <li>
                <Link
                  to={link.route}
                  className={`transition hover:text-[#780606] highlight text-xl ${
                    pathname === link.route ? "text-[#780606]!" : ""
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="">
          <p className="mt-5">
            <a
              className="transition hover:text-[#d5d5d5]"
              target="_blank"
              href="https://www.linkedin.com/in/oves-arora-4a95a52a6"
            >
              Linkedin
            </a>
          </p>
          <p>
            <a
              className="transition hover:text-[#d5d5d5]"
              target="_blank"
              href="https://github.com/oves-arora"
            >
              Github
            </a>
          </p>
          <p>
            <a
              className="transition hover:text-[#d5d5d5]"
              target="_blank"
              href="https://instagram.com/youngoves"
            >
              Instagram
            </a>
          </p>
          <p className="mt-5">Bhuj - India</p>
          <p>
            <a
              className="transition hover:text-[#d5d5d5]"
              href="tel:919979672226"
            >
              +91 99796 72226
            </a>
          </p>
          <p className="text-center mt-5">
            &copy; {new Date().getFullYear()} - ovesarora All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
