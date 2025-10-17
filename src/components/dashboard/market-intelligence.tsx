"use client";

import { Activity, Globe2, Newspaper, Signal } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const signals = [
  {
    title: "BTC options skew flips",
    text: "Short-dated call demand outpaces puts as funding spikes to 20% annualized.",
    tag: "Derivatives",
  },
  {
    title: "ETH L2 volumes surge",
    text: "Base and Arbitrum process 5.8M transactions in 24h as on-chain gaming activity accelerates.",
    tag: "Scaling",
  },
  {
    title: "Stablecoin flows",
    text: "$1.2B net inflows into USDT and USDC across CEX venues driven by APAC demand window.",
    tag: "Liquidity",
  },
];

const headlines = [
  {
    source: "The Block",
    title: "Institutional desks rotate into ETH ahead of potential ETF approval window",
    time: "12m ago",
  },
  {
    source: "DefiLlama",
    title: "Restaking TVL crosses $12B as EigenLayer opens Wave 3 operator slots",
    time: "36m ago",
  },
  {
    source: "Messari",
    title: "SOL ecosystem launches $200M acceleration fund targeting consumer apps",
    time: "58m ago",
  },
  {
    source: "Bankless",
    title: "L2 MEV auctions go live, redirecting $3.4M/day to sequencer revenue sharing",
    time: "1h ago",
  },
];

const chainActivity = [
  {
    network: "Ethereum",
    tx: "1.23M tx / 24h",
    fees: "$6.2M",
    change: "+8.1%",
  },
  {
    network: "Solana",
    tx: "25.4M tx / 24h",
    fees: "$1.1M",
    change: "+12.4%",
  },
  {
    network: "Base",
    tx: "2.9M tx / 24h",
    fees: "$540k",
    change: "+15.7%",
  },
];

export function MarketIntelligence() {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <Badge variant="outline" className="mb-2 flex items-center gap-2">
            <Signal className="h-4 w-4" /> Signal Scanner
          </Badge>
          <CardTitle className="text-xl font-display">Market Intelligence</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Actionable signals</h3>
          <div className="mt-3 grid gap-3 lg:grid-cols-3">
            {signals.map((signal, index) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-4"
              >
                <p className="text-xs uppercase tracking-wide text-brand-200">{signal.tag}</p>
                <p className="mt-2 text-sm font-semibold text-white">{signal.title}</p>
                <p className="mt-2 text-sm text-slate-300">{signal.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <Separator className="bg-slate-800/60" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40">
            <div className="flex items-center justify-between px-5 pt-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Global headlines</h3>
              <Globe2 className="h-4 w-4 text-slate-500" />
            </div>
            <ScrollArea className="h-64 px-5 pb-5">
              <div className="space-y-4">
                {headlines.map((headline) => (
                  <div key={headline.title} className="rounded-2xl border border-slate-800/50 bg-slate-900/50 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">{headline.source}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{headline.title}</p>
                    <p className="mt-2 text-xs text-slate-500">{headline.time}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
              <Activity className="h-4 w-4" /> Chain telemetry
            </div>
            <div className="mt-4 space-y-3">
              {chainActivity.map((chain) => (
                <div
                  key={chain.network}
                  className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/50 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{chain.network}</p>
                    <p className="text-xs text-slate-400">{chain.tx}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Fees {chain.fees}</p>
                    <p className="text-sm font-semibold text-emerald-300">{chain.change}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 text-xs text-slate-400">
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <Newspaper className="h-4 w-4" /> Narrative monitor
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Top trending: restaking, modular DA, decentralized AI. Sentiment leaning bullish (0.62) on 24h social chatter.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
