"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Manrope } from "next/font/google"
import { Menu, X } from "lucide-react"
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
          ? "bg-charcoal shadow-md py-5" 
          : "bg-transparent py-7"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-auto">
              {isScrolled ? (
                <Image 
                  src="/logo.png" 
                  alt="HotViking Logo" 
                  width={120} 
                  height={48} 
                  className="object-contain"
                  priority
                />
              ) : (
                <Image 
                  src="/logo-transparent.png" 
                  alt="HotViking Logo" 
                  width={120} 
                  height={48} 
                  className="object-contain"
                  priority
                />
              )}
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={cn(
                "transition-colors hover:text-teal",
                isScrolled ? "text-white/80" : "text-charcoal/90"
              )}
            >
              Home
            </Link>
            <Link 
              href="/plans" 
              className={cn(
                "transition-colors hover:text-teal",
                isScrolled ? "text-white/80" : "text-charcoal/90"
              )}
            >
              Plans
            </Link>
            <Link 
              href="/why-hotviking" 
              className={cn(
                "transition-colors hover:text-teal",
                isScrolled ? "text-white/80" : "text-charcoal/90"
              )}
            >
              Why HotViking
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
              href="/" 
              className="text-white/80 hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/plans" 
              className="text-white/80 hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Plans
            </Link>
            <Link 
              href="/why-hotviking" 
              className="text-white/80 hover:text-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why HotViking
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
