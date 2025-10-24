"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const auditLogs = [
  {
    id: "1",
    timestamp: "2025-01-23 14:32:15",
    verb: "DELETE",
    resource: "pods",
    name: "frontend-7d9f8c6b4-xk2m9",
    namespace: "production",
    user: "admin@company.com",
    statusCode: 200,
    userAgent: "kubectl/v1.28.0",
    sourceIP: "10.0.1.45",
  },
  {
    id: "2",
    timestamp: "2025-01-23 14:32:10",
    verb: "CREATE",
    resource: "secrets",
    name: "api-credentials",
    namespace: "production",
    user: "ci-cd-sa",
    statusCode: 201,
    userAgent: "kubernetes-client/v1.28.0",
    sourceIP: "10.0.2.12",
  },
  {
    id: "3",
    timestamp: "2025-01-23 14:32:05",
    verb: "UPDATE",
    resource: "deployments",
    name: "backend-api",
    namespace: "production",
    user: "developer@company.com",
    statusCode: 200,
    userAgent: "kubectl/v1.28.0",
    sourceIP: "10.0.1.78",
  },
  {
    id: "4",
    timestamp: "2025-01-23 14:31:58",
    verb: "GET",
    resource: "pods",
    name: "database-postgres-0",
    namespace: "database",
    user: "monitoring-sa",
    statusCode: 200,
    userAgent: "prometheus/v2.45.0",
    sourceIP: "10.0.3.22",
  },
  {
    id: "5",
    timestamp: "2025-01-23 14:31:52",
    verb: "DELETE",
    resource: "configmaps",
    name: "app-config",
    namespace: "production",
    user: "admin@company.com",
    statusCode: 403,
    userAgent: "kubectl/v1.28.0",
    sourceIP: "10.0.1.45",
  },
]

const verbColors: Record<string, string> = {
  GET: "secondary",
  LIST: "secondary",
  CREATE: "default",
  UPDATE: "default",
  PATCH: "default",
  DELETE: "destructive",
}

const statusColors = (code: number) => {
  if (code >= 200 && code < 300) return "secondary"
  if (code >= 400 && code < 500) return "destructive"
  if (code >= 500) return "destructive"
  return "default"
}

export function AuditLogList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredLogs = auditLogs.filter(
    (log) =>
      log.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="p-6">
      <div className="mb-6 space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Audit Events</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {filteredLogs.map((log) => (
          <AccordionItem key={log.id} value={`log-${log.id}`} className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full pr-4">
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={verbColors[log.verb] as any} className="text-xs">
                        {log.verb}
                      </Badge>
                      <span className="font-semibold text-foreground">{log.resource}</span>
                      <span className="text-sm text-muted-foreground">/</span>
                      <span className="text-sm text-foreground">{log.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {log.timestamp} • {log.user} • {log.namespace}
                    </p>
                  </div>
                </div>
                <Badge variant={statusColors(log.statusCode) as any} className="text-xs">
                  {log.statusCode}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 pb-2 space-y-2">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">User:</span>
                    <p className="font-medium text-foreground">{log.user}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Source IP:</span>
                    <p className="font-medium text-foreground">{log.sourceIP}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">User Agent:</span>
                    <p className="font-medium text-foreground font-mono text-xs">{log.userAgent}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Namespace:</span>
                    <p className="font-medium text-foreground">{log.namespace}</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  )
}
