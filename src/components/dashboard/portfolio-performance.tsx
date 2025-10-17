"use client";

import { ArrowTrendingUpIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const kpis = [
  {
    label: "Total Portfolio",
    value: "$248,920",
    change: "+6.25%",
    icon: Wallet,
    trend: "up",
  },
  {
    label: "24h P/L",
    value: "+$4,380",
    change: "+1.86%",
    icon: TrendingUp,
    trend: "up",
  },
  {
    label: "30d P/L",
    value: "-$12,640",
    change: "-4.15%",
    icon: TrendingDown,
    trend: "down",
  },
];

const progressSegments = [
  { label: "BTC", value: 40, className: "from-amber-400 to-amber-500" },
  { label: "ETH", value: 32, className: "from-blue-400 to-blue-600" },
  { label: "SOL", value: 16, className: "from-cyan-400 to-emerald-500" },
  { label: "ALTS", value: 12, className: "from-fuchsia-400 to-pink-500" },
];

export function PortfolioPerformance() {
  return (
    <Card className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)]" />
      <CardHeader className="relative z-10 flex-row items-center justify-between">
        <div>
          <Badge className="mb-2" variant="outline">
            Real-time synced
          </Badge>
          <CardTitle className="text-2xl font-display">Portfolio Intelligence</CardTitle>
          <CardDescription>Monitor performance, allocations, and yield velocity.</CardDescription>
        </div>
        <Button variant="subtle" className="rounded-full border border-slate-700/60">
          <span className="material-symbols-rounded text-base">sync</span>
          Sync now
        </Button>
      </CardHeader>
      <CardContent className="relative z-10 space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-slate-800/60 bg-slate-900/60 p-4 shadow-lg shadow-slate-950/40"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-slate-900/70 p-3">
                  <kpi.icon className="h-5 w-5 text-brand-300" />
                </div>
                <Badge variant={kpi.trend === "up" ? "success" : "warning"}>{kpi.change}</Badge>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-slate-400">{kpi.label}</p>
              <p className="mt-1 text-xl font-semibold text-white">{kpi.value}</p>
            </motion.div>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-slate-400">Allocation velocity</p>
              <p className="text-2xl font-semibold">67% deployed</p>
            </div>
            <Button variant="ghost" size="sm" className="text-brand-300">
              Optimize strategy
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-6 space-y-3">
            {progressSegments.map((segment) => (
              <div key={segment.label} className="space-y-2">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
                  <span>{segment.label}</span>
                  <span>{segment.value}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-900/90">
                  <motion.span
                    className={cn("block h-full bg-gradient-to-r", segment.className)}
                    initial={{ width: 0 }}
                    animate={{ width: `${segment.value}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <ArrowTrendingUpIcon className="h-4 w-4 text-brand-300" />
          Performance is 12% above blended benchmark this quarter.
        </div>
        <Button variant="outline" size="sm" className="border-slate-700/70 text-slate-200">
          View analytics
        </Button>
      </CardFooter>
    </Card>
  );
}
