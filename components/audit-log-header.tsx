"use client"

import { Shield, ArrowLeft, Download, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState } from "react"

export function AuditLogHeader() {
  const [isLive, setIsLive] = useState(true)

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Audit Logs</h1>
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${isLive ? "bg-chart-2 animate-pulse" : "bg-muted-foreground"}`}
                />
                <p className="text-sm text-muted-foreground">{isLive ? "Live monitoring" : "Paused"}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsLive(!isLive)}>
              {isLive ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              {isLive ? "Pause" : "Resume"}
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
