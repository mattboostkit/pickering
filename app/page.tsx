import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { ExecutiveSummary } from "@/components/sections/executive-summary"
import { CurrentState } from "@/components/sections/current-state"
import { Strategy } from "@/components/sections/strategy"
import { Campaigns } from "@/components/sections/campaigns"
import { Budget } from "@/components/sections/budget"
import { NextSteps } from "@/components/sections/next-steps"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <ExecutiveSummary />
        <CurrentState />
        <Strategy />
        <Campaigns />
        <Budget />
        <NextSteps />
      </main>

      <Footer />
    </div>
  )
}
