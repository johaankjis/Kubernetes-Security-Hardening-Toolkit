import { DashboardHeader } from "@/components/dashboard-header"
import { KPICards } from "@/components/kpi-cards"
import { SecurityOverview } from "@/components/security-overview"
import { RecentActivity } from "@/components/recent-activity"
import { QuickLinks } from "@/components/quick-links"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Security Dashboard</h1>
          <p className="text-muted-foreground text-lg">Monitor and manage your Kubernetes cluster security posture</p>
        </div>

        <KPICards />
        <QuickLinks />
        <SecurityOverview />
        <RecentActivity />
      </main>
    </div>
  )
}
