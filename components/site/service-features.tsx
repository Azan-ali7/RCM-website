'use client'

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface ServiceFeaturesProps {
  benefits: {
    title: string
    description: string
  }[]
  features: string[]
}

export default function ServiceFeatures({ benefits, features }: ServiceFeaturesProps) {
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

  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Benefits Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Benefits</h2>
            <p className="text-muted-foreground text-lg">Discover how this service transforms your revenue cycle</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-6 rounded-xl border-2 border-sky-100 bg-white hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-lg group-hover:shadow-md transition-all">
                    <Check className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Features Included</h2>
            <p className="text-muted-foreground text-lg">Everything you need to succeed</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-sky-50 to-indigo-50 hover:from-sky-100 hover:to-indigo-100 transition-colors"
              >
                <div className="h-2 w-2 rounded-full bg-sky-600 flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
