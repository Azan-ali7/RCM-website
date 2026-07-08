'use client'

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

interface ServiceROIProps {
  roi: {
    metric: string
    value: string
    description: string
  }[]
}

export default function ServiceROI({ roi }: ServiceROIProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-sky-600" />
            <span className="text-sm font-semibold text-sky-700 bg-sky-100 px-3 py-1 rounded-full">ROI & Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Measurable Impact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">Real results from practices using our service</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {roi.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl border-2 border-sky-100 bg-white overflow-hidden transition-all duration-300 hover:border-sky-300 hover:shadow-xl hover:scale-105"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-lg group-hover:shadow-lg transition-all">
                    <TrendingUp className="h-6 w-6 text-sky-600" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{item.metric}</div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.value}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
