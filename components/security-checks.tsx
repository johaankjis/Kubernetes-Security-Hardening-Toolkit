"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

const securityChecks = [
  { name: "Non-root user", passing: 38, failing: 9, total: 47 },
  { name: "Read-only root filesystem", passing: 32, failing: 15, total: 47 },
  { name: "No privileged containers", passing: 45, failing: 2, total: 47 },
  { name: "Resource limits set", passing: 40, failing: 7, total: 47 },
  { name: "Security context defined", passing: 42, failing: 5, total: 47 },
  { name: "Capabilities dropped", passing: 35, failing: 12, total: 47 },
  { name: "No host network", passing: 44, failing: 3, total: 47 },
  { name: "No host PID", passing: 46, failing: 1, total: 47 },
]

export function SecurityChecks() {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Security Checks</h2>
      <div className="space-y-3">
        {securityChecks.map((check) => {
          const passRate = Math.round((check.passing / check.total) * 100)
          return (
            <div key={check.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{check.name}</span>
                <Badge variant={passRate >= 90 ? "secondary" : passRate >= 70 ? "default" : "destructive"}>
                  {passRate}%
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-chart-2" />
                  <span>{check.passing}</span>
                </div>
                <div className="flex items-center gap-1">
                  <XCircle className="h-3 w-3 text-destructive" />
                  <span>{check.failing}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
