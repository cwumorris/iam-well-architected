"use client"

import type { OrgProfile } from "@/components/assessment-simulation"
import { cn } from "@/lib/utils"

function getClassificationData(profile: OrgProfile) {
  const base = profile.size
  const critical = Math.round(base * 0.12)
  const high = Math.round(base * 0.22)
  const medium = Math.round(base * 0.38)
  const low = base - critical - high - medium
  return { critical, high, medium, low, total: base }
}

const criticalReasons = [
  "Domain Controllers & Global Admin accounts",
  "Publicly exposed services holding PII",
  "Privileged identity endpoints without MFA",
  "Systems with unpatched critical CVEs",
]

export function PhaseThree({ profile }: { profile: OrgProfile }) {
  const data = getClassificationData(profile)
  const segments = [
    { label: "Critical", count: data.critical, pct: Math.round((data.critical / data.total) * 100), color: "bg-red-500", textColor: "text-red-600", barColor: "bg-red-500" },
    { label: "High", count: data.high, pct: Math.round((data.high / data.total) * 100), color: "bg-amber-500", textColor: "text-amber-600", barColor: "bg-amber-500" },
    { label: "Medium", count: data.medium, pct: Math.round((data.medium / data.total) * 100), color: "bg-sky-500", textColor: "text-sky-600", barColor: "bg-sky-500" },
    { label: "Low", count: data.low, pct: Math.round((data.low / data.total) * 100), color: "bg-emerald-500", textColor: "text-emerald-600", barColor: "bg-emerald-500" },
  ]

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground leading-relaxed">
        Every discovered asset is automatically scored and classified by criticality based on role, exposure,
        data sensitivity, and privilege level. This drives our remediation priority engine.
      </p>

      {/* Criticality Distribution */}
      <div className="grid gap-4 md:grid-cols-4">
        {segments.map((seg) => (
          <div key={seg.label} className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className={cn("h-3 w-3 rounded-full", seg.color)} />
              <p className="text-xs font-semibold uppercase tracking-wider">{seg.label}</p>
            </div>
            <p className="text-2xl font-bold font-mono mb-1">{seg.count}</p>
            <p className="text-xs text-muted-foreground">
              {seg.pct}% of total assets
            </p>
          </div>
        ))}
      </div>

      {/* Horizontal Stacked Bar */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Asset Criticality Distribution
        </p>
        <div className="flex h-8 rounded-lg overflow-hidden">
          {segments.map((seg) => (
            <div
              key={seg.label}
              className={cn("flex items-center justify-center transition-all", seg.barColor)}
              style={{ width: `${seg.pct}%` }}
            >
              {seg.pct > 10 && (
                <span className="text-[10px] font-bold text-white">{seg.pct}%</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-1.5">
              <span className={cn("h-2 w-2 rounded-full", seg.color)} />
              <span className="text-[10px] text-muted-foreground">{seg.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Classification Logic */}
      <div className="rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
          Critical Classification Triggers
        </p>
        <div className="grid gap-2 md:grid-cols-2">
          {criticalReasons.map((reason) => (
            <div key={reason} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
              <p className="text-xs text-foreground leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
