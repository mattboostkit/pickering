"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-24 lg:py-32",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  )
}

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ children, subtitle, centered = false, className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
