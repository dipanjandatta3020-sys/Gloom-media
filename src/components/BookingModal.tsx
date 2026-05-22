import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Calendar, ArrowRight, Sparkles, Building2, Landmark, Target, Award } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: "",
    monthlySpend: 5000,
    name: "",
    email: "",
    website: "",
  });

  const businessTypes = [
    { id: "ecom", label: "E-Commerce", icon: Building2, desc: "Physical goods & Shopify stores" },
    { id: "info", label: "Info Products", icon: Landmark, desc: "Courses, webinars & communities" },
    { id: "saas", label: "SaaS / Tech", icon: Target, desc: "Software, web apps & platforms" },
    { id: "agency", label: "Other / Creative", icon: Award, desc: "Consulting, local & enterprises" },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      businessType: "",
      monthlySpend: 5000,
      name: "",
      email: "",
      website: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0d0d0e]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 text-white shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div id="modal-header" className="mb-6 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-lime-400 uppercase tracking-widest">Modern Day Alchemy</span>
                <h3 className="font-display text-2xl font-bold mt-1">Schedule Your Strategy Call</h3>
              </div>
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="group rounded-full border border-zinc-800 bg-zinc-900/50 p-2 text-zinc-400 transition-all hover:border-lime-400/50 hover:text-lime-400"
              >
                <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Progress Bar */}
            {step < 4 && (
              <div id="modal-progress" className="mb-8 bg-zinc-900 h-1.5 w-full rounded-full overflow-hidden">
                <motion.div
                  className="bg-lime-400 h-full rounded-full"
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            {/* Step Contents */}
            <form onSubmit={handleSubmit} id="booking-form">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    id="modal-step-1"
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-zinc-400 text-sm">
                      Select your primary business model so we can customize your audit:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {businessTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = formData.businessType === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, businessType: type.id })}
                            className={`flex flex-col items-start p-4 rounded-xl text-left border transition-all duration-300 ${
                              isSelected
                                ? "border-lime-400 bg-lime-400/10 text-white"
                                : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 text-zinc-300 hover:text-white"
                            }`}
                          >
                            <Icon className={`h-6 w-6 mb-2 ${isSelected ? "text-lime-400" : "text-zinc-400"}`} />
                            <span className="font-semibold text-sm">{type.label}</span>
                            <span className="text-xs text-zinc-400 mt-1 line-clamp-1">{type.desc}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex justify-end pt-4">
                      <button
                        id="step1-next-btn"
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.businessType}
                        className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-400 hover:text-black transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black"
                      >
                        Continue <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    id="modal-step-2"
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <p className="text-zinc-400 text-sm mb-4">
                        What is your estimated monthly advertising budget?
                      </p>
                      <div className="flex justify-between items-baseline mb-3">
                        <span className="text-xs font-mono text-zinc-500">Selected Budget</span>
                        <span className="text-3xl font-display font-bold text-lime-400">
                          ${formData.monthlySpend.toLocaleString()}
                          <span className="text-sm font-mono text-zinc-400">/mo</span>
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="1000"
                        value={formData.monthlySpend}
                        onChange={(e) => setFormData({ ...formData, monthlySpend: Number(e.target.value) })}
                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-lime-400"
                      />
                      <div className="flex justify-between text-xs font-mono text-zinc-500 mt-2">
                        <span>$1,000</span>
                        <span>$50,000</span>
                        <span>$100,000+</span>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="font-semibold text-zinc-400 hover:text-white transition-colors"
                      >
                        Back
                      </button>
                      <button
                        id="step2-next-btn"
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-400 hover:text-black transition-colors"
                      >
                        Continue <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    id="modal-step-3"
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-zinc-400 text-sm">
                      Almost there! Fill in your details to secure your priority booking:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Lord Satoru"
                          className="w-full bg-zinc-900 border border-zinc-800 focus:border-lime-400 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="satoru@domain.com"
                          className="w-full bg-zinc-900 border border-zinc-800 focus:border-lime-400 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                          Website / Store Link
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="https://myshop.com"
                          className="w-full bg-zinc-900 border border-zinc-800 focus:border-lime-400 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="font-semibold text-zinc-400 hover:text-white transition-colors"
                      >
                        Back
                      </button>
                      <button
                        id="submit-booking-btn"
                        type="submit"
                        className="flex items-center gap-2 bg-lime-400 text-black font-bold px-8 py-3 rounded-full hover:bg-lime-300 transition-colors shadow-[0_0_20px_rgba(163,230,53,0.3)]"
                      >
                        Complete Audit Request <Calendar className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    id="modal-step-success"
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="mx-auto h-16 w-16 bg-lime-400/20 text-lime-400 flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(163,230,53,0.2)]">
                      <Check className="h-8 w-8" />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-white">Your Alchemy Call is Secured!</h4>
                    <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our growth alchemists are pre-reviewing <span className="text-lime-400 underline">{formData.website}</span> and will prepare a custom report.
                    </p>
                    <div className="bg-zinc-900/50 rounded-2xl p-4 text-left border border-zinc-800 max-w-sm mx-auto space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Business Model:</span>
                        <span className="font-semibold text-white uppercase">{formData.businessType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Monthly Budget:</span>
                        <span className="font-semibold text-lime-400 font-mono">${formData.monthlySpend.toLocaleString()}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Inquiry Status:</span>
                        <span className="text-lime-400 font-semibold animate-pulse flex items-center gap-1">
                          <Sparkles className="h-3 w-3" /> Live Audit Preparing
                        </span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        id="close-success-btn"
                        type="button"
                        onClick={resetForm}
                        className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-zinc-200 transition-colors"
                      >
                        Let's Go!
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
