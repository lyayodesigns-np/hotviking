"use client"

import { motion } from "framer-motion"
import { Globe, ClipboardList, CreditCard, Video, BarChart3 } from "lucide-react"
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface OnboardingStepProps {
  icon: React.ReactNode
  title: string
  description: string
  step: number
  isLast?: boolean
}

function OnboardingStep({ icon, title, description, step, isLast = false }: OnboardingStepProps) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * step }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        {/* Step number */}
        <div className="w-8 h-8 rounded-full bg-deepblue text-white flex items-center justify-center text-sm font-bold mb-4 z-10">
          {step}
        </div>
        
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 z-10">
          <div className="text-deepblue">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center max-w-xs mx-auto">
          <h3 className="text-lg font-medium text-charcoal mb-2">{title}</h3>
          <p className="text-charcoal/70 text-sm">{description}</p>
        </div>
      </motion.div>
      
      {/* Connector line */}
      {!isLast && (
        <div className="absolute top-12 left-1/2 w-full h-0.5 bg-deepblue/10 hidden md:block" style={{ transform: 'translateX(50%)' }}></div>
      )}
    </div>
  )
}

export default function ClientOnboarding() {
  const steps = [
    {
      icon: <Globe size={24} />,
      title: "Explore Services",
      description: "Visit HotViking.com to explore services and find the right solution for your business."
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Complete Onboarding Form",
      description: "Tell us your goals, priorities, and data setup through our simple Tally form."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Secure Payment",
      description: "Confirm payment securely via Stripe with multiple payment options."
    },
    {
      icon: <Video size={24} />,
      title: "Receive Intro & Checklist",
      description: "Get a personalized Loom video introduction and data intake checklist."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Dashboard Delivery",
      description: "We deliver your Snapshot or monthly dashboard in ≤5 business days."
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
            className="inline-block px-3 py-1 bg-orange/10 text-orange rounded-full text-sm font-medium mb-4"
          >
            Getting Started
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-4", manrope.className)}
          >
            Client Onboarding Flow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            Our streamlined process gets you from sign-up to insights in just a few simple steps
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Desktop timeline */}
          <div className="hidden md:grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <OnboardingStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                step={index + 1}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
          
          {/* Mobile timeline (vertical) */}
          <div className="md:hidden space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <OnboardingStep
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  step={index + 1}
                  isLast={index === steps.length - 1}
                />
                {index !== steps.length - 1 && (
                  <div className="absolute left-1/2 top-full w-0.5 h-12 bg-deepblue/10" style={{ transform: 'translateX(-50%)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-softgray p-8 rounded-lg max-w-3xl mx-auto"
        >
          <h3 className={cn("text-xl font-semibold text-charcoal mb-4", manrope.className)}>
            What Happens Next?
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">1</span>
              </div>
              <p className="text-charcoal/80">We'll review your data sources and business goals</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">2</span>
              </div>
              <p className="text-charcoal/80">Our team will prepare your custom dashboard based on your needs</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-orange/20 text-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">3</span>
              </div>
              <p className="text-charcoal/80">You'll receive a walkthrough of your dashboard and insights</p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-3 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors flex items-center gap-2">
              Start Onboarding Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
