import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Facebook,
  Instagram,
  Youtube,
  ShoppingBag,
  DollarSign,
  Briefcase,
  Users,
  Award,
  ChevronRight,
  MousePointer,
  HelpCircle,
  Play,
  Volume2
} from "lucide-react";
import Navbar from "./components/Navbar.tsx";
import BookingModal from "./components/BookingModal.tsx";
import InteractiveCalculator from "./components/InteractiveCalculator.tsx";
import PhilosophySection from "./components/PhilosophySection.tsx";
import ServiceOfferSection from "./components/ServiceOfferSection.tsx";
import CompaniesSection from "./components/CompaniesSection.tsx";
import SchedulerSection from "./components/SchedulerSection.tsx";
import agencyWizardImg from "./assets/images/agency_wizard_1779360033306.png";

// Floating badges surrounding the wizard
const floatingPlatformBadges = [
  {
    id: "fb",
    name: "Facebook Ads",
    icon: Facebook,
    top: "12%",
    left: "10%",
    color: "text-blue-400 border-blue-400 bg-blue-950/20",
    scale: 2.8,
    metric: "4.2x ROAS",
    desc: "Targeted scaling funnels"
  },
  {
    id: "yt",
    name: "YouTube Brand",
    icon: Youtube,
    top: "3%",
    right: "15%",
    color: "text-rose-500 border-rose-500 bg-rose-950/20",
    scale: 3.2,
    metric: "5.1x High ROI",
    desc: "Immersive high-converting video"
  },
  {
    id: "sf",
    name: "Shopify Engine",
    icon: ShoppingBag,
    bottom: "22%",
    left: "5%",
    color: "text-lime-400 border-lime-400 bg-lime-950/20",
    scale: 3.5,
    metric: "Store Integration",
    desc: "Instant catalog synchronization"
  },
  {
    id: "ig",
    name: "Instagram Scale",
    icon: Instagram,
    bottom: "35%",
    right: "2%",
    color: "text-pink-400 border-pink-400 bg-pink-950/20",
    scale: 2.9,
    metric: "Influencer Ads",
    desc: "UGC video marketing"
  },
  {
    id: "dl",
    name: "High Value Leads",
    icon: DollarSign,
    bottom: "10%",
    right: "32%",
    color: "text-emerald-400 border-emerald-400 bg-emerald-950/20",
    scale: 3.4,
    metric: "$24M Collected",
    desc: "Low-CPA premium leads"
  }
];

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeBubble, setActiveBubble] = useState<string | null>(null);
  
  // Parallax spring animations for desktop mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });
  
  const displayX = useTransform(springX, (val) => val * 30);
  const displayY = useTransform(springY, (val) => val * 30);

  const badge0X = useTransform(springX, (val) => val * 45);
  const badge0Y = useTransform(springY, (val) => val * 45);
  const badge1X = useTransform(springX, (val) => val * 57);
  const badge1Y = useTransform(springY, (val) => val * 57);
  const badge2X = useTransform(springX, (val) => val * 69);
  const badge2Y = useTransform(springY, (val) => val * 69);
  const badge3X = useTransform(springX, (val) => val * 81);
  const badge3Y = useTransform(springY, (val) => val * 81);
  const badge4X = useTransform(springX, (val) => val * 93);
  const badge4Y = useTransform(springY, (val) => val * 93);

  const badgeTransforms = [
    { x: badge0X, y: badge0Y },
    { x: badge1X, y: badge1Y },
    { x: badge2X, y: badge2Y },
    { x: badge3X, y: badge3Y },
    { x: badge4X, y: badge4Y },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Scale mouse position to range -0.5 to 0.5 relative to viewport dimensions
      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(normX);
      mouseY.set(normY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Handle scrolling to calculator section
  const handleScrollToCalculator = () => {
    const calcSection = document.getElementById("multiplier-simulator");
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="agency-showcase" className="min-h-screen bg-[#070708] text-white font-sans overflow-x-hidden selection:bg-lime-400 selection:text-black">
      
      {/* Background Interactive Ambient Lighting Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Neon Lime grid patterns */}
        <div id="grid-pattern" className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Glow ambient Orbs */}
        <div className="absolute top-[10%] left-[30%] w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[140px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-zinc-800/40 rounded-full blur-[120px]" />
      </div>

      {/* Main Navigation Header */}
      <Navbar 
        onOpenBooking={() => setIsBookingOpen(true)} 
        onOpenCalculator={handleScrollToCalculator} 
      />

      {/* Core Hero Showcase Stage */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-160px)]">
          
          {/* Left Area: Headline, Core Description and CTA Deck */}
          <motion.div 
            id="hero-copywriting-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Top Badge Tag */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/20 bg-lime-400/5 px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-lime-400 uppercase">
                <Sparkles className="h-3 w-3 animate-spin duration-[4000ms]" /> MODERN DAY ALCHEMY
              </span>
              <span className="h-[1px] w-12 bg-zinc-800 hidden sm:inline-block"></span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
                Scale Engine v4.21
              </span>
            </div>

            {/* Massive Styled Headline */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
              We Help E-commerce & Info Product Businesses Produce{" "}
              <span className="relative inline-block text-zinc-950 font-black px-2 mt-1 sm:mt-0">
                <span className="absolute inset-0 bg-lime-400 rounded-lg transform -skew-x-3 shadow-[0_0_30px_rgba(163,230,53,0.35)]" />
                <span className="relative z-10">Spine-Chilling ROI</span>
              </span>{" "}
              Via Paid Advertising
            </h1>

            {/* Core Paragraph Descriptions */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Stop wasting time and money on faulty and ineffective ad campaigns. It's time to make your ad-budget count, scale your business and blow up your sales.
            </p>

            {/* Interactive Badge Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2 border-t border-b border-zinc-900/60 font-mono">
              <div className="space-y-1">
                <div className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">ROAS Standard</div>
                <div className="text-xl font-bold text-white">4.8x - 7.2x</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">CPA Reduced</div>
                <div className="text-xl font-bold text-lime-400">-34% Avg</div>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <div className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Live Scaling</div>
                <div className="text-xl font-bold text-white flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping"></span> Active
                </div>
              </div>
            </div>

            {/* Prominent Call-to-Action Pill deck */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="main-cta-book-btn"
                onClick={() => setIsBookingOpen(true)}
                className="group relative flex flex-col items-center justify-center rounded-3xl bg-lime-400 px-8 py-5 text-black hover:bg-lime-300 transition-all duration-300 shadow-[0_0_35px_rgba(163,230,53,0.25)] hover:shadow-[0_0_50px_rgba(163,230,53,0.4)] cursor-pointer"
              >
                <div className="flex items-center gap-2 font-display text-lg font-black tracking-wider uppercase">
                  Speak To Our Team Today
                  <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1.5" />
                </div>
                <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase mt-0.5 opacity-70">
                  Schedule Your Free Audit Call Now
                </span>
              </button>

              <button
                id="sec-cta-sim-btn"
                onClick={handleScrollToCalculator}
                className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/35 hover:bg-zinc-910/50 hover:border-lime-400/40 px-6 py-5 text-sm font-bold text-white transition-colors cursor-pointer"
              >
                Simulate Ad Growth
                <ChevronRight className="h-4 w-4 text-zinc-500" />
              </button>
            </div>
          </motion.div>

          {/* Right Area: Interactive Wizard Frame + Parallax Floating Badges */}
          <div 
            id="hero-illustration-stage"
            className="lg:col-span-5 relative flex items-center justify-center min-h-[480px] lg:min-h-[600px] w-full"
          >
            {/* Sliced Angled Backdrop Frame (echoing original design division) */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 to-zinc-950/80 rounded-[40px] border border-zinc-800/80 overflow-hidden transform rotate-2 shadow-2xl">
              <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#080809] transform skew-y-3 origin-bottom-left border-t border-zinc-900/50" />
              {/* Top ambient spotlight in grey/lime */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-lime-500/5 rounded-full blur-[60px]" />
            </div>

            {/* Parallax Character Container */}
            <motion.div
              id="parallax-character-mask"
              style={{
                x: displayX,
                y: displayY,
              }}
              className="relative z-20 w-full max-w-[340px] sm:max-w-[400px] aspect-[1/1] overflow-visible"
            >
              {/* Outer soft glow ring */}
              <div className="absolute inset-0 bg-lime-400/10 rounded-full blur-3xl scale-95" />
              
              {/* Master low-poly wizard image */}
              <img
                src={agencyWizardImg}
                alt="Digital Alchemy Wizard"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] select-none hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

            {/* Multi-layered Parallax Floating Social/Tech Badges */}
            {floatingPlatformBadges.map((badge, idx) => {
              const BadgeIcon = badge.icon;
              const isActive = activeBubble === badge.id;
              const { x, y } = badgeTransforms[idx];
              
              return (
                <motion.div
                  key={badge.id}
                  style={{
                    x,
                    y,
                    top: badge.top,
                    left: badge.left,
                    right: badge.right,
                    bottom: badge.bottom,
                  }}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute z-30 pointer-events-auto"
                >
                  <div className="relative group/bubble">
                    <button
                      onClick={() => setActiveBubble(isActive ? null : badge.id)}
                      className={`flex items-center justify-center p-3 sm:p-4 rounded-full border cursor-pointer shadow-lg transition-all duration-300 ${
                        isActive 
                          ? "border-lime-400 bg-lime-400 text-black shadow-[0_0_25px_rgba(163,230,53,0.4)] scale-110" 
                          : `${badge.color} text-white hover:border-lime-400 hover:scale-110`
                      }`}
                    >
                      <BadgeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    {/* Miniature Metric Tooltips on hover/click */}
                    <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-48 p-3 rounded-xl border border-zinc-800 bg-zinc-950/95 text-center shadow-2xl transition-all duration-300 pointer-events-none ${
                      isActive 
                        ? "opacity-100 translate-y-0 scale-100" 
                        : "opacity-0 translate-y-2 scale-95 group-hover/bubble:opacity-100 group-hover/bubble:translate-y-0 group-hover/bubble:scale-100"
                    }`}>
                      <h5 className="font-display font-bold text-xs text-white">{badge.name}</h5>
                      <p className="font-mono text-lime-400 font-bold text-xs mt-1">{badge.metric}</p>
                      <p className="text-[10px] text-zinc-400 mt-0.5 leading-tight">{badge.desc}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-950 border-r border-b border-zinc-800 rotate-45" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </main>

      {/* Our Philosophy Section - White Background layout */}
      <PhilosophySection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Service Offer Singular Focus Section */}
      <ServiceOfferSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Companies That Trust Us Logo Cloud Section */}
      <CompaniesSection />

      {/* Interactive Free 15-Minute Consultation Scheduler with Dany */}
      <SchedulerSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Trust & Stats Section below default view */}
      <section id="systems" className="relative z-20 border-t border-zinc-900 bg-[#0a0a0b] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-lime-400 font-bold">
              Proven Performance Systems
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Transforming Clicks Into Capital Scale
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base mt-2">
              We replace guesswork with strict formulas. Here is the track record generated for our top partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 hover:border-zinc-800 transition-colors group">
              <div className="h-10 w-10 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-display text-4xl font-black text-white">$45.2M+</h3>
              <p className="text-sm font-semibold text-zinc-400 mt-2">Total Managed Ad Spend</p>
              <p className="text-xs text-zinc-500 mt-1">Direct deployment across E-commerce platforms with premium pixel architectures.</p>
              <div className="absolute bottom-0 left-0 h-[3px] bg-lime-400 w-0 group-hover:w-full transition-all duration-300" />
            </div>

            {/* Stat Card 2 */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 hover:border-zinc-800 transition-colors group">
              <div className="h-10 w-10 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="font-display text-4xl font-black text-lime-400">+312%</h3>
              <p className="text-sm font-semibold text-zinc-400 mt-2">Average Account Scale Increase</p>
              <p className="text-xs text-zinc-500 mt-1">Multiplied revenue footprints while maintaining or decreasing baseline cost per acquisition.</p>
              <div className="absolute bottom-0 left-0 h-[3px] bg-lime-400 w-0 group-hover:w-full transition-all duration-300" />
            </div>

            {/* Stat Card 3 */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 hover:border-zinc-800 transition-colors group">
              <div className="h-10 w-10 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-display text-4xl font-black text-white">84+</h3>
              <p className="text-sm font-semibold text-zinc-400 mt-2">Brands Multiplied Worldwide</p>
              <p className="text-xs text-zinc-500 mt-1">E-commerce stores, training portals, and educational academies scaling in harmony.</p>
              <div className="absolute bottom-0 left-0 h-[3px] bg-lime-400 w-0 group-hover:w-full transition-all duration-300" />
            </div>
          </div>

        </div>
      </section>

      {/* System Framework: Magic & Simulator Grid */}
      <section id="magic" className="relative z-20 py-20 border-t border-zinc-900 bg-[#070708]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="multiplier-simulator">
            
            {/* Left side: Calculator */}
            <div className="lg:col-span-5">
              <InteractiveCalculator />
            </div>

            {/* Right side: Magical Alchemy process */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-lime-400 font-bold">
                  The Alchemy Process
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                  How We Scale Brands Without Increasing Anxiety
                </h3>
              </div>

              <div className="space-y-6">
                
                {/* Step 1 */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center font-mono text-sm font-bold text-lime-400 shadow-inner">
                    01
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Ad Discovery Auditing</h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      We dissect your past media logs to find leakages. We inspect tracking architectures and pixel triggers to align data streams instantly.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center font-mono text-sm font-bold text-lime-400 shadow-inner">
                    02
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Budget Alchemy Funneling</h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      We model dynamic budgets into high-conversion segments, bypassing wasted cold experiments and feeding platforms only high-value signals.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center font-mono text-sm font-bold text-white shadow-inner">
                    03
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Linear ROAS Overdrive</h4>
                    <p className="text-sm text-zinc-400 mt-1">
                      Once stable CPA baselines are forged, we scale media spend linearly, pushing performance thresholds to double or triple historic caps.
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-lime-400 hover:text-black transition-all cursor-pointer"
                >
                  Schedule Your Free Custom Audit Call
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Footer details */}
          <div className="border-t border-zinc-900/60 mt-24 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-zinc-500 gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime-400"></span>
              <span>product of Gloom</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Gloom Media Agency. All rights and metrics verified.
            </div>
          </div>

        </div>
      </section>

      {/* Booking Form Overlay Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

    </div>
  );
}
