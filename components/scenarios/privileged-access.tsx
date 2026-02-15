"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, ShieldCheck, AlertTriangle, CheckCircle, Users, Lock, KeyRound } from "lucide-react"

const steps = [
  { label: "Loading Identity Graph", duration: 1500 },
  { label: "Detecting Admin Privileges", duration: 1200 },
  { label: "Flagging Risk Alerts", duration: 1000 },
  { label: "Applying Conditional Access", duration: 1400 },
  { label: "Recalculating Risk Score", duration: 1000 },
]

const findings = [
  { icon: Users, label: "3 Global Admins with no PIM", severity: "Critical" },
  { icon: Lock, label: "No Conditional Access policies", severity: "Critical" },
  { icon: KeyRound, label: "MFA only 42% enabled", severity: "High" },
  { icon: AlertTriangle, label: "Legacy authentication active", severity: "High" },
]

export function PrivilegedAccessScenario() {
  const [currentStep, setCurrentStep] = useState(-1)
  const [isRunning, setIsRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [riskScore, setRiskScore] = useState(78)

  function startSimulation() {
    setIsRunning(true)
    setCurrentStep(0)
    setShowResults(false)
    setRiskScore(78)
  }

  useEffect(() => {
    if (!isRunning || currentStep < 0) return
    if (currentStep >= steps.length) {
      setShowResults(true)
      setIsRunning(false)
      const interval = setInterval(() => {
        setRiskScore((prev) => {
          if (prev <= 32) { clearInterval(interval); return 32 }
          return prev - 2
        })
      }, 40)
      return () => clearInterval(interval)
    }
    const timer = setTimeout(() => setCurrentStep((prev) => prev + 1), steps[currentStep].duration)
    return () => clearTimeout(timer)
  }, [currentStep, isRunning])

  const scoreColor = riskScore > 60 ? "text-red-400" : riskScore > 40 ? "text-amber-400" : "text-emerald-400"
  const scoreBg = riskScore > 60 ? "bg-red-500/10" : riskScore > 40 ? "bg-amber-500/10" : "bg-emerald-500/10"

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-lg bg-red-500/10">
          <ShieldAlert className="h-5 w-5 text-red-400" />
        </div>
        <div>
          <h2 className="text-lg font-bold">Privileged Access Exposure in a Hybrid Environment</h2>
          <p className="text-xs text-muted-foreground">Startup with 3 global admins, no conditional access, partial MFA</p>
        </div>
      </div>

      {currentStep < 0 && !showResults && (
        <Card className="p-8 text-center border-dashed">
          <ShieldAlert className="h-10 w-10 text-red-400 mx-auto mb-4" />
          <p className="text-sm text-muted-foreground mb-5">
            This simulation scans a hybrid environment for overprivileged access, missing conditional access policies, and weak MFA coverage.
          </p>
          <Button onClick={startSimulation} size="sm">
            Launch Simulation
          </Button>
        </Card>
      )}

      {isRunning && (
        <Card className="p-6">
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  i < currentStep ? "bg-primary text-primary-foreground" :
                  i === currentStep ? "bg-primary/20 text-primary animate-pulse" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {i < currentStep ? <CheckCircle className="h-3.5 w-3.5" /> : i + 1}
                </div>
                <span className={`text-xs ${i <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.label}
                </span>
                {i === currentStep && (
                  <div className="flex-1">
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: "70%" }} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {showResults && (
        <div className="space-y-6">
          {/* Risk Score Before/After */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5 border-red-500/20">
              <p className="text-xs font-semibold text-muted-foreground mb-3">BEFORE REMEDIATION</p>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold text-red-400">78</span>
                <span className="text-xs text-muted-foreground mb-1">/ 100 Risk Score</span>
              </div>
              <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-red-400 rounded-full" style={{ width: "78%" }} />
              </div>
            </Card>
            <Card className={`p-5 border-emerald-500/20`}>
              <p className="text-xs font-semibold text-muted-foreground mb-3">AFTER REMEDIATION</p>
              <div className="flex items-end gap-3">
                <span className={`text-4xl font-bold ${scoreColor}`}>{riskScore}</span>
                <span className="text-xs text-muted-foreground mb-1">/ 100 Risk Score</span>
              </div>
              <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-300 ${riskScore > 60 ? "bg-red-400" : riskScore > 40 ? "bg-amber-400" : "bg-emerald-400"}`} style={{ width: `${riskScore}%` }} />
              </div>
            </Card>
          </div>

          {/* Findings */}
          <Card className="p-5">
            <p className="text-xs font-semibold text-muted-foreground mb-4">FINDINGS DETECTED</p>
            <div className="space-y-3">
              {findings.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <f.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-xs flex-1">{f.label}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    f.severity === "Critical" ? "bg-red-500/10 text-red-400" : "bg-amber-500/10 text-amber-400"
                  }`}>
                    {f.severity}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Remediation */}
          <Card className="p-5 bg-emerald-500/5 border-emerald-500/20">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Business Impact</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Overprivileged access is the #1 silent risk in growing companies.
                  By enforcing PIM, deploying conditional access, and achieving 100% MFA coverage,
                  the risk score dropped from 78 to 32 -- a 59% reduction in identity-based attack surface.
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
        </div>
      )}
    </div>
  )
}
