import { Card } from "@/components/ui/card"

export function Infographics() {
  return (
    <section id="infographics" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">Security Assessment Process</h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            Our structured approach to identity vulnerability assessment and Zero Trust implementation
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-2">
          <Card className="overflow-hidden border-border bg-card">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <img
                src="/security-vulnerability-assessment-process-diagram.jpg"
                alt="Security Vulnerability Assessment Process"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold">Vulnerability Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive identity platform review identifying misconfigurations and access risks
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border-border bg-card">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <img
                src="/zero-trust-architecture-diagram-conditional-access.jpg"
                alt="Zero Trust Architecture Implementation"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold">Zero Trust Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Modern identity architecture with Conditional Access and privileged access controls
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border-border bg-card">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <img
                src="/azure-landing-zone-architecture-diagram-enterprise.jpg"
                alt="Azure Landing Zone Architecture"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold">Azure Landing Zone Design</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade Azure cloud infrastructure with governance, security, and compliance frameworks
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border-border bg-card">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <img
                src="/microsoft-security-assessment-entra-id-audit.jpg"
                alt="Microsoft Security Assessment"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold">Microsoft Security Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive Microsoft Entra ID and Azure security posture evaluation with remediation roadmap
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <Card className="overflow-hidden border-border bg-card">
            <div className="aspect-[21/9] bg-muted flex items-center justify-center">
              <video className="h-full w-full object-cover" controls poster="/identity-security-automation.jpg">
                <source src="/placeholder-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold">Identity Security Automation</h3>
              <p className="text-sm text-muted-foreground">
                Watch how we automate identity governance and streamline security operations
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
