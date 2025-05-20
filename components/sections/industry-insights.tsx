"use client"

import { motion } from "framer-motion"
import { BarChart3, ChevronRight, FileBarChart, TrendingUp, Users } from "lucide-react"
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface InsightCardProps {
  icon: React.ReactNode
  title: string
  index: number
}

function InsightCard({ icon, title, index }: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="group flex flex-col p-6 bg-white rounded-lg border border-charcoal/10 hover:shadow-md transition-all duration-300"
    >
      <div className="mb-4 p-3 bg-teal/10 text-teal rounded-lg w-fit">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-charcoal mb-3">{title}</h3>
      <div className="mt-auto pt-4">
        <button className="flex items-center text-sm text-deepblue font-medium">
          View Report <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </motion.div>
  )
}

export default function IndustryInsights() {
  const insights = [
    {
      icon: <FileBarChart size={24} />,
      title: "Marketing Funnel Benchmarks for Local Fitness Studios"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Retention Trends for 6-Figure Service Providers"
    },
    {
      icon: <Users size={24} />,
      title: "Client Acquisition Metrics for Boutique Consulting Firms"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Revenue Growth Patterns for Digital Service Businesses"
    }
  ]

  return (
    <section className="py-20 bg-softgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4"
          >
            Industry Insights
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-4", manrope.className)}
          >
            Industry Insights Marketplace
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8"
          >
            Anonymized benchmarking reports to help you understand where you stand in your industry
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {insights.map((insight, index) => (
              <InsightCard
                key={index}
                icon={insight.icon}
                title={insight.title}
                index={index}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 p-4 bg-white rounded-lg border border-charcoal/10 inline-block"
          >
            <p className="text-sm text-charcoal/80">
              <span className="font-medium">Note:</span> Included in Growth plans or sold a la carte
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
