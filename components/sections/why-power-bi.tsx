"use client"

import { motion } from "framer-motion"
import { Shield, TrendingUp, FileSpreadsheet } from "lucide-react"
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function Feature({ icon, title, description, index }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-sm border border-charcoal/10 flex flex-col items-center text-center"
    >
      <div className="mb-4 p-3 bg-deepblue/10 text-deepblue rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-charcoal mb-2">{title}</h3>
      <p className="text-charcoal/70 text-sm">{description}</p>
    </motion.div>
  )
}

export default function WhyPowerBI() {
  const features = [
    {
      icon: <Shield size={24} />,
      title: "Trusted & Enterprise-Grade",
      description: "Power BI delivers enterprise-level security and clarity, trusted by Fortune 500 companies and small businesses alike."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Affordable & Scalable",
      description: "Start small and scale as you grow. Power BI offers flexible licensing options that adapt to your business needs and budget."
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: "Flexible Alternatives",
      description: "While we recommend Power BI, we also offer Google Sheets or Looker Studio options for teams with different preferences."
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
            className="inline-block px-3 py-1 bg-deepblue/10 text-deepblue rounded-full text-sm font-medium mb-4"
          >
            Our Tools
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-4", manrope.className)}
          >
            Why We Use Power BI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            We've chosen Microsoft Power BI as our primary visualization tool for its perfect balance of power, flexibility, and accessibility.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
