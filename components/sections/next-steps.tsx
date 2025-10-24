"use client"

import { motion, type Variants } from "framer-motion"
import { useState } from "react"
import { Calendar, Mail, Download, FileText, Share2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper, SectionTitle } from "@/components/shared/section-wrapper"
import { useFormspark } from "@formspark/use-formspark"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const timelineSteps = [
  {
    date: "Now",
    action: "Review this proposal",
    description: "Share with trustees and key stakeholders. We're available for questions.",
    current: true,
  },
  {
    date: "Your Decision",
    action: "Decision & Approval",
    description: "Let us know your decision. We can present to your board if helpful.",
    current: false,
  },
  {
    date: "One Week After Decision",
    action: "Contract & Kick-off",
    description: "Sign agreement, initial payment, kick-off meeting with full team.",
    current: false,
  },
  {
    date: "2 Jan 2026",
    action: "Website Launch",
    description: "Your new digital fundraising engine goes live to start the new year.",
    current: false,
  },
]

export function NextSteps() {
  // FormSpark Form: Pickering Proposal
  // Form ID from https://formspark.io
  const FORMSPARK_FORM_ID = "9RjD0lORe"

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    bestTime: "morning",
  })

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await submit(formData)
      setSubmitStatus("success")
      alert("Thank you! We'll be in touch soon.")
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        bestTime: "morning",
      })
    } catch (error) {
      setSubmitStatus("error")
      alert("Oops! There was an error submitting the form. Please try again or email us directly.")
      console.error("Form submission error:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDownloadPDF = () => {
    window.print()
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("Link copied to clipboard!")
  }

  return (
    <SectionWrapper id="next-steps">
      <SectionTitle centered>Ready to Transform Your Fundraising?</SectionTitle>

      {/* Decision Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">What Happens Next</h3>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange via-pickering-purple to-brand-teal hidden md:block" />

          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <Card className={step.current ? "border-2 border-brand-orange" : ""}>
                    <CardContent className="p-6">
                      <Badge variant={step.current ? "default" : "outline"} className="mb-3">
                        {step.date}
                      </Badge>
                      <h4 className="text-xl font-bold text-brand-navy mb-2">{step.action}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:flex items-center justify-center w-12">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      step.current ? "bg-brand-orange ring-4 ring-brand-orange/20" : "bg-muted"
                    }`}
                  />
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Urgency Message */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <Card className="bg-brand-orange/5 border-brand-orange">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-orange/10 rounded-lg">
                <Clock className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy mb-2">Time-Sensitive Opportunity</h4>
                <p className="text-muted-foreground">
                  Starting in November allows us to launch January 2nd—perfect timing for New Year
                  giving and Q1 campaign momentum. Delaying means missing critical early-year
                  donation window.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-navy">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none"
                    placeholder="Phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none resize-none"
                    placeholder="Questions or comments..."
                  />
                </div>

                <div>
                  <label htmlFor="bestTime" className="block text-sm font-medium text-brand-navy mb-2">
                    Best time to contact
                  </label>
                  <select
                    id="bestTime"
                    name="bestTime"
                    value={formData.bestTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none"
                  >
                    <option value="morning">Morning (9am-12pm)</option>
                    <option value="afternoon">Afternoon (12pm-5pm)</option>
                    <option value="evening">Evening (5pm-7pm)</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={submitting}
                >
                  <Mail className="w-5 h-5" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-sm text-brand-green text-center mt-2">
                    ✓ Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-500 text-center mt-2">
                    ✗ Error sending message. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-orange/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-brand-orange" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-brand-navy mb-2">
                    Schedule Your Presentation
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We'd love to present this proposal to your board and answer questions in person
                    (or via video call).
                  </p>
                  <Button variant="primary" size="lg" fullWidth>
                    <Calendar className="w-5 h-5" />
                    Book a Meeting
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={handleDownloadPDF}
            >
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-brand-teal/10 rounded-lg inline-block mb-3">
                  <Download className="w-6 h-6 text-brand-teal" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2">Download PDF</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Save this proposal for offline review
                </p>
                <Button variant="outline" size="sm" fullWidth>
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={handleCopyLink}
            >
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-pickering-purple/10 rounded-lg inline-block mb-3">
                  <Share2 className="w-6 h-6 text-pickering-purple" />
                </div>
                <h4 className="font-bold text-brand-navy mb-2">Share Proposal</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Send this link to trustees
                </p>
                <Button variant="outline" size="sm" fullWidth>
                  Copy Link
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-brand-navy text-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold mb-3">Let's Build Something Beautiful</div>
              <p className="text-white/80 mb-4">
                Together, we can transform Pickering Cancer Drop In Centre's fundraising and help
                them support even more people affected by cancer.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-brand-orange">
                <Clock className="w-4 h-4" />
                <span>Proposal valid for 30 days from delivery date</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
