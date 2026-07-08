"use client"

import type React from "react"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Failed")
      setEmail("")
      toast({ title: "Subscribed!", description: "You’re on our list." })
    } catch {
      toast({ title: "Subscription failed", description: "Try again later.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="border-t border-sky-100/50 bg-gradient-to-b from-white to-sky-50/50">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div>
            <Link href="/" className="font-bold text-lg inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="p-1.5 bg-gradient-to-br from-sky-600 to-indigo-600 rounded-lg">
                <span className="inline-block h-3 w-3 rounded-sm bg-white" />
              </div>
              <span className="bg-gradient-to-r from-sky-700 to-indigo-600 bg-clip-text text-transparent">RCM Medical Billing</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Trusted medical billing and revenue cycle management for modern practices.
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-sky-700">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-sky-700">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-muted-foreground hover:text-sky-700">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/services#medical-billing" className="text-muted-foreground hover:text-foreground">
                  Medical Billing
                </Link>
              </li>
              <li>
                <Link href="/services#coding" className="text-muted-foreground hover:text-foreground">
                  Coding
                </Link>
              </li>
              <li>
                <Link href="/services#claims-management" className="text-muted-foreground hover:text-foreground">
                  Claims Management
                </Link>
              </li>
              <li>
                <Link href="/services#denial-management" className="text-muted-foreground hover:text-foreground">
                  Denial Management
                </Link>
              </li>
              <li>
                <Link href="/services#credentialing" className="text-muted-foreground hover:text-foreground">
                  Credentialing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <p className="mt-3 text-sm text-muted-foreground">Get billing tips and industry updates.</p>
            <form className="mt-4 flex gap-2" onSubmit={onSubmit}>
              <Input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <Button type="submit" disabled={loading} className="bg-emerald-600 hover:bg-emerald-700">
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} RCM Medical Billing. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex gap-4">
            <Link href="#" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
