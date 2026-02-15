import { CheckCircle2 } from "lucide-react"

export function HowWeWork() {
  const workItems = [
    "Remote-first delivery",
    "Clear scope and outcomes",
    "Executive-ready documentation",
    "Close collaboration with internal teams",
  ]

  return (
    <section id="how-we-work" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">How We Work</h2>

          <ul className="mb-6 space-y-3">
            {workItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-base leading-relaxed text-muted-foreground">
            Engagements are structured, time-bound, and designed to deliver measurable improvements quickly.
          </p>
        </div>
      </div>
    </section>
  )
}
