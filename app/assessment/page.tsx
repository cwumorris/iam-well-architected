import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AssessmentSimulation } from "@/components/assessment-simulation"

export const metadata: Metadata = {
  title: "IT Asset & Identity Risk Assessment Framework | EM Identity",
  description:
    "Explore our structured, risk-based assessment methodology. See how EM Identity discovers assets, classifies risk, detects identity threats, and maps compliance across your environment.",
}

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Interactive Framework
            </p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl mb-4 text-balance">
              IT Asset & Identity Risk Assessment
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
              Walk through our structured, 6-phase assessment methodology. See how EM Identity discovers your
              environment, classifies risk, detects identity threats, and delivers executive-ready remediation plans.
            </p>
          </div>
        </section>
        <AssessmentSimulation />
      </main>
      <Footer />
    </div>
  )
}
