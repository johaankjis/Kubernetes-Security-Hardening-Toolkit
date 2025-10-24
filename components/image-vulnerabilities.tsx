"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink, AlertTriangle } from "lucide-react"
import { useState } from "react"

const images = [
  {
    name: "nginx",
    tag: "1.19",
    namespace: "production",
    critical: 2,
    high: 5,
    medium: 12,
    low: 18,
    cves: ["CVE-2024-1234", "CVE-2024-5678"],
    lastScanned: "5 min ago",
  },
  {
    name: "postgres",
    tag: "14.2",
    namespace: "database",
    critical: 0,
    high: 3,
    medium: 8,
    low: 15,
    cves: ["CVE-2024-2345"],
    lastScanned: "10 min ago",
  },
  {
    name: "redis",
    tag: "7.0",
    namespace: "cache",
    critical: 1,
    high: 2,
    medium: 5,
    low: 10,
    cves: ["CVE-2024-3456"],
    lastScanned: "15 min ago",
  },
  {
    name: "node",
    tag: "18-alpine",
    namespace: "production",
    critical: 0,
    high: 1,
    medium: 4,
    low: 8,
    cves: [],
    lastScanned: "20 min ago",
  },
]

export function ImageVulnerabilities() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredImages = images.filter(
    (img) =>
      img.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.tag.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="p-6">
      <div className="mb-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Container Images</h2>
          <Button variant="outline" size="sm">
            Export Report
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="space-y-3">
        {filteredImages.map((image) => {
          const totalVulns = image.critical + image.high + image.medium + image.low
          const hasCritical = image.critical > 0

          return (
            <div
              key={`${image.name}-${image.tag}`}
              className={`rounded-lg border p-4 space-y-3 ${hasCritical ? "border-destructive/50 bg-destructive/5" : "border-border"}`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">
                      {image.name}:{image.tag}
                    </h3>
                    {hasCritical && <AlertTriangle className="h-4 w-4 text-destructive" />}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>Namespace: {image.namespace}</span>
                    <span>•</span>
                    <span>Scanned: {image.lastScanned}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Vulnerabilities:</span>
                {image.critical > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {image.critical} Critical
                  </Badge>
                )}
                {image.high > 0 && (
                  <Badge variant="destructive" className="text-xs">
                    {image.high} High
                  </Badge>
                )}
                {image.medium > 0 && (
                  <Badge variant="default" className="text-xs">
                    {image.medium} Medium
                  </Badge>
                )}
                {image.low > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    {image.low} Low
                  </Badge>
                )}
                {totalVulns === 0 && (
                  <Badge variant="secondary" className="text-xs">
                    No vulnerabilities
                  </Badge>
                )}
              </div>

              {image.cves.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {image.cves.map((cve) => (
                    <Badge key={cve} variant="outline" className="text-xs font-mono">
                      {cve}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
