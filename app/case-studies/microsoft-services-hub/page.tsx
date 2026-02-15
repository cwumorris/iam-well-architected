import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, TrendingUp, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Proactive IT Health with Microsoft Services Hub | Use Case | Morrison Identity",
  description:
    "Learn how we use Microsoft Services Hub Health assessments to identify and remediate critical security vulnerabilities before they become breaches. Proactive security posture management.",
}

export default function MicrosoftServicesHubPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground mb-4">
              <Shield className="h-3.5 w-3.5" />
              <span>Use Case</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-balance">
              Reducing Enterprise Risk with Proactive IT Health Assessments
            </h1>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Using Microsoft Services Hub Health to identify hidden misconfigurations and prevent security incidents
              before they happen
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              A mid-sized enterprise was experiencing intermittent authentication delays and feared hidden
              misconfigurations in their <strong>Active Directory</strong> and <strong>Azure</strong> environments that
              could lead to a breach.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Traditional security audits are expensive, time-consuming, and often miss configuration drift that
              accumulates over time. The organization needed a proactive, continuous approach to maintaining their
              security posture.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">The Morrison Identity Solution</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We leveraged the{" "}
              <a
                href="https://learn.microsoft.com/en-us/services-hub/health/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Microsoft Services Hub Health
              </a>{" "}
              portal to run a deep-dive <strong>On-Demand Assessment</strong>. Unlike a standard automated scan, we
              didn't just hand over a report; we provided expert interpretation and remediation.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-accent/50">
                <Clock className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-base font-semibold mb-2">Configuration</h3>
                <p className="text-sm text-muted-foreground">
                  Linked Azure Log Analytics workspace to Services Hub for continuous data collection
                </p>
              </Card>

              <Card className="p-6 border-accent/50">
                <Shield className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-base font-semibold mb-2">Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Identified critical gaps in Conditional Access and discovered orphan admin accounts
                </p>
              </Card>

              <Card className="p-6 border-accent/50">
                <TrendingUp className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-base font-semibold mb-2">Remediation</h3>
                <p className="text-sm text-muted-foreground">
                  Implemented Zero Trust roadmap, blocked legacy auth, and hardened workload identities
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>

            <div className="space-y-6">
              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-semibold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Configuration</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      We linked their{" "}
                      <a
                        href="https://learn.microsoft.com/en-us/services-hub/getting-started/it-health-faqs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Azure Log Analytics
                      </a>{" "}
                      workspace to the Services Hub to begin data collection across <strong>Entra ID</strong> and{" "}
                      <strong>Windows Server</strong> workloads.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          Connected on-premise Active Directory health agents
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          Configured Azure AD Connect health monitoring
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          Enabled Entra ID security posture assessments
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-semibold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Within hours, we identified critical risks in their{" "}
                      <a
                        href="https://learn.microsoft.com/en-us/industry/healthcare/security-overview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Conditional Access policies
                      </a>{" "}
                      and discovered "orphan" administrative accounts that lacked MFA.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          12 high-risk security vulnerabilities identified
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          Found 5 admin accounts without multi-factor authentication
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          Discovered legacy authentication protocols still enabled
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-semibold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Remediation</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Using the prioritized recommendations from the{" "}
                      <a
                        href="https://learn.microsoft.com/en-us/services-hub/unified/getting-started/feature-overview"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Services Hub Action Center
                      </a>
                      , we implemented a <strong>Zero Trust</strong> roadmap, blocking legacy authentication and
                      hardening their workload identities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          Enforced MFA on all privileged accounts within 48 hours
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          Blocked legacy authentication protocols (POP3, IMAP, Basic Auth)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          Cleaned up stale Group Policy Objects improving authentication speed
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">The Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-accent/50 bg-card">
                <h3 className="text-3xl font-bold text-accent mb-2">100%</h3>
                <p className="text-sm font-semibold mb-2">Remediation</p>
                <p className="text-sm text-muted-foreground">
                  All "High-Risk" security vulnerabilities identified by Microsoft best practices were resolved
                </p>
              </Card>

              <Card className="p-6 border-accent/50 bg-card">
                <h3 className="text-3xl font-bold text-accent mb-2">30%</h3>
                <p className="text-sm font-semibold mb-2">Performance Improvement</p>
                <p className="text-sm text-muted-foreground">
                  System authentication speed improved by cleaning up stale Group Policy Objects
                </p>
              </Card>

              <Card className="p-6 border-accent/50 bg-card">
                <h3 className="text-3xl font-bold text-accent mb-2">Proactive</h3>
                <p className="text-sm font-semibold mb-2">Posture</p>
                <p className="text-sm text-muted-foreground">
                  Recurring automated assessment schedule ensures compliance with evolving security standards
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Why Microsoft Services Hub Health Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border">
                <h3 className="text-base font-semibold mb-2">Continuous Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Unlike one-time audits, Services Hub provides continuous health monitoring, catching issues as they
                  emerge.
                </p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-base font-semibold mb-2">Expert Interpretation</h3>
                <p className="text-sm text-muted-foreground">
                  We don't just hand you a report—we prioritize findings and implement fixes based on your business risk
                  profile.
                </p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-base font-semibold mb-2">Microsoft Best Practices</h3>
                <p className="text-sm text-muted-foreground">
                  Assessments are based on official Microsoft security baselines and industry standards.
                </p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-base font-semibold mb-2">Cost Effective</h3>
                <p className="text-sm text-muted-foreground">
                  Included with most Microsoft Enterprise Agreements—leverages tools you already have access to.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Security Health Assessment?</h2>
            <p className="text-base text-muted-foreground mb-8">
              If you're worried about hidden security gaps in your Microsoft environment, let's run a comprehensive
              health assessment and fix vulnerabilities before they become breaches.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://calendly.com/advisory-emidentity/30min" target="_blank" rel="noopener noreferrer">
                Schedule a Health Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
