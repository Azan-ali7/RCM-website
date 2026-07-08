'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

type ServiceDetailHeroProps = {
  icon: LucideIcon
  title: string
  subtitle: string
  image: string
  cta: {
    primary: string
    secondary: string
  }
}

export default function ServiceDetailHero({ icon: Icon, title, subtitle, image, cta }: ServiceDetailHeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 gradient-mesh" />
      <div className="absolute top-0 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-sky-400 rounded-full blur-3xl opacity-20 animate-float -z-10" />
      <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full blur-3xl opacity-20 animate-float -z-10" style={{ animationDelay: "2s" }} />

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon and Service Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-lg">
                <Icon className="h-6 w-6 text-sky-600" />
              </div>
              <span className="text-sm font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full">Professional Service</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground mb-6"
            >
              <span className="block gradient-text">{title}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-8"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gradient-primary hover:shadow-lg hover:scale-105 transition-all duration-300 text-white text-base h-12 px-8"
                >
                  {cta.primary}
                </Button>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-sky-200 bg-white px-8 text-base font-semibold text-sky-700 transition-all duration-300 hover:bg-sky-50 hover:border-sky-400 hover:shadow-md"
              >
                {cta.secondary}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-sky-600/20 to-emerald-600/20 rounded-2xl blur-2xl -z-10" />
            <div className="rounded-2xl border-2 border-sky-200/50 overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                width={1100}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
