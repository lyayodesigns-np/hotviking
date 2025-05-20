"use client"

import type React from "react"

import { motion } from "framer-motion"
import { BarChart3, Search, FileSpreadsheet, Lightbulb, TrendingUp, PieChart, BarChart, LineChart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Manrope } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface FeatureItemProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function FeatureItem({ icon, title, description, delay }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-start group p-4 rounded-lg hover:bg-white/70 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-teal/10 to-orange/10 mr-4 group-hover:scale-110 transition-transform duration-300">
        <div className="text-charcoal">{icon}</div>
      </div>
      <div>
        <h3 className="text-charcoal font-medium mb-1 group-hover:text-deepblue transition-colors duration-300">{title}</h3>
        <p className="text-charcoal/70 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

function AbstractShape({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn("absolute pointer-events-none", className)}
    >
      <div className="w-64 h-64 rounded-full bg-gradient-to-r from-emerald/5 to-transparent border border-emerald/10 blur-xl" />
    </motion.div>
  )
}

function ChartIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative h-full w-full min-h-[400px] flex items-center justify-center"
    >
      <div className="w-full h-full max-w-[520px] max-h-[400px] bg-white/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-charcoal/5 p-8 flex flex-col">
        {/* Chart Title */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h4 className="text-charcoal font-medium">Performance Overview</h4>
            <p className="text-xs text-charcoal/60">Year-to-date metrics</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-teal mr-2" />
              <span className="text-xs text-charcoal/70 font-medium">Revenue</span>
            </div>
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-orange mr-2" />
              <span className="text-xs text-charcoal/70 font-medium">Growth</span>
            </div>
          </div>
        </div>
        
        {/* Chart Area */}
        <div className="flex-1 relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="border-b border-dashed border-charcoal/10"></div>
            <div className="border-b border-dashed border-charcoal/10"></div>
            <div className="border-b border-dashed border-charcoal/10"></div>
            <div className="border-b border-dashed border-charcoal/10"></div>
          </div>
          
          {/* Chart lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Revenue line */}
            <motion.path
              d="M0,80 C20,70 30,50 50,40 S80,30 100,20"
              fill="none"
              stroke="#5AC8C8"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* Growth line */}
            <motion.path
              d="M0,70 C15,65 30,60 50,50 S75,30 100,10"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* Data points for Revenue */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <circle cx="0" cy="80" r="3" fill="white" stroke="#5AC8C8" strokeWidth="1.5" />
              <circle cx="25" cy="60" r="3" fill="white" stroke="#5AC8C8" strokeWidth="1.5" />
              <circle cx="50" cy="40" r="3" fill="white" stroke="#5AC8C8" strokeWidth="1.5" />
              <circle cx="75" cy="30" r="3" fill="white" stroke="#5AC8C8" strokeWidth="1.5" />
              <circle cx="100" cy="20" r="3" fill="white" stroke="#5AC8C8" strokeWidth="1.5" />
            </motion.g>
            
            {/* Data points for Growth */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <circle cx="0" cy="70" r="3" fill="white" stroke="#FF6B00" strokeWidth="1.5" />
              <circle cx="25" cy="60" r="3" fill="white" stroke="#FF6B00" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="3" fill="white" stroke="#FF6B00" strokeWidth="1.5" />
              <circle cx="75" cy="30" r="3" fill="white" stroke="#FF6B00" strokeWidth="1.5" />
              <circle cx="100" cy="10" r="3" fill="white" stroke="#FF6B00" strokeWidth="1.5" />
            </motion.g>
          </svg>
          
          {/* Highlighted data point */}
          <motion.div 
            className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-5 h-5 rounded-full bg-white border-2 border-teal shadow-md"></div>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-deepblue text-white text-xs py-1.5 px-3 rounded-lg shadow-sm whitespace-nowrap">
                <div className="font-medium">+42%</div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-deepblue"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* X-axis labels */}
        <div className="flex justify-between pt-2 text-xs text-charcoal/60 font-medium">
          <div>Jan</div>
          <div>Mar</div>
          <div>Jun</div>
          <div>Sep</div>
          <div>Dec</div>
        </div>
      </div>
      
      {/* Accent elements */}
      <motion.div
        className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-gradient-to-br from-teal/10 to-orange/5 blur-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      />
      
      <motion.div
        className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-tr from-orange/10 to-teal/5 blur-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
      />
    </motion.div>
  )
}

export default function HowWeHelp() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + i * 0.1,
      },
    }),
  }

  return (
    <section className="relative py-20 bg-softgray overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <AbstractShape className="top-10 left-10" delay={0.2} />
        <AbstractShape className="bottom-20 right-10" delay={0.4} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn("text-3xl md:text-4xl font-bold text-charcoal mb-4", manrope.className)}
          >
            How We Help
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            HotViking is a lean, async-first insights partner built for small and growing service-based businesses. We give time-strapped teams the power to understand their data and take action without the drag of traditional BI tools.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/5">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-charcoal/10">
              <h3 className="text-deepblue font-semibold mb-4 pl-4 border-l-4 border-orange">Our Solutions</h3>
              <div className="space-y-1">
                <FeatureItem
                  icon={<BarChart3 size={20} />}
                  title="Translate Data into Insight"
                  description="Transform scattered data into clear, decision-ready insight"
                  delay={0.2}
                />
                <FeatureItem 
                  icon={<Search size={20} />} 
                  title="Spot Trends & Inefficiencies" 
                  description="Identify trends, inefficiencies, and map KPIs to strategy"
                  delay={0.3} 
                />
                <FeatureItem 
                  icon={<FileSpreadsheet size={20} />} 
                  title="Bridge Spreadsheet Gaps" 
                  description="Bridge the gap between spreadsheets and overbuilt platforms"
                  delay={0.4} 
                />
                <FeatureItem 
                  icon={<Lightbulb size={20} />} 
                  title="Empower Leadership" 
                  description="Provide simplified forecasts and confident priorities"
                  delay={0.5} 
                />
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 flex flex-col">
            <ChartIllustration />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-charcoal/5"
            >
              <p className="text-sm text-charcoal/80 italic">
                Led by a BI expert with 10+ years of experience across government and corporate sectors, HotViking applies enterprise-grade rigor to support fast-moving, time-strapped teams.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
