import { Shield, Code, Lock, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DevSecOps & IAM Automation Consulting | Morrison Identity & Cloud Security",
  description:
    "Expert DevSecOps consulting for Microsoft Azure and Entra ID. Automate IAM provisioning, harden CI/CD pipelines, and implement secure Infrastructure as Code with Zero Trust principles.",
}

export default function DevSecOpsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative border-b border-border bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              DevSecOps & Automation
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Automate Security, <span className="text-primary">Scale Compliance</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
              Accelerate secure cloud adoption with automated IAM workflows, hardened CI/CD pipelines, and
              Infrastructure as Code built on Zero Trust principles.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href="https://calendly.com/advisory-emidentity/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DevSecOps Consulting Services</h2>
            <p className="text-lg text-muted-foreground">
              We integrate security automation into your development lifecycle, ensuring scalable governance without
              slowing down innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IAM Automation */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">IAM Automation & Provisioning</h3>
              <p className="text-muted-foreground mb-6">
                Eliminate manual identity management with automated workflows that ensure consistent, secure
                provisioning across Microsoft Entra ID, Azure, and hybrid environments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Automated user lifecycle management (onboarding/offboarding)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Dynamic group membership and role assignments via Graph API</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Self-service access request workflows with approval chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Integration with HR systems (Workday, SAP, BambooHR)</span>
                </li>
              </ul>
            </div>

            {/* IaC Security */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Infrastructure as Code Security</h3>
              <p className="text-muted-foreground mb-6">
                Secure your Terraform, Bicep, and ARM templates with automated policy enforcement, drift detection, and
                compliance scanning before deployment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Pre-deployment security scanning with Checkov, tfsec, Terrascan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Azure Policy and Sentinel integration for real-time compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Drift detection and automated remediation workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Secure state management with encryption and access controls</span>
                </li>
              </ul>
            </div>

            {/* Workload Identity Federation */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Workload Identity Federation</h3>
              <p className="text-muted-foreground mb-6">
                Replace long-lived secrets with short-lived tokens using OIDC federation between GitHub Actions, Azure
                Pipelines, and Azure resources.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Passwordless authentication for CI/CD pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Managed Identity integration for Azure workloads</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Service principal lifecycle management and rotation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Cross-cloud federation (AWS, GCP) with Azure AD</span>
                </li>
              </ul>
            </div>

            {/* CI/CD Pipeline Hardening */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CI/CD Pipeline Hardening</h3>
              <p className="text-muted-foreground mb-6">
                Build security into every stage of your deployment pipeline with automated gates, vulnerability
                scanning, and least-privilege access controls.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">SAST/DAST integration (SonarQube, Snyk, Dependabot)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Container image scanning and supply chain security</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Automated approval workflows with break-glass procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Deployment slot strategies and automated rollback triggers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Governance */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automated Governance & Compliance</h2>
            <p className="text-lg text-muted-foreground">
              Maintain continuous compliance without manual overhead through intelligent automation and real-time policy
              enforcement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Policy-as-Code</h3>
              <p className="text-sm text-muted-foreground">
                Version-controlled Azure Policies and OPA/Rego rules that enforce organizational standards across
                subscriptions and resource groups automatically.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Real-Time Alerting</h3>
              <p className="text-sm text-muted-foreground">
                Azure Monitor and Sentinel integration for immediate notification of policy violations, suspicious
                activity, and compliance drift.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Audit Trail Automation</h3>
              <p className="text-sm text-muted-foreground">
                Automated evidence collection for SOC 2, ISO 27001, and FedRAMP with exportable compliance reports and
                change tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Security Workflows?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a 30-minute discovery call to discuss how we can streamline your DevSecOps practices and
              accelerate secure cloud adoption.
            </p>
            <Button asChild size="lg" className="gap-2">
              <a href="https://calendly.com/advisory-emidentity/30min" target="_blank" rel="noopener noreferrer">
                Book a Discovery Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
