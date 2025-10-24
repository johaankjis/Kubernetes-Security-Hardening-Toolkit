import { AuditLogHeader } from "@/components/audit-log-header"
import { AuditLogFilters } from "@/components/audit-log-filters"
import { AuditLogList } from "@/components/audit-log-list"
import { AuditLogStats } from "@/components/audit-log-stats"

export default function AuditLogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AuditLogHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Audit Log Monitoring</h1>
          <p className="text-muted-foreground text-lg">Track and analyze Kubernetes API server audit events</p>
        </div>

        <AuditLogStats />
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <AuditLogFilters />
          </div>
          <div className="lg:col-span-3">
            <AuditLogList />
          </div>
        </div>
      </main>
    </div>
  )
}
