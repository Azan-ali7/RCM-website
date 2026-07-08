'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ServiceFAQProps {
  faq: {
    question: string
    answer: string
  }[]
}

export default function ServiceFAQ({ faq }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Common questions about this service</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faq.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group border-2 border-indigo-100 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-indigo-50/50 transition-colors text-left"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{item.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-sky-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-indigo-50/50"
                    >
                      <div className="px-6 py-5 text-muted-foreground leading-relaxed border-t border-indigo-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
