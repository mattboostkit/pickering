"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Overview", href: "#hero" },
  { name: "Current State", href: "#current-state" },
  { name: "Strategy", href: "#strategy" },
  { name: "Website Plan", href: "#website" },
  { name: "Campaigns", href: "#campaigns" },
  { name: "Budget & ROI", href: "#budget" },
  { name: "Next Steps", href: "#next-steps" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="text-2xl font-bold text-brand-navy">
              JJL <span className="text-brand-orange">Media</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-brand-navy/70 hover:text-brand-navy transition-colors rounded-lg hover:bg-brand-navy/5"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="primary"
              size="default"
              onClick={() => {
                document.getElementById("next-steps")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Schedule Presentation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-brand-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-brand-navy hover:bg-brand-navy/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  document.getElementById("next-steps")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Schedule Presentation
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
