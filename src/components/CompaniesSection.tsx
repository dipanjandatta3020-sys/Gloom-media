import { motion } from "motion/react";
import { Sparkles, Trophy, Users, Zap, ShieldAlert, Award } from "lucide-react";

interface CompaniesSectionProps {}

export default function CompaniesSection({}: CompaniesSectionProps) {
  // Configured scatter background shapes to mimic the reference image's background texture
  const bgShapes = [
    { type: "triangle", top: "12%", left: "8%", size: "w-6 h-6", rotate: "rotate-12" },
    { type: "circle", top: "18%", right: "10%", size: "w-5 h-5", rotate: "rotate-45" },
    { type: "diamond", bottom: "16%", left: "6%", size: "w-5 h-5", rotate: "rotate-[30deg]" },
    { type: "square", bottom: "12%", right: "12%", size: "w-5 h-5", rotate: "-rotate-12" },
    { type: "lightning", top: "35%", left: "15%", size: "w-7 h-7", rotate: "rotate-[15deg]" },
    { type: "triangle", bottom: "35%", right: "6%", size: "w-5 h-5", rotate: "rotate-45" },
    { type: "circle", top: "60%", left: "20%", size: "w-6 h-6", rotate: "rotate-0" },
    { type: "diamond", top: "8%", right: "28%", size: "w-6 h-6", rotate: "-rotate-45" },
    { type: "lightning", bottom: "28%", right: "18%", size: "w-6 h-6", rotate: "-rotate-12" },
    { type: "square", top: "45%", right: "22%", size: "w-5 h-5", rotate: "rotate-[25deg]" },
    { type: "circle", bottom: "20%", left: "25%", size: "w-5 h-5", rotate: "rotate-12" },
  ];

  // Helper to render geometric outline SVGs
  const renderShapeIcon = (type: string) => {
    switch (type) {
      case "triangle":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-zinc-300/60">
            <polygon points="12,3 22,21 2,21" />
          </svg>
        );
      case "circle":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-zinc-300/60">
            <circle cx="12" cy="12" r="9" />
          </svg>
        );
      case "diamond":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-zinc-300/60">
            <polygon points="12,2 22,12 12,22 2,12" />
          </svg>
        );
      case "square":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-zinc-300/60">
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
        );
      case "lightning":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-zinc-300/60">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="companies-trust-section" className="relative bg-white text-zinc-950 overflow-hidden py-24 z-20">
      
      {/* Top Slanted Divider - transitions from ServiceOffer dark bg (#070709) to White */}
      <div className="absolute top-0 left-0 right-0 h-16 w-full -mt-[1px] pointer-events-none z-10 select-none">
        <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 0 L1440 48 V0 H0 Z" fill="#070709" />
        </svg>
      </div>

      {/* Floating geometric background elements to replicate screenshot style */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {bgShapes.map((shape, idx) => (
          <div
            key={`bg-shape-${idx}`}
            className={`absolute ${shape.size} ${shape.rotate} opacity-50`}
            style={{
              top: shape.top,
              bottom: shape.bottom,
              left: shape.left,
              right: shape.right,
            }}
          >
            {renderShapeIcon(shape.type)}
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Centered Heading */}
        <div className="text-center mb-16 select-none">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-lime-400/10 border border-lime-400/30 text-lime-700 rounded-full font-mono text-[10px] font-extrabold uppercase tracking-widest mb-3"
          >
            <Award className="h-3.5 w-3.5" /> High Impact Partners
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-black tracking-tight text-indigo-950"
          >
            Companies That Trust Us
          </motion.h2>
          <div className="h-1 w-20 bg-lime-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Brand Grid featuring custom-designed vector-grade brand logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          
          {/* Logo 1: aalfaz (Premium lowercase styled calligraphy) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex flex-col items-center justify-center select-none">
              <div className="flex items-center gap-1">
                {/* Custom Arabic-inspired flourish */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 text-zinc-400 group-hover:text-lime-600 transition-colors">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c0-4-3-6-5-8 3-1 6 1 8 4 1-2.5 0-5.5-2-7.5.5.5 1 .5 1.5.5 3 0 5-2 5-5S17.5 2 12 2z" />
                </svg>
                <span className="font-display text-xl font-extrabold tracking-widest text-[#151525] group-hover:text-black transition-colors">
                  aalfaz
                </span>
              </div>
              <span className="text-[7px] font-mono font-bold tracking-[0.3em] text-zinc-400 group-hover:text-lime-600 uppercase transition-colors -mt-0.5 ml-5">
                CREATIVE CO.
              </span>
            </div>
          </motion.div>

          {/* Logo 2: Gillette (Slanting bold block razor cut) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex flex-col items-center select-none">
              <span className="font-display text-2.5xl font-black italic tracking-tighter text-[#1b1c24] group-hover:text-blue-900 transition-colors uppercase leading-none">
                Gillette
              </span>
              <div className="w-12 h-[2px] bg-sky-500 transform skew-x-12 mt-1 opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          {/* Logo 3: Manforce (Bold heavy structural wordmark) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center gap-1.5 select-none">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5 text-zinc-400 group-hover:text-red-600 transition-colors">
                <path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z" />
              </svg>
              <span className="font-sans text-sm font-black tracking-[0.18em] text-[#1c1d26] group-hover:text-zinc-950 transition-colors uppercase leading-none">
                MANFORCE
              </span>
            </div>
          </motion.div>

          {/* Logo 4: Durex (Iconic capsule pill friendly font) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="px-3.5 py-1.5 rounded-full border-2 border-zinc-300 group-hover:border-blue-600 transition-all transform group-hover:scale-105 shadow-inner select-none flex items-center justify-center">
              <span className="font-sans text-base font-extrabold text-[#111] tracking-normal lowercase group-hover:text-blue-600 transition-colors">
                durex
              </span>
            </div>
          </motion.div>

          {/* Logo 5: HRX (Fast speed-cut ultra-italic brand) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-baseline gap-0.5 select-none font-display">
              <span className="text-2xl font-black italic tracking-tighter text-[#1c1d24] group-hover:text-black transition-colors">
                HR
              </span>
              <span className="text-3xl font-black italic tracking-tighter text-lime-500 group-hover:text-lime-600 transition-colors relative">
                X
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-red-500 transform skew-x-12" />
              </span>
            </div>
          </motion.div>

          {/* Logo 6: Kings (Crown emblem typography) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex flex-col items-center select-none">
              {/* Minimal crown vector */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-400 group-hover:text-amber-500 group-hover:fill-amber-500/10 transition-all mb-0.5">
                <path d="M2 4l3 12h14l3-12-5 4-5-8-5 8-5-4z" />
              </svg>
              <span className="font-display text-xs font-black tracking-[0.25em] text-[#1c1d24] group-hover:text-zinc-950 transition-colors uppercase">
                KINGS
              </span>
            </div>
          </motion.div>

          {/* Logo 7: OURA (Geometric wide character tracked) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex flex-col items-center select-none">
              <span className="font-display text-sm font-extrabold tracking-[0.55em] text-[#151520] group-hover:text-zinc-950 transition-colors uppercase relative pl-2">
                ŌURA
                <span className="absolute top-[2px] left-[7%] right-0 text-center font-bold text-zinc-500 group-hover:text-zinc-900">•</span>
              </span>
            </div>
          </motion.div>

          {/* Logo 8: AJ & Smart (Bold dynamic & custom ampersand) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center select-none font-sans">
              <span className="text-sm font-black text-[#1e1e24] group-hover:text-zinc-950 transition-colors uppercase">
                AJ<span className="text-zinc-400 font-normal italic mx-0.5 hover:text-rose-500">&</span>Smart
              </span>
            </div>
          </motion.div>

          {/* Logo 9: KEVIN ROSE (Elegant slab condensed) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-center select-none">
              <span className="font-display text-xs font-black tracking-[0.2em] text-[#1e1e24] group-hover:text-emerald-900 transition-colors uppercase border-b border-zinc-200 group-hover:border-emerald-600 pb-0.5">
                KEVINROSE
              </span>
            </div>
          </motion.div>

          {/* Logo 10: GROW YOUR AGENCY (Multi-stack block caps) */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[160px] h-20 flex items-center justify-center p-4 rounded-2xl bg-[#090a0f] border border-zinc-900 shadow-lg hover:shadow-xl transition-all duration-300 group col-span-2 md:col-span-1"
          >
            <div className="text-center font-mono select-none">
              <span className="block text-[8px] font-black tracking-[0.15em] text-zinc-400 group-hover:text-lime-400 transition-colors">
                GROW YOUR
              </span>
              <span className="block text-xs font-extrabold tracking-[0.2em] text-white leading-none mt-0.5">
                AGENCY
              </span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Slanted Divider - transitions from White to Scheduler's dark bg (#050507) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 w-full -mb-[1px] pointer-events-none z-10 select-none">
        <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none" className="w-full h-full transform rotate-180">
          <path d="M0 0 L1440 48 V0 H0 Z" fill="#050507" />
        </svg>
      </div>

    </section>
  );
}
