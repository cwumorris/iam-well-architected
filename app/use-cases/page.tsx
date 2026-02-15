import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { UseCaseScenarios } from "@/components/use-case-scenarios"

export const metadata: Metadata = {
  title: "Security & Identity Use Cases in Action | EM Identity",
  description:
    "See how EM Identity identifies risk, reduces exposure, and strengthens governance across real-world environments. Interactive security scenarios with measurable outcomes.",
}

export default function UseCasesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-24 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Security & Identity Use Cases in Action
            </h1>
            <p className="text-base text-muted-foreground text-pretty">
              See how EM Identity identifies risk, reduces exposure, and strengthens governance across real-world environments.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Scenarios */}
      <UseCaseScenarios />

      {/* CTA */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready for a Live Assessment?</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            These scenarios represent real patterns we uncover in enterprise environments every week. Let us show you what we find in yours.
          </p>
          <a href="https://calendly.com/advisory-emidentity/30min" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Book a Discovery Call
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
