"use client"

import { motion, type Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SectionWrapper, SectionTitle } from "@/components/shared/section-wrapper"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const campaigns = [
  {
    quarter: "Q1",
    period: "Jan-Mar",
    badge: "Launch Campaign",
    badgeVariant: "default" as const,
    title: "100 Friends for 100 Months",
    budget: "£2,000",
    target: "£30,000 annual recurring",
    roi: "1400%",
    objective:
      "Recruit 100 monthly donors averaging £25/month for sustainable £30K annual recurring revenue",
    tactics: [
      "Launch campaign video featuring Centre founder",
      "Email series to existing donors",
      "Social media countdown: \"67 Friends joined, 33 to go!\"",
      "Local media feature story pitch",
      "First 50 get \"Founding Friend\" recognition",
    ],
  },
  {
    quarter: "Q2",
    period: "Apr-Jun",
    badge: "Community Event",
    badgeVariant: "purple" as const,
    title: "Walk for Pickering",
    budget: "£3,500",
    target: "£15,000 gross",
    roi: "329%",
    objective: "Community peer-to-peer fundraising event targeting £15,000",
    tactics: [
      "5K or 10K walk through Tunbridge Wells",
      "Virtual option for broader participation",
      "Family & dog-friendly",
      "Corporate team recruitment",
      "Participant goal: Raise £100 minimum",
    ],
  },
  {
    quarter: "Q3",
    period: "Jul-Sep",
    badge: "Corporate Outreach",
    badgeVariant: "teal" as const,
    title: "Sponsor a Therapy Hour",
    budget: "£1,500",
    target: "£20,000",
    roi: "1233%",
    objective: "Secure £20,000 in corporate sponsorships",
    tactics: [
      "LinkedIn campaign targeting HR/CSR departments",
      "Direct mail to 50 target companies",
      "Networking at local business events",
      "4 sponsorship tiers: £500 - £5,000",
      "Leveraging board connections",
    ],
  },
  {
    quarter: "Q4",
    period: "Oct-Dec",
    badge: "Year-End Appeal",
    badgeVariant: "success" as const,
    title: "Light Up Pickering",
    budget: "£2,500",
    target: "£25,000",
    roi: "900%",
    objective: "Multi-channel end-of-year appeal raising £25,000",
    tactics: [
      "4-message email appeal series",
      "Physical letter to past donors",
      "Daily impact stories on social media",
      "Homepage campaign takeover",
      "Giving Tuesday matched giving (£5K matcher)",
    ],
  },
]

export function Campaigns() {
  return (
    <SectionWrapper id="campaigns">
      <SectionTitle
        centered
        subtitle="Four major campaigns + ongoing DIY fundraising support"
      >
        2026 Campaign Calendar
      </SectionTitle>

      {/* Timeline Visualization */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.quarter}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="text-sm font-semibold text-muted-foreground mb-2">
                  {campaign.quarter}
                </div>
                <div className="text-xs text-muted-foreground mb-3">{campaign.period}</div>
                <div className="h-2 bg-gradient-to-r from-brand-orange to-pickering-purple rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Campaign Cards */}
      <div className="space-y-8">
        {campaigns.map((campaign, index) => (
          <motion.div
            key={campaign.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <Badge variant={campaign.badgeVariant} className="mb-3">
                      {campaign.badge}
                    </Badge>
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">
                      {campaign.title}
                    </h3>
                    <p className="text-muted-foreground">{campaign.objective}</p>
                  </div>
                  <div className="flex md:flex-col gap-4 md:gap-2 text-center md:text-right">
                    <div>
                      <div className="text-sm text-muted-foreground">Budget</div>
                      <div className="text-lg font-bold text-brand-navy">
                        {campaign.budget}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Target</div>
                      <div className="text-lg font-bold text-brand-orange">
                        {campaign.target}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                      <div className="text-lg font-bold text-brand-green">
                        {campaign.roi}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-brand-navy mb-3">Key Tactics:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {campaign.tactics.map((tactic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        <span className="text-sm text-muted-foreground">{tactic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Annual Projection */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <Card className="bg-gradient-to-br from-brand-navy to-brand-teal text-white">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold mb-8 text-center">Total Campaign Impact</h3>

            <div className="space-y-4 mb-8">
              {[
                { label: "100 Friends (Recurring)", value: 30000, width: "100%", note: "£30K annually recurring" },
                { label: "Walk for Pickering", value: 11500, width: "38%", note: "Net after costs" },
                { label: "Sponsor a Therapy Hour", value: 20000, width: "67%", note: "Corporate revenue" },
                { label: "Light Up Pickering", value: 25000, width: "83%", note: "Year-end appeal" },
                { label: "Ongoing One-Time Donations", value: 11000, width: "37%", note: "75% increase over current" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm">£{item.value.toLocaleString()}</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-brand-orange rounded-full"
                    />
                  </div>
                  {item.note && (
                    <p className="text-xs text-white/70 mt-1">{item.note}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center pt-6 border-t border-white/20">
              <div className="text-5xl font-bold mb-2">£66,800</div>
              <div className="text-lg opacity-90">
                Total Projected Revenue (Most Likely Scenario)
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  )
}
