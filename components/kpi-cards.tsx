"use client"

import { Card } from "@/components/ui/card"
import { Shield, AlertTriangle, CheckCircle, Activity } from "lucide-react"

const kpis = [
  {
    title: "Security Score",
    value: "87",
    unit: "/100",
    change: "+5",
    trend: "up",
    icon: Shield,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    title: "Critical Vulnerabilities",
    value: "3",
    change: "-2",
    trend: "down",
    icon: AlertTriangle,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    title: "Compliant Pods",
    value: "94",
    unit: "%",
    change: "+3",
    trend: "up",
    icon: CheckCircle,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Active Policies",
    value: "28",
    change: "+4",
    trend: "up",
    icon: Activity,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function KPICards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        return (
          <Card key={kpi.title} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{kpi.value}</span>
                  {kpi.unit && <span className="text-lg text-muted-foreground">{kpi.unit}</span>}
                </div>
                <div className="flex items-center gap-1">
                  <span className={`text-sm font-medium ${kpi.trend === "up" ? "text-chart-2" : "text-chart-4"}`}>
                    {kpi.change}
                  </span>
                  <span className="text-sm text-muted-foreground">vs last week</span>
                </div>
              </div>
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${kpi.bgColor}`}>
                <Icon className={`h-6 w-6 ${kpi.color}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
