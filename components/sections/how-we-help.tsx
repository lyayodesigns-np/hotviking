"use client"

import type React from "react"
import { motion } from "framer-motion"
import { BarChart3, Search, FileSpreadsheet, Lightbulb, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Manrope } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface FeatureItemProps {
  icon: React.ReactNode
  text: string
  index: number
}

function FeatureItem({ icon, text, index }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="group flex items-start p-6 border-b border-charcoal/10 last:border-b-0"
    >
      <div className="mr-6 p-3 bg-teal/10 text-teal rounded-lg group-hover:bg-teal group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <span className="text-base text-charcoal font-normal group-hover:text-deepblue transition-colors duration-300 font-manrope">
          {text}
        </span>
      </div>
    </motion.div>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-deepblue mb-2"
      >
        {value}
      </motion.div>
      <div className="text-charcoal/70 text-center">{label}</div>
    </div>
  )
}

export default function HowWeHelp() {
  const features = [
  {
    icon: <BarChart3 size={24} />,
    text: "Translate messy data into decision-ready insight"
  },
  {
    icon: <Search size={24} />,
    text: "Spot trends and inefficiencies"
  },
  {
    icon: <FileSpreadsheet size={24} />,
    text: "Bridge spreadsheet chaos"
  },
  {
    icon: <Lightbulb size={24} />,
    text: "Deliver simplified forecasts + clarity"
  }
]

  return (
    <section className="py-20 bg-softgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sticky top-20"
            >
              <div className="inline-block px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
                Our Approach
              </div>
              <h2 className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-6", manrope.className)}>
                How We Help
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                HotViking is a lean, async-first insights partner built for small and growing service-based businesses. 
                We give time-strapped teams the power to understand their data and take action.
              </p>
              
              <div className="flex flex-wrap gap-8 mt-12">
                <StatItem value="10+" label="Years of BI Experience" />
                <StatItem value="42%" label="Average Growth" />
                <StatItem value="24/7" label="Data-Driven Decisions" />
              </div>
              
              <div className="mt-12">
                <button className="flex items-center gap-2 px-6 py-3 bg-deepblue text-white rounded-lg hover:bg-deepblue/90 transition-colors">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Features */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  text={feature.text}
                  index={index}
                />
              ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-teal/5 border-t border-charcoal/10"
            >
              <p className="text-sm text-charcoal/80 italic">
                "Led by a BI expert with 10+ years of experience across government and corporate sectors, 
                HotViking applies enterprise-grade rigor to support fast-moving, time-strapped teams."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
