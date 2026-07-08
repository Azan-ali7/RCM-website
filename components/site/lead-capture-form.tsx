"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function LeadCaptureForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(formData: FormData) {
    setLoading(true)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed")
      ;(document.getElementById("lead-form") as HTMLFormElement)?.reset()
      toast({
        title: "Request received",
        description: "We’ll reach out within 1 business day.",
      })
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form id="lead-form" action={async (fd) => onSubmit(fd)} className="grid gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input name="name" placeholder="Full name" required aria-label="Full name" />
        <Input name="email" type="email" placeholder="Email" required aria-label="Email" />
      </div>
      <Input name="phone" type="tel" placeholder="Phone (optional)" aria-label="Phone" />
      <Textarea name="message" placeholder="Tell us about your practice and goals" rows={4} aria-label="Message" />
      <Button type="submit" disabled={loading} className="bg-emerald-600 hover:bg-emerald-700">
        {loading ? "Submitting..." : "Request Proposal"}
      </Button>
      <p className="text-xs text-muted-foreground">By submitting, you agree to our Terms and Privacy Policy.</p>
    </form>
  )
}
