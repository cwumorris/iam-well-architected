"use client"

import { Button } from "@/components/ui/button"
import { Shield, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-muted/30 to-background pt-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
            <Shield className="h-3.5 w-3.5" />
            <span>Identity & Cloud Security Consulting | Zero Trust & Entra ID</span>
          </div>

          <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-5xl">
            Secure Identity & Cloud Access for Modern Organizations
          </h1>

          <p className="mb-8 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            Helping enterprises and cloud-first teams design, modernize, and operate secure identity and access in
            remote and hybrid environments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="h-11 px-7 text-sm font-medium bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Discovery Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-7 text-sm font-medium border-accent text-accent hover:bg-accent/10 bg-transparent"
              onClick={() => document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Award className="h-4 w-4 mr-2" />
              View Certifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
