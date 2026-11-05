import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import projects from "../lib/projects"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import pageAnimation from "../lib/pageAnimation"

export default function Projects() {
  const swiper = useRef()
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center w-full"
    >
      <div className="w-full max-w-[350px] sm:max-w-[370px] mx-auto">
        <Swiper
          onSwiper={(e) => {
            swiper.current = e
          }}
          onSlideChange={(e) => {
            setActiveIndex(e.activeIndex)
          }}
          speed={500}
          className="rounded-lg w-full"
        >
          {projects.map(({ img, title, desc, url }) => {
            return (
              <SwiperSlide
                key={title}
                className="p-1.5 flex! justify-center cursor-grab active:cursor-grabbing"
              >
                <div className="w-full">
                  <div className="overflow-hidden rounded-lg border border-white/10 shadow-2xl bg-zinc-900/40">
                    <img
                      src={`/images/${img}`}
                      className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                      alt={title}
                    />
                  </div>
                  <h2 className="text-lg highlight mt-3.5 leading-tight font-medium">
                    {title}
                  </h2>
                  <p className="mb-4 mt-1.5 text-sm text-zinc-400 font-light leading-snug">
                    {desc}
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    className="btn group !py-2.5 !px-4 !text-sm !gap-2.5"
                  >
                    <span className="relative z-10">Checkout!</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
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
      </div>

      <div className="grid grid-cols-3 items-center w-full max-w-[440px] sm:max-w-[480px] mx-auto my-7 px-4">
        <div className="flex justify-start">
          <motion.button
            type="button"
            onClick={() => swiper.current?.slidePrev()}
            disabled={activeIndex === 0}
            whileHover={activeIndex > 0 ? { x: -2 } : {}}
            whileTap={activeIndex > 0 ? { scale: 0.95 } : {}}
            className="flex items-center gap-1.5 text-sm font-light transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 text-zinc-400 hover:text-white"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
            <span>Previous</span>
          </motion.button>
        </div>

        <div className="flex justify-center items-center text-sm font-light tabular-nums tracking-wider select-none">
          <div className="relative overflow-hidden h-5 w-4 flex justify-center items-center">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={activeIndex}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute text-white font-bold"
              >
                {activeIndex + 1}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="mx-1 text-zinc-500 font-light">/</span>
          <span className="text-zinc-500 font-light">{projects.length}</span>
        </div>

        <div className="flex justify-end">
          <motion.button
            type="button"
            onClick={() => swiper.current?.slideNext()}
            disabled={activeIndex === projects.length - 1}
            whileHover={activeIndex < projects.length - 1 ? { x: 2 } : {}}
            whileTap={activeIndex < projects.length - 1 ? { scale: 0.95 } : {}}
            className="flex items-center gap-1.5 text-sm font-light transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 text-zinc-400 hover:text-white"
          >
            <span>Next</span>
            <ChevronRight size={16} strokeWidth={1.5} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
