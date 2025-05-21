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
            Not sure where to start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-12"
          >
            Every client begins with a <span className="font-semibold text-charcoal">free 45-minute async consultation</span> to assess your goals and data setup. No pressure — just clarity on what's possible.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-teal/20 to-orange/20 rounded-full text-charcoal font-medium mb-6 border border-charcoal/10"
          >
            Core Offerings
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Clarity"
            price="$300"
            period="one-time"
            description="First-time audit or clarity check"
            features={[
              "Power BI dashboard",
              "KPI Map + Insight Summary",
              "Walkthrough (Google Meet)",
              "1 Power BI license for 1 month",
            ]}
            cta="Choose Plan"
            isPopular={true}
            delay={0.2}
          />
          <PricingCard
            title="Momentum"
            price="$200"
            period="/month"
            description="Teams wanting consistent updates"
            features={[
              "Everything in Clarity",
              "Monthly dashboard refresh",
              "Trend summary",
              "Email support",
              "1 Power BI Pro license",
            ]}
            cta="See What's Included"
            delay={0.3}
          />
          <PricingCard
            title="Growth"
            price="$500"
            period="/month"
            description="Growth-stage businesses needing deeper strategy"
            features={[
              "Everything in Momentum",
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto bg-white rounded-xl p-6 border border-charcoal/10 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-gradient-to-br from-teal/20 to-orange/20 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div>
              <p className="text-charcoal/80 text-center md:text-left leading-relaxed">
                All plans are <span className="font-semibold text-charcoal">async-first</span>, <span className="font-semibold text-charcoal">version-controlled</span>, and include a walkthrough on Google Meet. Dashboards are built in <span className="font-semibold text-charcoal">Power BI</span> (default), optionally in Google Sheets or Looker Studio, and shared via secure Google Drive folders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
