import Link from "next/link"
import { getAllServices } from "@/lib/services"
import SectionHeading from "@/components/site/section-heading"
import ServicesGrid from "@/components/site/services-grid"

export const metadata = {
  title: "Services | RCM Medical Billing",
  description:
    "Medical billing, coding, claims management, denial management, credentialing, and revenue cycle consulting.",
}

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          eyebrow="Our Expertise"
          title="A complete suite of RCM services"
          subtitle="Pick the services you need or partner with us for an end-to-end solution."
        />

        <ServicesGrid services={services} />
      </div>
    </div>
  )
}
