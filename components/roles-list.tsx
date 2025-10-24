"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, Users } from "lucide-react"

const roles = [
  {
    name: "cluster-admin",
    type: "ClusterRole",
    subjects: 3,
    permissions: ["*"],
    namespace: "all",
    risk: "high",
  },
  {
    name: "developer",
    type: "Role",
    subjects: 12,
    permissions: ["get", "list", "watch", "create", "update"],
    namespace: "development",
    risk: "medium",
  },
  {
    name: "viewer",
    type: "Role",
    subjects: 25,
    permissions: ["get", "list", "watch"],
    namespace: "production",
    risk: "low",
  },
  {
    name: "ci-deployer",
    type: "Role",
    subjects: 2,
    permissions: ["get", "create", "update", "patch"],
    namespace: "production",
    risk: "medium",
  },
]

const riskColors = {
  high: "destructive",
  medium: "default",
  low: "secondary",
} as const

export function RolesList() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Roles & Bindings</h2>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Role
        </Button>
      </div>

      <div className="space-y-3">
        {roles.map((role) => (
          <div key={role.name} className="rounded-lg border border-border p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{role.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {role.type}
                  </Badge>
                  <Badge variant={riskColors[role.risk]} className="text-xs">
                    {role.risk} risk
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Namespace: {role.namespace}</p>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{role.subjects} subjects</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {role.permissions.slice(0, 3).map((perm) => (
                  <Badge key={perm} variant="secondary" className="text-xs">
                    {perm}
                  </Badge>
                ))}
                {role.permissions.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{role.permissions.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
