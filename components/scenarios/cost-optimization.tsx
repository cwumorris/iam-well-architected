"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, TrendingDown, Users, Cloud, Layers, CheckCircle } from "lucide-react"

const licenseData = [
  { name: "Microsoft 365 E5", total: 200, active: 152, inactive: 48, costPerLicense: 57 },
  { name: "Power BI Pro", total: 75, active: 31, inactive: 44, costPerLicense: 10 },
  { name: "Visio Plan 2", total: 40, active: 12, inactive: 28, costPerLicense: 15 },
  { name: "Project Plan 3", total: 30, active: 8, inactive: 22, costPerLicense: 30 },
]

const duplicateSaas = [
  { name: "Zoom + Teams (duplicate video)", monthlyCost: 420 },
  { name: "Asana + Planner (duplicate PM)", monthlyCost: 280 },
  { name: "LastPass + Entra SSO (redundant auth)", monthlyCost: 180 },
]

const cloudWaste = [
  { resource: "3 Dev VMs running 24/7 (used 6hrs/day)", monthlySavings: 340 },
  { resource: "Orphaned storage blobs (12 TB)", monthlySavings: 156 },
  { resource: "Overprovisioned App Service Plans", monthlySavings: 280 },
]

export function CostOptimizationScenario() {
  const [phase, setPhase] = useState<"idle" | "scanning" | "results">("idle")
  const [scanProgress, setScanProgress] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)

  function startSimulation() {
    setPhase("scanning")
    setScanProgress(0)
    setTotalSavings(0)
  }

  useEffect(() => {
    if (phase !== "scanning") return
    if (scanProgress >= 100) {
      setTimeout(() => setPhase("results"), 400)
      return
    }
    const timer = setTimeout(() => setScanProgress((prev) => Math.min(prev + 2, 100)), 60)
    return () => clearTimeout(timer)
  }, [phase, scanProgress])

  useEffect(() => {
    if (phase !== "results") return
    const target = 24300
    if (totalSavings >= target) return
    const timer = setTimeout(() => {
      setTotalSavings((prev) => Math.min(prev + 487, target))
    }, 30)
    return () => clearTimeout(timer)
  }, [phase, totalSavings])

  const licenseSavings = licenseData.reduce((sum, l) => sum + l.inactive * l.costPerLicense * 12, 0)
  const saasSavings = duplicateSaas.reduce((sum, s) => sum + s.monthlyCost * 12, 0)
  const cloudSavings = cloudWaste.reduce((sum, c) => sum + c.monthlySavings * 12, 0)

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-lg bg-emerald-500/10">
          <DollarSign className="h-5 w-5 text-emerald-400" />
        </div>
        <div>
          <h2 className="text-lg font-bold">Security Cost Optimization</h2>
          <p className="text-xs text-muted-foreground">Unused licenses, overprovisioned cloud, duplicate SaaS subscriptions</p>
        </div>
      </div>

      {phase === "idle" && (
        <Card className="p-8 text-center border-dashed">
          <DollarSign className="h-10 w-10 text-emerald-400 mx-auto mb-4" />
          <p className="text-sm text-muted-foreground mb-5">
            This simulation analyzes license utilization, identifies duplicate SaaS subscriptions, and flags overprovisioned cloud resources to calculate total annual savings.
          </p>
          <Button onClick={startSimulation} size="sm">
            Analyze Spend
          </Button>
        </Card>
      )}

      {phase === "scanning" && (
        <Card className="p-6 text-center">
          <DollarSign className="h-8 w-8 text-emerald-400 mx-auto mb-3 animate-pulse" />
          <p className="text-sm font-medium mb-1">Analyzing License & Cloud Spend</p>
          <p className="text-xs text-muted-foreground mb-4">
            {scanProgress < 33 ? "Scanning Microsoft 365 licenses..." :
             scanProgress < 66 ? "Detecting duplicate SaaS tools..." :
             "Evaluating cloud resource utilization..."}
          </p>
          <div className="max-w-xs mx-auto">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full transition-all duration-100" style={{ width: `${scanProgress}%` }} />
            </div>
            <p className="text-[10px] text-muted-foreground mt-2">{scanProgress}% complete</p>
          </div>
        </Card>
      )}

      {phase === "results" && (
        <div className="space-y-6">
          {/* Total Savings Hero */}
          <Card className="p-6 text-center bg-emerald-500/5 border-emerald-500/20">
            <p className="text-xs font-semibold text-muted-foreground mb-2">ESTIMATED ANNUAL SAVINGS</p>
            <p className="text-4xl md:text-5xl font-bold text-emerald-400">
              ${totalSavings.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground mt-2">per year without reducing capability</p>
          </Card>

          {/* License Utilization */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-4 w-4 text-muted-foreground" />
              <p className="text-xs font-semibold text-muted-foreground">LICENSE UTILIZATION</p>
              <span className="ml-auto text-[10px] text-emerald-400 font-semibold">Save ${licenseSavings.toLocaleString()}/yr</span>
            </div>
            <div className="space-y-3">
              {licenseData.map((l) => {
                const usagePct = Math.round((l.active / l.total) * 100)
                return (
                  <div key={l.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs">{l.name}</span>
                      <span className="text-[10px] text-muted-foreground">{l.active}/{l.total} active ({l.inactive} unused)</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full flex">
                        <div className="bg-emerald-400" style={{ width: `${usagePct}%` }} />
                        <div className="bg-red-400/60" style={{ width: `${100 - usagePct}%` }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>

          {/* Duplicate SaaS */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="h-4 w-4 text-muted-foreground" />
              <p className="text-xs font-semibold text-muted-foreground">DUPLICATE SAAS SUBSCRIPTIONS</p>
              <span className="ml-auto text-[10px] text-emerald-400 font-semibold">Save ${saasSavings.toLocaleString()}/yr</span>
            </div>
            <div className="space-y-2">
              {duplicateSaas.map((s) => (
                <div key={s.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30">
                  <TrendingDown className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="text-xs flex-1">{s.name}</span>
                  <span className="text-xs font-semibold text-amber-400">${s.monthlyCost}/mo</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Cloud Waste */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="h-4 w-4 text-muted-foreground" />
              <p className="text-xs font-semibold text-muted-foreground">CLOUD RESOURCE WASTE</p>
              <span className="ml-auto text-[10px] text-emerald-400 font-semibold">Save ${cloudSavings.toLocaleString()}/yr</span>
            </div>
            <div className="space-y-2">
              {cloudWaste.map((c) => (
                <div key={c.resource} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30">
                  <TrendingDown className="h-3.5 w-3.5 text-red-400 shrink-0" />
                  <span className="text-xs flex-1">{c.resource}</span>
                  <span className="text-xs font-semibold text-emerald-400">-${c.monthlySavings}/mo</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Business Message */}
          <Card className="p-5 bg-emerald-500/5 border-emerald-500/20">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">{"Security isn't just protection. It's optimization."}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {"By right-sizing licenses, eliminating duplicate SaaS, and optimizing cloud resources, this organization reclaimed $24,300 annually -- funding that was redirected into actual security improvements like EDR and SIEM."}
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
