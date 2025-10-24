"use client"

import { Card } from "@/components/ui/card"
import { Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react"

const stats = [
  {
    title: "Total Events",
    value: "12,847",
    change: "+1,234",
    period: "last hour",
    icon: Activity,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    title: "Failed Requests",
    value: "23",
    change: "+5",
    period: "last hour",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    title: "Successful Requests",
    value: "12,824",
    change: "+1,229",
    period: "last hour",
    icon: CheckCircle,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Avg Response Time",
    value: "45ms",
    change: "-3ms",
    period: "vs last hour",
    icon: Clock,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function AuditLogStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-muted-foreground">{stat.change}</span>
                  <span className="text-sm text-muted-foreground">{stat.period}</span>
                </div>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
