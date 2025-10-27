"use client"

import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function CountUpMetric({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(end * easeOut))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <>{count.toLocaleString()}{suffix}</>
}

export function Hero() {
  const handleDownloadPDF = () => {
    window.print()
  }

  const handleSchedule = () => {
    document.getElementById("next-steps")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 via-pickering-orange/5 to-pickering-purple/5" />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pickering-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="default" className="text-sm px-4 py-2">
                Proposal Deadline: 27 October 2025
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight"
            >
              Transforming Fundraising for{" "}
              <span className="relative">
                <span className="relative z-10 text-brand-orange">
                  Pickering Cancer Drop In Centre
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-orange/20 -z-0" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif"
            >
              A Complete Digital Marketing & Fundraising Strategy for 2026
            </motion.p>

            {/* Metrics Row */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">
                  £<CountUpMetric end={66800} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Projected Revenue Year 1
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                <div className="text-3xl md:text-4xl font-bold text-pickering-purple mb-2">
                  <CountUpMetric end={167} />%
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Return on Investment
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                <div className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">
                  <CountUpMetric end={100} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Monthly Donors Target
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleSchedule}
              >
                <Calendar className="w-5 h-5" />
                Explore the Strategy
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadPDF}
              >
                <Download className="w-5 h-5" />
                Download PDF
              </Button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-sm text-muted-foreground"
            >
              Prepared by JJL Media | October 2025
            </motion.p>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Placeholder for hero image - using a decorative card stack instead */}
              <div className="relative h-[500px]">
                {/* Card 1 - Background */}
                <motion.div
                  initial={{ rotate: -6, y: 20 }}
                  animate={{ rotate: -6, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-0 left-0 right-20 h-64 bg-gradient-to-br from-pickering-orange to-pickering-pink rounded-3xl shadow-2xl opacity-80"
                />

                {/* Card 2 - Middle */}
                <motion.div
                  initial={{ rotate: 3, y: 40 }}
                  animate={{ rotate: 3, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-12 left-10 right-10 h-72 bg-gradient-to-br from-pickering-purple to-brand-teal rounded-3xl shadow-2xl opacity-90"
                />

                {/* Card 3 - Front */}
                <motion.div
                  initial={{ y: 60 }}
                  animate={{ y: 40 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-24 left-20 right-0 h-80 bg-gradient-to-br from-brand-navy to-brand-teal rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-white"
                >
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">£66,800</div>
                    <div className="text-xl font-medium opacity-90">Projected Year 1 Revenue</div>
                    <div className="mt-6 flex gap-4 justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold">167%</div>
                        <div className="text-sm opacity-75">ROI</div>
                      </div>
                      <div className="w-px bg-white/30" />
                      <div className="text-center">
                        <div className="text-2xl font-bold">75</div>
                        <div className="text-sm opacity-75">Donors</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
