'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "RCM Medical Billing reduced our denials by 38% within the first quarter. Our cash flow is the best it's ever been.",
    name: "Dr. Amelia Nguyen",
    role: "Practice Owner, Family Medicine",
    avatar: "/professional-doctor-headshot.png",
  },
  {
    quote: "The reporting transparency and proactive follow‑up have been game‑changers for our multi‑specialty group.",
    name: "Marcus Reed",
    role: "COO, Multi‑Specialty Group",
    avatar: "/professional-headshot-operations.png",
  },
  {
    quote:
      "Credentialing and enrollments were seamless. We started seeing payouts from new payers faster than expected.",
    name: "Priya Sharma",
    role: "Administrator, Pediatrics",
    avatar: "/professional-admin-headshot.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="What Clients Say"
          title="Proven results, trusted by practices"
          subtitle="We partner with clinics and provider groups to deliver measurable outcomes."
          align="center"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={itemVariants}
              className="group rounded-xl border-2 border-sky-100 bg-white p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-base text-foreground font-medium mb-6 leading-relaxed">"{t.quote}"</blockquote>

              <figcaption className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={t.avatar || "/placeholder.svg"}
                    alt={`Photo of ${t.name}`}
                    width={56}
                    height={56}
                    className="rounded-full border-2 border-sky-200 object-cover w-14 h-14"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
