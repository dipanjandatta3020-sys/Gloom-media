import { motion } from "motion/react";
import { Sparkles, PhoneCall, XCircle, ShieldAlert, Target, Percent } from "lucide-react";

interface ServiceOfferSectionProps {
  onOpenBooking: () => void;
}

export default function ServiceOfferSection({ onOpenBooking }: ServiceOfferSectionProps) {
  const rejectedServices = [
    "WEBDESIGN",
    "CONTENT CREATION",
    "EMAIL MARKETING",
    "SOCIAL MEDIA MANAGEMENT",
    "INSTAGRAM GROWTH",
    "PR SERVICE"
  ];

  return (
    <section id="services-offer-section" className="relative bg-[#070709] text-white py-24 lg:py-28 overflow-hidden z-20 border-t border-zinc-900">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] right-[5%] w-[450px] h-[450px] bg-lime-500/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-[10%] left-[2%] w-[350px] h-[350px] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Singular Core Focus Copywriting */}
          <motion.div 
            id="service-offer-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Minimal Badge */}
            <span className="font-mono text-xs uppercase tracking-widest text-lime-400 font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400"></span> What we offer
            </span>

            {/* Massive Heading */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              PAID <span className="text-lime-400">ADVERTISING</span>
            </h2>

            {/* Sub-headline accent */}
            <p className="text-xl font-bold text-zinc-300 font-sans tracking-wide">
              Ads, Just Ads.
            </p>

            {/* Narrative Deck */}
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              <p>
                We do one thing - we just do it with a monastic focus and better than anyone else. If you want an agency that offers a full service solution of everything that won't move the needle forward, we're not for you.
              </p>
              <p>
                If you want an agency where with two clicks, you can get a clear breakdown of how much was spent, how much was made & what your net profit was - we're for you.
              </p>
            </div>

            {/* Direct Core Action Trigger */}
            <div className="pt-4">
              <button
                id="services-cta-btn"
                onClick={onOpenBooking}
                className="group relative flex flex-col items-center justify-center rounded-3xl bg-lime-400 text-black hover:bg-lime-300 transition-all duration-300 px-8 py-5 text-center cursor-pointer shadow-[0_0_25px_rgba(163,230,53,0.15)] hover:shadow-[0_0_40px_rgba(163,230,53,0.35)]"
              >
                <div className="flex items-center gap-2 font-display text-base font-black tracking-wider uppercase">
                  Speak To Our Team Today
                  <PhoneCall className="h-4 w-4" />
                </div>
                <span className="text-[9px] font-mono tracking-wider font-extrabold uppercase mt-0.5 opacity-80">
                  Schedule Your FREE Audit Call Now
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Mastery & Negative Exclusions Grid */}
          <motion.div 
            id="service-offer-right"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 bg-[#0c0d10] border border-zinc-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative"
          >
            {/* Sparkle corners for high-end aesthetic */}
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">
              [P.03]
            </div>

            {/* Header Description */}
            <div className="mb-8">
              <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase block mb-1">
                MASTERY DEMANDS FOCUS SO....
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                We don't offer any other services except for <span className="italic text-lime-400">paid advertising...</span>
              </h3>
            </div>

            {/* Red Crossed Out Rejected Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rejectedServices.map((service, idx) => (
                <div 
                  key={service}
                  className="flex items-center gap-3 bg-zinc-950/40 p-4 rounded-xl border border-zinc-900/50 group hover:border-red-500/20 transition-colors"
                >
                  <div className="h-6 w-6 rounded-full bg-red-950/20 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform flex-shrink-0">
                    <XCircle className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block font-display text-xs font-bold tracking-wider text-zinc-400 group-hover:text-zinc-300 transition-colors line-through">
                      {service}
                    </span>
                    <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest mt-0.5">
                      Rejected Service
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Proof-seal */}
            <div className="border-t border-zinc-900 mt-8 pt-6 flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400 flex-shrink-0 mt-0.5">
                <Target className="h-4 w-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Singular Scaled System</p>
                <p className="text-zinc-500 mt-0.5 leading-relaxed">
                  By directing 100% of our creative, analytical & capital assets to media optimization, our workflows reach standard-deviation-beating ROAS metrics.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}
