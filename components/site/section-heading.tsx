'use client'

import { motion } from "framer-motion"

type SectionHeadingProps = {
  eyebrow?: string
  title?: string
  subtitle?: string
  align?: "left" | "center"
}

export default function SectionHeading({
  eyebrow = "Section",
  title = "Section Title",
  subtitle = "Section subtitle goes here.",
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : ""
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${alignClass}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 text-sky-800 px-4 py-2 text-xs font-semibold">
          <span className="h-2 w-2 rounded-full bg-sky-600" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
