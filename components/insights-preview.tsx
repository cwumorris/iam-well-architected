import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function InsightsPreview() {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">Latest Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert guidance on Microsoft Entra ID security, Zero Trust architecture, and cloud identity best practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-card hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4 mb-2">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-2">Latest Post • 8 min read</div>
                  <CardTitle className="text-xl md:text-2xl">
                    5 Fatal Microsoft Entra ID Misconfigurations (And How to Fix Them)
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed mb-6">
                After auditing hundreds of Microsoft Entra ID environments, we consistently see the same critical
                security gaps. Discover the five most dangerous misconfigurations that could compromise your entire
                tenant—and the exact steps to fix them.
              </CardDescription>
              <Button asChild className="gap-2">
                <Link href="/blog/entra-id-misconfigurations">
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
