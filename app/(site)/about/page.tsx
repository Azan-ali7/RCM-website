import Image from "next/image"
import { motion } from "framer-motion"
import PageHero from "@/components/site/page-hero"
import SectionHeading from "@/components/site/section-heading"

export const metadata = {
  title: "About Us | RCM Medical Billing",
  description: "Learn about RCM Medical Billing's mission, vision, values, and leadership team.",
}

const team = [
  {
    name: "Jordan Lee",
    role: "Founder & CEO",
    img: "/ceo-headshot.png",
  },
  {
    name: "Avery Patel",
    role: "VP, Revenue Cycle",
    img: "/professional-headshot-rcm.png",
  },
  {
    name: "Taylor Kim",
    role: "Director, Coding",
    img: "/professional-headshot-coding.png",
  },
  {
    name: "Riley Morgan",
    role: "Client Success Lead",
    img: "/professional-headshot-success.png",
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Committed to elevating healthcare finances"
        subtitle="RCM Medical Billing was founded to bring clarity, speed, and trust to the complex world of medical billing. We help practices of all sizes achieve predictable cash flow."
        decorative
      />

      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          {/* Mission, Vision, Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-3"
          >
            <motion.div variants={itemVariants} className="rounded-xl border-2 border-sky-100 bg-white p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-lg w-fit mb-4">
                <div className="h-6 w-6 text-sky-600">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To maximize provider revenue with transparent, compliant, and patient‑centric billing operations.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-xl border-2 border-sky-100 bg-white p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-lg w-fit mb-4">
                <div className="h-6 w-6 text-sky-600">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5m-15-6h12m-12 4h12m-12 4h6" strokeWidth="1.5" stroke="currentColor" fill="none" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A healthcare system where clinicians focus on care — and are paid accurately, on time, every time.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-xl border-2 border-sky-100 bg-white p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="p-3 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-lg w-fit mb-4">
                <div className="h-6 w-6 text-sky-600">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 10a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0zm-10 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span>Integrity & compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span>Outcome‑driven accountability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span>Empathy for providers and patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-1">•</span>
                  <span>Continuous improvement</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Team Section */}
          <div className="mt-24">
            <SectionHeading
              eyebrow="Leadership"
              title="Our Team"
              subtitle="Experienced leaders in RCM, coding, and practice operations."
              align="left"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {team.map((m) => (
                <motion.div key={m.name} variants={itemVariants}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-40 h-40 mb-6">
                      <Image
                        src={m.img || "/placeholder.svg"}
                        alt={`Headshot of ${m.name}`}
                        width={160}
                        height={160}
                        className="rounded-full object-cover w-full h-full border-4 border-sky-200 shadow-lg hover:shadow-xl transition-shadow"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-600/0 via-transparent to-indigo-600/0 opacity-0 hover:opacity-20 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{m.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground font-medium">{m.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
