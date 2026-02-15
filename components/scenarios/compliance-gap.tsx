"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, AlertTriangle, CheckCircle, FileText, ArrowRight } from "lucide-react"

const frameworks = [
  { name: "ISO 27001", controls: 14, passing: 9, icon: "ISO" },
  { name: "NIST CSF", controls: 23, passing: 16, icon: "NIST" },
  { name: "CIS Controls", controls: 18, passing: 11, icon: "CIS" },
  { name: "HIPAA", controls: 12, passing: 7, icon: "HIPAA" },
]

const gaps = [
  { control: "Access Review Policy", framework: "ISO 27001 A.9.2.5", status: "Missing", severity: "Critical" },
  { control: "Audit Log Retention (90d)", framework: "NIST PR.PT-1", status: "Insufficient", severity: "High" },
  { control: "Incident Response Playbook", framework: "NIST RS.RP-1", status: "Incomplete", severity: "High" },
  { control: "Backup & Recovery Docs", framework: "ISO 27001 A.12.3", status: "Missing", severity: "Medium" },
  { control: "Endpoint Detection", framework: "CIS Control 10", status: "Partial", severity: "High" },
]

const remediationPlan = [
  { action: "Deploy quarterly access certification campaigns", priority: "P1", timeline: "Week 1-2" },
  { action: "Extend audit log retention to 365 days", priority: "P1", timeline: "Week 1" },
  { action: "Create IR playbook aligned to NIST 800-61", priority: "P2", timeline: "Week 2-4" },
  { action: "Document BCP/DR and test recovery procedures", priority: "P2", timeline: "Week 3-5" },
  { action: "Roll out EDR across all managed endpoints", priority: "P1", timeline: "Week 1-3" },
]

