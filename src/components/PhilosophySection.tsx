import { motion } from "motion/react";
import { Sparkles, PhoneCall, TrendingUp, Users, Target, CircleCheck, Compass } from "lucide-react";

interface PhilosophySectionProps {
  onOpenBooking: () => void;
}

export default function PhilosophySection({ onOpenBooking }: PhilosophySectionProps) {
  const stats = [
    { label: "CLIENTS HELPED", value: "57", color: "text-lime-400" },
    { label: "TOTAL AD SPEND", value: "$14.7M", color: "text-[#ffffff]" },
    { label: "OFFICES", value: "0", color: "text-lime-400" },
    { label: "SERVICES OFFERED", value: "1", color: "text-[#ffffff]" }
  ];

  return (
    <section id="philosophy-section" className="relative bg-white text-zinc-950 overflow-hidden z-20">
      
      {/* Top Slanted Divider - transitions from Hero background to White */}
      <div className="absolute top-0 left-0 right-0 h-16 w-full -mt-[1px] pointer-events-none z-10 select-none">
        <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 0 L1440 48 V0 H0 Z" fill="#070708" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Revenue Generated & Quick Stats Grid */}
          <motion.div 
            id="philosophy-stats-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center select-none"
          >
            {/* Header tag */}
            <span className="font-mono text-[11px] font-extrabold tracking-[0.25em] text-zinc-400 mb-1">
              TOTAL REVENUE GENERATED
            </span>

            {/* Giant Metric */}
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 leading-none">
              $63.4 <span className="text-lime-500 relative">MILLION<span className="absolute bottom-1 left-0 w-full h-[6px] bg-lime-400/30 -z-10 rounded-full" /></span>
            </h3>

            {/* 4 Cards Grid - Deep Charcoal boxes with Lime Green accented values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#0b0c0e] rounded-2xl p-5 border border-zinc-900 group shadow-lg shadow-zinc-100/10 transition-all duration-300"
                >
                  <span className="block font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-zinc-400 mb-2">
                    {stat.label}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className={`font-display text-3xl sm:text-4xl font-black tracking-tight transition-colors duration-300 ${stat.value === '0' ? 'text-zinc-600' : stat.color}`}>
                      {stat.value}
                    </span>
                    {stat.label.includes("SPEND") && (
                      <span className="text-xs font-mono text-zinc-500 font-medium">USD</span>
                    )}
                  </div>
                  <div className="h-1 w-0 bg-lime-400 group-hover:w-full transition-all duration-300 rounded-full mt-3" />
                </motion.div>
              ))}
            </div>
            
            {/* Minimal trust indicator */}
            <div className="flex items-center gap-2 mt-6 text-xs font-mono text-zinc-500">
              <CircleCheck className="h-4 w-4 text-lime-500 flex-shrink-0" />
              <span>Independently audited & platform-certified growth statistics.</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative Copywriting & Prominent Call to Action */}
          <motion.div 
            id="philosophy-copywrite-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Title */}
            <h2 className="font-display text-4.5xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
              Our Philosophy
            </h2>

            {/* Paragraph Deck */}
            <div className="space-y-5 text-zinc-700 text-base sm:text-[17px] leading-relaxed">
              <p>
                Here at <strong className="text-zinc-900 font-bold">Gloom.Media</strong>, we've worked with the best in the industry to produce millions of dollars in return on ad spend. We do away with the inefficiencies & formalities that plague most agencies.
              </p>
              <p>
                Our client case studies have become myth, our waiting list is longer than your complaints with your current agency and we look for a very specific kind of client.
              </p>
              <p className="text-zinc-900 font-extrabold text-lg flex items-start gap-2.5 pt-2">
                <Compass className="h-6 w-6 text-lime-500 flex-shrink-0 mt-0.5 animate-bounce" />
                <span>
                  Maybe that's you: it would be our honour to find out. Schedule your FREE discovery call below.
                </span>
              </p>
            </div>

            {/* Big Action Pill (adapted pink style from original screen to our custom lime palette) */}
            <div className="pt-6">
              <button
                id="philosophy-cta-btn"
                onClick={onOpenBooking}
                className="group relative flex flex-col items-center justify-center w-full sm:w-auto rounded-3xl bg-[#09090b] text-white hover:bg-lime-400 hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 px-10 py-6 text-center cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(163,230,53,0.35)]"
              >
                <div className="flex items-center gap-2.5 font-display text-lg sm:text-xl font-black tracking-wider uppercase">
                  Speak To Our Team Today
                  <PhoneCall className="h-5 w-5 animate-pulse" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold uppercase mt-1 opacity-70 group-hover:text-black">
                  Schedule Your FREE Audit Call Now
                </span>
              </button>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Slanted Divider - transitions from White to Dark (#0a0a0b) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 w-full -mb-[1px] pointer-events-none z-10 select-none">
        <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none" className="w-full h-full transform rotate-180">
          <path d="M0 0 L1440 48 V0 H0 Z" fill="#0a0a0b" />
        </svg>
      </div>

    </section>
  );
}
