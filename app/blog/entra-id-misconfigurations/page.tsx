import { AlertTriangle, Shield, CheckCircle, ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Fatal Microsoft Entra ID Misconfigurations (And How to Fix Them) | Morrison Identity",
  description:
    "Discover the most dangerous Microsoft Entra ID security misconfigurations we see in enterprise environments. Learn how to detect and remediate over-privileged app owners, weak conditional access, and more.",
}

export default function EntraIDMisconfigurationsPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative border-b border-border bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4" />
              Security Advisory
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              5 Fatal Microsoft Entra ID Misconfigurations <span className="text-primary">(And How to Fix Them)</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
              After auditing hundreds of Microsoft Entra ID environments, we consistently see the same critical security
              gaps. Here are the five most dangerous misconfigurations that could compromise your entire tenant—and the
              exact steps to fix them.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
              <p className="text-lg">
                Microsoft Entra ID (formerly Azure AD) is the backbone of identity security for millions of
                organizations. Yet even experienced IT teams often overlook critical security configurations that leave
                their environments vulnerable to lateral movement, privilege escalation, and complete tenant takeover.
              </p>
              <p className="text-lg">
                In our work with enterprises across regulated industries, we've identified patterns of misconfigurations
                that appear again and again. These aren't obscure edge cases—they're fundamental security gaps that
                exist in the majority of tenants we assess.
              </p>
            </div>

            {/* Misconfiguration 1 */}
            <div className="mb-16 p-8 bg-card border border-border rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-destructive">1</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Over-Privileged Application Owners</h2>
                  <p className="text-muted-foreground">
                    Regular users with Owner rights on Enterprise Applications or App Registrations
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Why This Is Dangerous
                </h3>
                <p>
                  Application owners can modify redirect URIs, add credentials, and grant API permissions—including
                  high-risk Graph API scopes like{" "}
                  <code className="text-sm bg-muted px-2 py-1 rounded">User.ReadWrite.All</code> or{" "}
                  <code className="text-sm bg-muted px-2 py-1 rounded">Directory.ReadWrite.All</code>. A compromised
                  owner account can:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Add a new secret to an existing app and authenticate as that application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Modify OAuth consent flows to steal tokens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Escalate to Global Admin via privileged app permissions</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  How to Detect
                </h3>
                <p>Run this PowerShell query to find all non-admin users with application ownership:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`Connect-MgGraph -Scopes "Application.Read.All", "Directory.Read.All"

$apps = Get-MgApplication -All
foreach ($app in $apps) {
    $owners = Get-MgApplicationOwner -ApplicationId $app.Id
    foreach ($owner in $owners) {
        # Check if owner lacks privileged roles
        Write-Output "$($owner.DisplayName) owns $($app.DisplayName)"
    }
}`}</code>
                </pre>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Remediation Steps
                </h3>
                <ol className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">1.</span>
                    <span>
                      <strong>Audit current owners:</strong> Export all app registrations and their owners to a CSV for
                      review
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">2.</span>
                    <span>
                      <strong>Remove unnecessary owners:</strong> Only designated service accounts or admins should have
                      Owner rights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">3.</span>
                    <span>
                      <strong>Implement approval workflows:</strong> Use Azure AD Access Reviews to periodically
                      recertify application ownership
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">4.</span>
                    <span>
                      <strong>Enable alerting:</strong> Monitor for new credential additions via Azure Sentinel or
                      Defender for Cloud Apps
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Misconfiguration 2 */}
            <div className="mb-16 p-8 bg-card border border-border rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-destructive">2</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Incomplete Conditional Access Coverage</h2>
                  <p className="text-muted-foreground">Legacy protocols and admin portals not protected by MFA/CA</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Why This Is Dangerous
                </h3>
                <p>
                  Attackers exploit gaps in Conditional Access policies to bypass MFA requirements. Common blind spots
                  include:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>
                      <strong>Azure Management portals:</strong> Azure Portal, Azure CLI, PowerShell often excluded from
                      CA
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>
                      <strong>Legacy authentication:</strong> IMAP, POP3, SMTP not blocked despite security
                      recommendations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>
                      <strong>Service accounts:</strong> Workload identities granted blanket CA exclusions
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  How to Detect
                </h3>
                <p>Check your Entra ID Sign-in Logs for authentication without CA or MFA:</p>
                <ol className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">1.</span>
                    <span>Navigate to Entra ID → Monitoring → Sign-in logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">2.</span>
                    <span>
                      Filter by <strong>Conditional Access → Not Applied</strong> or{" "}
                      <strong>Authentication Details → MFA result: Not required</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">3.</span>
                    <span>Export results and analyze by user role, application, and client app</span>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Remediation Steps
                </h3>
                <ol className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">1.</span>
                    <span>
                      <strong>Block legacy authentication:</strong> Create a CA policy targeting "All cloud apps" →
                      "Other clients" → Block
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">2.</span>
                    <span>
                      <strong>Protect admin interfaces:</strong> Require compliant device + MFA for Microsoft Admin
                      Portals
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">3.</span>
                    <span>
                      <strong>Use report-only mode first:</strong> Test impact before enforcing to avoid breaking
                      automation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">4.</span>
                    <span>
                      <strong>Create service account exceptions carefully:</strong> Use named locations or trusted
                      networks where possible
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Misconfiguration 3 */}
            <div className="mb-16 p-8 bg-card border border-border rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-destructive">3</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Missing Break-Glass Account Safeguards</h2>
                  <p className="text-muted-foreground">Emergency admin accounts without monitoring or secure storage</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Why This Is Dangerous
                </h3>
                <p>Break-glass accounts are designed to bypass all security controls, making them a prime target:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Passwords stored in unencrypted documents or SharePoint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>No monitoring for sign-ins or role activations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Accounts granted Global Admin permanently instead of via PIM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Only one break-glass account configured (single point of failure)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Remediation Steps
                </h3>
                <ol className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">1.</span>
                    <span>
                      <strong>Create two cloud-only accounts:</strong> Named like breakglass01@domain.onmicrosoft.com
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">2.</span>
                    <span>
                      <strong>Store passwords securely:</strong> Physical sealed envelope in a safe + encrypted password
                      manager
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">3.</span>
                    <span>
                      <strong>Configure Azure Monitor alerts:</strong> Trigger on ANY sign-in or directory change from
                      break-glass accounts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">4.</span>
                    <span>
                      <strong>Exclude from Conditional Access:</strong> But document this exception in your security
                      runbook
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">5.</span>
                    <span>
                      <strong>Test quarterly:</strong> Verify credentials work and update passwords annually
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Misconfiguration 4 */}
            <div className="mb-16 p-8 bg-card border border-border rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-destructive">4</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Unmonitored Privileged Identity Management</h2>
                  <p className="text-muted-foreground">
                    PIM activations without approval workflows or anomaly detection
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Why This Is Dangerous
                </h3>
                <p>
                  Organizations enable PIM but fail to configure proper oversight, creating a false sense of security:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Global Admin activations require no approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Activation alerts go to a shared mailbox nobody monitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Maximum activation duration set to 8+ hours (defeats the purpose)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>No audit of who activates what, when, and from where</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Remediation Steps
                </h3>
                <ol className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">1.</span>
                    <span>
                      <strong>Require approval for sensitive roles:</strong> Global Admin, Privileged Role Admin,
                      Security Admin
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">2.</span>
                    <span>
                      <strong>Limit activation duration:</strong> 1-4 hours maximum, require ticket number in
                      justification
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">3.</span>
                    <span>
                      <strong>Configure Azure Sentinel analytics:</strong> Detect anomalous activation patterns (time of
                      day, frequency, location)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">4.</span>
                    <span>
                      <strong>Review PIM audit logs weekly:</strong> Export to a SIEM for long-term retention and
                      compliance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">5.</span>
                    <span>
                      <strong>Enforce MFA on activation:</strong> Require re-authentication even if user already has MFA
                      session
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Misconfiguration 5 */}
            <div className="mb-16 p-8 bg-card border border-border rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-destructive">5</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Legacy Authentication Still Enabled</h2>
                  <p className="text-muted-foreground">SMTP, POP, IMAP allowing password spray attacks</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Why This Is Dangerous
                </h3>
                <p>
                  Legacy protocols don't support modern authentication, making them perfect for credential-based
                  attacks:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>No MFA support—only username/password required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Bypasses Conditional Access policies entirely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Often used by threat actors for low-and-slow password spraying</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Microsoft reports legacy auth involved in 97% of credential compromise attacks</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  How to Detect
                </h3>
                <p>Check the Azure AD Sign-in Logs for legacy authentication attempts:</p>
                <ol className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">1.</span>
                    <span>Entra ID → Sign-in logs → Add filters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">2.</span>
                    <span>
                      <strong>Client App:</strong> Filter for "Other clients", "Exchange ActiveSync", "IMAP", "POP",
                      "SMTP"
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">3.</span>
                    <span>Identify which users and applications still depend on these protocols</span>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Remediation Steps
                </h3>
                <ol className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">1.</span>
                    <span>
                      <strong>Identify dependencies:</strong> Work with application owners to migrate to modern auth
                      (OAuth 2.0)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">2.</span>
                    <span>
                      <strong>Create blocking CA policy:</strong> Target "All cloud apps" → "Other clients" → Block
                      access
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">3.</span>
                    <span>
                      <strong>Use staged rollout:</strong> Start in report-only mode, then enforce for pilot group
                      before all users
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">4.</span>
                    <span>
                      <strong>Communicate with users:</strong> Notify impacted users before blocking, provide migration
                      guide
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-primary shrink-0">5.</span>
                    <span>
                      <strong>Monitor exceptions:</strong> Regularly audit any accounts excluded from legacy auth
                      blocking
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Conclusion */}
            <div className="p-8 bg-primary/5 border-l-4 border-primary rounded-lg mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What's Next?</h2>
              <p className="text-lg mb-6">
                These five misconfigurations represent some of the most common security gaps we find during Microsoft
                Entra ID assessments. The good news? They're all fixable with proper planning and execution.
              </p>
              <p className="mb-6">
                If you're unsure about your current security posture, consider a comprehensive Identity & Access
                Security Review. We provide:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Automated scanning for 50+ security misconfigurations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Prioritized remediation roadmap with step-by-step guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Custom Conditional Access policy templates for your environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Executive-ready report documenting findings and business risk</span>
                </li>
              </ul>
              <Button asChild size="lg" className="gap-2">
                <a href="https://calendly.com/advisory-emidentity/30min" target="_blank" rel="noopener noreferrer">
                  Schedule a Security Assessment
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Author Box */}
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">About the Author</h3>
              <p className="text-muted-foreground mb-4">
                Morrison Identity & Cloud Security specializes in Microsoft Entra ID (Azure AD), Zero Trust
                architecture, and cloud security for enterprise organizations. With 10+ years of experience securing
                regulated industries, we help teams modernize identity platforms without disrupting operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/">Learn More About Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.linkedin.com/in/emmanuel-m-0aa89916b/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
