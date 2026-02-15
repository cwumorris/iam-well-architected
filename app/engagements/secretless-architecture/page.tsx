import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Key, GitBranch, Database, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Secret-less Enterprise Architecture | Morrison Identity",
  description:
    "Strategic engagement eliminating secret sprawl through HashiCorp Vault, Azure Service Principals, and DevOps hardening for dynamic credential management.",
}

export default function SecretlessArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-24">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Shield className="h-3 w-3" />
            Selected Engagement
          </div>

          <h1 className="text-3xl font-bold mb-4 text-balance">
            Orchestrating a "Secret-less" Enterprise Architecture
          </h1>

          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Transforming static credential management into a dynamic, identity-based security model for a major
            healthcare insurance provider
          </p>

          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                The Strategic Challenge
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Most large-scale organizations suffer from "Secret Sprawl"—static credentials for databases and cloud
                services embedded in code or stored in unmanaged pipelines. For a major healthcare insurance provider,
                this wasn't just a technical debt issue; it was a critical compliance and security risk that threatened
                their entire cloud infrastructure.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With thousands of credentials distributed across development pipelines, the attack surface was massive.
                A single compromised key could expose patient data and trigger regulatory violations.
              </p>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              The Consultative Solution
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              I was engaged to move the organization from a posture of "static risk" to "dynamic resilience." I
              architected a transformation that replaced long-lived passwords with a dynamic, identity-based security
              model.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Infrastructure as Code (IaC) Strategy</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I designed and deployed high-availability HashiCorp Vault clusters using Terraform to act as the
                        single source of truth for all machine identities. This provided centralized control with
                        automatic failover and disaster recovery capabilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Just-In-Time (JIT) Credentialing</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I replaced static keys with Azure Service Principals that issue short-lived, environment-aware
                        tokens. If a token is ever intercepted, it is already expired, rendering it useless to an
                        attacker. This reduced the credential lifetime from months to minutes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <GitBranch className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold mb-2">DevOps Hardening</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I integrated this architecture directly into the Azure DevOps CI/CD pipelines, ensuring that
                        production secrets are never visible to human developers, effectively "shifting security left."
                        Developers access resources through identity, not secrets.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Business Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">90%</div>
                  <p className="text-xs text-muted-foreground">Reduction in machine-identity attack surface</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">1,000+</div>
                  <p className="text-xs text-muted-foreground">Credentials automated with rotation</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <p className="text-xs text-muted-foreground">Continuous audit-readiness without manual overhead</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg border">
            <p className="text-sm font-semibold mb-3">Technologies & Frameworks</p>
            <div className="flex flex-wrap gap-2">
              {[
                "HashiCorp Vault",
                "Terraform",
                "Azure Service Principals",
                "Azure DevOps",
                "CI/CD Pipelines",
                "Dynamic Secrets",
                "Zero Trust",
              ].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-background rounded-full text-xs border">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-3">Ready to eliminate secret sprawl in your organization?</h3>
            <a href="https://calendly.com/advisory-emidentity/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-semibold">
                Schedule a Strategic Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
