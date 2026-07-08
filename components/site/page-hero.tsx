'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle: string
  cta?: {
    href?: string
    label?: string
  }
  decorative?: boolean
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
  decorative = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-16">
      {/* Animated gradient background */}
      {decorative && (
        <>
          <div className="absolute inset-0 -z-10 gradient-mesh" />
          <div className="absolute top-0 -right-40 w-80 h-80 bg-gradient-to-br from-sky-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-float -z-10" />
          <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-emerald-400 rounded-full blur-3xl opacity-20 animate-float -z-10" style={{ animationDelay: '2s' }} />
        </>
      )}

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 px-4 py-2 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-sky-600 animate-pulse" />
            <span className="text-sm font-semibold text-sky-900">{eyebrow}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mt-6"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-6"
          >
            {subtitle}
          </motion.p>

          {/* CTA */}
          {cta?.href && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a
                href={cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
