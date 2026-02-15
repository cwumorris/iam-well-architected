import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Building2, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OurServices() {
  const services = [
    {
      icon: Shield,
      title: "Identity & Access Security Review",
      description:
        "A focused assessment of your identity platform to uncover misconfigurations, access risks, and policy gaps — with a clear, actionable remediation plan.",
      link: null,
    },
    {
      icon: Lock,
      title: "Zero Trust & Cloud Identity Architecture",
      description:
        "Design and modernization of identity platforms using Zero Trust principles, including Conditional Access, privileged access, and secure application integration.",
      link: null,
    },
    {
      icon: Code,
      title: "DevSecOps & IAM Automation",
      description:
        "Automate identity workflows, harden CI/CD pipelines, and implement Infrastructure as Code security with Zero Trust principles.",
      link: "/devsecops",
    },
    {
      icon: Building2,
      title: "Fractional Security & Identity Architecture",
      description:
        "Ongoing advisory and architecture support for organizations that need senior identity leadership without a full-time hire.",
      link: null,
    },
  ]

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">Our Services</h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed mb-4">{service.description}</CardDescription>
                {service.link && (
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
