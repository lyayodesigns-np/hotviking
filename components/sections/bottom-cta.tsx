"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export default function BottomCTA() {
  return (
    <section className="py-24 bg-softgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-charcoal", manrope.className)}
          >
            Stop guessing. Start growing.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-white rounded-lg text-lg font-medium hover:bg-orange/90 transition-colors transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              Schedule Your Free Consultation
              <ArrowRight size={20} />
            </a>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-charcoal/70"
          >
            Book your free 45-minute consultation and take the first step toward decision-ready insight.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <a 
              href="#faq" 
              className="text-charcoal/80 hover:text-orange underline text-lg transition-colors"
            >
              Have a Question? Ask Us!
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
