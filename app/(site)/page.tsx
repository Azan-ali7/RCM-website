import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/site/hero-section"
import SectionHeading from "@/components/site/section-heading"
import ServiceCard from "@/components/site/service-card"
import Testimonials from "@/components/site/testimonials"
import LeadCaptureForm from "@/components/site/lead-capture-form"
import FAQSection from "@/components/site/faq-section"

export const metadata = {
  title: "Home | RCM Medical Billing",
  description:
    "Maximize your revenue, minimize your stress. Professional medical billing & RCM for practices and healthcare providers.",
}

export default function HomePage() {
  const services = [
    {
      title: "Medical Billing",
      description: "End-to-end billing services with meticulous claim submission and payment posting.",
      icon: "FileText",
      href: "/services#medical-billing",
    },
    {
      title: "Coding",
      description: "Accurate CPT/ICD-10 coding by certified professionals to reduce denials.",
      icon: "ClipboardCheck",
      href: "/services#coding",
    },
    {
      title: "Claims Management",
      description: "Real-time tracking and follow-up to ensure timely reimbursements.",
      icon: "LineChart",
      href: "/services#claims-management",
    },
    {
      title: "Denial Management",
      description: "Root-cause analysis with proactive resubmissions to recover lost revenue.",
      icon: "ShieldCheck",
      href: "/services#denial-management",
    },
    {
      title: "Credentialing",
      description: "Provider enrollment and payer credentialing handled end-to-end.",
      icon: "BadgeCheck",
      href: "/services#credentialing",
    },
    {
      title: "RCM Consulting",
      description: "Optimize your revenue cycle with audits, benchmarks, and best practices.",
      icon: "Stethoscope",
      href: "/services#rcm-consulting",
    },
  ]

  const benefits = [
    "Faster reimbursements",
    "Reduced claim denials",
    "Transparent reporting",
    "HIPAA-compliant workflows",
    "Dedicated account managers",
    "Scalable solutions",
  ]

  const faqs = [
    {
      q: "How quickly can we start after signing?",
      a: "We typically complete setup and EDI enrollments within 2–4 weeks, depending on payers and your EHR.",
    },
    {
      q: "What EHR/PM systems do you support?",
      a: "We work with leading platforms and can adapt to your existing workflows. We'll assess during onboarding.",
    },
    {
      q: "How are your fees structured?",
      a: "Choose per-claim or monthly pricing. We'll recommend the best model based on your specialty and volume.",
    },
    {
      q: "How do you reduce denials?",
      a: "Through coding audits, eligibility verification, payer rules, and denial analytics with targeted prevention.",
    },
    {
      q: "Is your process HIPAA-compliant?",
      a: "Yes. We maintain strict administrative, physical, and technical safeguards across our workflows.",
    },
    {
      q: "Do you offer onboarding and training?",
      a: "Absolutely. We provide comprehensive training on our platform, workflows, and best practices for your team.",
    },
  ]

  return (
    <>
      <HeroSection
        eyebrow="Trusted Medical Billing & RCM"
        title="Maximize Your Revenue, Minimize Your Stress"
        subtitle="We handle your billing, coding, claims, and payers — you focus on patient care."
        primaryCta={{ href: "/contact", label: "Get a Quote" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        image={{
          src: "/healthcare-billing-dashboard.png",
          alt: "Medical billing dashboard illustration",
          width: 1100,
          height: 600,
        }}
      />

      <section id="overview" className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive Revenue Cycle Management"
            subtitle="From coding to denial management, we provide a turnkey RCM solution designed for speed, accuracy, and transparency."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 md:py-24 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="container px-4 md:px-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Proven outcomes that impact your bottom line"
            subtitle="Our data-driven approach reduces denials and accelerates payments while giving your team complete visibility."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, idx) => (
              <li
                key={b}
                className="group flex items-start gap-4 rounded-xl border-2 border-sky-100 bg-white p-6 hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-emerald-100 to-sky-100 rounded-lg group-hover:shadow-md transition-all">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <span className="text-base font-semibold text-foreground pt-1">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      <section id="lead" className="py-16 md:py-24 bg-gradient-to-br from-sky-600 via-indigo-600 to-emerald-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 mb-6 border border-white/30">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                <span className="text-sm font-semibold text-white">Limited Time Offer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Ready to see more revenue, faster?</h2>
              <p className="text-lg text-white/90 mb-8">Tell us about your practice and we'll deliver a tailored proposal—often within 24 hours.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <Button className="bg-white text-sky-600 hover:bg-white/90 font-semibold text-base h-12 px-8 w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="mt-10">
                <Image
                  src="/healthcare-kpis-dashboard.png"
                  alt="Analytics report preview"
                  width={540}
                  height={320}
                  className="rounded-xl border-2 border-white/30 shadow-2xl"
                />
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Have questions about how we work? We've answered the most common ones."
        items={faqs}
      />
    </>
  )
}
