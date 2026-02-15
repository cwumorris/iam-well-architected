"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Building2,
  Search,
  BarChart3,
  ShieldAlert,
  ClipboardCheck,
  FileBarChart,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react"
import { PhaseOne } from "@/components/assessment/phase-one"
import { PhaseTwo } from "@/components/assessment/phase-two"
import { PhaseThree } from "@/components/assessment/phase-three"
import { PhaseFour } from "@/components/assessment/phase-four"
import { PhaseFive } from "@/components/assessment/phase-five"
import { PhaseSix } from "@/components/assessment/phase-six"

const phases = [
  { id: 1, title: "Organization Profile", icon: Building2, subtitle: "Intake & Baseline" },
  { id: 2, title: "Asset Discovery", icon: Search, subtitle: "Environment Scan" },
  { id: 3, title: "Classification", icon: BarChart3, subtitle: "Criticality Mapping" },
  { id: 4, title: "Identity Risk", icon: ShieldAlert, subtitle: "Access Threat Detection" },
  { id: 5, title: "Compliance", icon: ClipboardCheck, subtitle: "Control Mapping" },
  { id: 6, title: "Executive Summary", icon: FileBarChart, subtitle: "Risk Report" },
]

export type OrgProfile = {
  industry: string
  size: number
  environment: string
}

export function AssessmentSimulation() {
  const [currentPhase, setCurrentPhase] = useState(1)
  const [profile, setProfile] = useState<OrgProfile>({
    industry: "",
    size: 50,
    environment: "",
  })
  const [phaseStarted, setPhaseStarted] = useState(false)

  const canAdvance =
    currentPhase === 1 ? profile.industry !== "" && profile.environment !== "" : true

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Phase Navigation Bar */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex items-center justify-center gap-1 min-w-max mx-auto">
            {phases.map((phase, i) => {
              const Icon = phase.icon
              const isActive = currentPhase === phase.id
              const isCompleted = currentPhase > phase.id
              return (
                <div key={phase.id} className="flex items-center">
                  <button
                    onClick={() => {
                      if (isCompleted || isActive) {
                        setCurrentPhase(phase.id)
                        setPhaseStarted(false)
                      }
                    }}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-left transition-all",
                      isActive && "bg-primary text-primary-foreground shadow-md",
                      isCompleted && "bg-muted text-foreground cursor-pointer hover:bg-muted/80",
                      !isActive && !isCompleted && "text-muted-foreground cursor-default opacity-50",
                    )}
                  >
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-background/20 shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      ) : (
                        <Icon className={cn("h-3.5 w-3.5", isActive ? "text-primary-foreground" : "")} />
                      )}
                    </div>
                    <div className="hidden md:block">
                      <p className={cn("text-xs font-semibold leading-none", isActive ? "text-primary-foreground" : "")}>
                        {phase.title}
                      </p>
                      <p
                        className={cn(
                          "text-[10px] mt-0.5",
                          isActive ? "text-primary-foreground/70" : "text-muted-foreground",
                        )}
                      >
                        {phase.subtitle}
                      </p>
                    </div>
                  </button>
                  {i < phases.length - 1 && (
                    <div
                      className={cn(
                        "h-px w-6 mx-1",
                        currentPhase > phase.id ? "bg-primary" : "bg-border",
                      )}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Phase Content */}
        <Card className="mx-auto max-w-5xl border-border p-6 md:p-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
              Phase {currentPhase} of 6
            </p>
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
              {phases[currentPhase - 1].title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {phases[currentPhase - 1].subtitle}
            </p>
          </div>

          {currentPhase === 1 && <PhaseOne profile={profile} setProfile={setProfile} />}
          {currentPhase === 2 && <PhaseTwo profile={profile} started={phaseStarted} onStart={() => setPhaseStarted(true)} />}
          {currentPhase === 3 && <PhaseThree profile={profile} />}
          {currentPhase === 4 && <PhaseFour profile={profile} />}
          {currentPhase === 5 && <PhaseFive profile={profile} />}
          {currentPhase === 6 && <PhaseSix profile={profile} />}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setCurrentPhase((p) => p - 1)
                setPhaseStarted(false)
              }}
              disabled={currentPhase === 1}
              className="text-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5 mr-1.5" />
              Previous
            </Button>
            {currentPhase < 6 ? (
              <Button
                size="sm"
                onClick={() => {
                  setCurrentPhase((p) => p + 1)
                  setPhaseStarted(false)
                }}
                disabled={!canAdvance}
                className="text-sm"
              >
                Next Phase
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            ) : (
              <Button size="sm" className="text-sm" asChild>
                <a href="https://calendly.com/advisory-emidentity/30min" target="_blank" rel="noopener noreferrer">
                  Request Your Real Assessment
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </a>
              </Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
