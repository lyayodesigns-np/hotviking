"use client"

import { motion } from "framer-motion"
import { Award, Clock, Globe, Linkedin, Mail } from "lucide-react"
import { Manrope } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface FounderAttributeProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function FounderAttribute({ icon, title, description, index }: FounderAttributeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="flex items-start"
    >
      <div className="mr-4 p-2 bg-deepblue/10 text-deepblue rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-charcoal mb-1">{title}</h3>
        <p className="text-charcoal/70 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

export default function AboutFounder() {
  const attributes = [
    {
      icon: <Award size={20} />,
      title: "Founder-led Delivery",
      description: "Every project is personally overseen by the founder, ensuring the highest quality of work and attention to detail."
    },
    {
      icon: <Clock size={20} />,
      title: "10+ Years BI Experience",
      description: "Extensive experience across government and corporate sectors, applying enterprise-grade rigor to businesses of all sizes."
    },
    {
      icon: <Globe size={20} />,
      title: "Async-first Operations",
      description: "Built for modern, distributed teams with a focus on clear communication and efficient delivery across time zones."
    }
  ]

  return (
    <section className="py-20 bg-softgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square max-w-md mx-auto lg:ml-auto">
              <Image 
                src="/founder-image.jpg" 
                alt="HotViking Founder" 
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x600/1B263B/FFFFFF?text=Founder";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
            </div>
          </motion.div>
          
          {/* Right Column - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 bg-deepblue/10 text-deepblue rounded-full text-sm font-medium mb-4">
                Leadership
              </div>
              <h2 className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-6", manrope.className)}>
                About the Founder
              </h2>
              <p className="text-lg text-charcoal/70 mb-8">
                HotViking was founded by a business intelligence expert with a passion for 
                transforming complex data into clear, actionable insights for growing businesses.
              </p>
            </motion.div>
            
            <div className="space-y-6 mb-8">
              {attributes.map((attribute, index) => (
                <FounderAttribute
                  key={index}
                  icon={attribute.icon}
                  title={attribute.title}
                  description={attribute.description}
                  index={index}
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="mailto:founder@hotviking.com" 
                className="flex items-center gap-2 px-4 py-2 bg-white text-deepblue rounded-lg border border-deepblue/20 hover:bg-deepblue hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>founder@hotviking.com</span>
              </Link>
              <Link 
                href="https://linkedin.com/in/hotviking" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-[#0077B5] rounded-lg border border-[#0077B5]/20 hover:bg-[#0077B5] hover:text-white transition-colors"
              >
                <Linkedin size={16} />
                <span>Connect on LinkedIn</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
