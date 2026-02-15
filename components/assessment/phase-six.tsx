"use client"

import type { OrgProfile } from "@/components/assessment-simulation"
import { cn } from "@/lib/utils"
import { TrendingDown, Shield, AlertTriangle, BarChart3, CheckCircle2 } from "lucide-react"

function getExecData(profile: OrgProfile) {
  const base = profile.size
  return {
    totalAssets: base,
    highRiskAssets: Math.round(base * 0.34),
    identityExposure: 72,
    compliancePct: profile.industry === "finance" ? 68 : profile.industry === "healthcare" ? 62 : 58,
    postRemediation: 34,
    remediations: [
      {
        title: "Enforce MFA for all privileged accounts",
        impact: "Eliminates 90% of identity-based attack vectors",
        effort: "Low",
      },
      {
        title: "Revoke unnecessary Global Admin assignments",
        impact: "Reduces blast radius of compromised accounts by 70%",
        effort: "Low",
      },
      {
        title: "Disable legacy authentication protocols",
        impact: "Blocks password spray and brute force bypass of MFA",
        effort: "Medium",
      },
      {
        title: "Implement Conditional Access with device compliance",
        impact: "Prevents access from unmanaged and non-compliant devices",
        effort: "Medium",
      },
      {
        title: "Remediate dormant admin accounts and enable PIM",
        impact: "Eliminates persistent access risks and enforces JIT access",
        effort: "Medium",
      },
    ],
  }
}

export function PhaseSix({ profile }: { profile: OrgProfile }) {
  const data = getExecData(profile)

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground leading-relaxed">
        The final deliverable is a board-ready executive summary. This report translates technical findings into
        business risk language with clear remediation priorities and projected risk reduction.
      </p>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <BarChart3 className="h-4 w-4 mx-auto mb-2 text-primary" />
          <p className="text-xl font-bold font-mono">{data.totalAssets}</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-1">Total Assets</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50/50 p-4 text-center">
          <AlertTriangle className="h-4 w-4 mx-auto mb-2 text-red-600" />
          <p className="text-xl font-bold font-mono text-red-700">{data.highRiskAssets}</p>
          <p className="text-[10px] text-red-600 font-medium mt-1">High Risk Assets</p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-center">
          <Shield className="h-4 w-4 mx-auto mb-2 text-amber-600" />
          <p className="text-xl font-bold font-mono text-amber-700">{data.identityExposure}</p>
          <p className="text-[10px] text-amber-600 font-medium mt-1">Identity Exposure Score</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <CheckCircle2 className="h-4 w-4 mx-auto mb-2 text-primary" />
          <p className="text-xl font-bold font-mono">{data.compliancePct}%</p>
          <p className="text-[10px] text-muted-foreground font-medium mt-1">Compliance Score</p>
        </div>
      </div>

      {/* Before vs After */}
      <div className="rounded-lg border border-border bg-card p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown className="h-4 w-4 text-primary" />
          <p className="text-xs font-semibold uppercase tracking-wider">
            Projected Risk Reduction with EM Identity Remediation
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* Current */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Current Risk Score</p>
            <div className="h-4 rounded-full bg-muted overflow-hidden mb-1">
              <div className="h-full rounded-full bg-red-500" style={{ width: `${data.identityExposure}%` }} />
            </div>
            <p className="text-right text-lg font-bold font-mono text-red-600">{data.identityExposure}/100</p>
          </div>
          {/* Post */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Post-Remediation Projection</p>
            <div className="h-4 rounded-full bg-muted overflow-hidden mb-1">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: `${data.postRemediation}%` }} />
            </div>
            <p className="text-right text-lg font-bold font-mono text-emerald-600">{data.postRemediation}/100</p>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-primary/5 border border-primary/20 p-3 text-center">
          <p className="text-xs text-muted-foreground">Estimated Risk Reduction</p>
          <p className="text-xl font-bold text-primary">
            {Math.round(((data.identityExposure - data.postRemediation) / data.identityExposure) * 100)}%
          </p>
        </div>
      </div>

      {/* Top 5 Remediations */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Top 5 Immediate Remediations
        </p>
        <div className="space-y-2">
          {data.remediations.map((rem, i) => (
            <div key={rem.title} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold mb-0.5">{rem.title}</h4>
                <p className="text-xs text-muted-foreground">{rem.impact}</p>
              </div>
              <span
                className={cn(
                  "text-[10px] font-bold uppercase px-1.5 py-0.5 rounded shrink-0",
                  rem.effort === "Low" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700",
                )}
              >
                {rem.effort}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 text-center">
        <h3 className="text-base font-bold mb-2">Ready for a Real Assessment?</h3>
        <p className="text-xs text-muted-foreground mb-1 leading-relaxed">
          This was a guided simulation. Let EM Identity run a real assessment against your environment.
        </p>
        <p className="text-xs text-muted-foreground mb-4">
          Contact us at{" "}
          <a href="mailto:advisory@emidentity.com" className="text-primary hover:underline">
            advisory@emidentity.com
          </a>
        </p>
        <a
          href="https://calendly.com/advisory-emidentity/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Schedule Security Assessment
        </a>
      </div>
    </div>
  )
}
