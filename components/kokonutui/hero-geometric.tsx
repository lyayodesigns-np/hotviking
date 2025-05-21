"use client"

import { motion } from "framer-motion"
import { Manrope } from "next/font/google"
import { BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-[#1A2B3C]/10",
            "shadow-[0_8px_32px_0_rgba(26,43,60,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(26,43,60,0.1),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  badge = "HotViking",
  headline = "Clarity. Confidence. Growth.",
  subheading = "Business intelligence, minus the drag.",
  text = "Cut through spreadsheet chaos, bloated reports, and endless back-and-forth.",
  primaryCta = "Free 45-minute Consultation",
  secondaryCta = "Have a Question? Ask Us!",
}: {
  badge?: string
  headline?: string
  subheading?: string
  text?: string
  primaryCta?: string
  secondaryCta?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div
      className={cn(
        "relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#FAFAFA]",
        manrope.variable,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#5AC8C8]/[0.05] via-transparent to-[#FF6B00]/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={450}
          height={100}
          rotate={12}
          gradient="from-[#4FD1C5]/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={380}
          height={90}
          rotate={-15}
          gradient="from-[#FF7A00]/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={220}
          height={60}
          rotate={-8}
          gradient="from-[#4FD1C5]/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={150}
          height={45}
          rotate={20}
          gradient="from-[#FF7A00]/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={120}
          height={30}
          rotate={-25}
          gradient="from-[#4FD1C5]/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex justify-center items-center">
        <div className="w-full max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[#1B263B]/[0.03] border border-[#1B263B]/[0.08] mb-4 md:mb-6 mx-auto"
          >
            <BarChart3 size={20} className="text-deepblue" />
            <span className="text-sm text-[#2B2D42]/80 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1
              className={cn(
                "text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-5 tracking-tight whitespace-nowrap",
                manrope.className,
              )}
            >
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-[#2B2D42] via-[#1B263B] to-[#2B2D42]",
                )}
              >
                {headline}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-xl md:text-2xl text-[#2B2D42]/80 mb-3 leading-relaxed font-semibold tracking-wide max-w-2xl mx-auto px-4">
              {subheading}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#2B2D42]/60 mb-6 leading-relaxed font-normal tracking-wide max-w-2xl mx-auto px-4">
              {text}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center mx-auto mb-8"
          >
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF6B00] text-white font-medium hover:shadow-lg hover:shadow-[#FF6B00]/20 transition-all duration-300 transform hover:-translate-y-1">
              {primaryCta}
            </button>
            <button className="px-5 py-2.5 rounded-full bg-[#5AC8C8] text-[#1B263B] font-medium hover:bg-[#5AC8C8]/90 transition-all duration-300 transform hover:-translate-y-1">
              {secondaryCta}
            </button>
          </motion.div>
          
          {/* Dashboard Preview */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto max-w-4xl w-full"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
              <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-4">
                <div className="col-span-1">
                  <div className="space-y-3">
                    <div className="h-8 bg-gray-100 rounded-md w-full"></div>
                    <div className="h-8 bg-gray-100 rounded-md w-full"></div>
                    <div className="h-8 bg-gray-100 rounded-md w-full"></div>
                    <div className="h-8 bg-gray-100 rounded-md w-full"></div>
                    <div className="h-8 bg-gray-100 rounded-md w-full"></div>
                  </div>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="h-4 bg-gray-200 rounded-md w-1/3 mb-2"></div>
                    <div className="h-24 bg-gradient-to-r from-[#5AC8C8]/30 to-[#5AC8C8]/10 rounded-md"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="h-4 bg-gray-200 rounded-md w-1/3 mb-2"></div>
                    <div className="h-24 bg-gradient-to-r from-[#FF6B00]/30 to-[#FF6B00]/10 rounded-md"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="h-4 bg-gray-200 rounded-md w-1/3 mb-2"></div>
                    <div className="h-24 bg-gradient-to-r from-[#4FD1C5]/30 to-[#4FD1C5]/10 rounded-md"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="h-4 bg-gray-200 rounded-md w-1/3 mb-2"></div>
                    <div className="h-24 bg-gradient-to-r from-[#FF7A00]/30 to-[#FF7A00]/10 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent opacity-50 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-[#FAFAFA]/80 pointer-events-none" />
    </div>
  )
}
