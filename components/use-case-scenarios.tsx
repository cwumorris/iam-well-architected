"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, MonitorSmartphone, ClipboardCheck, DollarSign, ArrowRight, X, Play } from "lucide-react"
import { PrivilegedAccessScenario } from "@/components/scenarios/privileged-access"
import { ShadowItScenario } from "@/components/scenarios/shadow-it"
import { ComplianceGapScenario } from "@/components/scenarios/compliance-gap"
import { CostOptimizationScenario } from "@/components/scenarios/cost-optimization"

const scenarios = [
  {
    id: "privileged-access",
    icon: ShieldAlert,
    title: "Privileged Access Exposure in a Hybrid Environment",
    description: "Discover how overprivileged accounts and missing conditional access policies create the #1 silent risk in growing companies.",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  {
    id: "shadow-it",
    icon: MonitorSmartphone,
    title: "Unmanaged Assets & Shadow IT Detection",
    description: "See how unknown SaaS tools, unenrolled devices, and unsupported systems expose your organization.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    id: "compliance-gap",
    icon: ClipboardCheck,
    title: "Compliance Gap Analysis (ISO / NIST Aligned)",
    description: "Watch as we map your controls against major frameworks and auto-generate remediation plans.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    id: "cost-optimization",
    icon: DollarSign,
    title: "Security Cost Optimization",
    description: "Uncover unused licenses, overprovisioned compute, and duplicate SaaS subscriptions draining your budget.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
]

export function UseCaseScenarios() {
  const [activeScenario, setActiveScenario] = useState<string | null>(null)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {!activeScenario ? (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {scenarios.map((scenario) => (
              <Card
                key={scenario.id}
                className={`p-6 cursor-pointer border ${scenario.border} hover:shadow-lg transition-all duration-300 group`}
                onClick={() => setActiveScenario(scenario.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${scenario.bg} shrink-0`}>
                    <scenario.icon className={`h-5 w-5 ${scenario.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                      {scenario.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {scenario.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-medium text-primary">
                      <Play className="h-3.5 w-3.5" />
                      View Scenario
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <Button
              variant="ghost"
              size="sm"
              className="mb-6 text-xs"
              onClick={() => setActiveScenario(null)}
            >
              <X className="h-3.5 w-3.5 mr-1" />
              Back to all scenarios
            </Button>

            {activeScenario === "privileged-access" && <PrivilegedAccessScenario />}
            {activeScenario === "shadow-it" && <ShadowItScenario />}
            {activeScenario === "compliance-gap" && <ComplianceGapScenario />}
            {activeScenario === "cost-optimization" && <CostOptimizationScenario />}
          </div>
        )}
      </div>
    </section>
  )
}
