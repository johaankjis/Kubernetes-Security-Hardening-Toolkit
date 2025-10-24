import { RBACHeader } from "@/components/rbac-header"
import { RolesList } from "@/components/roles-list"
import { NetworkPolicies } from "@/components/network-policies"
import { ServiceAccounts } from "@/components/service-accounts"

export default function RBACPage() {
  return (
    <div className="min-h-screen bg-background">
      <RBACHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">RBAC & Network Policies</h1>
          <p className="text-muted-foreground text-lg">
            Manage role-based access control and network security policies
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <RolesList />
          <ServiceAccounts />
        </div>

        <NetworkPolicies />
      </main>
    </div>
  )
}
