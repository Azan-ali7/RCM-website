export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  categories: string[]
  image: { src: string; alt: string }
  content: string[]
}

const posts: Post[] = [
  {
    slug: "reduce-claim-denials-7-steps",
    title: "7 Steps to Reduce Claim Denials",
    excerpt:
      "Denials drain revenue. Here’s a practical framework to reduce denials across coding, eligibility, and payer rules.",
    date: "2025-07-12",
    author: "RCM Medical Billing Editorial",
    categories: ["Billing Tips", "Denials"],
    image: {
      src: "/healthcare-analytics-charts.png",
      alt: "Analytics charts for denial management",
    },
    content: [
      "Claim denials often originate from a small set of recurring issues. Start with accurate patient data and eligibility verification to avoid front-end rejections.",
      "Implement coding audits and use real-time edits before submission. Track denials by category and payer to prioritize prevention.",
      "Review payer policies quarterly and train staff on updates. Measure first-pass acceptance rates and set quarterly targets.",
    ],
  },
  {
    slug: "rcm-kpis-every-practice-should-track",
    title: "RCM KPIs Every Practice Should Track",
    excerpt: "From days in A/R to first-pass acceptance, measure the KPIs that actually improve cash flow.",
    date: "2025-06-18",
    author: "Jordan Lee",
    categories: ["RCM", "Analytics"],
    image: {
      src: "/healthcare-kpis-dashboard.png",
      alt: "Dashboard of RCM KPIs",
    },
    content: [
      "Focusing on a few high-impact metrics can transform your cash flow.",
      "Start with clean claim rate, days in A/R, and denial write-offs. Use cohort analysis to understand payer performance.",
      "Share KPI dashboards with your team and review trends monthly.",
    ],
  },
  {
    slug: "hipaa-compliance-checklist-2025",
    title: "HIPAA Compliance Checklist for 2025",
    excerpt: "A practical checklist for keeping billing workflows compliant and secure this year.",
    date: "2025-05-05",
    author: "Avery Patel",
    categories: ["Compliance", "Security"],
    image: {
      src: "/placeholder.svg?height=450&width=800",
      alt: "HIPAA security illustration",
    },
    content: [
      "Update BAAs annually and ensure role-based access controls across systems.",
      "Encrypt PHI in transit and at rest, and document incident response procedures.",
      "Conduct regular workforce training and risk assessments.",
    ],
  },
]

export function getPosts(): Post[] {
  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllCategories(): string[] {
  const set = new Set<string>()
  posts.forEach((p) => p.categories.forEach((c) => set.add(c)))
  return Array.from(set).sort()
}
