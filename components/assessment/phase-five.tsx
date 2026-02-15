"use client"

import type { OrgProfile } from "@/components/assessment-simulation"
import { cn } from "@/lib/utils"
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react"

function getComplianceData(profile: OrgProfile) {
  const industryModifier = profile.industry === "finance" ? 0.7 : profile.industry === "healthcare" ? 0.65 : 0.6
  const score = Math.round(industryModifier * 100)
  return {
    overallScore: score,
    frameworks: [
      {
        name: "ISO 27001",
        score: Math.round(score * 0.95),
        passed: 8,
        partial: 3,
        failed: 3,
        controls: [
          { name: "A.5 - Information Security Policies", status: "pass" },
          { name: "A.6 - Organization of Information Security", status: "partial" },
          { name: "A.9 - Access Control", status: "fail" },
          { name: "A.12 - Operations Security", status: "pass" },
        ],
      },
      {
        name: "NIST CSF",
        score: Math.round(score * 1.02),
        passed: 12,
        partial: 4,
        failed: 2,
        controls: [
          { name: "ID.AM - Asset Management", status: "pass" },
          { name: "PR.AC - Access Control", status: "fail" },
          { name: "PR.DS - Data Security", status: "partial" },
          { name: "DE.CM - Security Monitoring", status: "pass" },
        ],
      },
      {
        name: "CIS Controls",
        score: Math.round(score * 0.9),
        passed: 10,
        partial: 5,
        failed: 3,
        controls: [
          { name: "CIS 1 - Inventory of Enterprise Assets", status: "pass" },
          { name: "CIS 5 - Account Management", status: "fail" },
          { name: "CIS 6 - Access Control Management", status: "partial" },
          { name: "CIS 8 - Audit Log Management", status: "pass" },
        ],
      },
      {
        name: "Microsoft Secure Score",
        score: Math.round(score * 0.88),
        passed: 15,
        partial: 6,
        failed: 4,
        controls: [
          { name: "Identity - MFA Enforcement", status: "fail" },
          { name: "Identity - Conditional Access", status: "partial" },
          { name: "Data - DLP Policies", status: "pass" },
          { name: "Device - Compliance Policies", status: "partial" },
        ],
      },
    ],
  }
}

const statusIcon = {
  pass: <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />,
  partial: <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />,
  fail: <XCircle className="h-3.5 w-3.5 text-red-600" />,
}

export function PhaseFive({ profile }: { profile: OrgProfile }) {
  const data = getComplianceData(profile)

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground leading-relaxed">
        We translate technical findings into business-relevant compliance language by mapping every discovery against
        industry-standard frameworks. This empowers CISOs and compliance officers with audit-ready reporting.
      </p>

      {/* Overall Compliance Score */}
      <div className="flex items-center justify-center py-6">
        <div className="relative h-32 w-32">
          <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={`${data.overallScore * 3.14} ${(100 - data.overallScore) * 3.14}`}
              strokeLinecap="round"
              className={cn(
                data.overallScore >= 80 ? "text-emerald-500" : data.overallScore >= 60 ? "text-amber-500" : "text-red-500",
              )}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold font-mono">{data.overallScore}%</span>
            <span className="text-[10px] text-muted-foreground">Compliance</span>
          </div>
        </div>
      </div>

      {/* Framework Breakdown */}
      <div className="grid gap-4 md:grid-cols-2">
        {data.frameworks.map((fw) => (
          <div key={fw.name} className="rounded-lg border border-border bg-card p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold">{fw.name}</h4>
              <span className="text-xs font-mono font-bold text-primary">{fw.score}%</span>
            </div>
            {/* Score Bar */}
            <div className="h-1.5 rounded-full bg-muted mb-3 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  fw.score >= 70 ? "bg-emerald-500" : fw.score >= 50 ? "bg-amber-500" : "bg-red-500",
                )}
                style={{ width: `${fw.score}%` }}
              />
            </div>
            {/* Status counts */}
            <div className="flex gap-3 mb-3">
              <span className="flex items-center gap-1 text-[10px]">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" /> {fw.passed} Passed
              </span>
              <span className="flex items-center gap-1 text-[10px]">
                <AlertTriangle className="h-3 w-3 text-amber-500" /> {fw.partial} Partial
              </span>
              <span className="flex items-center gap-1 text-[10px]">
                <XCircle className="h-3 w-3 text-red-500" /> {fw.failed} Failed
              </span>
            </div>
            {/* Controls */}
            <div className="space-y-1.5">
              {fw.controls.map((ctrl) => (
                <div key={ctrl.name} className="flex items-center gap-2">
                  {statusIcon[ctrl.status as keyof typeof statusIcon]}
                  <span className="text-[11px] text-muted-foreground">{ctrl.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
