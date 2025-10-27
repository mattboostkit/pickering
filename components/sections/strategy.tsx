"use client"

import { motion, type Variants } from "framer-motion"
import { Globe, Repeat, Users, Target } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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

const pillars = [
  {
    icon: Globe,
    color: "orange",
    bgColor: "from-brand-orange/10 to-brand-orange/5",
    iconBg: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
    borderColor: "border-l-brand-orange",
    title: "Digital Transformation",
    description: "Create a world-class website that tells Pickering's story and converts visitors to donors",
    keyPoints: [
      "Next.js + Sanity CMS rebuild",
      "Mobile-first responsive design",
      "Frictionless donation flow",
      "100% Lighthouse scores",
      "WCAG 2.1 AA accessibility",
    ],
  },
  {
    icon: Repeat,
    color: "purple",
    bgColor: "from-pickering-purple/10 to-pickering-purple/5",
    iconBg: "bg-pickering-purple/10",
    iconColor: "text-pickering-purple",
    borderColor: "border-l-pickering-purple",
    title: "Recurring Revenue Engine",
    description: "Build sustainable monthly giving program targeting 100 regular donors",
    keyPoints: [
      "\"Friends of Pickering\" program",
      "4 membership tiers (£10-£100/month)",
      "Target: £30K annual recurring",
      "Automated donor stewardship",
      "75%+ retention rate goal",
    ],
  },
  {
    icon: Users,
    color: "teal",
    bgColor: "from-brand-teal/10 to-brand-teal/5",
    iconBg: "bg-brand-teal/10",
    iconColor: "text-brand-teal",
    borderColor: "border-l-brand-teal",
    title: "Content & Community",
    description: "Establish Pickering as the go-to cancer support story in Tunbridge Wells",
    keyPoints: [
      "Professional social media management (2 posts/week)",
      "Strategic storytelling across Facebook, Instagram & LinkedIn",
      "Monthly video content & patient stories",
      "Email newsletter program",
      "Alignment with awareness days (Mental Health, World Cancer Day)",
    ],
  },
  {
    icon: Target,
    color: "green",
    bgColor: "from-brand-green/10 to-brand-green/5",
    iconBg: "bg-brand-green/10",
    iconColor: "text-brand-green",
    borderColor: "border-l-brand-green",
    title: "Campaign Activation",
    description: "Launch signature fundraising campaigns that engage the community",
    keyPoints: [
      "Q1: \"100 Friends\" launch",
      "Q2: Walk for Pickering",
      "Q3: Corporate sponsorship",
      "Q4: Year-end appeal",
      "Peer-to-peer fundraising tools",
    ],
  },
]

const trends = [
  {
    stat: "31%",
    label: "of online charity revenue from monthly giving",
    insight: "Recurring donors give 440% more over their lifetime",
  },
  {
    stat: "60%",
    label: "of all charitable donations now made online",
    insight: "Digital-first approach is no longer optional",
  },
  {
    stat: "47%",
    label: "of fundraisers cite AI as top 2025 opportunity",
    insight: "Smart personalisation drives conversion",
  },
  {
    stat: "200%+",
    label: "increase in donations with video content",
    insight: "Emotional storytelling is crucial",
  },
]

export function Strategy() {
  return (
    <SectionWrapper id="strategy" className="bg-muted/30">
      <SectionTitle centered subtitle="Four interconnected pillars for sustainable growth">
        Our Strategic Approach for 2026
      </SectionTitle>

      {/* Pillar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon
          return (
            <motion.div
              key={pillar.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full border-l-4 ${pillar.borderColor} hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${pillar.iconBg} rounded-lg flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${pillar.bgColor}`}>
                    <ul className="space-y-2">
                      {pillar.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`text-lg ${pillar.iconColor} flex-shrink-0`}>•</span>
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Key Trends */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-brand-navy mb-3">2025/2026 Fundraising Landscape</h3>
          <p className="text-muted-foreground">
            Our strategy is grounded in the latest industry research and trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trends.map((trend, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-brand-orange mb-3">{trend.stat}</div>
                  <p className="text-sm font-medium text-brand-navy mb-3">{trend.label}</p>
                  <Badge variant="secondary" className="text-xs">
                    {trend.insight}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
