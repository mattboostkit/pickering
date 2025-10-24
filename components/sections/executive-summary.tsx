"use client"

import { motion, type Variants } from "framer-motion"
import { AlertCircle, Lightbulb, TrendingUp, PoundSterling } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper, SectionTitle } from "@/components/shared/section-wrapper"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function ExecutiveSummary() {
  return (
    <SectionWrapper id="overview" className="bg-muted/30">
      <SectionTitle centered>Executive Summary</SectionTitle>

      <div className="space-y-12">
        {/* Problem Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-l-4 border-l-brand-orange">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-orange/10 rounded-lg flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">The Challenge</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Pickering Cancer Drop In Centre welcomes 2,500-3,000 visitors annually but lacks modern digital
                    infrastructure to convert community goodwill into sustainable funding. As a completely self-funded charity
                    with no NHS support, they urgently need to enhance fundraising capabilities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="border-l-4 border-l-pickering-purple">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pickering-purple/10 rounded-lg flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-pickering-purple" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Our Solution</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A comprehensive digital transformation combining modern web technologies, compelling storytelling,
                    recurring donation systems, and data-driven social media campaigns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Impact Projection */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-l-4 border-l-brand-green">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-brand-green/10 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Projected Impact</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-brand-green/5 to-brand-green/10 rounded-xl">
                  <div className="text-4xl font-bold text-brand-green mb-2">150%</div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Increase in Annual Donations
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-pickering-purple/5 to-pickering-purple/10 rounded-xl">
                  <div className="text-4xl font-bold text-pickering-purple mb-2">100</div>
                  <div className="text-sm text-muted-foreground font-medium">
                    New Monthly Donors
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 rounded-xl">
                  <div className="text-4xl font-bold text-brand-orange mb-2">£30K</div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Recurring Revenue (Annual)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Investment Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Investment Required */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-navy/10 rounded-lg">
                    <PoundSterling className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">Investment Required</h3>
                </div>

                <div className="text-5xl font-bold text-brand-navy mb-6">£22,000</div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Website Development</span>
                    <span className="font-semibold">£8,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Hosting & Maintenance (12 months)</span>
                    <span className="font-semibold">£1,200</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Content Creation</span>
                    <span className="font-semibold">£3,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Marketing & Ads</span>
                    <span className="font-semibold">£4,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Campaign Execution</span>
                    <span className="font-semibold">£4,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-muted-foreground">Contingency</span>
                    <span className="font-semibold">£300</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ROI Scenarios */}
            <Card className="bg-gradient-to-br from-brand-navy to-brand-teal text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">ROI Scenarios</h3>

                <div className="space-y-6">
                  {/* Conservative */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm opacity-90">Conservative</span>
                      <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded">100% ROI</span>
                    </div>
                    <div className="text-3xl font-bold mb-1">£45,000</div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white/80 rounded-full" style={{ width: "46%" }} />
                    </div>
                  </div>

                  {/* Most Likely */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold">Most Likely</span>
                      <span className="text-sm font-semibold bg-brand-orange px-2 py-1 rounded">204% ROI</span>
                    </div>
                    <div className="text-4xl font-bold mb-1">£66,800</div>
                    <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-orange rounded-full" style={{ width: "68%" }} />
                    </div>
                  </div>

                  {/* Optimistic */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm opacity-90">Optimistic</span>
                      <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded">343% ROI</span>
                    </div>
                    <div className="text-3xl font-bold mb-1">£97,500</div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-green rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
