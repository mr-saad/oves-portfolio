import { motion } from "framer-motion"
import pageAnimation from "../lib/pageAnimation"

export default function Skills() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="highlight text-3xl font-medium mb-10">Skills</h1>
      <p className="font-medium highlight">Languages</p>
      <p>HTML</p>
      <p>CSS</p>
      <p className="font-medium highlight mt-5">UX Skill</p>
      <p>Research</p>
      <p>Journey maps</p>
      <p>Wireframing</p>
      <p>Prototyping</p>
      <p>Usability testing</p>
      <p className="font-medium highlight mt-5">UI Skill</p>
      <p>Visual design</p>
      <p>Typography </p>
      <p>Color theory</p>
      <p>Design system</p>
      <p className="font-medium highlight mt-5">Tools & Services</p>
      <p>Figma</p>
      <p>Canva </p>
      <p>Wordpress</p>
      <p>Photoshop</p>
    </motion.div>
  )
}