export function ComplianceGapScenario() {
  const [isRunning, setIsRunning] = useState(false)
  const [phase, setPhase] = useState<"idle" | "mapping" | "gaps" | "remediation">("idle")
  const [frameworkIndex, setFrameworkIndex] = useState(0)
  const [gapsRevealed, setGapsRevealed] = useState(0)
  const [showRemediation, setShowRemediation] = useState(false)

  function startSimulation() {
    setIsRunning(true)
    setPhase("mapping")
    setFrameworkIndex(0)
    setGapsRevealed(0)
    setShowRemediation(false)
  }

  useEffect(() => {
    if (phase !== "mapping") return
    if (frameworkIndex >= frameworks.length) {
      setTimeout(() => setPhase("gaps"), 500)
      return
    }
    const timer = setTimeout(() => setFrameworkIndex((prev) => prev + 1), 800)
    return () => clearTimeout(timer)
  }, [phase, frameworkIndex])

  useEffect(() => {
    if (phase !== "gaps") return
    if (gapsRevealed >= gaps.length) {
      setTimeout(() => {
        setPhase("remediation")
        setShowRemediation(true)
        setIsRunning(false)
      }, 600)
      return
    }
    const timer = setTimeout(() => setGapsRevealed((prev) => prev + 1), 500)
    return () => clearTimeout(timer)
  }, [phase, gapsRevealed])

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-lg bg-sky-500/10">
          <ClipboardCheck className="h-5 w-5 text-sky-400" />
        </div>
        <div>
          <h2 className="text-lg font-bold">Compliance Gap Analysis (ISO / NIST Aligned)</h2>
          <p className="text-xs text-muted-foreground">Healthcare client preparing for audit</p>
        </div>
      </div>

      {phase === "idle" && (
        <Card className="p-8 text-center border-dashed">
          <ClipboardCheck className="h-10 w-10 text-sky-400 mx-auto mb-4" />
          <p className="text-sm text-muted-foreground mb-5">
            This simulation maps your current security controls against ISO 27001, NIST CSF, CIS Controls, and HIPAA frameworks, then auto-generates a prioritized remediation plan.
          </p>
          <Button onClick={startSimulation} size="sm">
            Begin Compliance Scan
          </Button>
        </Card>
      )}

      {(phase === "mapping" || phase === "gaps" || phase === "remediation") && (
        <div className="space-y-6">
          {/* Framework Scorecards */}
          <Card className="p-5">
            <p className="text-xs font-semibold text-muted-foreground mb-4">FRAMEWORK COMPLIANCE SCORES</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {frameworks.map((fw, i) => {
                const pct = Math.round((fw.passing / fw.controls) * 100)
                const revealed = i < frameworkIndex
                return (
                  <div key={fw.name} className={`text-center p-3 rounded-lg border transition-all duration-500 ${
                    revealed ? "border-border bg-card" : "border-transparent bg-muted/30"
                  }`}>
                    <p className="text-[10px] font-bold text-muted-foreground mb-1">{fw.name}</p>
                    {revealed ? (
                      <>
                        <div className="relative w-16 h-16 mx-auto mb-2">
                          <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" className="text-muted" strokeWidth="3" />
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" className={pct >= 70 ? "stroke-emerald-400" : pct >= 50 ? "stroke-amber-400" : "stroke-red-400"} strokeWidth="3" strokeDasharray={`${pct}, 100`} />
                          </svg>
                          <span className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${
                            pct >= 70 ? "text-emerald-400" : pct >= 50 ? "text-amber-400" : "text-red-400"
                          }`}>
                            {pct}%
                          </span>
                        </div>
                        <p className="text-[10px] text-muted-foreground">{fw.passing}/{fw.controls} controls</p>
                      </>
                    ) : (
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-muted/50 animate-pulse" />
                    )}
                  </div>
                )
              })}
            </div>
          </Card>

          {/* Gap Findings */}
          {(phase === "gaps" || phase === "remediation") && (
            <Card className="p-5">
              <p className="text-xs font-semibold text-muted-foreground mb-4">CONTROL GAPS IDENTIFIED</p>
              <div className="space-y-2">
                {gaps.slice(0, phase === "remediation" ? gaps.length : gapsRevealed).map((g) => (
                  <div key={g.control} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 animate-in fade-in duration-300">
                    <AlertTriangle className={`h-3.5 w-3.5 shrink-0 ${
                      g.severity === "Critical" ? "text-red-400" : g.severity === "High" ? "text-amber-400" : "text-sky-400"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium">{g.control}</p>
                      <p className="text-[10px] text-muted-foreground">{g.framework}</p>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                      g.severity === "Critical" ? "bg-red-500/10 text-red-400" :
                      g.severity === "High" ? "bg-amber-500/10 text-amber-400" :
                      "bg-sky-500/10 text-sky-400"
                    }`}>
                      {g.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Auto-Generated Remediation */}
          {showRemediation && (
            <>
              <Card className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-4 w-4 text-sky-400" />
                  <p className="text-xs font-semibold text-muted-foreground">AUTO-GENERATED REMEDIATION PLAN</p>
                </div>
                <div className="space-y-2">
                  {remediationPlan.map((r) => (
                    <div key={r.action} className="flex items-center gap-3 p-2.5 rounded-lg border border-border">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                        r.priority === "P1" ? "bg-red-500/10 text-red-400" : "bg-amber-500/10 text-amber-400"
                      }`}>
                        {r.priority}
                      </span>
                      <span className="text-xs flex-1">{r.action}</span>
                      <span className="text-[10px] text-muted-foreground shrink-0">{r.timeline}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-5 bg-sky-500/5 border-sky-500/20">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold mb-1">EM Identity translates technical risk into audit-ready action.</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      In 5 weeks, this healthcare client went from 58% average compliance to 91% across all four frameworks, with executive-ready documentation and a clear audit trail.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={startSimulation} className="text-xs">
                  Replay Simulation
                </Button>
                <a
                  href="https://calendly.com/advisory-emidentity/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Schedule Assessment
                </a>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
