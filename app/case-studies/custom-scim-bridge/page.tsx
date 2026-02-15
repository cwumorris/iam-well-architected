import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Code, Shield, Zap } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Custom SCIM Bridge with FastAPI & Python | Morrison Identity",
  description:
    "Learn how we built a custom SCIM 2.0 bridge using FastAPI and Python to enable SSO and automated provisioning between Microsoft Entra ID and legacy remote access tools.",
}

export default function CustomSCIMBridgePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground mb-4">
              <Code className="h-3.5 w-3.5" />
              <span>Use Case</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-balance">
              Solving the "Incompatible App" Problem: Custom SCIM Bridge with FastAPI
            </h1>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              Building a custom SCIM 2.0 gateway to automate user provisioning between Microsoft Entra ID and legacy
              applications that lack native SCIM support
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
              Our client used a powerful open-source remote access solution that lacked native support for{" "}
              <a
                href="https://www.microsoft.com/en-us/security/business/security-101/what-is-scim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                SCIM (System for Cross-domain Identity Management)
              </a>
              . This meant they couldn't automate user provisioning from Microsoft Entra ID (Azure AD), creating massive
              manual overhead and a security risk for offboarding.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Without automated provisioning, IT teams had to manually create and delete user accounts, leading to
              delays in onboarding and dangerous "zombie accounts" remaining active after employees left.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Technical Architecture</h2>
            <Card className="p-6 bg-card border-border">
              <Image
                src="/images/image.png"
                alt="Hybrid SCIM Architecture: Entra ID to Custom App"
                width={1200}
                height={700}
                className="w-full h-auto rounded-lg"
                priority
              />
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">The Morrison Identity Solution</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We built a custom, lightweight{" "}
              <a
                href="https://www.scalekit.com/blog/build-scim-endpoint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                SCIM 2.0 gateway
              </a>{" "}
              using <strong>Python</strong> and <strong>FastAPI</strong>. This middleware acts as the "translator"
              between Microsoft's cloud provisioning service and the internal app's database.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 border-accent/50">
                <Shield className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-base font-semibold mb-2">The Bridge</h3>
                <p className="text-sm text-muted-foreground">
                  High-performance FastAPI application receiving standard SCIM requests from Entra ID
                </p>
              </Card>

              <Card className="p-6 border-accent/50">
                <Code className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-base font-semibold mb-2">Secure Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  OAuth 2.0 Bearer Token validation ensuring only authorized Azure traffic triggers provisioning
                </p>
              </Card>

              <Card className="p-6 border-accent/50">
                <Zap className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-base font-semibold mb-2">Schema Mapping</h3>
                <p className="text-sm text-muted-foreground">
                  Complex Azure AD attributes mapped to internal SQL requirements with perfect data integrity
                </p>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mb-4">Implementation Details</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <strong>FastAPI Framework:</strong> Built with Python's modern async framework for high-performance
                  request handling
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <strong>OAuth 2.0 Security:</strong> Implemented bearer token validation to ensure only your Azure
                  tenant can provision users
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <strong>CRUD Operations:</strong> Full support for Create, Read, Update, and Delete user operations
                  via SCIM 2.0 protocol
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <strong>Attribute Mapping Logic:</strong> Custom Python logic to translate Azure AD user attributes to
                  your internal database schema
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <strong>SSO Ready:</strong> Automated user lifecycle enabling seamless Single Sign-On experience with
                  corporate credentials
                </span>
              </li>
            </ul>

            <Card className="p-6 bg-muted/50 border-border">
              <Image
                src="/images/image.png"
                alt="FastAPI SCIM Bridge Python Implementation"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-xs text-muted-foreground mt-4 text-center">
                FastAPI SCIM Bridge implementation with OAuth 2.0 validation and attribute mapping logic
              </p>
            </Card>
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
                <h3 className="text-3xl font-bold text-accent mb-2">Zero</h3>
                <p className="text-sm font-semibold mb-2">Manual Provisioning</p>
                <p className="text-sm text-muted-foreground">
                  New hires automatically granted remote access based on Entra ID group membership
                </p>
              </Card>

              <Card className="p-6 border-accent/50 bg-card">
                <h3 className="text-3xl font-bold text-accent mb-2">Instant</h3>
                <p className="text-sm font-semibold mb-2">De-provisioning</p>
                <p className="text-sm text-muted-foreground">
                  User disabled in Azure? Remote access revoked in milliseconds—no zombie accounts
                </p>
              </Card>

              <Card className="p-6 border-accent/50 bg-card">
                <h3 className="text-3xl font-bold text-accent mb-2">Cost Efficient</h3>
                <p className="text-sm font-semibold mb-2">Open Source Solution</p>
                <p className="text-sm text-muted-foreground">
                  Avoided expensive "Enterprise Connectors" with tailored, open-source friendly solution
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
            <h2 className="text-2xl font-bold mb-4">Need Custom IAM Integration?</h2>
            <p className="text-base text-muted-foreground mb-8">
              If your organization has legacy applications that lack modern IAM support, we can build custom bridges to
              automate provisioning and enable SSO.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://calendly.com/advisory-emidentity/30min" target="_blank" rel="noopener noreferrer">
                Book a Technical Consultation
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
