import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServices } from "@/lib/services"
import ServiceDetailHero from "@/components/site/service-detail-hero"
import ServiceFeatures from "@/components/site/service-features"
import ServiceROI from "@/components/site/service-roi"
import ServiceUseCases from "@/components/site/service-use-cases"
import ServiceFAQ from "@/components/site/service-faq"
import ServiceCTA from "@/components/site/service-cta"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | RCM Medical Billing`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceDetailHero
        icon={service.icon}
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        image={service.hero.image}
        cta={service.cta}
      />

      {/* Features & Benefits */}
      <ServiceFeatures benefits={service.benefits} features={service.features} />

      {/* ROI Section */}
      <ServiceROI roi={service.roi} />

      {/* Use Cases */}
      <ServiceUseCases useCases={service.useCases} />

      {/* FAQ */}
      <ServiceFAQ faq={service.faq} />

      {/* CTA */}
      <ServiceCTA
        title={`Ready to transform your ${service.shortTitle.toLowerCase()}?`}
        subtitle={`Partner with RCM Medical Billing to get started. Our team is ready to help you achieve measurable results.`}
        primaryLabel={service.cta.primary}
        secondaryLabel={service.cta.secondary}
      />
    </div>
  )
}
