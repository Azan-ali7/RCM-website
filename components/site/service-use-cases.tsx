'use client'

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface ServiceUseCasesProps {
  useCases: {
    title: string
    description: string
  }[]
}

export default function ServiceUseCases({ useCases }: ServiceUseCasesProps) {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Perfect For</h2>
          <p className="text-muted-foreground text-lg">See if this service is right for your practice</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-8 rounded-xl border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
