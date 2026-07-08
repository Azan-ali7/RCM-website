import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/site/header"
import Footer from "@/components/site/footer"

export const metadata: Metadata = {
  title: "RCM Medical Billing — Revenue Cycle Management Solutions",
  description:
    "Trusted medical billing and revenue cycle management services. Maximize your revenue and minimize your stress with RCM Medical Billing.",
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-dvh flex flex-col scroll-smooth">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
