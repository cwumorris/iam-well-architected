import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Users, Network, Shield, CheckCircle2, Building2, Lock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Identity Harmonization for M&A | Morrison Identity",
  description:
    "Strategic engagement unifying disparate identity systems during mergers using Microsoft Cloud Adoption Framework, SailPoint, and Zero Trust architecture.",
}

export default function IdentityHarmonizationPage() {
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
            <Building2 className="h-3 w-3" />
            Selected Engagement
          </div>

          <h1 className="text-3xl font-bold mb-4 text-balance">
            Harmonizing Identity Ecosystems During Mergers & Acquisitions
          </h1>

          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Designing a unified Common Identity Platform enabling secure cross-organizational collaboration from day one
            of a multi-billion dollar merger
          </p>

          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                The Strategic Challenge
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                During the merger of two multi-billion dollar entities, the primary roadblock to business synergy is
                often "Identity Fragmentation." With one organization relying on legacy on-premise Microsoft Identity
                Manager (MIM) and the other on cloud-native Entra ID, the risk of security gaps and user downtime was
                immense.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Without a unified identity platform, employees couldn't access critical systems, administrators
                duplicated effort across platforms, and the executive team lacked visibility into access risk across the
                newly formed enterprise.
              </p>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              The Consultative Solution
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              I served as the lead architect to bridge these disparate worlds, designing a unified "Common Identity
              Platform" that allowed for secure, cross-organizational collaboration from day one of the merger.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Network className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Hub-and-Spoke Governance</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I architected a scalable identity "Hub" using the Microsoft Cloud Adoption Framework. This
                        allowed newly acquired units to be onboarded as "Spokes," granting immediate, secure access to
                        shared resources without compromising core security. Each spoke maintained local autonomy while
                        connecting to enterprise resources.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Advanced Governance Integration</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I leveraged SailPoint Identity Security Cloud to automate Hybrid Provisioning, ensuring that
                        access lifecycle—from onboarding to termination—was synchronized across both on-prem and cloud
                        environments. This eliminated the risk of orphaned accounts and ensured compliance with
                        regulatory requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Zero Trust Perimeter Design</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I enforced Privileged Identity Management (PIM) and context-aware Conditional Access policies,
                        ensuring that administrative power was granted only when needed and only under the right
                        security conditions. Location, device health, and risk scores all factor into access decisions.
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
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Eliminated manual "double-entry" for IT teams managing users across multiple platforms
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Reduced day-one onboarding time from weeks to minutes for newly acquired employees
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Provided executive leadership with a single, consolidated view of access risk across the entire
                    newly formed enterprise
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-muted/50 rounded-lg border">
            <p className="text-sm font-semibold mb-3">Technologies & Frameworks</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Microsoft Entra ID",
                "Microsoft Identity Manager",
                "SailPoint Identity Security Cloud",
                "Microsoft Cloud Adoption Framework",
                "Privileged Identity Management",
                "Conditional Access",
                "Hub-and-Spoke Architecture",
                "Zero Trust",
              ].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-background rounded-full text-xs border">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-3">
              Navigating identity complexity during M&A or organizational change?
            </h3>
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
