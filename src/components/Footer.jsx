export default function Footer() {
  return (
    <footer className="p-7 border-t border-white/5 mt-20">
      <div className="max-w-sm mx-auto flex items-center justify-between rounded-full pl-5 p-3 bg-[#0a0a0a]">
        <input
          type="email"
          placeholder="E-Mail"
          className="outline-none min-w-0 text-[#d5d5d5]"
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
            className="rounded-full bg-[#06923E] p-1 scale-120 outline-1 outline-[#06923E] transition hover:bg-transparent hover:stroke-[#06923E] group-focus:bg-transparent group-focus:stroke-[#06923E]"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="md:text-center">
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
        <p className="highlight mt-5">Bhuj - Kachchh, Gujarat - India</p>
        <p>
          <a
            className="transition hover:text-[#d5d5d5]"
            href="tel:919979672226"
          >
            +91 99796 72226
          </a>
        </p>
        <p className="text-center mt-5">
          &copy; 2025 - ovesarora All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
