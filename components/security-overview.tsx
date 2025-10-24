"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const vulnerabilityData = [
  { name: "Critical", value: 3, color: "hsl(var(--chart-4))" },
  { name: "High", value: 12, color: "hsl(var(--chart-3))" },
  { name: "Medium", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Low", value: 45, color: "hsl(var(--chart-1))" },
]

const complianceData = [
  { category: "Pod Security", score: 92 },
  { category: "Network Policies", score: 88 },
  { category: "RBAC", score: 95 },
  { category: "Secrets", score: 78 },
  { category: "Image Security", score: 85 },
]

export function SecurityOverview() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="vulnerabilities" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Security Overview</h2>
          <TabsList>
            <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="vulnerabilities" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Vulnerability Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={vulnerabilityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {vulnerabilityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">Severity Breakdown</h3>
              <div className="space-y-3">
                {vulnerabilityData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                    </div>
                    <Badge variant="secondary">{item.value}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Compliance Scores by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={complianceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip />
              <Bar dataKey="score" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
