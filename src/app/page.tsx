import { PortfolioPerformance } from "@/components/dashboard/portfolio-performance";
import { AssetDistribution } from "@/components/dashboard/asset-distribution";
import { MarketIntelligence } from "@/components/dashboard/market-intelligence";
import { HoldingsTable } from "@/components/dashboard/holdings-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TokensIcon } from "@radix-ui/react-icons";

const quickActions = [
  {
    label: "Connect exchange",
    icon: "hub",
  },
  {
    label: "Deploy capital",
    icon: "rocket_launch",
  },
  {
    label: "Automate yield",
    icon: "autorenew",
  },
  {
    label: "Generate report",
    icon: "description",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-4 pb-24 pt-12 md:px-8">
      <section className="rounded-[2.5rem] border border-slate-800/70 bg-slate-900/60 p-10 shadow-xl shadow-slate-950/40">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              <span className="material-symbols-rounded text-base">radar</span>
              CryptoVista HQ
            </span>
            <h1 className="text-4xl font-display tracking-tight text-white sm:text-5xl">
              Unified intelligence for your crypto portfolio.
            </h1>
            <p className="text-lg text-slate-300">
              Connect CeFi and DeFi accounts, visualize performance, and orchestrate automated strategies with institutional-grade
              tooling built on Next.js, Tailwind, Shadcn/UI, Radix Themes, and Motion.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">
                <TokensIcon className="h-4 w-4" />
                Launch command center
              </Button>
              <Button variant="outline" size="lg" className="border-slate-700/70 text-slate-200">
                View pricing
              </Button>
            </div>
          </div>
          <div className="grid w-full max-w-md gap-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wide text-slate-400">Net worth</p>
              <span className="material-symbols-rounded text-brand-200">visibility</span>
            </div>
            <p className="text-3xl font-semibold text-white">$1,142,560</p>
            <p className="text-xs text-emerald-300">+12.4% vs last quarter</p>
            <Separator className="bg-slate-800/60" />
            <div className="grid gap-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className="group flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-900/40 px-4 py-3 text-left transition hover:border-brand-500/50 hover:text-white"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{action.label}</p>
                    <p className="text-xs text-slate-400">Tap to open workflow</p>
                  </div>
                  <span className="material-symbols-rounded text-lg text-slate-500 transition group-hover:text-brand-200">
                    {action.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <PortfolioPerformance />
        <AssetDistribution />
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <HoldingsTable />
        <MarketIntelligence />
      </section>
    </main>
  );
}
