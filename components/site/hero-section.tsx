'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type HeroProps = {
  eyebrow?: string
  title?: string
  subtitle?: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  image?: { src: string; alt: string; width: number; height: number }
}

export default function HeroSection({
  eyebrow = "Trusted Partner",
  title = "Maximize Your Revenue, Minimize Your Stress",
  subtitle = "Professional medical billing and RCM for modern practices.",
  primaryCta = { href: "/contact", label: "Get a Quote" },
  secondaryCta = { href: "/services", label: "Explore Services" },
  image = {
    src: "/healthcare-billing-dashboard.png",
    alt: "Dashboard",
    width: 1100,
    height: 600,
  },
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-16 md:pb-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 gradient-mesh" />
      <div className="absolute top-0 -right-40 w-80 h-80 bg-gradient-to-br from-sky-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-float -z-10" />
      <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-emerald-400 rounded-full blur-3xl opacity-20 animate-float -z-10" style={{ animationDelay: "2s" }} />

      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground mb-6"
            >
              <span className="block">{title.split(" ").slice(0, 2).join(" ")}</span>
              <span className="block gradient-text">{title.split(" ").slice(2).join(" ")}</span>
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
              <Link href={primaryCta.href}>
                <Button
                  size="lg"
                  className="gradient-primary hover:shadow-lg hover:scale-105 transition-all duration-300 text-white text-base h-12 px-8"
                >
                  {primaryCta.label}
                </Button>
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-sky-200 bg-white px-8 text-base font-semibold text-sky-700 transition-all duration-300 hover:bg-sky-50 hover:border-sky-400 hover:shadow-md"
              >
                {secondaryCta.label}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12 pt-8 border-t border-sky-100"
            >
              <div>
                <div className="text-2xl font-bold gradient-text">38%</div>
                <p className="text-sm text-muted-foreground">Faster cash flow</p>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">99.2%</div>
                <p className="text-sm text-muted-foreground">Claim accuracy</p>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">500+</div>
                <p className="text-sm text-muted-foreground">Practices served</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-indigo-600/20 to-emerald-600/20 rounded-2xl blur-2xl -z-10" />
            <div className="rounded-2xl border-2 border-sky-200/50 overflow-hidden shadow-2xl">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
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
