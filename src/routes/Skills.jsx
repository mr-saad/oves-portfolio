import { motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"

export default function Skills() {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="highlight text-3xl font-medium mb-10">Skills</h1>
      <div className="grid gap-10 skillLabels">
        <div>
          <div className="font-medium highlight w-max mb-2 bg-[#1a1a1a] px-6 py-2 rounded-full">
            UX Skills
          </div>
          <div className="flex flex-wrap gap-5">
            <p>Research</p>
            <p>Journey maps</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            <p>Usability testing</p>
          </div>
        </div>
        <div>
          <div className="font-medium highlight w-max mb-2 bg-[#1a1a1a] px-6 py-2 rounded-full">
            UI Skills
          </div>
          <div className="flex flex-wrap gap-5">
            <p>Visual design</p>
            <p>Typography </p>
            <p>Color theory</p>
            <p>Design system</p>
          </div>
        </div>
        <div>
          <div className="font-medium highlight w-max mb-2 bg-[#1a1a1a] px-6 py-2 rounded-full">
            Tools & Services
          </div>
          <div className="flex flex-wrap gap-5">
            <p>Figma</p>
            <p>Canva </p>
            <p>Wordpress</p>
            <p>Photoshop</p>
          </div>
        </div>
        <div>
          <div className="font-medium highlight w-max mb-2 bg-[#1a1a1a] px-6 py-2 rounded-full">
            Others
          </div>
          <div className="flex flex-wrap gap-5">
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
