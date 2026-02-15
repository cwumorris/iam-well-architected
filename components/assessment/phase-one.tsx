"use client"

import type { OrgProfile } from "@/components/assessment-simulation"
import { cn } from "@/lib/utils"
import { Building2, Cloud, Server, MonitorSmartphone } from "lucide-react"

const industries = [
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance" },
  { value: "tech", label: "Technology" },
  { value: "education", label: "Education" },
  { value: "sme", label: "SME / Startup" },
]

const sizes = [
  { value: 10, label: "10 Assets" },
  { value: 50, label: "50 Assets" },
  { value: 250, label: "250 Assets" },
  { value: 1000, label: "1,000 Assets" },
]

const environments = [
  { value: "onprem", label: "On-Premises", icon: Server, desc: "Traditional data center infrastructure" },
  { value: "hybrid", label: "Hybrid", icon: MonitorSmartphone, desc: "Mixed cloud and on-premises" },
  { value: "cloud", label: "Cloud-First", icon: Cloud, desc: "Primarily cloud-hosted services" },
]

export function PhaseOne({
  profile,
  setProfile,
}: {
  profile: OrgProfile
  setProfile: (p: OrgProfile) => void
}) {
  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground leading-relaxed">
        We begin every engagement with a structured intake process. Select your organization profile below to generate a
        baseline risk model tailored to your industry and environment type.
      </p>

      {/* Industry Selection */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 block">
          Industry Vertical
        </label>
        <div className="flex flex-wrap gap-2">
          {industries.map((ind) => (
            <button
              key={ind.value}
              onClick={() => setProfile({ ...profile, industry: ind.value })}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition-all",
                profile.industry === ind.value
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-foreground hover:border-primary/50",
              )}
            >
              {ind.label}
            </button>
          ))}
        </div>
      </div>

      {/* Organization Size */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 block">
          Organization Size
        </label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s.value}
              onClick={() => setProfile({ ...profile, size: s.value })}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition-all",
                profile.size === s.value
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-card text-foreground hover:border-primary/50",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Environment Type */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 block">
          Environment Type
        </label>
        <div className="grid gap-3 md:grid-cols-3">
          {environments.map((env) => {
            const Icon = env.icon
            return (
              <button
                key={env.value}
                onClick={() => setProfile({ ...profile, environment: env.value })}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-lg border p-5 text-center transition-all",
                  profile.environment === env.value
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border bg-card hover:border-primary/50",
                )}
              >
                <Icon
                  className={cn(
                    "h-6 w-6",
                    profile.environment === env.value ? "text-primary" : "text-muted-foreground",
                  )}
                />
                <span className="text-sm font-semibold">{env.label}</span>
                <span className="text-xs text-muted-foreground">{env.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Dynamic Preview */}
      {profile.industry && profile.environment && (
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-4 w-4 text-primary" />
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Baseline Profile Generated
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <p className="text-xs text-muted-foreground">Industry</p>
              <p className="text-sm font-semibold capitalize">{profile.industry}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Assets</p>
              <p className="text-sm font-semibold">{profile.size.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Environment</p>
              <p className="text-sm font-semibold capitalize">
                {profile.environment === "onprem" ? "On-Premises" : profile.environment === "cloud" ? "Cloud-First" : "Hybrid"}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Est. Identities</p>
              <p className="text-sm font-semibold">{Math.round(profile.size * 2.4).toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
