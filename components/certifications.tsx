"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
      url: "https://learn.microsoft.com/en-us/users/emmanuelmorrison-0323/credentials/ebc71d70a33e4ade?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      provider: "Microsoft",
    },
    {
      title: "Microsoft Certified: Identity and Access Administrator Associate (SC-300)",
      url: "https://learn.microsoft.com/en-us/users/emmanuelmorrison-0323/credentials/54e3649fff226206?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      provider: "Microsoft",
    },
    {
      title: "FutureLearn Certification",
      url: "https://www.futurelearn.com/certificates/ebzhzap",
      provider: "FutureLearn",
    },
    {
      title: "Coursera Cloud Computing Certification",
      url: "https://www.coursera.org/account/accomplishments/verify/3L8HHLYJRC8T",
      provider: "Coursera",
    },
    {
      title: "Coursera Advanced Security Certification",
      url: "https://www.coursera.org/account/accomplishments/verify/8M5BU7TVG244",
      provider: "Coursera",
    },
    {
      title: "Udemy Professional Certificate",
      url: "https://www.linkedin.com/feed/?shareActive=true&shareUrl=http%3A%2F%2Fude.my%2FUC-12FNCG2F",
      provider: "Udemy",
    },
  ]

  return (
    <section id="certifications" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground mb-4">
              <Award className="h-3.5 w-3.5 text-accent" />
              <span>Professional Certifications</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 md:text-3xl">Industry-Recognized Credentials</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto md:text-base">
              Validated expertise in identity, security, and cloud technologies from leading providers
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:border-accent transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="text-xs font-medium text-accent mb-2">{cert.provider}</div>
                      <CardTitle className="text-sm leading-snug">{cert.title}</CardTitle>
                    </div>
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs hover:border-accent hover:text-accent bg-transparent"
                    >
                      View Certificate
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
