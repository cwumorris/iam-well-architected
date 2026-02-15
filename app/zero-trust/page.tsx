import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ZeroTrustArchitectureDiagram } from "@/components/zero-trust-diagram"
import { Shield, ArrowRight, CheckCircle2, Server, Users, Lock, Eye, Cpu, Cloud, Monitor, FileKey, ShieldCheck, Layers } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Zero Trust Architecture & Identity Infrastructure | EM Identity",
  description:
    "Identity-first infrastructure for modern organizations. Design secure environments from the ground up or transform legacy systems into identity-centric Zero Trust architectures.",
}

export default function ZeroTrustPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-muted/60 to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Zero Trust Architecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Identity-First Infrastructure for Modern Organizations
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-8 text-pretty">
            Designing secure environments from the ground up — or transforming legacy systems into identity-centric, Zero Trust architectures.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/advisory-emidentity/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              Run a Risk Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Reality</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Most growing companies don't start insecure. They start <strong className="text-foreground">fast</strong>.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Infrastructure is built quickly. Remote access is enabled out of necessity. SaaS grows organically. Identity controls are added later — if at all.
              </p>
              <p className="text-sm font-semibold text-foreground">Over time this leads to:</p>
            </div>
            <div className="space-y-3">
              {[
                "Direct RDP or SSH exposure",
                "Privileged account sprawl",
                "Inconsistent SSO implementation",
                "No centralized session auditing",
                "Manual user provisioning",
                "Legacy authentication still enabled",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center max-w-2xl mx-auto">
            <p className="text-base font-semibold text-foreground">Zero Trust isn't a product you buy.</p>
            <p className="text-base font-bold text-primary mt-1">It's an architecture you design.</p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Identity-Centric Zero Trust Architecture</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              A layered security model where identity is the control plane and every access request is verified.
            </p>
          </div>
          <ZeroTrustArchitectureDiagram />
        </div>
      </section>

      {/* What EM Identity Delivers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-10 text-center">What EM Identity Delivers</h2>

          {/* Service 1 */}
          <div className="mb-12 rounded-xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-bold">1</div>
              <h3 className="text-lg font-bold">Greenfield Identity Architecture</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5">For startups building infrastructure from scratch. We design secure identity-first environments where:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Active Directory and cloud identity are properly integrated",
                "Role-based access is defined from day one",
                "Remote access is brokered — never exposed",
                "Administrative sessions are logged and controlled",
                "Least privilege is enforced by design",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              This creates a scalable identity plane that grows with the organization.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-12 rounded-xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-bold">2</div>
              <h3 className="text-lg font-bold">Infrastructure Modernization & Secure Revamp</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5">For organizations with existing infrastructure that needs hardening. We transform environments by:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Removing direct service exposure",
                "Implementing centralized access gateways",
                "Introducing bastion-controlled administrative workflows",
                "Enforcing SSO across internal systems",
                "Reducing global administrator dependency",
                "Aligning identity policies with Zero Trust principles",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg bg-muted/50 p-4">
              <p className="text-xs text-muted-foreground"><strong className="text-foreground">The goal is not disruption.</strong> The goal is controlled evolution.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-bold">3</div>
              <h3 className="text-lg font-bold">Identity Engineering & Automation</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5">For environments requiring advanced integration. Capabilities include:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Federation architecture design",
                "SCIM-based lifecycle automation",
                "Identity provisioning orchestration",
                "API-driven access control integrations",
                "Custom identity bridging where native support is limited",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              When off-the-shelf configuration is insufficient, engineered identity solutions close the gap.
            </p>
          </div>
        </div>
      </section>

      {/* Zero Trust in Practice */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Zero Trust in Practice</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base font-semibold mb-4">Zero Trust means:</h3>
              <div className="space-y-3">
                {[
                  "Every access request is verified",
                  "Privileges are scoped and time-bound",
                  "Sessions are auditable",
                  "Infrastructure is not publicly exposed",
                  "Identity is the control plane",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-4">EM Identity applies these across:</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Cloud, label: "Hybrid environments" },
                  { icon: Cpu, label: "Cloud-native startups" },
                  { icon: Users, label: "Distributed teams" },
                  { icon: Monitor, label: "Remote-first organizations" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                    <item.icon className="h-4 w-4 text-primary shrink-0" />
                    <p className="text-xs font-medium text-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Outcomes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Architectural Outcomes</h2>
          <p className="text-sm text-muted-foreground text-center mb-8 max-w-lg mx-auto">Clients typically achieve:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Lock, text: "Elimination of public RDP/SSH exposure" },
              { icon: FileKey, text: "Centralized authentication across systems" },
              { icon: Server, text: "Controlled administrative access" },
              { icon: Users, text: "Reduced privilege sprawl" },
              { icon: Eye, text: "Audit-ready session logging" },
              { icon: Cpu, text: "Identity lifecycle automation" },
              { icon: Layers, text: "Clear separation of user, admin, and service roles" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <item.icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold text-center mt-8 text-primary">
            Zero Trust becomes operational — not theoretical.
          </p>
        </div>
      </section>

      {/* Designed for Scaling Teams */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Designed for Scaling Teams</h2>
          <p className="text-sm text-muted-foreground text-center mb-8">Most effective for organizations:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "20-300 employees",
              "Distributed or remote-first",
              "Post-seed or Series A infrastructure",
              "Preparing for compliance frameworks",
              "Seeking structured identity governance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <p className="text-xs text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Approach</h2>
          <p className="text-sm text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            EM Identity engagements follow a structured model:
          </p>
          <div className="flex flex-col gap-0">
            {[
              { step: "01", title: "Identity & Infrastructure Assessment", desc: "Comprehensive evaluation of current identity posture and infrastructure" },
              { step: "02", title: "Exposure & Privilege Mapping", desc: "Identify all attack surfaces and privilege escalation paths" },
              { step: "03", title: "Architecture Blueprint", desc: "Design the target-state Zero Trust architecture" },
              { step: "04", title: "Phased Implementation", desc: "Execute migration with zero disruption to operations" },
              { step: "05", title: "Policy & Governance Alignment", desc: "Embed security at the architectural layer" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-stretch gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  {i < 4 && <div className="w-px flex-1 bg-primary/20" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4 italic">
            Security is embedded at the architectural layer — not added afterward.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Architect Zero Trust?</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            If you are building new infrastructure or modernizing legacy systems, now is the moment to design it correctly.
          </p>
          <a
            href="https://calendly.com/advisory-emidentity/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Schedule an Architecture Review
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
