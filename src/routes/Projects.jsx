import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import projects from "../lib/projects"
import { useRef } from "react"
import { motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"

export default function Projects() {
  const swiper = useRef()
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="highlight text-3xl font-medium mb-10">Projects</h1>
      <div className="grid max-w-lg mx-auto">
        <Swiper
          onSwiper={(e) => {
            swiper.current = e
          }}
          // bg-[#0a0a0a]
          className=" rounded-xl w-full"
        >
          {projects.map(({ img, title, desc, url }) => {
            return (
              <SwiperSlide className="p-5 flex! justify-center cursor-grab active:cursor-grabbing">
                <div>
                  <img
                    src={`/images/${img}`}
                    className="rounded-xl"
                    alt={title}
                  />
                  <h2 className="text-xl highlight mt-1 leading-tight font-light">
                    {title}
                  </h2>
                  <p className="mb-4 mt-1 font-thin highlight leading-tight">
                    {desc}
                  </p>
                  <a href={url} className="btn group">
                    Checkout!
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
                      className="rounded-full bg-[#d5d5d5] p-0.5 transition group-hover:bg-transparent group-focus-visible:bg-transparent group-hover:translate-x-2
        group-focus-visible:translate-x-2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <button
          onClick={() => swiper.current.slideNext()}
          className="bg-[#0a0a0a] p-3 rounded-full my-5 cursor-pointer justify-self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d5d5d5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}
