'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCTAProps {
  title: string
  subtitle: string
  primaryLabel: string
  secondaryLabel: string
}

export default function ServiceCTA({ title, subtitle, primaryLabel, secondaryLabel }: ServiceCTAProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-600" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">{subtitle}</p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-sky-600 font-semibold h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg border-2 border-white bg-transparent text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
