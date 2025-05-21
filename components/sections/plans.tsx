"use client"

import { motion } from "framer-motion"
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export default function Plans() {
  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - Heading */}
            <div className="md:w-1/3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={cn("text-3xl md:text-4xl font-bold text-charcoal", manrope.className)}
              >
                Plans
              </motion.h2>
            </div>
            
            {/* Right column - Content */}
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-lg text-charcoal mb-5 leading-relaxed">
                  HotViking combines foundational business intelligence with scalable strategic tools — including predictive modeling, 
                  automated insight generation, and machine learning–driven forecasts for clients ready to take the next step.
                </p>
                <p className="text-lg text-charcoal leading-relaxed">
                  We offer a productized set of BI services designed for simplicity, speed, and scale. 
                  Most clients start with a Snapshot, then upgrade to monthly plans as value becomes clear.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
