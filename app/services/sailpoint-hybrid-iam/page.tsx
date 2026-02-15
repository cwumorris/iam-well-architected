import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Database, GitBranch } from "lucide-react"

export const metadata: Metadata = {
  title: "Hybrid Identity Governance: SailPoint & Microsoft Entra ID Integration | Morrison Identity",
  description:
    "Expert consulting for SailPoint Identity Security Cloud integration with Microsoft Entra ID. Unified lifecycle management, hybrid provisioning, and automated governance for complex identity environments.",
}

export default function SailPointHybridIAMPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground mb-4">
              <Shield className="h-3.5 w-3.5" />
              <span>Specialized Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-balance">
              Hybrid Identity Governance: SailPoint & Microsoft Entra ID Integration
            </h1>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Expert integration of SailPoint Identity Security Cloud with Microsoft Entra ID for unified identity
              governance across on-premise and cloud environments
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Challenge: Split Identity</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Many organizations struggle with "Split Identity." They have legacy on-premise Active Directory for local
              resources and <strong>Microsoft Entra ID</strong> for the cloud, leading to orphaned accounts, security
              gaps, and manual "double-work" for IT teams.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Without a unified identity governance platform, organizations face compliance risks, audit failures, and
              security vulnerabilities from accounts that exist in one system but not the other.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Specialized Approach: "Synchronized Sovereignty"</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We don't just sync accounts; we build a unified{" "}
              <a
                href="https://www.sailpoint.com/products/connectivity-and-integrations/catalog/microsoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                identity security ecosystem
              </a>{" "}
              where SailPoint acts as the "Brain" and Microsoft Entra ID acts as the "Muscle."
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-accent/50">
                <GitBranch className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-base font-semibold mb-2">Hybrid Provisioning</h3>
                <p className="text-sm text-muted-foreground">
                  Automated workflows where AD accounts are created first, followed by seamless Entra ID linkage
                </p>
              </Card>

              <Card className="p-6 border-accent/50">
                <Shield className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-base font-semibold mb-2">Unified Governance</h3>
                <p className="text-sm text-muted-foreground">
                  Single pane of glass for access reviews covering both on-prem and cloud resources
                </p>
              </Card>

              <Card className="p-6 border-accent/50">
                <Database className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-base font-semibold mb-2">Lifecycle Management</h3>
                <p className="text-sm text-muted-foreground">
                  Synchronized provisioning and de-provisioning eliminating zombie accounts
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">What We Deliver</h2>

            <div className="space-y-6">
              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold mb-3">Hybrid Provisioning Workflows</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Automated account creation where the{" "}
                  <a
                    href="https://community.sailpoint.com/t5/Identity-Security-Cloud-Wiki/Hybrid-Provisioning-with-Active-Directory-and-Azure-Active/ta-p/231701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Active Directory account is created first
                  </a>
                  , followed by seamless Entra ID object linkage and M365 license assignment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      AD account creation with proper OU placement and group membership
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Entra ID sync via Azure AD Connect or Entra Connect
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Automated Microsoft 365 license assignment based on role
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold mb-3">Unified Lifecycle Management</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  When an employee leaves, our{" "}
                  <a
                    href="https://www.sailpoint.com/identity-library/modernize-legacy-identity-security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    SailPoint Identity Security Cloud
                  </a>{" "}
                  integration ensures access is revoked across both on-prem and cloud systems simultaneously—eliminating
                  "zombie accounts."
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Simultaneous account disablement across AD and Entra ID
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Automated mailbox conversion and delegation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Application access revocation across SaaS and on-prem apps
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold mb-3">Advanced Governance & Compliance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We implement{" "}
                  <a
                    href="https://cyberiam.com/sailpoint-vendor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Access Reviews
                  </a>{" "}
                  that cover the entire hybrid fabric, ensuring users have the right access to everything from local
                  file shares to cloud-native apps.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Automated access certification campaigns for compliance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Role-based access control (RBAC) modeling and enforcement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Segregation of Duties (SoD) policy enforcement
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold mb-3">Complex Attribute Mapping</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expertly handling{" "}
                  <a
                    href="https://developer.sailpoint.com/discuss/t/exchange-mailbox-provisioning/136713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    attribute sync challenges
                  </a>{" "}
                  like multi-valued attributes and remote mailbox provisioning that native tools often miss.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Custom transform rules for complex attribute mappings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Exchange hybrid mailbox provisioning logic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Multi-valued attribute handling for group memberships
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Why This Expertise Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-accent/50 bg-card">
                <h3 className="text-base font-semibold mb-2">Niche Authority</h3>
                <p className="text-sm text-muted-foreground">
                  Large enterprises use both SailPoint and Microsoft. We understand the{" "}
                  <a
                    href="https://community.sailpoint.com/t5/Identity-Security-Cloud-Wiki/Hybrid-Provisioning-with-Active-Directory-and-Azure-Active/ta-p/231701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    interplay between IdentityNow and Entra Connect
                  </a>
                  .
                </p>
              </Card>

              <Card className="p-6 border-accent/50 bg-card">
                <h3 className="text-base font-semibold mb-2">Real-World Experience</h3>
                <p className="text-sm text-muted-foreground">
                  We've implemented complex hybrid provisioning workflows for organizations with 10,000+ users spanning
                  multiple AD forests and Azure tenants.
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
            <h2 className="text-2xl font-bold mb-4">Struggling with Hybrid Identity?</h2>
            <p className="text-base text-muted-foreground mb-8">
              If your organization is dealing with SailPoint and Microsoft Entra ID integration challenges, let's talk.
              We specialize in making these complex systems work together seamlessly.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://calendly.com/advisory-emidentity/30min" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
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
