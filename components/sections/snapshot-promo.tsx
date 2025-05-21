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
    <section className="py-20 bg-softgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-6", manrope.className)}>
              Plans
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              HotViking combines foundational business intelligence with scalable strategic tools — including predictive modeling, automated insight generation, and machine learning–driven forecasts for clients ready to take the next step.
            </p>    
            <p className="text-lg text-charcoal/70 mb-8">
              We offer a productized set of BI services designed for simplicity, speed, and scale. Most clients start with a Snapshot, then upgrade to monthly plans as value becomes clear.
            </p>            
            <button className="flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors">
              Request My Snapshot <ArrowRight size={16} />
            </button>
            
            <div className="mt-8 p-4 border border-teal/20 rounded-lg bg-white/50">
              <div className="flex items-start">
                <div className="mr-3 text-teal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-charcoal font-medium mb-1">Data Privacy & Security</h4>
                  <p className="text-sm text-charcoal/70">
                    Your data is treated with the utmost care. We use secure, encrypted methods for data transfer and storage to keep your information safe and confidential.
                  </p>
                </div>
              </div>
            </div>
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
            

          </motion.div>
        </div>
      </div>
    </section>
  )
}
