"use client"

import { useState } from "react"
import { Users, Shield, Lock, Server, Eye, ChevronDown, MonitorSmartphone, Cloud, AppWindow, Database, FileSearch, BarChart3, ClipboardCheck, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

const layers = [
  {
    id: "users",
    title: "Layer 1 — Users",
    color: "bg-[#1e3a5f]",
    borderColor: "border-[#2a5a8f]",
    textColor: "text-[#7db8f0]",
    accentBg: "bg-[#1e3a5f]/10",
    icon: Users,
    nodes: [
      { label: "Remote Users", icon: MonitorSmartphone },
      { label: "Internal Users", icon: Users },
      { label: "Admin Users", icon: Shield },
    ],
    description: "All user types authenticate through a single identity-verified entry point. No direct access to resources.",
  },
  {
    id: "identity",
    title: "Layer 2 — Identity Provider (Control Plane)",
    color: "bg-[#0d4a8a]",
    borderColor: "border-[#1a6abf]",
    textColor: "text-[#4da3ff]",
    accentBg: "bg-[#0d4a8a]/10",
    icon: Shield,
    nodes: [
      { label: "SSO", icon: Lock },
      { label: "MFA", icon: Shield },
      { label: "Conditional Access", icon: FileSearch },
      { label: "RBAC", icon: ClipboardCheck },
      { label: "SCIM Provisioning", icon: Database },
    ],
    description: "The identity provider acts as the central control plane — enforcing authentication, authorization, and automated lifecycle management.",
  },
  {
    id: "gateway",
    title: "Layer 3 — Secure Access Gateway (Bastion)",
    color: "bg-[#0a3d6e]",
    borderColor: "border-[#155a9e]",
    textColor: "text-[#5eb5ff]",
    accentBg: "bg-[#0a3d6e]/10",
    icon: Lock,
    nodes: [
      { label: "RDP Proxy", icon: MonitorSmartphone },
      { label: "SSH Proxy", icon: Server },
      { label: "Session Recording", icon: Eye },
      { label: "Access Logging", icon: BarChart3 },
    ],
    description: "All administrative and user access is brokered through a secure gateway. No public exposure. Every session is recorded and logged.",
    blocked: true,
  },
  {
    id: "resources",
    title: "Layer 4 — Resource Layer",
    color: "bg-[#1a2f45]",
    borderColor: "border-[#2a4a6f]",
    textColor: "text-[#7db8f0]",
    accentBg: "bg-[#1a2f45]/10",
    icon: Server,
    nodes: [
      { label: "Workstations", icon: MonitorSmartphone },
      { label: "Servers", icon: Server },
      { label: "Cloud Workloads", icon: Cloud },
      { label: "Internal Apps", icon: AppWindow },
      { label: "SaaS Platforms", icon: Cloud },
    ],
    description: "Resources are never directly exposed. Access is granted only through verified identity and authorized sessions.",
  },
  {
    id: "governance",
    title: "Layer 5 — Governance & Monitoring",
    color: "bg-[#0f2b3d]",
    borderColor: "border-[#1a4a6a]",
    textColor: "text-[#5eb5ff]",
    accentBg: "bg-[#0f2b3d]/10",
    icon: Eye,
    nodes: [
      { label: "Audit Logs", icon: FileSearch },
      { label: "SIEM Integration", icon: BarChart3 },
      { label: "Access Reviews", icon: ClipboardCheck },
      { label: "ITAM Correlation", icon: Database },
    ],
    description: "Continuous monitoring, compliance reporting, and asset-to-identity correlation provide full operational visibility.",
  },
]

const principles = [
  "No direct inbound access",
  "Identity-verified entry point",
  "Privilege isolation",
  "Centralized session control",
  "Automated provisioning lifecycle",
]

export function ZeroTrustArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null)

  return (
    <div className="grid lg:grid-cols-[1fr_260px] gap-6">
      {/* Main Diagram */}
      <div className="rounded-xl border border-border bg-[#0b1929] p-6 md:p-8 overflow-hidden">
        <div className="flex flex-col gap-0">
          {layers.map((layer, index) => (
            <div key={layer.id}>
              {/* Layer Block */}
              <button
                className={cn(
                  "w-full text-left rounded-lg border p-4 md:p-5 transition-all duration-300 cursor-pointer",
                  layer.borderColor,
                  activeLayer === layer.id ? "ring-1 ring-[#4da3ff]/40 shadow-lg shadow-[#4da3ff]/10" : "",
                  activeLayer && activeLayer !== layer.id ? "opacity-40" : "opacity-100",
                )}
                style={{ backgroundColor: activeLayer === layer.id ? "rgba(13, 74, 138, 0.3)" : "rgba(13, 30, 50, 0.6)" }}
                onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <layer.icon className={cn("h-4 w-4", layer.textColor)} />
                  <h3 className={cn("text-xs font-bold uppercase tracking-wider", layer.textColor)}>{layer.title}</h3>
                </div>

                {/* Nodes */}
                <div className="flex flex-wrap gap-2">
                  {layer.nodes.map((node) => (
                    <div
                      key={node.label}
                      className={cn(
                        "flex items-center gap-2 rounded-md border px-3 py-2 transition-all",
                        layer.borderColor,
                        activeLayer === layer.id ? "bg-[#0d4a8a]/30 border-[#4da3ff]/30" : "bg-[#0b1929]/60",
                      )}
                    >
                      <node.icon className="h-3.5 w-3.5 text-[#5eb5ff]" />
                      <span className="text-xs text-[#b0d4f1] font-medium">{node.label}</span>
                    </div>
                  ))}
                </div>

                {/* Blocked indicator for gateway */}
                {layer.blocked && (
                  <div className="mt-3 flex items-center gap-2 rounded border border-dashed border-red-500/40 bg-red-500/5 px-3 py-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-red-400">No Public Exposure</span>
                  </div>
                )}

                {/* Description on hover/active */}
                {activeLayer === layer.id && (
                  <p className="mt-3 text-xs text-[#7db8f0]/80 leading-relaxed animate-in fade-in duration-300">
                    {layer.description}
                  </p>
                )}
              </button>

              {/* Arrow connector */}
              {index < layers.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-3 bg-gradient-to-b from-[#4da3ff]/60 to-[#4da3ff]/20" />
                    <ArrowDown className="h-3.5 w-3.5 text-[#4da3ff]/50" />
                  </div>
                  {/* Side annotation for SCIM/Conditional Access */}
                  {index === 1 && (
                    <div className="hidden md:flex items-center gap-2 ml-6">
                      <div className="w-8 h-px bg-[#4da3ff]/30" />
                      <span className="text-[9px] text-[#4da3ff]/50 uppercase tracking-widest">Verified Access Flow</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Side annotations */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-[#4da3ff]" />
            <span className="text-[9px] text-[#7db8f0]/60 uppercase tracking-widest">Verified access</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-px border-t border-dashed border-red-500" />
            <span className="text-[9px] text-red-400/60 uppercase tracking-widest">Blocked exposure</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-[#2a5a8f]" />
            <span className="text-[9px] text-[#7db8f0]/60 uppercase tracking-widest">Identity flow</span>
          </div>
        </div>
      </div>

      {/* Side Panel - Design Principles */}
      <div className="rounded-xl border border-border bg-[#0b1929] p-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#4da3ff] mb-5">Key Design Principles</h3>
        <div className="space-y-3">
          {principles.map((p, i) => (
            <div key={p} className="flex items-start gap-3">
              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#0d4a8a]/40 border border-[#1a6abf]/40 shrink-0 mt-0.5">
                <span className="text-[9px] font-bold text-[#4da3ff]">{i + 1}</span>
              </div>
              <p className="text-xs text-[#b0d4f1] leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Advanced side connections */}
        <div className="mt-8 pt-5 border-t border-[#1a4a6a]">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#5eb5ff]/60 mb-4">Data Flows</h4>
          <div className="space-y-3">
            {[
              { from: "Identity Provider", to: "Applications", type: "SCIM Automation" },
              { from: "Conditional Access", to: "Devices", type: "Compliance Check" },
              { from: "Access Logs", to: "SIEM", type: "Log Stream" },
              { from: "ITAM", to: "Identity", type: "Asset Mapping" },
            ].map((flow) => (
              <div key={flow.type} className="rounded border border-[#1a4a6a] bg-[#0d1f30] p-2.5">
                <p className="text-[9px] font-semibold text-[#4da3ff] uppercase tracking-wider mb-1">{flow.type}</p>
                <p className="text-[10px] text-[#7db8f0]/60">
                  {flow.from} &rarr; {flow.to}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
