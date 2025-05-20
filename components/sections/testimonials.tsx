"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Manrope } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
}

function TestimonialCard({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-charcoal/10">
      <div className="mb-6 text-teal">
        <Quote size={32} />
      </div>
      <p className="text-charcoal/80 italic mb-6">{quote}</p>
      <div>
        <p className="font-medium text-charcoal">{author}</p>
        <p className="text-sm text-charcoal/60">{role}, {company}</p>
      </div>
    </div>
  )
}

interface DashboardComparisonProps {
  title: string
  beforeImage: string
  afterImage: string
}

function DashboardComparison({ title, beforeImage, afterImage }: DashboardComparisonProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-charcoal/10">
      <h3 className="text-xl font-medium text-charcoal mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="relative aspect-video rounded-lg overflow-hidden border border-charcoal/10">
            <Image
              src={beforeImage}
              alt="Before Dashboard"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x400/E0E0E0/1B263B?text=Before";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-charcoal/70 text-white text-xs py-1 px-2 text-center">
              Before
            </div>
          </div>
          <p className="text-sm text-charcoal/70 text-center">Spreadsheet chaos</p>
        </div>
        <div className="space-y-2">
          <div className="relative aspect-video rounded-lg overflow-hidden border border-charcoal/10">
            <Image
              src={afterImage}
              alt="After Dashboard"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x400/4FD1C5/FFFFFF?text=After";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-teal/70 text-white text-xs py-1 px-2 text-center">
              After
            </div>
          </div>
          <p className="text-sm text-charcoal/70 text-center">Clear, actionable insights</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"testimonials" | "beforeAfter">("testimonials")
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const testimonials = [
    {
      quote: "HotViking transformed our messy data into clear, actionable insights. We now have complete visibility into our business performance and can make confident decisions.",
      author: "Marketing Director",
      role: "CMO",
      company: "SaaS Company"
    },
    {
      quote: "The dashboard HotViking created has become an essential part of our weekly strategy meetings. It's helped us identify opportunities we were completely missing before.",
      author: "Agency Owner",
      role: "CEO",
      company: "Digital Marketing Agency"
    },
    {
      quote: "Working with HotViking has been refreshingly straightforward. They delivered exactly what we needed without unnecessary complexity or overhead.",
      author: "Operations Lead",
      role: "COO",
      company: "Professional Services Firm"
    }
  ]
  
  const beforeAfterExamples = [
    {
      title: "Marketing Performance Dashboard",
      beforeImage: "/dashboards/marketing-before.jpg",
      afterImage: "/dashboards/marketing-after.jpg"
    },
    {
      title: "Sales Pipeline Visualization",
      beforeImage: "/dashboards/sales-before.jpg",
      afterImage: "/dashboards/sales-after.jpg"
    },
    {
      title: "Client Retention Analytics",
      beforeImage: "/dashboards/retention-before.jpg",
      afterImage: "/dashboards/retention-after.jpg"
    }
  ]
  
  const currentItems = activeTab === "testimonials" ? testimonials : beforeAfterExamples
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === currentItems.length - 1 ? 0 : prev + 1))
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? currentItems.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4"
          >
            Client Success
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-4", manrope.className)}
          >
            Testimonials & Visual Proof
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8"
          >
            See how we've helped businesses like yours transform their data into actionable insights
          </motion.p>
          
          <div className="mb-8 flex justify-center">
            <div className="inline-flex p-1 rounded-lg bg-softgray border border-charcoal/10">
              <button
                onClick={() => {
                  setActiveTab("testimonials")
                  setCurrentSlide(0)
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  activeTab === "testimonials"
                    ? "bg-teal text-white"
                    : "bg-transparent text-charcoal/70 hover:text-charcoal",
                )}
              >
                What Our Clients Say
              </button>
              <button
                onClick={() => {
                  setActiveTab("beforeAfter")
                  setCurrentSlide(0)
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  activeTab === "beforeAfter"
                    ? "bg-teal text-white"
                    : "bg-transparent text-charcoal/70 hover:text-charcoal",
                )}
              >
                Before & After
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {activeTab === "testimonials" ? (
                <TestimonialCard
                  quote={testimonials[currentSlide].quote}
                  author={testimonials[currentSlide].author}
                  role={testimonials[currentSlide].role}
                  company={testimonials[currentSlide].company}
                />
              ) : (
                <DashboardComparison
                  title={beforeAfterExamples[currentSlide].title}
                  beforeImage={beforeAfterExamples[currentSlide].beforeImage}
                  afterImage={beforeAfterExamples[currentSlide].afterImage}
                />
              )}
            </motion.div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md border border-charcoal/10 text-charcoal hover:text-teal transition-colors hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md border border-charcoal/10 text-charcoal hover:text-teal transition-colors hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-md border border-charcoal/10 text-charcoal hover:text-teal transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-md border border-charcoal/10 text-charcoal hover:text-teal transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {currentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentSlide === index ? "bg-teal w-4" : "bg-charcoal/20"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
