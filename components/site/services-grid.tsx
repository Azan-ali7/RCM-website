'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { type Service } from "@/lib/services"

interface ServicesGridProps {
  services: Service[]
}

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

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <motion.div key={service.id} variants={itemVariants}>
          <Link href={`/services/${service.slug}`}>
            <div className="group h-full rounded-xl border-2 border-sky-100 bg-white p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-lg group-hover:shadow-md transition-all">
                  <service.icon className="h-6 w-6 text-sky-600" />
                </div>
                <ArrowRight className="h-5 w-5 text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0" />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-sky-700 transition-colors">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.subtitle}</p>

              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="text-emerald-600 mt-1 flex-shrink-0">•</span>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-sky-100 group-hover:border-sky-300 transition-colors">
                <span className="text-sm font-semibold text-sky-600 group-hover:text-sky-700 flex items-center gap-1">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
