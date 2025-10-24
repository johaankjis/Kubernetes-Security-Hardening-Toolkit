"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Shield, Lock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "vulnerability",
    title: "Critical vulnerability detected in nginx:1.19",
    description: "CVE-2024-1234 - Remote code execution vulnerability",
    timestamp: "2 minutes ago",
    severity: "critical",
    icon: AlertTriangle,
  },
  {
    id: 2,
    type: "compliance",
    title: "Pod security policy violation",
    description: "Pod 'api-server-7d9f' running as root user",
    timestamp: "15 minutes ago",
    severity: "high",
    icon: Shield,
  },
  {
    id: 3,
    type: "success",
    title: "Network policy applied successfully",
    description: "Ingress rules updated for namespace 'production'",
    timestamp: "1 hour ago",
    severity: "info",
    icon: CheckCircle,
  },
  {
    id: 4,
    type: "rbac",
    title: "RBAC policy updated",
    description: "Service account permissions modified for 'backend-sa'",
    timestamp: "3 hours ago",
    severity: "medium",
    icon: Lock,
  },
]

const severityColors = {
  critical: "destructive",
  high: "destructive",
  medium: "default",
  info: "secondary",
} as const

export function RecentActivity() {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              className="flex gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  activity.severity === "critical" || activity.severity === "high"
                    ? "bg-destructive/10"
                    : activity.severity === "info"
                      ? "bg-chart-2/10"
                      : "bg-muted"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    activity.severity === "critical" || activity.severity === "high"
                      ? "text-destructive"
                      : activity.severity === "info"
                        ? "text-chart-2"
                        : "text-muted-foreground"
                  }`}
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground text-balance">{activity.title}</h3>
                  <Badge variant={severityColors[activity.severity]} className="shrink-0">
                    {activity.severity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
