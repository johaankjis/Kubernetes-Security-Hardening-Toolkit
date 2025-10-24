"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, AlertTriangle, CheckCircle } from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const pods = [
  {
    name: "frontend-7d9f8c6b4-xk2m9",
    namespace: "production",
    compliant: false,
    violations: [
      { check: "Running as root", severity: "high" },
      { check: "Privileged container", severity: "critical" },
    ],
    standard: "restricted",
  },
  {
    name: "backend-api-5f6d8b9c-p4k7n",
    namespace: "production",
    compliant: false,
    violations: [{ check: "No resource limits", severity: "medium" }],
    standard: "baseline",
  },
  {
    name: "database-postgres-0",
    namespace: "database",
    compliant: true,
    violations: [],
    standard: "restricted",
  },
  {
    name: "cache-redis-6c8d9f-m2n5p",
    namespace: "cache",
    compliant: true,
    violations: [],
    standard: "baseline",
  },
  {
    name: "worker-queue-4b7c8d-q9r3s",
    namespace: "production",
    compliant: false,
    violations: [
      { check: "Host network access", severity: "high" },
      { check: "Capabilities not dropped", severity: "medium" },
    ],
    standard: "restricted",
  },
]

export function PodComplianceList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPods = pods.filter(
    (pod) =>
      pod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pod.namespace.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="p-6">
      <div className="mb-6 space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Pod Compliance Status</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search pods..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {filteredPods.map((pod, index) => (
          <AccordionItem key={pod.name} value={`pod-${index}`} className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <div className="flex items-center gap-3">
                  {pod.compliant ? (
                    <CheckCircle className="h-5 w-5 text-chart-2" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  )}
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">{pod.name}</h3>
                    <p className="text-sm text-muted-foreground">Namespace: {pod.namespace}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={pod.compliant ? "secondary" : "destructive"} className="text-xs">
                    {pod.compliant ? "Compliant" : `${pod.violations.length} violations`}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {pod.standard}
                  </Badge>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {pod.compliant ? (
                <div className="pt-4 pb-2 text-sm text-muted-foreground">
                  This pod meets all security requirements for the {pod.standard} standard.
                </div>
              ) : (
                <div className="pt-4 pb-2 space-y-2">
                  <p className="text-sm font-medium text-foreground">Security Violations:</p>
                  {pod.violations.map((violation, idx) => (
                    <div key={idx} className="flex items-center justify-between rounded-md bg-muted p-3">
                      <span className="text-sm text-foreground">{violation.check}</span>
                      <Badge
                        variant={
                          violation.severity === "critical"
                            ? "destructive"
                            : violation.severity === "high"
                              ? "destructive"
                              : "default"
                        }
                        className="text-xs"
                      >
                        {violation.severity}
                      </Badge>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                    View Remediation Steps
                  </Button>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  )
}
