'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Per Claim",
    price: "From $4/claim",
    description: "Pay as you go — ideal for smaller practices or seasonal volume.",
    features: ["Claim submission", "Payment posting", "Monthly reporting", "Email support"],
    cta: { href: "/contact", label: "Get Started" },
    highlight: false,
  },
  {
    name: "Professional",
    price: "$1,999/mo",
    description: "For growing practices needing comprehensive RCM services.",
    features: ["Everything in Per Claim", "Denial management", "Eligibility verification", "Dedicated account manager", "Priority support"],
    cta: { href: "/contact", label: "Talk to Sales" },
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored pricing for multi‑site groups with advanced reporting and SLAs.",
    features: [
      "All Professional features",
      "Custom dashboards & KPIs",
      "Contracted SLAs",
      "Quarterly strategy reviews",
      "Dedicated success team",
    ],
    cta: { href: "/contact", label: "Request Quote" },
    highlight: false,
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

export default function PricingTiers() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-8 lg:grid-cols-3"
    >
      {tiers.map((t) => (
        <motion.div key={t.name} variants={itemVariants}>
          <div
            className={`h-full rounded-xl border-2 bg-white p-8 flex flex-col transition-all duration-300 hover:scale-105 ${
              t.highlight
                ? "border-sky-600 ring-2 ring-sky-600/30 shadow-xl"
                : "border-sky-100 hover:border-sky-200 hover:shadow-lg"
            }`}
          >
            {t.highlight && (
              <div className="mb-4 inline-block">
                <span className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div>
              <div className="text-sm font-semibold text-sky-700 uppercase tracking-widest">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <div className="text-4xl font-bold text-foreground">{t.price.split("/")[0]}</div>
                {t.price.includes("/") && (
                  <div className="text-muted-foreground">/{t.price.split("/")[1]}</div>
                )}
              </div>
              <p className="mt-4 text-base text-muted-foreground">{t.description}</p>
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href={t.cta.href}>
                <Button
                  size="lg"
                  className={`w-full font-semibold transition-all duration-300 ${
                    t.highlight
                      ? "gradient-primary hover:shadow-lg text-white"
                      : "border-2 border-sky-200 bg-white text-sky-700 hover:bg-sky-50"
                  }`}
                >
                  {t.cta.label}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
