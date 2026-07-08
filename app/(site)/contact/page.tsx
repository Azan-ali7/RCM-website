import ContactForm from "@/components/site/contact-form"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import PageHero from "@/components/site/page-hero"

export const metadata = {
  title: "Contact Us | RCM Medical Billing",
  description: "Get in touch with RCM Medical Billing — phone, email, address, office hours, and contact form.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Talk About Your Revenue Cycle"
        subtitle="Whether you have questions, need a consultation, or want to schedule a demo, our team is here to help. Reach out anytime."
        decorative
      />
      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-xl border bg-background p-6">
            <ContactForm />
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl border bg-background p-6">
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-sky-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123‑4567</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-sky-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">hello@rcmmedicalbilling.com</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-muted-foreground">123 Healthcare Ave, Suite 400, New York, NY 10001</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-sky-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-muted-foreground">Mon–Fri, 9:00 AM – 6:00 PM ET</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border overflow-hidden">
              <iframe
                title="RCM Medical Billing Location"
                src="https://www.google.com/maps?q=New%20York%20NY%2010001&output=embed"
                className="w-full h-[300px]"
                loading="lazy"
              />
            </div>
          </aside>
          </div>
        </div>
      </div>
    </>
  )
}
