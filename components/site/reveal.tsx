"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  once?: boolean
  className?: string
}

export default function Reveal({ children, delay = 0, y = 20, once = true, className = "" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}
