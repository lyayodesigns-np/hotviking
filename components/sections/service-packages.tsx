"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  isPopular?: boolean
  delay: number
}

function PricingCard({ title, price, period, description, features, cta, isPopular = false, delay }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "relative flex flex-col p-6 rounded-xl bg-white border transition-all duration-300",
        isPopular
          ? "border-orange shadow-lg shadow-orange/10 scale-105 md:scale-110 z-10"
          : "border-charcoal/10 shadow-sm hover:shadow-md hover:border-teal/30",
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Star size={14} className="fill-white" />
          <span>Recommended</span>
        </div>
      )}
      <div className="mb-4">
        <h3 className={cn("text-xl font-bold text-charcoal", manrope.className)}>{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold text-charcoal">{price}</span>
          <span className="ml-1 text-charcoal/70">{period}</span>
        </div>
        <p className="mt-2 text-charcoal/70">{description}</p>
      </div>
      <ul className="mb-6 space-y-2 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="mr-2 mt-0.5 text-teal" />
            <span className="text-charcoal/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={cn(
          "mt-auto w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1",
          isPopular
            ? "bg-gradient-to-r from-orange to-orange text-white hover:shadow-md hover:shadow-orange/20"
            : "bg-teal text-deepblue hover:bg-teal/90",
        )}
      >
        {cta}
      </button>
    </motion.div>
  )
}

export default function ServicePackages() {
  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-4", manrope.className)}
          >
            Service Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            Choose the plan that fits your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Clarity"
            price="$499"
            period="one-time"
            description="First-time audit or clarity check"
            features={[
              "Power BI dashboard",
              "KPI Map + Insight Summary",
              "Walkthrough (live Google Meet)",
              "Includes 1 Power BI license for 1 month",
            ]}
            cta="Choose Plan"
            isPopular={true}
            delay={0.2}
          />
          <PricingCard
            title="Momentum"
            price="$299"
            period="/mo"
            description="Teams wanting consistent insight and updates"
            features={[
              "Everything in Clarity, plus:",
              "Monthly Power BI dashboard refresh",
              "Trend summary",
              "Email-based support",
              "1 Power BI Pro license",
            ]}
            cta="See What's Included"
            delay={0.3}
          />
          <PricingCard
            title="Growth"
            price="$699"
            period="/mo"
            description="Growth-stage businesses needing deeper strategy"
            features={[
              "Everything in Momentum, plus:",
              "Forecasts & KPI projections",
              "Funnel diagnostics",
              "Industry benchmarks",
              "Strategic recommendations",
              "2 Power BI Pro licenses",
            ]}
            cta="See What's Included"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}
