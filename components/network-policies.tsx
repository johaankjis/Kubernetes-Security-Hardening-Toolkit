"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Network, ArrowRight } from "lucide-react"

const ingressPolicies = [
  {
    name: "allow-frontend",
    namespace: "production",
    podSelector: "app=frontend",
    from: [{ namespace: "ingress-nginx" }],
    ports: [{ protocol: "TCP", port: 80 }],
    enabled: true,
  },
  {
    name: "allow-backend-api",
    namespace: "production",
    podSelector: "app=backend",
    from: [{ namespace: "production", pod: "frontend" }],
    ports: [{ protocol: "TCP", port: 8080 }],
    enabled: true,
  },
  {
    name: "deny-all-default",
    namespace: "default",
    podSelector: "*",
    from: [],
    ports: [],
    enabled: true,
  },
]

const egressPolicies = [
  {
    name: "allow-external-api",
    namespace: "production",
    podSelector: "app=backend",
    to: [{ cidr: "0.0.0.0/0" }],
    ports: [{ protocol: "TCP", port: 443 }],
    enabled: true,
  },
  {
    name: "allow-database",
    namespace: "production",
    podSelector: "app=backend",
    to: [{ namespace: "database" }],
    ports: [{ protocol: "TCP", port: 5432 }],
    enabled: true,
  },
]

export function NetworkPolicies() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="ingress" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Network Policies</h2>
          <div className="flex items-center gap-2">
            <TabsList>
              <TabsTrigger value="ingress">Ingress</TabsTrigger>
              <TabsTrigger value="egress">Egress</TabsTrigger>
            </TabsList>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Policy
            </Button>
          </div>
        </div>

        <TabsContent value="ingress" className="space-y-3">
          {ingressPolicies.map((policy) => (
            <div key={policy.name} className="rounded-lg border border-border p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Network className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-semibold text-foreground">{policy.name}</h3>
                    <Badge variant={policy.enabled ? "default" : "secondary"} className="text-xs">
                      {policy.enabled ? "Active" : "Disabled"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Namespace: {policy.namespace}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Badge variant="outline" className="text-xs">
                  {policy.podSelector}
                </Badge>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-1">
                  {policy.from.length > 0 ? (
                    policy.from.map((source, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {source.namespace || source.pod || "external"}
                      </Badge>
                    ))
                  ) : (
                    <Badge variant="destructive" className="text-xs">
                      Deny All
                    </Badge>
                  )}
                </div>
              </div>

              {policy.ports.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Ports:</span>
                  {policy.ports.map((port, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {port.protocol}/{port.port}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </TabsContent>

        <TabsContent value="egress" className="space-y-3">
          {egressPolicies.map((policy) => (
            <div key={policy.name} className="rounded-lg border border-border p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Network className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-semibold text-foreground">{policy.name}</h3>
                    <Badge variant={policy.enabled ? "default" : "secondary"} className="text-xs">
                      {policy.enabled ? "Active" : "Disabled"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Namespace: {policy.namespace}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Badge variant="outline" className="text-xs">
                  {policy.podSelector}
                </Badge>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-1">
                  {policy.to.map((dest, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {dest.namespace || dest.cidr}
                    </Badge>
                  ))}
                </div>
              </div>

              {policy.ports.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Ports:</span>
                  {policy.ports.map((port, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {port.protocol}/{port.port}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  )
}
