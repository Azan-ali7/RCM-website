'use client'

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/site/section-heading"
import BlogList from "@/components/site/blog-list"
import { getAllCategories, getPosts } from "@/lib/posts"

export default function BlogPageClient() {
  const posts = useMemo(() => getPosts(), [])
  const categories = useMemo(() => ["All", ...getAllCategories()], [])
  const [active, setActive] = useState("All")

  const filtered = active === "All" ? posts : posts.filter((p) => p.categories.includes(active))

  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Insights & Tips"
          title="RCM Medical Billing Blog"
          subtitle="Practical advice on billing, coding, and revenue cycle best practices."
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`inline-flex items-center rounded-full border-2 px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                active === c
                  ? "gradient-primary text-white border-sky-600 shadow-md"
                  : "border-sky-100 bg-white text-foreground hover:border-sky-300 hover:shadow-md"
              }`}
              aria-pressed={active === c}
            >
              {c}
            </button>
          ))}
        </motion.div>
        <div className="mt-12">
          <BlogList posts={filtered} />
        </div>
      </div>
    </div>
  )
}
