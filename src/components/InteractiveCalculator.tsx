import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Sparkles, TrendingUp, DollarSign } from "lucide-react";

export default function InteractiveCalculator() {
  const [spend, setSpend] = useState(10000);
  const [roas, setRoas] = useState(3.5);

  // Growth formulas
  const projectedRevenue = spend * roas;
  const netProfit = projectedRevenue - spend;
  const returnOnAdSpendPct = roas * 100;

  return (
    <div
      id="roi-calculator-container"
      className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-3 opacity-20 pointer-events-none">
        <Calculator className="h-24 w-24 text-lime-400" />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400">
          <TrendingUp className="h-4 w-4" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-lime-400 font-bold">
          Live ROI Simulator
        </span>
      </div>

      <h4 className="font-display text-lg font-bold text-white mb-2">
        See Your Scale Potential
      </h4>
      <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
        Adjust your budget and targets to model potential net yields with our paid system.
      </p>

      <div className="space-y-5">
        {/* Ad Spend Input Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-zinc-400">Monthly Ad Budget</span>
            <span className="font-mono text-sm font-bold text-white">
              ${spend.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="2000"
            max="120000"
            step="1000"
            value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-lime-400"
          />
        </div>

        {/* ROAS Input Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-zinc-400">Target Multiplier (ROAS)</span>
            <span className="font-mono text-sm font-bold text-lime-400">
              {roas.toFixed(1)}x
            </span>
          </div>
          <input
            type="range"
            min="1.5"
            max="8.0"
            step="0.1"
            value={roas}
            onChange={(e) => setRoas(Number(e.target.value))}
            className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-lime-400"
          />
        </div>

        {/* Results layout */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-900">
          <div>
            <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
              Projected Return
            </span>
            <div className="text-lg font-display font-black text-white mt-0.5">
              ${projectedRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <span className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400"></span>
              {returnOnAdSpendPct.toFixed(0)}% Lift
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
              Ad Profit Yield
            </span>
            <div className="text-lg font-display font-black text-lime-400 mt-0.5">
              ${netProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <span className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5 font-mono">
              <Sparkles className="h-3 w-3 text-lime-400" /> Agency Alchemy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
