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
      title: "Explore Services",
      description: "View dashboards and pricing options"
    },
    {
      icon: <FileText size={32} />,
      title: "Complete Tally Form",
      description: "Share your goals and data context"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Confirm Payment",
      description: "Simple, secure checkout via Stripe"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Receive Dashboard",
      description: "Delivered in ≤5 business days"
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
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            Our 4-step async process is designed for speed and simplicity — so you get meaningful insights without the fuss
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
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-b from-white to-teal/5 rounded-xl overflow-hidden border border-teal/20 shadow-md">
            <div className="px-6 py-4 bg-teal/10 border-b border-teal/20">
              <h3 className={cn("text-xl font-semibold text-charcoal flex items-center", manrope.className)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal mr-2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                After signing up:
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal/70 text-white font-bold shadow-md mr-4">
                    1
                  </div>
                  <div>
                    <p className="text-charcoal/90 font-medium leading-relaxed">
                      We'll send a friendly intro email and a simple data intake checklist
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal/70 text-white font-bold shadow-md mr-4">
                    2
                  </div>
                  <div>
                    <p className="text-charcoal/90 font-medium leading-relaxed">
                      You'll receive a walkthrough of results via shared notes or screen share as needed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal/70 text-white font-bold shadow-md mr-4">
                    3
                  </div>
                  <div>
                    <p className="text-charcoal/90 font-medium leading-relaxed">
                      One round of revisions included for Snapshot clients
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal/70 text-white font-bold shadow-md mr-4">
                    4
                  </div>
                  <div>
                    <p className="text-charcoal/90 font-medium leading-relaxed">
                      Ongoing plans come with email support and monthly updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
