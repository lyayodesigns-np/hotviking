"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Manrope } from "next/font/google"
import { Menu, X, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-charcoal shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="mr-2 text-deepblue">
              <BarChart3 size={24} />
            </div>
            <span className={cn(
              "text-xl font-bold transition-colors",
              isScrolled ? "text-white" : "text-charcoal",
              manrope.className
            )}>
              HotViking
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/snapshot" 
              className={cn(
                "transition-colors hover:text-teal",
                isScrolled ? "text-white/80" : "text-charcoal/90"
              )}
            >
              Snapshot Pack
            </Link>
            <Link 
              href="/services" 
              className={cn(
                "transition-colors hover:text-teal",
                isScrolled ? "text-white/80" : "text-charcoal/90"
              )}
            >
              Services
            </Link>
            <Link 
              href="/faqs" 
              className={cn(
                "transition-colors hover:text-teal",
                isScrolled ? "text-white/80" : "text-charcoal/90"
              )}
            >
              FAQs
            </Link>
            <Link 
              href="/onboarding" 
              className={cn(
                "transition-colors hover:text-teal",
                isScrolled ? "text-white/80" : "text-charcoal/90"
              )}
            >
              Onboarding
            </Link>
            <Link 
              href="/contact"
              className="px-4 py-2 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors"
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? "text-white" : "text-charcoal"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-white" : "text-charcoal"} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-deepblue shadow-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link 
              href="/snapshot" 
              className="text-white/80 hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Snapshot Pack
            </Link>
            <Link 
              href="/services" 
              className="text-white/80 hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/faqs" 
              className="text-white/80 hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="/onboarding" 
              className="text-white/80 hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Onboarding
            </Link>
            <Link 
              href="/contact"
              className="px-4 py-2 bg-orange text-white rounded-lg hover:bg-orange/90 transition-colors inline-block w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
