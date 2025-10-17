"use client";

import { LineChartIcon, PieChart, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const allocations = [
  { symbol: "BTC", weight: 39.5, price: "$67,420", change: "+4.1%", accent: "bg-amber-400/80" },
  { symbol: "ETH", weight: 28.1, price: "$3,480", change: "+2.8%", accent: "bg-blue-400/80" },
  { symbol: "SOL", weight: 14.8, price: "$168.20", change: "+1.5%", accent: "bg-cyan-400/80" },
  { symbol: "ARB", weight: 6.2, price: "$1.18", change: "-0.8%", accent: "bg-indigo-400/80" },
  { symbol: "LINK", weight: 5.5, price: "$19.65", change: "+0.9%", accent: "bg-violet-400/80" },
  { symbol: "OTH", weight: 5.9, price: "--", change: "Diversified", accent: "bg-pink-400/80" },
];

const narratives = [
  {
    title: "Layer 1 momentum",
    text: "BTC and SOL lead risk-on flows while ETH staking yields remain attractive despite fee compression.",
  },
  {
    title: "AI + DePIN",
    text: "Selective exposure via RNDR, FET, and decentralized infrastructure tokens for compute demand.",
  },
  {
    title: "Restaking flywheel",
    text: "LSDfi and restaking primitives compounding ETH denominated yield across ecosystems.",
  },
];

export function AssetDistribution() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <Badge variant="outline" className="mb-2 flex items-center gap-2">
            <PieChart className="h-4 w-4" /> Allocation blend
          </Badge>
          <CardTitle className="text-xl font-display">Asset Distribution</CardTitle>
        </div>
        <Button variant="ghost" size="sm" className="text-slate-300">
          Export report
        </Button>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-8">
        <Tabs defaultValue="allocation" className="w-full">
          <TabsList>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
            <TabsTrigger value="narratives">Narratives</TabsTrigger>
            <TabsTrigger value="yield">Yield Curves</TabsTrigger>
          </TabsList>
          <TabsContent value="allocation" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="grid gap-3 md:grid-cols-2"
            >
              {allocations.map((asset) => (
                <div
                  key={asset.symbol}
                  className="group flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 shadow-inner shadow-slate-950/20 transition hover:border-brand-500/40"
                >
                  <div className="flex items-center gap-3">
                    <span className={cn("h-10 w-10 rounded-2xl", asset.accent)} />
                    <div>
                      <p className="text-sm font-semibold text-white">{asset.symbol}</p>
                      <p className="text-xs text-slate-400">{asset.price}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{asset.weight}%</p>
                    <p className={cn("text-xs", asset.change.startsWith("-") ? "text-rose-300" : "text-emerald-300")}>{asset.change}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="narratives" className="space-y-4">
            {narratives.map((narrative) => (
              <div
                key={narrative.title}
                className="rounded-3xl border border-slate-800/70 bg-slate-900/50 p-5"
              >
                <p className="text-sm font-semibold text-white">{narrative.title}</p>
                <p className="mt-2 text-sm text-slate-300">{narrative.text}</p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="yield" className="space-y-6">
            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 text-sm text-slate-300">
              <p className="flex items-center gap-2 font-semibold text-white">
                <LineChartIcon className="h-4 w-4" /> Aggregate staking yields
              </p>
              <p className="mt-2 text-sm text-slate-300">
                ETH: 4.2% APR • SOL: 7.8% APR • ATOM: 18.4% APR. Restaking boosts on EigenLayer add 2.3% blended yield.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 text-sm text-slate-300">
              <p className="flex items-center gap-2 font-semibold text-white">
                <Sparkles className="h-4 w-4" /> Strategy insight
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Laddered deployment of stablecoin tranches into on-chain credit markets hedges volatility while preserving upside
                via options overlays.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        <Separator className="bg-slate-800/60" />
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-5 text-sm text-slate-300">
          <p className="flex items-center gap-2 font-semibold text-white">
            <span className="material-symbols-rounded text-base">bolt</span>
            Smart rebalance window opens in 02h 14m
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Automated order routes prepared across Coinbase Prime, Binance, and Jupiter DEX.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
