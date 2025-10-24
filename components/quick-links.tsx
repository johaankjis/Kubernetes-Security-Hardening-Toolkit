"use client"

import { Card } from "@/components/ui/card"
import { Shield, Network, AlertTriangle, FileText } from "lucide-react"
import Link from "next/link"

const links = [
  {
    title: "RBAC & Network Policies",
    description: "Manage access control and network security",
    icon: Network,
    href: "/rbac",
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    title: "Vulnerability Scanning",
    description: "Container image security analysis",
    icon: AlertTriangle,
    href: "/vulnerabilities",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    title: "Pod Security Compliance",
    description: "Monitor pod security standards",
    icon: Shield,
    href: "/pod-security",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Audit Log Monitoring",
    description: "Track API server audit events",
    icon: FileText,
    href: "/audit-logs",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function QuickLinks() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <Link key={link.href} href={link.href}>
            <Card className="p-6 h-full transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
              <div className="space-y-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${link.bgColor}`}>
                  <Icon className={`h-6 w-6 ${link.color}`} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-balance">{link.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance">{link.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
