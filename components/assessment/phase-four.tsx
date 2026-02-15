"use client"

import type { OrgProfile } from "@/components/assessment-simulation"
import { cn } from "@/lib/utils"
import { ShieldAlert, AlertTriangle, Lock, UserX, Key, ShieldOff } from "lucide-react"

const findings = [
  {
    title: "Global Admin Overprovisioning",
    severity: "Critical",
    icon: ShieldAlert,
    desc: "Multiple accounts with Global Admin privileges that should use scoped roles (e.g., Exchange Admin, Security Reader).",
    impact: "Full tenant compromise if any single account is breached.",
  },
  {
    title: "MFA Disabled for Privileged Accounts",
    severity: "Critical",
    icon: Lock,
    desc: "Privileged accounts operating without Multi-Factor Authentication, exposing the entire identity plane.",
    impact: "90% of identity-based breaches exploit accounts without MFA.",
  },
  {
    title: "Dormant Admin Accounts",
    severity: "High",
    icon: UserX,
    desc: "Admin accounts inactive for 60+ days that retain full privileges. Common attack vector in compromised environments.",
    impact: "Invisible persistence for threat actors post-breach.",
  },
  {
    title: "Weak Conditional Access Policies",
    severity: "High",
    icon: Key,
    desc: "Conditional Access policies not enforcing device compliance, location restrictions, or session timeouts for sensitive apps.",
    impact: "Unauthorized access from unmanaged devices and locations.",
  },
  {
    title: "Legacy Authentication Enabled",
    severity: "Medium",
    icon: ShieldOff,
    desc: "Legacy protocols (POP3, IMAP, SMTP Auth) still active, bypassing modern authentication controls entirely.",
    impact: "Password spray and brute force attacks bypass MFA.",
  },
]

export function PhaseFour({ profile }: { profile: OrgProfile }) {
  const affectedAccounts = Math.round(profile.size * 0.08)
  const dormant = Math.round(affectedAccounts * 0.4)

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground leading-relaxed">
        This is where EM Identity differentiates. We go beyond asset inventory to deeply analyze identity
        relationships, privilege escalation paths, and access policy gaps across your environment.
      </p>

      {/* Identity Risk Heat Map */}
      <div className="rounded-lg border border-border bg-card p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Identity Risk Heat Map
        </p>
        <div className="grid grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {/* Header row */}
          <div className="bg-muted p-2" />
          <div className="bg-muted p-2 text-center">
            <span className="text-[10px] font-semibold">Low Privilege</span>
          </div>
          <div className="bg-muted p-2 text-center">
            <span className="text-[10px] font-semibold">Medium Privilege</span>
          </div>
          <div className="bg-muted p-2 text-center">
            <span className="text-[10px] font-semibold">High Privilege</span>
          </div>
          {/* High Exposure */}
          <div className="bg-muted p-2">
            <span className="text-[10px] font-semibold">High Exposure</span>
          </div>
          <div className="bg-amber-100 p-3 text-center">
            <span className="text-xs font-bold text-amber-800">{Math.round(profile.size * 0.15)}</span>
          </div>
          <div className="bg-red-100 p-3 text-center">
            <span className="text-xs font-bold text-red-800">{Math.round(profile.size * 0.06)}</span>
          </div>
          <div className="bg-red-200 p-3 text-center">
            <span className="text-xs font-bold text-red-900">{Math.round(profile.size * 0.03)}</span>
          </div>
          {/* Medium Exposure */}
          <div className="bg-muted p-2">
            <span className="text-[10px] font-semibold">Med Exposure</span>
          </div>
          <div className="bg-emerald-50 p-3 text-center">
            <span className="text-xs font-bold text-emerald-800">{Math.round(profile.size * 0.3)}</span>
          </div>
          <div className="bg-amber-100 p-3 text-center">
            <span className="text-xs font-bold text-amber-800">{Math.round(profile.size * 0.12)}</span>
          </div>
          <div className="bg-red-100 p-3 text-center">
            <span className="text-xs font-bold text-red-800">{Math.round(profile.size * 0.04)}</span>
          </div>
          {/* Low Exposure */}
          <div className="bg-muted p-2">
            <span className="text-[10px] font-semibold">Low Exposure</span>
          </div>
          <div className="bg-emerald-50 p-3 text-center">
            <span className="text-xs font-bold text-emerald-800">{Math.round(profile.size * 0.2)}</span>
          </div>
          <div className="bg-emerald-50 p-3 text-center">
            <span className="text-xs font-bold text-emerald-800">{Math.round(profile.size * 0.07)}</span>
          </div>
          <div className="bg-amber-100 p-3 text-center">
            <span className="text-xs font-bold text-amber-800">{Math.round(profile.size * 0.03)}</span>
          </div>
        </div>
      </div>

      {/* Findings List */}
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Simulated Findings ({findings.length})
        </p>
        {findings.map((finding) => {
          const Icon = finding.icon
          return (
            <div
              key={finding.title}
              className={cn(
                "rounded-lg border p-4",
                finding.severity === "Critical" ? "border-red-200 bg-red-50/50" : finding.severity === "High" ? "border-amber-200 bg-amber-50/50" : "border-border bg-muted/20",
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "mt-0.5 rounded-full p-1.5",
                    finding.severity === "Critical" ? "bg-red-100" : finding.severity === "High" ? "bg-amber-100" : "bg-muted",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5",
                      finding.severity === "Critical" ? "text-red-600" : finding.severity === "High" ? "text-amber-600" : "text-muted-foreground",
                    )}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold">{finding.title}</h4>
                    <span
                      className={cn(
                        "text-[10px] font-bold uppercase px-1.5 py-0.5 rounded",
                        finding.severity === "Critical" ? "bg-red-100 text-red-700" : finding.severity === "High" ? "bg-amber-100 text-amber-700" : "bg-muted text-muted-foreground",
                      )}
                    >
                      {finding.severity}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-1">{finding.desc}</p>
                  <p className="text-xs text-foreground">
                    <span className="font-semibold">Impact:</span> {finding.impact}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-red-200 bg-red-50/50 p-3 text-center">
          <p className="text-lg font-bold font-mono text-red-700">{affectedAccounts}</p>
          <p className="text-[10px] text-red-600 font-medium">Affected Accounts</p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3 text-center">
          <p className="text-lg font-bold font-mono text-amber-700">{dormant}</p>
          <p className="text-[10px] text-amber-600 font-medium">Dormant Admins</p>
        </div>
        <div className="rounded-lg border border-border bg-muted/30 p-3 text-center">
          <p className="text-lg font-bold font-mono text-primary">{findings.length}</p>
          <p className="text-[10px] text-muted-foreground font-medium">Total Findings</p>
        </div>
      </div>
    </div>
  )
}
