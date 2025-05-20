"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

interface PlanFeature {
  name: string
  clarity: boolean
  momentum: boolean
  growth: boolean
}

const features: PlanFeature[] = [
  { name: "Power BI dashboard", clarity: true, momentum: true, growth: true },
  { name: "KPI Map + Insight Summary", clarity: true, momentum: true, growth: true },
  { name: "Walkthrough (live Google Meet)", clarity: true, momentum: true, growth: true },
  { name: "Power BI license", clarity: true, momentum: true, growth: true },
  { name: "Monthly dashboard refresh", clarity: false, momentum: true, growth: true },
  { name: "Trend summary", clarity: false, momentum: true, growth: true },
  { name: "Email-based support", clarity: false, momentum: true, growth: true },
  { name: "Forecasts & KPI projections", clarity: false, momentum: false, growth: true },
  { name: "Funnel diagnostics", clarity: false, momentum: false, growth: true },
  { name: "Industry benchmarks", clarity: false, momentum: false, growth: true },
  { name: "Strategic recommendations", clarity: false, momentum: false, growth: true },
]

export default function DeliverablesComparison() {
  const [activeTab, setActiveTab] = useState<"features" | "details">("features")

  return (
    <section className="py-20 bg-[#F0F0F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn("text-3xl md:text-4xl font-bold text-[#2B2D42] mb-4", manrope.className)}
          >
            Deliverables Comparison
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-[#2B2D42]/70 max-w-2xl mx-auto"
          >
            Compare what's included in each plan
          </motion.p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex p-1 rounded-lg bg-white border border-[#2B2D42]/10">
            <button
              onClick={() => setActiveTab("features")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === "features"
                  ? "bg-[#5AC8C8] text-[#1B263B]"
                  : "bg-transparent text-[#2B2D42]/70 hover:text-[#2B2D42]",
              )}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === "details"
                  ? "bg-[#5AC8C8] text-[#1B263B]"
                  : "bg-transparent text-[#2B2D42]/70 hover:text-[#2B2D42]",
              )}
            >
              Plan Details
            </button>
          </div>
        </div>

        {activeTab === "features" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1A2B3C]/5">
                  <th className="py-4 px-6 text-left text-[#2B2D42] font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center text-[#2B2D42] font-semibold">
                    <div className="flex flex-col items-center">
                      <span>Clarity</span>
                      <span className="text-sm font-normal text-[#2B2D42]/70">$499 one-time</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center text-[#1A2B3C] font-semibold">
                    <div className="flex flex-col items-center">
                      <span>Momentum</span>
                      <span className="text-sm font-normal text-[#2B2D42]/70">$299/mo</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center text-[#1A2B3C] font-semibold">
                    <div className="flex flex-col items-center">
                      <span>Growth</span>
                      <span className="text-sm font-normal text-[#2B2D42]/70">$699/mo</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className={cn("border-t border-[#2B2D42]/10", index % 2 === 0 ? "bg-white" : "bg-[#2B2D42]/[0.02]")}
                  >
                    <td className="py-3 px-6 text-[#2B2D42]/80">{feature.name}</td>
                    <td className="py-3 px-6 text-center">
                      {feature.clarity ? (
                        <Check size={20} className="mx-auto text-[#4FD1C5]" />
                      ) : (
                        <X size={20} className="mx-auto text-[#1A2B3C]/30" />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {feature.momentum ? (
                        <Check size={20} className="mx-auto text-[#4FD1C5]" />
                      ) : (
                        <X size={20} className="mx-auto text-[#1A2B3C]/30" />
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {feature.growth ? (
                        <Check size={20} className="mx-auto text-[#4FD1C5]" />
                      ) : (
                        <X size={20} className="mx-auto text-[#1A2B3C]/30" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1A2B3C]/5">
                  <th className="py-4 px-6 text-left text-[#2B2D42] font-semibold">Plan</th>
                  <th className="py-4 px-6 text-left text-[#2B2D42] font-semibold">Price</th>
                  <th className="py-4 px-6 text-left text-[#2B2D42] font-semibold">Includes</th>
                  <th className="py-4 px-6 text-left text-[#2B2D42] font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#1A2B3C]/10 bg-white">
                  <td className="py-4 px-6 text-[#2B2D42] font-medium">Clarity</td>
                  <td className="py-4 px-6 text-[#2B2D42]/80">$499 (one-time)</td>
                  <td className="py-4 px-6 text-[#2B2D42]/80">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Power BI dashboard</li>
                      <li>KPI Map + Insight Summary</li>
                      <li>Walkthrough (live Google Meet)</li>
                      <li>Includes 1 Power BI license for 1 month</li>
                    </ul>
                  </td>
                  <td className="py-4 px-6 text-[#2B2D42]/80">First-time audit or clarity check</td>
                </tr>
                <tr className="border-t border-[#2B2D42]/10 bg-[#2B2D42]/[0.02]">
                  <td className="py-4 px-6 text-[#2B2D42] font-medium">Momentum</td>
                  <td className="py-4 px-6 text-[#2B2D42]/80">$299/mo</td>
                  <td className="py-4 px-6 text-[#2B2D42]/80">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Everything in Clarity, plus:</li>
                      <li>Monthly Power BI dashboard refresh</li>
                      <li>Trend summary</li>
                      <li>Email-based support</li>
                      <li>1 Power BI Pro license</li>
                    </ul>
                  </td>
                  <td className="py-4 px-6 text-[#2B2D42]/80">Teams wanting consistent insight and updates</td>
                </tr>
                <tr className="border-t border-[#1A2B3C]/10 bg-white">
                  <td className="py-4 px-6 text-[#2B2D42] font-medium">Growth</td>
                  <td className="py-4 px-6 text-[#2B2D42]/80">$699/mo</td>
                  <td className="py-4 px-6 text-[#2B2D42]/80">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Everything in Momentum, plus:</li>
                      <li>Forecasts & KPI projections</li>
                      <li>Funnel diagnostics</li>
                      <li>Industry benchmarks</li>
                      <li>Strategic recommendations</li>
                      <li>2 Power BI Pro licenses</li>
                    </ul>
                  </td>
                  <td className="py-4 px-6 text-[#1A2B3C]/80">Growth-stage businesses needing deeper strategy</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-[#1A2B3C]/70 max-w-3xl mx-auto text-sm"
        >
          <p className="mb-2">
            All plans are async-first, version-controlled, and include a walkthrough on Google Meet.
          </p>
          <p>
            All dashboards are built in Power BI (default), and optionally in Google Sheets or Looker Studio, and are
            shared via secure Google Drive folders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
