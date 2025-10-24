"use client"

import { motion, type Variants } from "framer-motion"
import { PoundSterling, TrendingUp, Repeat, Users, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper, SectionTitle } from "@/components/shared/section-wrapper"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const budgetBreakdown = [
  {
    category: "Website Development",
    amount: 8500,
    items: [
      { description: "UX/UI Design", cost: 1500 },
      { description: "Next.js Development", cost: 4000 },
      { description: "Sanity CMS Setup", cost: 1500 },
      { description: "Donation System Integration", cost: 800 },
      { description: "Testing & QA", cost: 400 },
      { description: "Training & Documentation", cost: 300 },
    ],
  },
  {
    category: "Website Hosting & Maintenance",
    amount: 1200,
    items: [
      { description: "Vercel hosting (12 months)", cost: 240 },
      { description: "Sanity CMS subscription (12 months)", cost: 180 },
      { description: "Domain & SSL certificates", cost: 60 },
      { description: "Monthly maintenance & updates (£100/month)", cost: 720 },
    ],
  },
  {
    category: "Content Creation",
    amount: 3500,
    items: [
      { description: "Video equipment & software", cost: 780 },
      { description: "Professional videographer (2 days)", cost: 800 },
      { description: "Video editing time", cost: 500 },
      { description: "Professional photographer", cost: 500 },
      { description: "Copywriting", cost: 920 },
    ],
  },
  {
    category: "Marketing & Advertising",
    amount: 4000,
    items: [
      { description: "Facebook/Instagram ads (Q1-Q4)", cost: 1500 },
      { description: "Email marketing platform", cost: 180 },
      { description: "Local media advertising", cost: 500 },
      { description: "Event promotion", cost: 800 },
      { description: "SEO tools & software", cost: 400 },
      { description: "Content distribution", cost: 620 },
    ],
  },
  {
    category: "Campaign Execution",
    amount: 4500,
    items: [
      { description: '"100 Friends" Launch', cost: 2000 },
      { description: '"Walk for Pickering"', cost: 1500 },
      { description: '"Sponsor a Therapy Hour"', cost: 500 },
      { description: '"Light Up Pickering"', cost: 500 },
    ],
  },
  {
    category: "Contingency",
    amount: 300,
    items: [{ description: "Unexpected costs, revisions, additional training", cost: 300 }],
  },
]

const valuePoints = [
  {
    icon: Repeat,
    title: "Sustainable Revenue Model",
    description:
      "Monthly giving program creates predictable, reliable income vs. one-off campaigns",
  },
  {
    icon: TrendingUp,
    title: "Compounding Returns",
    description:
      "Year 1 investment builds foundation for 3-5 years of growth. Year 2-3 revenue expected 150-200%+ of Year 1",
  },
  {
    icon: Users,
    title: "Donor Lifetime Value",
    description:
      "Average monthly donor stays 4+ years = £1,200+ lifetime value per donor acquired",
  },
  {
    icon: Award,
    title: "Professional Credibility",
    description:
      "Modern website and professional marketing materials attract larger donors and corporate partnerships",
  },
]

export function Budget() {
  return (
    <SectionWrapper id="budget" className="bg-muted/30">
      <SectionTitle centered>Investment & Return</SectionTitle>

      {/* Budget Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {budgetBreakdown.map((section, index) => (
          <motion.div
            key={section.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-brand-navy">{section.category}</CardTitle>
                  <Badge variant="default" className="text-lg px-3 py-1">
                    £{section.amount.toLocaleString()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">{item.description}</span>
                      <span className="text-sm font-semibold">£{item.cost.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Total Investment */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Card className="bg-gradient-to-r from-brand-navy to-brand-teal text-white">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <PoundSterling className="w-10 h-10" />
              <div className="text-6xl font-bold">22,000</div>
            </div>
            <div className="text-xl mb-2">Total Year 1 Investment</div>
            <div className="text-sm opacity-80">
              Development & Infrastructure: £9,700 | Marketing & Campaigns: £12,300
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ROI Scenarios */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold text-brand-navy text-center mb-8">
          Return on Investment Calculator
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conservative */}
          <Card className="border-2">
            <CardHeader>
              <Badge variant="outline" className="w-fit">
                Conservative
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Assumptions:</div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 50 monthly donors @ £20/month</li>
                    <li>• One-time donations +30%</li>
                    <li>• Events: £15K</li>
                    <li>• Corporate: £10K</li>
                  </ul>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-navy">£45,000</div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-brand-green">100% ROI</div>
                  <div className="text-xs text-muted-foreground">£23,000 net profit</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Most Likely */}
          <Card className="border-4 border-brand-orange shadow-xl scale-105">
            <CardHeader>
              <Badge variant="default" className="w-fit">
                Most Likely ⭐
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Assumptions:</div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 75 monthly donors @ £22/month</li>
                    <li>• One-time donations +50%</li>
                    <li>• Events: £20K</li>
                    <li>• Corporate: £12K</li>
                  </ul>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-orange">£66,800</div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                </div>
                <div className="p-3 bg-brand-orange/10 rounded-lg">
                  <div className="text-2xl font-bold text-brand-orange">204% ROI</div>
                  <div className="text-xs text-muted-foreground">£44,800 net profit</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optimistic */}
          <Card className="border-2">
            <CardHeader>
              <Badge variant="success" className="w-fit">
                Optimistic
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Assumptions:</div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 100 monthly donors @ £25/month</li>
                    <li>• One-time donations +75%</li>
                    <li>• Events: £27K</li>
                    <li>• Corporate: £18K</li>
                  </ul>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-navy">£97,500</div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-brand-green">343% ROI</div>
                  <div className="text-xs text-muted-foreground">£75,500 net profit</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Value Proposition */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-3xl font-bold text-brand-navy text-center mb-8">
          Why This Investment Makes Sense
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valuePoints.map((point, index) => {
            const Icon = point.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-orange/10 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-navy mb-2">{point.title}</h4>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
