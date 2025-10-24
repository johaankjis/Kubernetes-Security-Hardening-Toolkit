"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

const verbFilters = [
  { id: "get", label: "GET", count: 8234 },
  { id: "list", label: "LIST", count: 2456 },
  { id: "create", label: "CREATE", count: 892 },
  { id: "update", label: "UPDATE", count: 645 },
  { id: "patch", label: "PATCH", count: 423 },
  { id: "delete", label: "DELETE", count: 197 },
]

const statusFilters = [
  { id: "success", label: "Success (2xx)", count: 12824 },
  { id: "redirect", label: "Redirect (3xx)", count: 0 },
  { id: "client-error", label: "Client Error (4xx)", count: 18 },
  { id: "server-error", label: "Server Error (5xx)", count: 5 },
]

const resourceFilters = [
  { id: "pods", label: "Pods", count: 4532 },
  { id: "services", label: "Services", count: 1234 },
  { id: "deployments", label: "Deployments", count: 892 },
  { id: "configmaps", label: "ConfigMaps", count: 645 },
  { id: "secrets", label: "Secrets", count: 423 },
]

export function AuditLogFilters() {
  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground">Filters</h2>
        <Button variant="ghost" size="sm">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-foreground">HTTP Verb</Label>
          {verbFilters.map((filter) => (
            <div key={filter.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id={filter.id} />
                <label htmlFor={filter.id} className="text-sm text-foreground cursor-pointer">
                  {filter.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{filter.count.toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4 space-y-3">
          <Label className="text-sm font-semibold text-foreground">Status Code</Label>
          {statusFilters.map((filter) => (
            <div key={filter.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id={filter.id} />
                <label htmlFor={filter.id} className="text-sm text-foreground cursor-pointer">
                  {filter.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{filter.count.toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4 space-y-3">
          <Label className="text-sm font-semibold text-foreground">Resource Type</Label>
          {resourceFilters.map((filter) => (
            <div key={filter.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id={filter.id} />
                <label htmlFor={filter.id} className="text-sm text-foreground cursor-pointer">
                  {filter.label}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">{filter.count.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
