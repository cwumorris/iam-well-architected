"use client"

import { useState, useEffect, useCallback } from "react"
import type { OrgProfile } from "@/components/assessment-simulation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Play, Server, Monitor, Cloud, Shield, Users } from "lucide-react"

function getDiscoveryData(profile: OrgProfile) {
  const base = profile.size
  return {
    devices: base,
    adminAccounts: Math.round(base * 0.08),
    privilegedRoles: Math.round(base * 0.05),
    applications: Math.round(base * 0.6),
    exposedServices: Math.round(base * 0.12),
  }
}

const nodeTypes = [
  { label: "Servers", icon: Server, color: "text-chart-1", bgColor: "bg-chart-1/10" },
  { label: "Endpoints", icon: Monitor, color: "text-chart-2", bgColor: "bg-chart-2/10" },
  { label: "Cloud Services", icon: Cloud, color: "text-chart-3", bgColor: "bg-chart-3/10" },
  { label: "Identity Provider", icon: Shield, color: "text-primary", bgColor: "bg-primary/10" },
  { label: "Admin Users", icon: Users, color: "text-chart-5", bgColor: "bg-chart-5/10" },
]

export function PhaseTwo({
  profile,
  started,
  onStart,
}: {
  profile: OrgProfile
  started: boolean
  onStart: () => void
}) {
  const [progress, setProgress] = useState(0)
  const [scanComplete, setScanComplete] = useState(false)
  const data = getDiscoveryData(profile)

  const runScan = useCallback(() => {
    onStart()
    setProgress(0)
    setScanComplete(false)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setScanComplete(true)
          return 100
        }
        return p + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [onStart])

  useEffect(() => {
    if (started && progress === 0) {
      runScan()
    }
  }, [started, progress, runScan])

  const metricValue = (target: number) => (scanComplete ? target : Math.round((progress / 100) * target))

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground leading-relaxed">
        Our automated discovery engine scans your environment to identify every asset, identity, and access
        relationship. Nodes are classified and tagged in real time.
      </p>

      {!started && (
        <div className="flex justify-center py-8">
          <Button onClick={runScan} size="lg" className="text-sm gap-2">
            <Play className="h-4 w-4" />
            Begin Discovery Scan
          </Button>
        </div>
      )}

      {started && (
        <>
          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Discovery Progress
              </p>
              <p className="text-xs font-mono font-bold text-primary">{progress}%</p>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-200 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Network Topology */}
          <div className="grid grid-cols-5 gap-3">
            {nodeTypes.map((node, i) => {
              const Icon = node.icon
              const discovered = progress > (i + 1) * 18
              return (
                <div
                  key={node.label}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-lg border p-4 transition-all duration-500",
                    discovered ? `border-primary/30 ${node.bgColor} shadow-sm` : "border-border bg-muted/30 opacity-40",
                  )}
                >
                  <div
                    className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center transition-all",
                      discovered ? `${node.bgColor}` : "bg-muted",
                    )}
                  >
                    <Icon className={cn("h-5 w-5 transition-colors", discovered ? node.color : "text-muted-foreground")} />
                  </div>
                  <p className="text-[10px] font-semibold text-center leading-tight">{node.label}</p>
                  {discovered && (
                    <span className="text-[10px] font-medium text-primary px-1.5 py-0.5 rounded-full bg-primary/10">
                      Found
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Discovery Metrics */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {[
              { label: "Devices Found", value: metricValue(data.devices), status: "green" },
              { label: "Admin Accounts", value: metricValue(data.adminAccounts), status: "yellow" },
              { label: "Privileged Roles", value: metricValue(data.privilegedRoles), status: "red" },
              { label: "Applications", value: metricValue(data.applications), status: "green" },
              { label: "Exposed Services", value: metricValue(data.exposedServices), status: "red" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-lg border border-border bg-card p-3">
                <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold font-mono">{metric.value}</span>
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      metric.status === "green" && "bg-emerald-500",
                      metric.status === "yellow" && "bg-amber-500",
                      metric.status === "red" && "bg-red-500",
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
