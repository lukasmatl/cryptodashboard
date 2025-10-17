"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const holdings = [
  {
    asset: "Bitcoin",
    symbol: "BTC",
    amount: "3.2",
    value: "$215,744",
    cost: "$180,500",
    pnl: "+19.5%",
    status: "Core",
  },
  {
    asset: "Ethereum",
    symbol: "ETH",
    amount: "148",
    value: "$515,040",
    cost: "$424,320",
    pnl: "+21.4%",
    status: "Core",
  },
  {
    asset: "Solana",
    symbol: "SOL",
    amount: "2,400",
    value: "$403,680",
    cost: "$221,760",
    pnl: "+82.1%",
    status: "Satellite",
  },
  {
    asset: "Arbitrum",
    symbol: "ARB",
    amount: "18,000",
    value: "$21,240",
    cost: "$27,000",
    pnl: "-21.3%",
    status: "Watch",
  },
  {
    asset: "Chainlink",
    symbol: "LINK",
    amount: "9,800",
    value: "$192,290",
    cost: "$88,200",
    pnl: "+118.0%",
    status: "Satellite",
  },
];

export function HoldingsTable() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-display">Holdings Overview</CardTitle>
          <CardDescription>Track allocations across custodial and on-chain wallets.</CardDescription>
        </div>
        <Button variant="subtle" size="sm" className="rounded-full border border-slate-700/60">
          Export CSV
        </Button>
      </CardHeader>
      <CardContent className="flex-1">
        <Table>
          <TableHeader>
            <TableRow className="text-xs uppercase tracking-wide text-slate-400">
              <TableHead>Asset</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Market value</TableHead>
              <TableHead>Cost basis</TableHead>
              <TableHead>P/L</TableHead>
              <TableHead className="text-right">Strategy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdings.map((holding) => (
              <TableRow key={holding.asset} className="text-sm">
                <TableCell className="flex items-center gap-3 font-medium text-white">
                  <span className="rounded-2xl bg-slate-900/80 px-3 py-2 text-xs text-slate-300">{holding.symbol}</span>
                  <span>{holding.asset}</span>
                </TableCell>
                <TableCell className="text-slate-300">{holding.amount}</TableCell>
                <TableCell className="font-semibold text-slate-100">{holding.value}</TableCell>
                <TableCell className="text-slate-400">{holding.cost}</TableCell>
                <TableCell className={holding.pnl.startsWith("-") ? "text-rose-300" : "text-emerald-300"}>
                  {holding.pnl}
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline" className="bg-slate-900/60 text-slate-200">
                    {holding.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ArrowUpRight className="h-4 w-4 text-brand-300" />
          Rebalance suggests trimming SOL by 4% and rotating into AI infrastructure basket.
        </div>
        <Button variant="ghost" size="sm" className="text-brand-300">
          Generate rebalance plan
        </Button>
      </CardFooter>
    </Card>
  );
}
