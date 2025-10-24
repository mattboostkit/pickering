"use client"

import { motion, type Variants } from "framer-motion"
import { X, Check, Minus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper, SectionTitle } from "@/components/shared/section-wrapper"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function CurrentState() {
  return (
    <SectionWrapper id="current-state">
      <SectionTitle centered subtitle="Understanding where we are today">
        Current State Analysis
      </SectionTitle>

      <div className="space-y-12">
        {/* Findings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Missing Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <CardTitle className="text-brand-navy">Missing Features</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "No recurring donation system",
                    "Limited storytelling/testimonials",
                    "Basic donation methods only",
                    "No CMS for easy updates",
                    "Minimal social proof",
                    "No email marketing integration",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full border-l-4 border-l-brand-green">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-green/10 rounded-lg">
                    <Check className="w-5 h-5 text-brand-green" />
                  </div>
                  <CardTitle className="text-brand-navy">Strengths to Build On</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "20+ year heritage and Dr. Pickering legacy",
                    "Strong community connection",
                    "2,500-3,000 annual visitors",
                    "Entirely volunteer-run (authentic appeal)",
                    "Diverse therapy offerings",
                    "Passionate, dedicated team",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Competitor Benchmark */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-navy text-center">
                How We Compare to Leading Cancer Charities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-semibold text-brand-navy">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                        Pickering (Current)
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                        Maggie&apos;s Centres
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-muted-foreground">
                        Sussex Cancer Fund
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-brand-green">
                        Pickering (Proposed)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { feature: "Modern Website", current: false, comp1: true, comp2: true, proposed: true },
                      { feature: "Monthly Giving Program", current: false, comp1: true, comp2: true, proposed: true },
                      { feature: "Video Content", current: false, comp1: true, comp2: true, proposed: true },
                      { feature: "Email Marketing", current: false, comp1: true, comp2: true, proposed: true },
                      { feature: "Social Media Strategy", current: "partial", comp1: true, comp2: true, proposed: true },
                      { feature: "CMS for Easy Updates", current: false, comp1: true, comp2: true, proposed: true },
                      { feature: "Donation Analytics", current: false, comp1: true, comp2: true, proposed: true },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-muted/50">
                        <td className="py-4 px-4 font-medium">{row.feature}</td>
                        <td className="text-center py-4 px-4">
                          {row.current === false ? (
                            <X className="w-5 h-5 text-red-500 inline-block" />
                          ) : row.current === "partial" ? (
                            <Minus className="w-5 h-5 text-yellow-500 inline-block" />
                          ) : (
                            <Check className="w-5 h-5 text-brand-green inline-block" />
                          )}
                        </td>
                        <td className="text-center py-4 px-4">
                          {row.comp1 ? (
                            <Check className="w-5 h-5 text-muted-foreground inline-block" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 inline-block" />
                          )}
                        </td>
                        <td className="text-center py-4 px-4">
                          {row.comp2 ? (
                            <Check className="w-5 h-5 text-muted-foreground inline-block" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 inline-block" />
                          )}
                        </td>
                        <td className="text-center py-4 px-4">
                          <Check className="w-5 h-5 text-brand-green inline-block font-bold" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-6">
                By implementing our proposed strategy, Pickering will match or exceed the digital capabilities
                of leading cancer support charities.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
