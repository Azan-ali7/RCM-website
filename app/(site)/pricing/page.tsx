import PricingTiers from "@/components/site/pricing-tiers"
import PageHero from "@/components/site/page-hero"

export const metadata = {
  title: "Pricing | RCM Medical Billing",
  description: "Transparent pricing — per claim and monthly plans tailored to your practice size.",
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Simple & Transparent Pricing"
        title="Flexible Plans That Scale With You"
        subtitle="Choose the pricing model that fits your practice. Whether per claim or monthly, we offer flexible solutions with no hidden fees."
        cta={{ href: "/contact", label: "Get a Custom Quote" }}
        decorative
      />
      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mt-10">
            <PricingTiers />
          </div>
        </div>
      </div>
    </>
  )
}
