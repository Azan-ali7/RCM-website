import Link from "next/link"
import { BadgeCheck, ClipboardCheck, FileText, LineChart, ShieldCheck, Stethoscope } from "lucide-react"

const iconMap = {
  FileText,
  ClipboardCheck,
  LineChart,
  ShieldCheck,
  BadgeCheck,
  Stethoscope,
}

type ServiceCardProps = {
  title?: string
  description?: string
  href?: string
  icon?: keyof typeof iconMap
}

export default function ServiceCard({
  title = "Service",
  description = "Service description.",
  href = "#",
  icon = "FileText",
}: ServiceCardProps) {
  const Icon = iconMap[icon]
  return (
    <Link href={href} className="group block rounded-xl border bg-background p-6 hover:shadow-sm transition-shadow">
      <Icon className="h-6 w-6 text-emerald-600" />
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 text-sm text-sky-700 group-hover:underline">Learn more →</div>
    </Link>
  )
}
