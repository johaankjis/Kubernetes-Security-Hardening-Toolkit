import { VulnerabilityHeader } from "@/components/vulnerability-header"
import { VulnerabilitySummary } from "@/components/vulnerability-summary"
import { ImageVulnerabilities } from "@/components/image-vulnerabilities"
import { VulnerabilityTimeline } from "@/components/vulnerability-timeline"

export default function VulnerabilitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <VulnerabilityHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Vulnerability Scanning</h1>
          <p className="text-muted-foreground text-lg">Container image security analysis and CVE tracking</p>
        </div>

        <VulnerabilitySummary />
        <ImageVulnerabilities />
        <VulnerabilityTimeline />
      </main>
    </div>
  )
}
