"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Linkedin, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setActiveMenu(null)}>
              <Shield className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
              <span className="text-sm font-semibold group-hover:text-primary/80 transition-colors">
                Morrison Identity
              </span>
            </Link>

            {/* Desktop Navigation - Horizontal */}
            <div className="hidden lg:flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium"
                onMouseEnter={() => setActiveMenu("services")}
                onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
              >
                Services
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium"
                onMouseEnter={() => setActiveMenu("cases")}
                onClick={() => setActiveMenu(activeMenu === "cases" ? null : "cases")}
              >
                Use Cases
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium"
                onMouseEnter={() => setActiveMenu("resources")}
                onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
              >
                Resources
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setActiveMenu(null)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-sm font-medium"
              >
                Contact
              </Button>

              <a
                href="https://www.linkedin.com/in/emmanuel-m-0aa89916b/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <Button variant="ghost" size="sm" className="text-sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {activeMenu && (
        <div
          className="fixed top-16 left-0 right-0 z-40 bg-card/98 backdrop-blur-md border-b border-border shadow-lg hidden lg:block"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="container mx-auto px-4 py-8">
            {activeMenu === "services" && (
              <div className="grid grid-cols-5 gap-6">
                <Link
                  href="/#services"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    Identity & Access Security
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Comprehensive identity platform assessment and remediation
                  </p>
                </Link>
                <Link
                  href="/zero-trust"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    Zero Trust Architecture
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Identity-first infrastructure with layered architecture diagram
                  </p>
                </Link>
                <Link
                  href="/assessment"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    Risk Assessment Framework
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Interactive IT Asset & Identity Risk Assessment simulation
                  </p>
                </Link>
                <Link
                  href="/devsecops"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    DevSecOps & IAM Automation
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Automate identity at the core of your software development lifecycle
                  </p>
                </Link>
                <Link
                  href="/services/sailpoint-hybrid-iam"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    SailPoint & Hybrid IAM
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Unified identity governance across on-premise and cloud
                  </p>
                </Link>
              </div>
            )}

            {activeMenu === "cases" && (
              <div className="grid grid-cols-3 gap-6">
                <Link
                  href="/case-studies/custom-scim-bridge"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    Custom SCIM Bridge
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    FastAPI solution for legacy app provisioning with Entra ID
                  </p>
                </Link>
                <Link
                  href="/case-studies/microsoft-services-hub"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    Proactive IT Health
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Microsoft Services Hub security assessments and recommendations
                  </p>
                </Link>
                <Link
                  href="/use-cases"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group border border-dashed border-border"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    All Use Cases
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Interactive security scenarios powered by EM Identity
                  </p>
                </Link>
              </div>
            )}

            {activeMenu === "resources" && (
              <div className="grid grid-cols-4 gap-6">
                <Link
                  href="/engagements/secretless-architecture"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    Secret-less Architecture
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Eliminating secret sprawl with dynamic credentials and HashiCorp Vault
                  </p>
                </Link>
                <Link
                  href="/engagements/identity-harmonization"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    M&A Identity Harmonization
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Unifying disparate identity systems during enterprise mergers
                  </p>
                </Link>
                <Link
                  href="/blog/entra-id-misconfigurations"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    5 Fatal Entra ID Misconfigurations
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Common security gaps and how to fix them
                  </p>
                </Link>
                <Link
                  href="/#certifications"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                    Certifications
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Microsoft, Coursera, and industry credentials
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 z-40 lg:hidden border-t border-border bg-card overflow-y-auto">
          <div className="lg:hidden border-t border-border bg-card">
            <div className="py-4 space-y-1">
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-muted-foreground mb-2">SERVICES</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sm mb-1"
                  onClick={() => {
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                    setIsOpen(false)
                  }}
                >
                  Identity & Access Security
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/zero-trust" onClick={() => setIsOpen(false)}>
                    Zero Trust Architecture
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/devsecops" onClick={() => setIsOpen(false)}>
                    DevSecOps & IAM Automation
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/services/sailpoint-hybrid-iam" onClick={() => setIsOpen(false)}>
                    SailPoint & Hybrid IAM
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/assessment" onClick={() => setIsOpen(false)}>
                    Risk Assessment Framework
                  </Link>
                </Button>
              </div>

              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-muted-foreground mb-2">USE CASES</p>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/case-studies/custom-scim-bridge" onClick={() => setIsOpen(false)}>
                    Custom SCIM Bridge
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/case-studies/microsoft-services-hub" onClick={() => setIsOpen(false)}>
                    Proactive IT Health
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/use-cases" onClick={() => setIsOpen(false)}>
                    All Interactive Scenarios
                  </Link>
                </Button>
              </div>

              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-muted-foreground mb-2">RESOURCES</p>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/engagements/secretless-architecture" onClick={() => setIsOpen(false)}>
                    Secret-less Architecture
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/engagements/identity-harmonization" onClick={() => setIsOpen(false)}>
                    M&A Identity Harmonization
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm mb-1" asChild>
                  <Link href="/blog/entra-id-misconfigurations" onClick={() => setIsOpen(false)}>
                    Entra ID Security Guide
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sm mb-1"
                  onClick={() => {
                    document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" })
                    setIsOpen(false)
                  }}
                >
                  Certifications
                </Button>
              </div>

              <Button
                variant="ghost"
                className="w-full justify-start text-sm font-medium"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                Contact
              </Button>

              <a
                href="https://www.linkedin.com/in/emmanuel-m-0aa89916b/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2"
              >
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn Profile
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
