import BlogPageClient from "./BlogPageClient"
import PageHero from "@/components/site/page-hero"

export const metadata = {
  title: "Blog | RCM Medical Billing",
  description: "Industry insights, billing tips, compliance updates, and RCM Medical Billing news.",
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry Insights"
        title="Medical Billing & Revenue Cycle Blog"
        subtitle="Expert tips, compliance updates, and industry news to help you optimize your revenue cycle and stay ahead of healthcare changes."
        decorative
      />
      <BlogPageClient />
    </>
  )
}
