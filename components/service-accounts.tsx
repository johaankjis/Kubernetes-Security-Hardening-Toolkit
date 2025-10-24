"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Key, AlertCircle } from "lucide-react"

const serviceAccounts = [
  {
    name: "default",
    namespace: "default",
    secrets: 1,
    roles: ["viewer"],
    automountToken: true,
    warning: false,
  },
  {
    name: "backend-sa",
    namespace: "production",
    secrets: 2,
    roles: ["developer", "secret-reader"],
    automountToken: true,
    warning: false,
  },
  {
    name: "admin-sa",
    namespace: "kube-system",
    secrets: 3,
    roles: ["cluster-admin"],
    automountToken: true,
    warning: true,
  },
  {
    name: "ci-cd-sa",
    namespace: "ci-cd",
    secrets: 1,
    roles: ["ci-deployer"],
    automountToken: false,
    warning: false,
  },
]

export function ServiceAccounts() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Service Accounts</h2>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Account
        </Button>
      </div>

      <div className="space-y-3">
        {serviceAccounts.map((sa) => (
          <div key={`${sa.namespace}-${sa.name}`} className="rounded-lg border border-border p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{sa.name}</h3>
                  {sa.warning && <AlertCircle className="h-4 w-4 text-destructive" />}
                </div>
                <p className="text-sm text-muted-foreground">Namespace: {sa.namespace}</p>
              </div>
              <Badge variant={sa.automountToken ? "default" : "secondary"} className="text-xs">
                {sa.automountToken ? "Auto-mount" : "Manual"}
              </Badge>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Key className="h-4 w-4" />
                <span>{sa.secrets} secrets</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {sa.roles.map((role) => (
                  <Badge key={role} variant="outline" className="text-xs">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>

            {sa.warning && (
              <div className="flex items-start gap-2 rounded-md bg-destructive/10 p-2">
                <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                <p className="text-xs text-destructive">High-privilege service account with cluster-admin role</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
