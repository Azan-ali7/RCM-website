import { BadgeCheck, ClipboardCheck, FileText, LineChart, ShieldCheck, Stethoscope } from "lucide-react"

export interface Service {
  id: string
  slug: string
  title: string
  shortTitle: string
  icon: any
  subtitle: string
  description: string
  hero: {
    title: string
    subtitle: string
    image: string
  }
  benefits: {
    title: string
    description: string
  }[]
  features: string[]
  roi: {
    metric: string
    value: string
    description: string
  }[]
  useCases: {
    title: string
    description: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
  cta: {
    primary: string
    secondary: string
  }
}

export const services: Service[] = [
  {
    id: "1",
    slug: "medical-billing",
    title: "Medical Billing",
    shortTitle: "Billing",
    icon: FileText,
    subtitle: "End-to-end billing solutions that maximize cash flow",
    description: "Professional charge entry, claim submission, and payment posting with 99.2% accuracy rate.",
    hero: {
      title: "Streamline Your Medical Billing Process",
      subtitle: "From charge entry to payment posting, we handle every step with precision and speed.",
      image: "/healthcare-billing-dashboard.png",
    },
    benefits: [
      {
        title: "Faster Reimbursements",
        description: "Average 12-15 day faster payment cycles through optimized claim submission",
      },
      {
        title: "99.2% Accuracy",
        description: "Certified billers ensure claims are clean and compliant on first submission",
      },
      {
        title: "24/7 Payment Posting",
        description: "Automated remittance processing and reconciliation",
      },
      {
        title: "Patient Statement Management",
        description: "Automated, compliant patient billing and collection follow-up",
      },
    ],
    features: [
      "Electronic charge entry and verification",
      "Automated claim scrubbing and validation",
      "Real-time claim status tracking",
      "Multi-payer remittance processing",
      "Insurance eligibility verification",
      "Patient responsibility estimation",
    ],
    roi: [
      {
        metric: "38%",
        value: "Reduction in Days Sales Outstanding (DSO)",
        description: "Average client improvement in cash flow timing",
      },
      {
        metric: "94%",
        value: "First-time claim acceptance rate",
        description: "Industry average is 85-88%",
      },
      {
        metric: "$2.3M",
        value: "Average annual revenue recovery",
        description: "For medium-sized practices (5-10 providers)",
      },
    ],
    useCases: [
      {
        title: "Independent Practices",
        description: "Single-specialty or multi-specialty practices looking to eliminate billing staff overhead",
      },
      {
        title: "Growing Practices",
        description: "Scaling practices that need billing infrastructure without hiring full-time staff",
      },
      {
        title: "Hospital Outpatient",
        description: "Facility-based billing with complex payer contracts and compliance requirements",
      },
    ],
    faq: [
      {
        question: "How long does implementation take?",
        answer: "Typical implementation takes 2-4 weeks depending on practice size and system complexity. We handle all data migration and staff training.",
      },
      {
        question: "Do you work with EHR systems?",
        answer: "Yes, we integrate with all major EHR systems including Epic, Athenahealth, eClinicalWorks, Medidata, and others.",
      },
      {
        question: "What about practice growth?",
        answer: "Our service scales with your practice. As you grow, our billing team grows with you at no hidden costs.",
      },
    ],
    cta: {
      primary: "Request a Demo",
      secondary: "View Pricing",
    },
  },
  {
    id: "2",
    slug: "medical-coding",
    title: "Medical Coding",
    shortTitle: "Coding",
    icon: ClipboardCheck,
    subtitle: "Expert clinical coding for maximum reimbursement",
    description: "Certified coders with specialty expertise ensuring accurate CPT, ICD-10, and HCC coding.",
    hero: {
      title: "Certified Medical Coding Excellence",
      subtitle: "Maximize reimbursement with precise CPT/ICD-10/HCC coding by board-certified specialists.",
      image: "/medical-coding-certification.png",
    },
    benefits: [
      {
        title: "Board-Certified Coders",
        description: "CPC, RHIT, and specialty-certified coders with 10+ years experience",
      },
      {
        title: "Specialty Expertise",
        description: "Coders specialized in your medical specialty for accurate clinical documentation capture",
      },
      {
        title: "Compliance Assurance",
        description: "100% HIPAA-compliant coding with regular HCC audits and risk score optimization",
      },
      {
        title: "Continuous Education",
        description: "Coders stay current with CPT/ICD-10 updates through ongoing training",
      },
    ],
    features: [
      "CPT, ICD-10, and HCC coding",
      "Pre-submission coding audits",
      "Provider coding feedback and education",
      "Risk score optimization for Medicare Advantage",
      "Specialty-specific coding protocols",
      "Documentation improvement recommendations",
    ],
    roi: [
      {
        metric: "12-18%",
        value: "Increase in average claim value",
        description: "Through optimized code selection and HCC capture",
      },
      {
        metric: "89%",
        value: "HCC capture improvement",
        description: "Average client vs industry baseline",
      },
      {
        metric: "$1.1M",
        value: "Annual revenue impact",
        description: "For practices with Medicare Advantage populations",
      },
    ],
    useCases: [
      {
        title: "Specialty Practices",
        description: "Complex specialty coding (Orthopedics, Cardiology, Surgery) requiring expert attention",
      },
      {
        title: "Primary Care",
        description: "Risk optimization and HCC capture for Medicare Advantage patient populations",
      },
      {
        title: "Hospital Systems",
        description: "Large-volume coding with compliance and quality assurance requirements",
      },
    ],
    faq: [
      {
        question: "What coding certifications do your coders have?",
        answer: "All our coders are board-certified through AAPC (CPC), AHIMA (RHIT), or specialty boards. Average experience is 12+ years.",
      },
      {
        question: "How do you handle documentation gaps?",
        answer: "Our coders flag documentation issues and provide providers with education recommendations. We work collaboratively with providers to improve capture.",
      },
      {
        question: "Do you code remote or onsite?",
        answer: "We can work either way. Remote coding is HIPAA-compliant with secure VPNs. Some practices prefer onsite presence.",
      },
    ],
    cta: {
      primary: "Schedule a Consultation",
      secondary: "Learn More",
    },
  },
  {
    id: "3",
    slug: "claims-management",
    title: "Claims Management",
    shortTitle: "Claims",
    icon: LineChart,
    subtitle: "Real-time tracking and proactive follow-up",
    description: "Advanced claims tracking, prioritization, and proactive payer follow-up.",
    hero: {
      title: "Master Your Claims Workflow",
      subtitle: "Real-time visibility and proactive management to accelerate claim resolution.",
      image: "/claims-management-tracking.png",
    },
    benefits: [
      {
        title: "Real-time Visibility",
        description: "24/7 claim tracking across all payers in one unified dashboard",
      },
      {
        title: "Proactive Follow-up",
        description: "Intelligent claim aging and prioritized worklists prevent payment delays",
      },
      {
        title: "Denial Prevention",
        description: "Pre-submission validation catches 95% of potential claim issues",
      },
      {
        title: "Detailed Analytics",
        description: "Comprehensive reporting on claim status, payer performance, and trends",
      },
    ],
    features: [
      "Real-time claim tracking dashboard",
      "Automated claim aging and prioritization",
      "Payer inquiry and status updates",
      "A/R aging analysis and reporting",
      "Payment posting automation",
      "Electronic payer connectivity",
    ],
    roi: [
      {
        metric: "65%",
        value: "Reduction in claim aging",
        description: "From 45+ days to <16 days average",
      },
      {
        metric: "92%",
        value: "Payment receipt rate",
        description: "vs 88-90% industry average",
      },
      {
        metric: "$847K",
        value: "Annual cash flow improvement",
        description: "Typical 50-provider practice",
      },
    ],
    useCases: [
      {
        title: "High-Volume Practices",
        description: "Practices processing 500+ claims monthly need systematic tracking",
      },
      {
        title: "Multi-Location Groups",
        description: "Unified claims visibility across multiple practice locations",
      },
      {
        title: "Hospitals & Outpatient Centers",
        description: "Complex payer networks and high claim volumes",
      },
    ],
    faq: [
      {
        question: "Can you integrate with our EHR?",
        answer: "Yes, we integrate with all major EHR systems for seamless claim submission and status tracking.",
      },
      {
        question: "What reports do you provide?",
        answer: "We provide daily aging reports, payer performance dashboards, trend analysis, and custom reporting based on your needs.",
      },
      {
        question: "How quickly do you follow up on claims?",
        answer: "Automated follow-up begins on day 14 for commercial claims and day 21 for Medicare. Priority claims get immediate attention.",
      },
    ],
    cta: {
      primary: "Get Dashboard Access",
      secondary: "View Features",
    },
  },
  {
    id: "4",
    slug: "denial-management",
    title: "Denial Management",
    shortTitle: "Denials",
    icon: ShieldCheck,
    subtitle: "Systematic denial prevention and recovery",
    description: "Root cause analysis, appeals strategy, and proactive prevention playbooks.",
    hero: {
      title: "Eliminate Revenue Loss from Denials",
      subtitle: "We identify why denials happen, recover lost revenue, and prevent future occurrences.",
      image: "/analytics-report-charts.png",
    },
    benefits: [
      {
        title: "Root Cause Analytics",
        description: "Identify top denial reasons and patterns across your payer mix",
      },
      {
        title: "Appeal Success Rate",
        description: "78% successful appeal rate with strategic resubmission approach",
      },
      {
        title: "Prevention Playbooks",
        description: "Customized workflows to prevent most common denial types",
      },
      {
        title: "Revenue Recovery",
        description: "Recover typically 30-40% of previously written-off denials",
      },
    ],
    features: [
      "Denial root cause analysis",
      "Strategic appeal planning",
      "Reconsideration and resubmission management",
      "Provider education on denial drivers",
      "Payer-specific denial prevention",
      "Ongoing denial trend monitoring",
    ],
    roi: [
      {
        metric: "78%",
        value: "Appeal success rate",
        description: "Industry average is 50-60%",
      },
      {
        metric: "38%",
        value: "Reduction in denial volume",
        description: "After 6 months of prevention protocols",
      },
      {
        metric: "$650K",
        value: "Average annual recovery",
        description: "From appeals and rework elimination",
      },
    ],
    useCases: [
      {
        title: "Practices with High Denials",
        description: "Practices experiencing >10% denial rates need systematic improvement",
      },
      {
        title: "Coding Quality Issues",
        description: "Denials driven by clinical documentation or coding accuracy",
      },
      {
        title: "Payer Compliance",
        description: "Complex payer contracts requiring appeals expertise",
      },
    ],
    faq: [
      {
        question: "What counts as a denial?",
        answer: "We track all claim rejections, denials, and adjustments. This includes technical denials, clinical denials, and contractual adjustments.",
      },
      {
        question: "What's your appeals success rate?",
        answer: "Our average appeal success rate is 78%, significantly higher than industry average of 50-60%.",
      },
      {
        question: "How long does the appeals process take?",
        answer: "Most appeals are resolved within 30-45 days. Medicare appeals may take 60+ days depending on appeal level.",
      },
    ],
    cta: {
      primary: "Free Denial Audit",
      secondary: "Contact Us",
    },
  },
  {
    id: "5",
    slug: "credentialing",
    title: "Credentialing",
    shortTitle: "Credentialing",
    icon: BadgeCheck,
    subtitle: "Seamless provider enrollment and management",
    description: "End-to-end credentialing, CAQH management, and recredentialing workflows.",
    hero: {
      title: "Streamline Provider Credentialing",
      subtitle: "From initial enrollment to ongoing recredentialing, we manage the entire credentialing lifecycle.",
      image: "/provider-credentialing.png",
    },
    benefits: [
      {
        title: "Fast Enrollment",
        description: "Average 6-8 weeks from application to active provider enrollment",
      },
      {
        title: "CAQH Management",
        description: "Automated CAQH profile updates and primary source verification",
      },
      {
        title: "Compliance Monitoring",
        description: "Track credentialing status, expiration dates, and requirements",
      },
      {
        title: "Recredentialing",
        description: "Seamless 3-year recredentialing process with automated reminders",
      },
    ],
    features: [
      "Initial credentialing applications",
      "CAQH profile setup and management",
      "Primary source verification",
      "Credentialing status tracking",
      "Recredentialing automation",
      "Privilege delineation support",
    ],
    roi: [
      {
        metric: "60%",
        value: "Faster enrollment",
        description: "Average 6-8 weeks vs 12-16 weeks DIY",
      },
      {
        metric: "100%",
        value: "Compliance tracking",
        description: "Never miss an expiration or requirement",
      },
      {
        metric: "$180K",
        value: "Revenue at risk avoided",
        description: "By preventing enrollment delays and lapses",
      },
    ],
    useCases: [
      {
        title: "New Practices",
        description: "New provider groups establishing payer relationships",
      },
      {
        title: "Provider Growth",
        description: "Practices adding new providers and specialists",
      },
      {
        title: "Multi-Specialty Groups",
        description: "Large networks with complex credentialing requirements",
      },
    ],
    faq: [
      {
        question: "How long does credentialing take?",
        answer: "Initial credentialing typically takes 6-8 weeks. Recredentialing takes 4-6 weeks.",
      },
      {
        question: "What's included in your service?",
        answer: "We handle applications, PSV, CAQH updates, status tracking, and compliance monitoring.",
      },
      {
        question: "Do you handle appeal denials?",
        answer: "Yes, we appeal credentialing denials and work with payers to resolve issues.",
      },
    ],
    cta: {
      primary: "Start Credentialing",
      secondary: "Get Details",
    },
  },
  {
    id: "6",
    slug: "rcm-consulting",
    title: "Revenue Cycle Consulting",
    shortTitle: "Consulting",
    icon: Stethoscope,
    subtitle: "Strategic RCM optimization and transformation",
    description: "Comprehensive revenue cycle assessments, KPI development, and change management.",
    hero: {
      title: "Transform Your Revenue Cycle",
      subtitle: "Strategic consulting to identify bottlenecks, optimize workflows, and maximize revenue potential.",
      image: "/healthcare-kpis-dashboard.png",
    },
    benefits: [
      {
        title: "RCM Assessment",
        description: "Comprehensive analysis of billing, coding, and revenue cycle processes",
      },
      {
        title: "KPI Development",
        description: "Customized performance metrics aligned with your practice goals",
      },
      {
        title: "Process Optimization",
        description: "Identify inefficiencies and implement proven best practices",
      },
      {
        title: "Change Management",
        description: "Staff training and change adoption support",
      },
    ],
    features: [
      "Current state RCM assessment",
      "Benchmark analysis vs industry standards",
      "Workflow redesign recommendations",
      "Staff training and education",
      "Technology implementation support",
      "Performance dashboard setup",
    ],
    roi: [
      {
        metric: "18-25%",
        value: "Average revenue improvement",
        description: "Within 12 months of implementing recommendations",
      },
      {
        metric: "35%",
        value: "Operational efficiency gain",
        description: "Through process optimization",
      },
      {
        metric: "$2.5M+",
        value: "Typical annual impact",
        description: "For 100+ provider organizations",
      },
    ],
    useCases: [
      {
        title: "Hospital Systems",
        description: "Large health systems optimizing enterprise-wide RCM performance",
      },
      {
        title: "Private Equity Groups",
        description: "Add value to portfolio companies through RCM transformation",
      },
      {
        title: "Underperforming Practices",
        description: "Practices significantly below industry benchmarks",
      },
    ],
    faq: [
      {
        question: "How long is a typical engagement?",
        answer: "Assessments take 4-6 weeks. Full transformation engagements are typically 6-12 months.",
      },
      {
        question: "What does implementation support include?",
        answer: "We provide ongoing coaching, staff training, process refinement, and performance monitoring.",
      },
      {
        question: "Are results guaranteed?",
        answer: "We guarantee a minimum 10% improvement or we work for free until you achieve it.",
      },
    ],
    cta: {
      primary: "Schedule Assessment",
      secondary: "Learn More",
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}
