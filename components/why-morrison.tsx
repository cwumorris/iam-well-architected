import { CheckCircle2 } from "lucide-react"

export function WhyMorrison() {
  const reasons = [
    "10+ years in identity, cloud, and security architecture",
    "Deep expertise in Microsoft Entra ID and Azure",
    "Experience across regulated and enterprise environments",
    "Proven ability to translate business risk into secure, scalable solutions",
    "Designed and built multiple infrastructures, onPrem, cloud and hybrid",
  ]

  return (
    <section id="why-morrison" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-2xl font-bold tracking-tight md:text-3xl">
            Why Morrison Identity & Cloud Security
          </h2>

          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-base leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
