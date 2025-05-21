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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Column */}
          <div>
            <Link href="/" className="flex items-center">
              <span className={cn("text-xl font-bold", manrope.className)}>HotViking</span>
            </Link>
            <p className="text-white/70 mt-4 text-sm leading-relaxed">
              HotViking: clear insights, zero complexity — your async metrics partner.
            </p>
          </div>
          
          {/* Second Column */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-white/80">
              <Link href="/" className="hover:text-teal transition-colors text-sm">
                Home
              </Link>
              <Link href="/plans" className="hover:text-teal transition-colors text-sm">
                Plans
              </Link>
              <Link href="/why-hotviking" className="hover:text-teal transition-colors text-sm">
                Why HotViking
              </Link>
              <Link href="/terms" className="hover:text-teal transition-colors text-sm">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-teal transition-colors text-sm">
                Privacy
              </Link>
            </div>
          </div>
          
          {/* Third Column */}
          <div>
            <h3 className="text-white font-medium mb-4">Social</h3>
            <div className="flex flex-col space-y-2 text-white/80">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
          
          {/* Fourth Column */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <div className="flex flex-col space-y-2 text-white/80">
              <a 
                href="mailto:hello@hotviking.com" 
                className="hover:text-teal transition-colors text-sm"
              >
                hello@hotviking.com
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
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
