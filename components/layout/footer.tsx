"use client"

import Link from "next/link"
import { Manrope } from "next/font/google"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-deepblue text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className={cn("text-xl font-bold", manrope.className)}>HotViking</span>
            </Link>
            <p className="text-white/70 mt-2 text-sm">Async BI built for service-based teams</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link 
              href="/snapshot" 
              className="text-white/80 hover:text-teal transition-colors text-sm"
            >
              Snapshot Pack
            </Link>
            <Link 
              href="/services" 
              className="text-white/80 hover:text-teal transition-colors text-sm"
            >
              Services
            </Link>
            <Link 
              href="/faqs" 
              className="text-white/80 hover:text-teal transition-colors text-sm"
            >
              FAQs
            </Link>
            <Link 
              href="/onboarding" 
              className="text-white/80 hover:text-teal transition-colors text-sm"
            >
              Onboarding
            </Link>
            <Link 
              href="/contact" 
              className="text-white/80 hover:text-teal transition-colors text-sm"
            >
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} HotViking. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link 
              href="/privacy" 
              className="text-white/60 hover:text-white transition-colors text-xs"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-white/60 hover:text-white transition-colors text-xs"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
