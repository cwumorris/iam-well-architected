"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MonitorSmartphone, Wifi, Server, Globe, AlertTriangle, CheckCircle, Scan } from "lucide-react"

const scanSteps = [
  { label: "Scanning network endpoints...", duration: 1200 },
  { label: "Querying MDM enrollment status...", duration: 1000 },
  { label: "Detecting SaaS OAuth tokens...", duration: 1400 },
  { label: "Checking OS support lifecycle...", duration: 900 },
  { label: "Generating asset inventory...", duration: 1100 },
]

const discoveredAssets = [
  { icon: MonitorSmartphone, name: "14 Devices not enrolled in Intune", type: "Unmanaged", risk: "High" },
  { icon: Server, name: "3 Servers running Windows Server 2012", type: "Unsupported OS", risk: "Critical" },
  { icon: Globe, name: "Notion, Figma, Trello (no SSO)", type: "Shadow SaaS", risk: "Medium" },
  { icon: Wifi, name: "2 Printers with default admin credentials", type: "IoT Risk", risk: "High" },
  { icon: Globe, name: "Personal Dropbox linked to 6 accounts", type: "Data Leakage", risk: "Critical" },
]

const pieData = [
  { label: "Managed & Compliant", pct: 68, color: "bg-emerald-400" },
  { label: "Unmanaged Devices", pct: 18, color: "bg-amber-400" },
  { label: "Unsupported OS", pct: 9, color: "bg-red-400" },
  { label: "High-Risk SaaS", pct: 5, color: "bg-purple-400" },
]

export function ShadowItScenario() {
  const [currentStep, setCurrentStep] = useState(-1)
  const [isRunning, setIsRunning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [assetsRevealed, setAssetsRevealed] = useState(0)

  function startSimulation() {
    setIsRunning(true)
    setCurrentStep(0)
    setShowResults(false)
    setAssetsRevealed(0)
  }

  useEffect(() => {
    if (!isRunning || currentStep < 0) return
    if (currentStep >= scanSteps.length) {
      setIsRunning(false)
      setShowResults(true)
      return
    }
    const timer = setTimeout(() => setCurrentStep((prev) => prev + 1), scanSteps[currentStep].duration)
    return () => clearTimeout(timer)
  }, [currentStep, isRunning])

  useEffect(() => {
    if (!showResults) return
    if (assetsRevealed >= discoveredAssets.length) return
    const timer = setTimeout(() => setAssetsRevealed((prev) => prev + 1), 400)
    return () => clearTimeout(timer)
  }, [showResults, assetsRevealed])

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-lg bg-amber-500/10">
          <MonitorSmartphone className="h-5 w-5 text-amber-400" />
        </div>
        <div>
          <h2 className="text-lg font-bold">Unmanaged Assets & Shadow IT Detection</h2>
          <p className="text-xs text-muted-foreground">200-user company with unknown SaaS, unenrolled devices, legacy servers</p>
        </div>
      </div>

      {currentStep < 0 && !showResults && (
        <Card className="p-8 text-center border-dashed">
          <Scan className="h-10 w-10 text-amber-400 mx-auto mb-4" />
          <p className="text-sm text-muted-foreground mb-5">
            {"This simulation runs an automated discovery scan to find unmanaged devices, shadow SaaS applications, and unsupported systems hiding in your environment."}
          </p>
          <Button onClick={startSimulation} size="sm">
            Start Discovery Scan
          </Button>
        </Card>
      )}

      {isRunning && (
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-5">
            <Scan className="h-4 w-4 text-amber-400 animate-spin" />
            <span className="text-xs font-semibold">Discovery Scan In Progress</span>
          </div>
          <div className="space-y-3">
            {scanSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full shrink-0 ${
                  i < currentStep ? "bg-emerald-400" : i === currentStep ? "bg-amber-400 animate-pulse" : "bg-muted"
                }`} />
                <span className={`text-xs ${i <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.label}
                </span>
                {i < currentStep && <CheckCircle className="h-3.5 w-3.5 text-emerald-400 ml-auto" />}
              </div>
            ))}
          </div>
          <div className="mt-5 h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep) / scanSteps.length) * 100}%` }}
            />
          </div>
        </Card>
      )}

      {showResults && (
        <div className="space-y-6">
          {/* Asset Distribution */}
          <Card className="p-5">
            <p className="text-xs font-semibold text-muted-foreground mb-4">ASSET DISTRIBUTION</p>
            <div className="flex gap-1 h-8 rounded-lg overflow-hidden mb-4">
              {pieData.map((d) => (
                <div
                  key={d.label}
                  className={`${d.color} transition-all duration-1000`}
                  style={{ width: `${d.pct}%` }}
                  title={`${d.label}: ${d.pct}%`}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {pieData.map((d) => (
                <div key={d.label} className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-sm ${d.color}`} />
                  <div>
                    <p className="text-[10px] text-muted-foreground">{d.label}</p>
                    <p className="text-xs font-bold">{d.pct}%</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Discovered Findings */}
          <Card className="p-5">
            <p className="text-xs font-semibold text-muted-foreground mb-4">DISCOVERED FINDINGS</p>
            <div className="space-y-2.5">
              {discoveredAssets.slice(0, assetsRevealed).map((a) => (
                <div
                  key={a.name}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 animate-in fade-in slide-in-from-left-2 duration-300"
                >
                  <a.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-xs flex-1">{a.name}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    a.risk === "Critical" ? "bg-red-500/10 text-red-400" :
                    a.risk === "High" ? "bg-amber-500/10 text-amber-400" :
                    "bg-sky-500/10 text-sky-400"
                  }`}>
                    {a.risk}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Business Message */}
          <Card className="p-5 bg-amber-500/5 border-amber-500/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">{"You can't secure what you don't see."}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  32% of this environment was invisible to IT. Unmanaged devices, shadow SaaS, and unsupported servers
                  represent the fastest path for attackers. EM Identity discovers, classifies, and remediates before it becomes a breach.
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
