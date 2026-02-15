"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CallToAction() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-4xl border-border bg-card p-12 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">Call to Action</h2>

          <p className="mb-2 text-base leading-relaxed text-muted-foreground text-pretty">
            If your organization is navigating identity complexity, audit readiness, or cloud security challenges, let's
            talk.
          </p>
          <p className="mb-8 text-sm text-muted-foreground">
            <a href="mailto:advisory@emidentity.com" className="text-primary hover:underline transition-colors">advisory@emidentity.com</a>
          </p>

          <Button
            size="lg"
            className="h-12 px-8 text-base font-medium"
            onClick={() => {
              const calendlySection = document.getElementById("calendly-section")
              if (calendlySection) {
                calendlySection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Book a 30-minute Discovery Call
          </Button>

          <div id="calendly-section" className="mt-12 rounded-lg border border-border bg-background p-6">
            <h3 className="mb-4 text-lg font-semibold">Schedule Your Discovery Call</h3>
            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://calendly.com/advisory-emidentity/30min"
                className="h-full w-full"
                frameBorder="0"
                title="Schedule a meeting"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
