"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle, XCircle } from "lucide-react"

const standards = [
  {
    name: "Privileged",
    level: "baseline",
    compliant: 45,
    violations: 2,
    total: 47,
    description: "Minimally restrictive policy",
    status: "warning",
  },
  {
    name: "Baseline",
    level: "restricted",
    compliant: 38,
    violations: 5,
    total: 43,
    description: "Prevents known privilege escalations",
    status: "warning",
  },
  {
    name: "Restricted",
    level: "highly-restricted",
    compliant: 28,
    violations: 8,
    total: 36,
    description: "Heavily restricted, hardened policy",
    status: "error",
  },
]

export function SecurityStandards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {standards.map((standard) => {
        const complianceRate = Math.round((standard.compliant / standard.total) * 100)
        const StatusIcon =
          standard.status === "error" ? XCircle : standard.status === "warning" ? AlertCircle : CheckCircle

        return (
          <Card key={standard.name} className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-foreground">{standard.name}</h3>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </div>
              <StatusIcon
                className={`h-5 w-5 ${standard.status === "error" ? "text-destructive" : standard.status === "warning" ? "text-chart-3" : "text-chart-2"}`}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Compliance Rate</span>
                <span className="font-semibold text-foreground">{complianceRate}%</span>
              </div>
              <Progress value={complianceRate} className="h-2" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-chart-2" />
                <span className="text-muted-foreground">{standard.compliant} compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-muted-foreground">{standard.violations} violations</span>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
