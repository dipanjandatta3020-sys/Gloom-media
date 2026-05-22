import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar as CalendarIcon, Clock, Video, Check, ChevronLeft, ChevronRight, CornerDownRight, ShieldCheck, Cookie, Info, PhoneCall } from "lucide-react";
// @ts-ignore
import dipanjanAvatar from "../assets/images/dipanjan_profile_headshot_1779369549340.png";

interface SchedulerSectionProps {
  onOpenBooking: () => void;
}

export default function SchedulerSection({ onOpenBooking }: SchedulerSectionProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(21);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showCookieNotice, setShowCookieNotice] = useState(true);
  const [currentMonth, setCurrentMonth] = useState({ name: "May 2026", daysInMonth: 31, startOffset: 4 }); // May 1st is a Friday (index 4 for MON-based)

  const activeDays = [21, 22, 23, 24, 25, 26, 28, 29, 30]; // Highlighted active days on the reference scheduler

  const timeSlots = ["09:00 AM", "10:15 AM", "11:30 AM", "01:00 PM", "02:30 PM", "03:45 PM", "05:00 PM"];

  const bulletPoints = [
    {
      bold: "convert their current website",
      text: " into a high quality & streamlined funnel format.",
    },
    {
      bold: "take their offline business",
      text: " online & establish a powerful automated marketing infrastructure.",
    },
    {
      bold: "understand their increased revenue potential",
      text: " with custom paid acquisition funnels & conversion rate optimization.",
    },
    {
      bold: "maximize their conversion rates",
      text: " & drive up customer average order value (AOV) instantly.",
    },
    {
      bold: "a reliable agency",
      text: " that can make their company a genuine growth priority.",
    }
  ];

  // Helper to construct the calendar grid array for MON-SUN layout
  const buildCalendarGrid = () => {
    const grid = [];
    const totalSlots = 35; // 5 rows * 7 columns standard grid

    // Add empty cells foroffset days prior to month starting
    for (let i = 0; i < currentMonth.startOffset; i++) {
      grid.push(null);
    }
    // Add real days
    for (let d = 1; d <= currentMonth.daysInMonth; d++) {
      grid.push(d);
    }
    // Pad remaining slots
    while (grid.length < totalSlots) {
      grid.push(null);
    }
    return grid;
  };

  const handleDayClick = (day: number) => {
    if (activeDays.includes(day)) {
      setSelectedDay(day);
      setSelectedTime(null); // Reset selected time when picker changes day
    }
  };

  const handleTimeConfirm = () => {
    if (selectedDay && selectedTime) {
      // Trigger the modal already in App.tsx
      onOpenBooking();
    }
  };

  return (
    <section id="consultation-scheduler" className="relative bg-[#050507] text-white py-24 sm:py-28 overflow-hidden z-20 border-t border-zinc-900">
      
      {/* Background Ambience Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[40%] left-[5%] w-[450px] h-[450px] bg-lime-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-[2%] w-[400px] h-[400px] bg-zinc-800/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout Grid */}
        <div id="scheduler-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Custom Embedded High-Fidelity Calendly Emulator */}
          <motion.div 
            id="scheduler-emulator-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 xl:col-span-7"
          >
            {/* The White Calendly Wrapper */}
            <div className="bg-white rounded-[2.5rem] text-zinc-950 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-zinc-200/80 flex flex-col md:flex-row min-h-[560px] relative transition-all duration-500 hover:shadow-[0_25px_60px_rgba(163,230,53,0.1)]">
              
              {/* Calendly Ribbon Tag */}
              <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none select-none z-30">
                <div className="absolute top-6 -right-9 bg-[#1d1d1f] text-white/90 text-[8px] font-mono tracking-wider text-center py-1.5 w-32 transform rotate-45 border-b border-zinc-800 shadow-sm uppercase font-bold">
                  POWERED BY GLOOM
                </div>
              </div>

              {/* Event Meta Sidebar */}
              <div className="md:w-[40%] bg-zinc-50 border-r border-zinc-100 p-6 sm:p-8 flex flex-col justify-between select-none">
                <div className="space-y-6">
                  {/* Agency Name Branding */}
                  <div>
                    <span className="text-[10px] font-mono font-extrabold tracking-[0.25em] text-zinc-500 uppercase">
                      GLOOM.MEDIA
                    </span>
                    <h3 className="font-display text-2xl font-black text-zinc-900 tracking-tight mt-1">
                      Demo Call
                    </h3>
                  </div>

                  {/* Icon Info Badges */}
                  <div className="space-y-4 pt-4 border-t border-zinc-200/65">
                    <div className="flex items-center gap-3 text-zinc-600">
                      <div className="h-8 w-8 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-800 flex-shrink-0">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-extrabold text-zinc-900 uppercase">Duration</p>
                        <p className="text-sm font-semibold">15 Minutes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-zinc-600">
                      <div className="h-8 w-8 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-800 flex-shrink-0 mt-0.5">
                        <Video className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-extrabold text-zinc-900 uppercase">Conferencing</p>
                        <p className="text-xs leading-relaxed font-medium">Web / Zoom details provided upon confirmation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro security assurance badge */}
                <div className="pt-6 mt-8 border-t border-zinc-200/65 hidden md:flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                  <ShieldCheck className="h-4 w-4 text-lime-600 flex-shrink-0" />
                  <span>Secure & Confidentially Booked.</span>
                </div>
              </div>

              {/* Calendar Grid & Time Slots Panel */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  
                  {/* Select a Day Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-display text-lg font-extrabold text-zinc-900">
                      {selectedDay ? "Select a Time" : "Select a Day"}
                    </h4>
                    
                    {/* Month Year Navigator */}
                    <div className="flex items-center gap-2">
                      <button className="h-8 w-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors">
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="font-mono text-xs font-black uppercase text-zinc-800 tracking-wider">
                        {currentMonth.name}
                      </span>
                      <button className="h-8 w-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors">
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Mini-Flex layout toggle when day is selected to allow picking slot or returning to calendar */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[300px]">
                    
                    {/* Calendar grid wrapper (col-span-7 inside card area) */}
                    <div className={`md:col-span-7 transition-all duration-300 ${selectedDay ? "block" : "col-span-12"}`}>
                      {/* Mon-Sun Weekdays Row */}
                      <div className="grid grid-cols-7 gap-1 text-center mb-2 select-none">
                        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
                          <span key={d} className="text-[9px] font-mono font-black text-zinc-400">
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* Days Grid */}
                      <div className="grid grid-cols-7 gap-1">
                        {buildCalendarGrid().map((day, idx) => {
                          if (day === null) {
                            return <div key={`empty-${idx}`} className="h-8 sm:h-9" />;
                          }

                          const isActive = activeDays.includes(day);
                          const isSelected = selectedDay === day;

                          return (
                            <button
                              key={`day-${day}`}
                              onClick={() => handleDayClick(day)}
                              className={`h-8 sm:h-9 rounded-full text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                                isSelected
                                  ? "bg-lime-400 hover:bg-lime-500 text-black shadow-lg shadow-lime-400/20 scale-105 z-10 font-extrabold"
                                  : isActive
                                  ? "bg-zinc-100 text-zinc-950 font-black hover:bg-lime-400 hover:text-black hover:scale-105"
                                  : "text-zinc-300 hover:bg-zinc-50 font-medium"
                              }`}
                            >
                              {day}
                              {isActive && !isSelected && (
                                <span className="absolute bottom-1.5 h-1 w-1 bg-lime-500 rounded-full" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slot Picker Column (col-span-5 inside card area) */}
                    <AnimatePresence mode="wait">
                      {selectedDay && (
                        <motion.div
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          className="md:col-span-5 flex flex-col space-y-2 border-l border-zinc-100 pl-0 md:pl-5 h-[310px] overflow-y-auto pr-1"
                        >
                          <div className="text-center md:text-left mb-2">
                            <span className="text-[10px] uppercase tracking-wider font-mono font-extrabold text-zinc-400 block">
                              Active Day
                            </span>
                            <span className="font-display font-black text-sm text-zinc-900 block mt-0.5">
                              {currentMonth.name.split(" ")[0]} {selectedDay}, {currentMonth.name.split(" ")[1]}
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {timeSlots.map((time) => {
                              const isTimeSelected = selectedTime === time;

                              return (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`w-full py-2.5 sm:py-3 px-4 rounded-xl border text-xs font-bold font-display cursor-pointer transition-all duration-200 text-center flex items-center justify-center gap-2 ${
                                    isTimeSelected
                                      ? "border-lime-400 bg-lime-400/20 text-lime-950 font-extrabold scale-[1.02]"
                                      : "border-zinc-200 text-zinc-800 hover:border-lime-400 hover:bg-zinc-50"
                                  }`}
                                >
                                  {time}
                                  {isTimeSelected && <Check className="h-3.5 w-3.5 text-lime-700 font-extrabold" />}
                                </button>
                              );
                            })}
                          </div>
                          
                          {/* Confirm dynamic action pill */}
                          {selectedTime && (
                            <motion.button
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              onClick={handleTimeConfirm}
                              className="mt-4 w-full py-3 px-4 bg-zinc-950 text-white rounded-xl font-display font-black uppercase text-xs tracking-wider cursor-pointer transition-all duration-300 hover:bg-lime-400 hover:text-black hover:scale-[1.02] shadow-md shadow-zinc-950/20 text-center flex items-center justify-center gap-2"
                            >
                              <span>Next Steps</span>
                              <CornerDownRight className="h-4 w-4" />
                            </motion.button>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                </div>

                {/* Dismissable Cookie Notice - directly cloned design from screenshot */}
                <AnimatePresence>
                  {showCookieNotice && (
                    <motion.div 
                      id="cookie-alert-notice"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="mt-6 pt-4 border-t border-zinc-100 flex flex-col md:flex-row items-center gap-4 bg-zinc-50/70 p-3.5 rounded-2xl border border-zinc-200/50 relative z-20"
                    >
                      <div className="flex items-start gap-2.5 text-[10px] text-zinc-500 leading-normal max-w-sm">
                        <Cookie className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                        <span>
                          We use cookies and similar technologies to improve and personalize your experience. Click “Decline” to refuse non-essential cookies. Learn more in our <strong className="underline text-black cursor-pointer font-semibold">privacy policy</strong>.
                        </span>
                      </div>
                      <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                        <button 
                          onClick={() => setShowCookieNotice(false)}
                          className="px-2.5 py-1 text-[9px] font-mono text-zinc-500 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 bg-white rounded-lg transition-colors cursor-pointer uppercase font-extrabold"
                        >
                          Decline
                        </button>
                        <button 
                          onClick={() => setShowCookieNotice(false)}
                          className="px-3 py-1.5 text-[9px] font-mono bg-lime-400 hover:bg-lime-500 text-zinc-950 font-black rounded-lg shadow-sm transition-all cursor-pointer uppercase"
                        >
                          I Understand
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Copywriting & Bullet Target Checklist */}
          <motion.div 
            id="scheduler-narrative-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 xl:col-span-5 space-y-7"
          >
            {/* Host Circle Avatar Frame */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-lime-400/20 blur-[6px] animate-pulse" />
                <div className="relative h-20 w-20 rounded-full border-2 border-lime-400 overflow-hidden shadow-lg select-none">
                  <img 
                    src={dipanjanAvatar} 
                    alt="Dipanjan Portrait" 
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="font-mono text-[9px] font-extrabold tracking-[0.25em] text-lime-400 uppercase block">
                  YOUR STRATEGY LEAD
                </span>
                <p className="font-display font-black text-xl text-white tracking-tight mt-0.5">
                  Dipanjan
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] font-mono text-zinc-500">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Available on Calendar</span>
                </div>
              </div>
            </div>

            {/* Headers Group */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] font-black uppercase text-lime-400 tracking-[0.2em] block">
                SCHEDULE YOUR CALL WITH DIPANJAN
              </span>
              <h2 className="font-display text-4xl sm:text-[45px] font-black tracking-tight leading-none text-white">
                Free 15-Minute <span className="text-lime-400 relative">Demo Call<span className="absolute bottom-1 left-0 w-full h-[6px] bg-lime-400/20 -z-10 rounded-full" /></span>
              </h2>
            </div>

            {/* Paragraph copy */}
            <div className="space-y-4 text-zinc-400 text-sm sm:text-[15px] leading-relaxed font-normal">
              <p>
                By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.
              </p>
              <p>
                Find a time on Dipanjan's calendar to schedule your call today and we look forward to speaking to you soon!
              </p>
            </div>

            {/* Bullet list targeting perfect fit clients */}
            <div className="space-y-4 pt-4 border-t border-zinc-900">
              <h4 className="font-display text-xs font-black uppercase text-white tracking-widest flex items-center gap-1.5">
                <Info className="h-4 w-4 text-lime-400" />
                <span>THIS AUDIT CALL IS PERFECT FOR:</span>
              </h4>

              <div className="space-y-3.5">
                {bulletPoints.map((bullet, idx) => (
                  <div key={`bullet-${idx}`} className="flex items-start gap-3 group">
                    <div className="h-5 w-5 rounded-full bg-lime-400/15 border border-lime-400/35 flex items-center justify-center text-lime-400 group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-black transition-all flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="h-3 w-3" />
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-normal font-medium">
                      Businesses looking to <strong className="text-white font-bold">{bullet.bold}</strong>{bullet.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
