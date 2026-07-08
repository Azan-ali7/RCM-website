'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import SectionHeading from './section-heading'

type FAQItem = {
  q: string
  a: string
}

type FAQSectionProps = {
  title?: string
  subtitle?: string
  items: FAQItem[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export default function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle = "We've got answers to common questions about our services.",
  items,
}: FAQSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Support & Resources"
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="rounded-xl border-2 border-sky-100 bg-white p-2 md:p-6">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <AccordionItem value={`item-${i}`} className="border-sky-100">
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-sky-600 transition-colors py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
