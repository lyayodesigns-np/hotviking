"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, BarChart3, FileText, Lightbulb } from "lucide-react"
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface MethodStepProps {
  icon: React.ReactNode
  title: string
  description: string
  step: number
  isLast?: boolean
}

function MethodStep({ icon, title, description, step, isLast = false }: MethodStepProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Step number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 * step }}
        viewport={{ once: true }}
        className="w-12 h-12 rounded-full bg-deepblue text-white flex items-center justify-center text-xl font-bold mb-4 z-10"
      >
        {step}
      </motion.div>
      
      {/* Connector line */}
      {!isLast && (
        <div className="absolute top-6 left-[50%] w-full h-0.5 bg-deepblue/20 z-0" style={{ transform: 'translateX(50%)' }}></div>
      )}
      
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 + 0.1 * step }}
        viewport={{ once: true }}
        className="w-16 h-16 rounded-lg bg-teal/10 text-teal flex items-center justify-center mb-4"
      >
        {icon}
      </motion.div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + 0.1 * step }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-xl font-medium text-charcoal mb-2">{title}</h3>
        <p className="text-charcoal/70 max-w-xs mx-auto">{description}</p>
      </motion.div>
    </div>
  )
}

export default function InsightMethod() {
  const steps = [
    {
      icon: <ClipboardCheck size={32} />,
      title: "Data Intake",
      description: "We collect your data through our secure intake process and prepare it for analysis."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Dashboard Creation",
      description: "We build custom Power BI dashboards that visualize your key metrics and KPIs."
    },
    {
      icon: <FileText size={32} />,
      title: "Insight Summary",
      description: "We provide a comprehensive summary highlighting key findings and trends."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Strategic Recommendations",
      description: "We deliver actionable recommendations to help you make data-driven decisions."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4"
          >
            Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-4", manrope.className)}
          >
            The HotViking Method™
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            Our proven four-step process transforms your raw data into actionable insights
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <MethodStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-charcoal/70 italic max-w-3xl mx-auto">
            "The HotViking Method™ combines enterprise-grade data analysis with a streamlined delivery process, 
            making advanced business intelligence accessible to growing service-based businesses."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
