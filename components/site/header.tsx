"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, FileText, ClipboardCheck, LineChart, ShieldCheck, BadgeCheck, Stethoscope } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/medical-billing", label: "Medical Billing", icon: FileText },
      { href: "/services/medical-coding", label: "Coding", icon: ClipboardCheck },
      { href: "/services/claims-management", label: "Claims Management", icon: LineChart },
      { href: "/services/denial-management", label: "Denial Management", icon: ShieldCheck },
      { href: "/services/credentialing", label: "Credentialing", icon: BadgeCheck },
      { href: "/services/rcm-consulting", label: "RCM Consulting", icon: Stethoscope },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sky-100/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-sm">
      <div className="container px-4 md:px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
          <div className="p-1.5 bg-gradient-to-br from-sky-600 to-indigo-600 rounded-lg">
            <span className="inline-block h-3 w-3 rounded-sm bg-white" />
          </div>
          <span className="bg-gradient-to-r from-sky-700 to-indigo-600 bg-clip-text text-transparent">RCM Medical Billing</span>
        </Link>

        <NavigationMenu className="ml-6 hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[540px] grid-cols-2 gap-1 p-2">
                      {item.children.map((c) => (
                        <NavigationMenuLink asChild key={c.href}>
                          <Link href={c.href} className="group grid rounded-md p-4 text-sm hover:bg-accent">
                            <div className="flex items-center gap-2 font-medium">
                              <c.icon className="h-4 w-4 text-sky-600" />
                              {c.label}
                            </div>
                            <div className="text-muted-foreground">Learn more</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm rounded-md hover:bg-accent ${
                        pathname === item.href ? "text-sky-700" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto hidden lg:flex items-center gap-4">
          <Link href="/pricing">
            <Button variant="outline" className="border-sky-200 hover:bg-sky-50 font-semibold">
              View Pricing
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="gradient-primary hover:shadow-lg text-white font-semibold transition-all duration-300 hover:scale-105">
              Get a Quote
            </Button>
          </Link>
        </div>

        <div className="ml-auto lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <nav className="mt-6 grid gap-2">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.href} className="grid gap-1">
                      <div className="px-3 pt-2 text-xs uppercase text-muted-foreground">{item.label}</div>
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                        >
                          <c.icon className="h-4 w-4 text-sky-600" />
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link href="/pricing" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full bg-transparent">
                      Pricing
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-sky-600 hover:bg-sky-700">Get a Quote</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
