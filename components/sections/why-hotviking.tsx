"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Manrope } from "next/font/google"
import Image from "next/image"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export default function WhyHotViking() {
  return (
    <section className="py-20 bg-softgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-4", manrope.className)}>
              Why HotViking
            </h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          </motion.div>
        </div>

        {/* First Section - Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-teal flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/><path d="M18.4 7.8l-8.1 8.2-4.8-3.3"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Data Clarity</h4>
                <p>Transforming complex data into actionable insights</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              Clarity & Confidence
            </div>
            <h3 className={cn("text-2xl md:text-3xl font-bold text-charcoal mb-4", manrope.className)}>
              Simplifying Business Intelligence
            </h3>
            <p className="text-lg text-charcoal/80 mb-6">
              HotViking gives small business owners the clarity and confidence to act on their data. We simplify performance measurements, identify hidden inefficiencies, and align analytics to real business decisions — all without the cost, confusion, or drag of traditional BI tools or full-time hires.
            </p>
            <div className="flex items-center gap-2 text-teal">
              <div className="w-8 h-1 bg-teal"></div>
              <span className="font-medium">Data-driven decisions made simple</span>
            </div>
          </motion.div>
        </div>

        {/* Second Section - Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-softgray py-12 px-8 rounded-lg">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-3 py-1 bg-orange/10 text-orange rounded-full text-sm font-medium mb-4">
              Our Mission
            </div>
            <h3 className={cn("text-2xl md:text-3xl font-bold text-charcoal mb-4", manrope.className)}>
              Empowering Small Businesses
            </h3>
            <p className="text-lg text-charcoal/80 mb-6">
              Our team is passionate about making business intelligence simple, actionable, and tailored to the busy, growing service-based businesses we serve. Over 4 million U.S. small and medium-sized service businesses earning between $100,000 and $1.5 million annually struggle to harness their data effectively, and HotViking is here to change that.
            </p>
            <p className="text-lg font-medium text-deepblue">
              Our mission: To empower thousands of these small and growing businesses across the U.S. to stop guessing and start growing with clarity and confidence.
            </p>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-orange flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Business Growth</h4>
                <p>Empowering small businesses with confidence and clarity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
