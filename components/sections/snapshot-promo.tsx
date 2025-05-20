"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Manrope } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export default function SnapshotPromo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 bg-orange/10 text-orange rounded-full text-sm font-medium mb-4">
              Snapshot Pack
            </div>
            <h2 className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-6", manrope.className)}>
              Proof Before Purchase
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Get a taste of our data insights with a custom snapshot of your business. 
              See exactly how we can transform your data into actionable insights before committing to a full package.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-teal rounded-full flex items-center justify-center mt-1 mr-3">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-charcoal/80">Dashboard preview with your actual data</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-teal rounded-full flex items-center justify-center mt-1 mr-3">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-charcoal/80">Comprehensive insight summary</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-teal rounded-full flex items-center justify-center mt-1 mr-3">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-charcoal/80">Optional Loom video walkthrough</p>
              </div>
            </div>
            
            <button className="flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors">
              Request My Snapshot <ArrowRight size={16} />
            </button>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/dashboard-preview.jpg" 
                alt="Dashboard Preview" 
                width={600} 
                height={400}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/4FD1C5/FFFFFF?text=Dashboard+Preview";
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-all transform hover:scale-105">
                  <Play size={24} className="text-orange" />
                </button>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-charcoal/10 max-w-xs">
              <p className="text-sm font-medium text-charcoal">
                "The snapshot gave us exactly what we needed to see the value. We signed up for the full package immediately."
              </p>
              <p className="text-xs text-charcoal/60 mt-2">
                — Marketing Director, SaaS Company
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
