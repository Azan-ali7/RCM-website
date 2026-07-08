"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(formData: FormData) {
    setLoading(true)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed")
      ;(document.getElementById("contact-form") as HTMLFormElement)?.reset()
      toast({ title: "Message sent", description: "We’ll be in touch shortly." })
    } catch {
      toast({
        title: "Could not send message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form id="contact-form" action={async (fd) => onSubmit(fd)} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="name" placeholder="Full name" required />
        <Input name="email" type="email" placeholder="Email" required />
      </div>
      <Input name="subject" placeholder="Subject" />
      <Textarea name="message" placeholder="How can we help?" rows={6} />
      <Button type="submit" disabled={loading} className="bg-sky-600 hover:bg-sky-700">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
