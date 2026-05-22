import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, PhoneCall, TrendingUp } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
}

export default function Navbar({ onOpenBooking, onOpenCalculator }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Systems", chunk: "systems" },
    { label: "Our Magic", chunk: "magic" },
    { label: "ROI Case Studies", chunk: "cases" },
  ];

  const handleScrollToSegment = (elementId: string) => {
    setIsOpen(false);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative w-full z-40 transition-all">
      <nav id="main-navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between border-b border-zinc-900/65">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400">
              <Sparkles className="h-4.5 w-4.5 animate-pulse" />
            </div>
            <span className="font-display text-xl font-extrabold tracking-tight text-white">
              GLOOM<span className="text-lime-400 font-normal">.Media</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollToSegment(item.chunk)}
                className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wide relative py-1 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={onOpenCalculator}
              className="text-zinc-400 hover:text-lime-400 transition-all text-sm font-medium tracking-wide flex items-center gap-1.5 cursor-pointer"
            >
              <TrendingUp className="h-4 w-4" /> ROI Simulator
            </button>
          </div>

          {/* CTA Trigger */}
          <div className="hidden md:block">
            <button
              onClick={onOpenBooking}
              className="group relative flex items-center gap-1.5 overflow-hidden rounded-full border border-lime-400/30 bg-zinc-900/30 px-5 py-2.5 text-xs font-bold tracking-wider text-lime-400 uppercase transition-all hover:bg-lime-400 hover:text-black cursor-pointer shadow-[0_0_15px_rgba(163,230,53,0.05)]"
            >
              <PhoneCall className="h-3 w-3 group-hover:animate-bounce" />
              Free Strategy Audit
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-zinc-800 bg-zinc-900/30 p-2.5 text-zinc-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="space-y-4 px-4 py-6 font-display">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollToSegment(item.chunk)}
                  className="block w-full text-left font-semibold text-lg text-zinc-300 hover:text-lime-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="h-[1px] bg-zinc-900 my-4" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCalculator();
                }}
                className="flex w-full items-center gap-2 font-semibold text-lg text-zinc-300 hover:text-lime-400"
              >
                <TrendingUp className="h-5 w-5 text-lime-400" /> ROI Simulator Tool
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 py-3 text-sm font-black text-black hover:bg-lime-300 transition-colors"
              >
                <PhoneCall className="h-4 w-4" /> Book Strategy Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
