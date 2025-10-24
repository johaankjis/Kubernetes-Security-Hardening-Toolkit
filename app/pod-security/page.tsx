import { PodSecurityHeader } from "@/components/pod-security-header"
import { SecurityStandards } from "@/components/security-standards"
import { PodComplianceList } from "@/components/pod-compliance-list"
import { SecurityChecks } from "@/components/security-checks"

export default function PodSecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <PodSecurityHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Pod Security Compliance</h1>
          <p className="text-muted-foreground text-lg">Monitor pod security standards and policy enforcement</p>
        </div>

        <SecurityStandards />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PodComplianceList />
          </div>
          <div>
            <SecurityChecks />
          </div>
        </div>
      </main>
    </div>
  )
}
