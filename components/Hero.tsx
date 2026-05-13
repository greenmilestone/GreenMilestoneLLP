// Hero Section Component 

"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Leaf, Globe2, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-emerald-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-800/30 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-600/20 blur-[100px]" />

        {/* Abstract Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-32 lg:py-16 -mt-8 lg:-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-sm font-medium mb-4 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Launching Soon
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
              Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Sustainable</span> Future.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-sm sm:text-base text-emerald-100/80 mb-5 leading-relaxed max-w-xl">
              Green Milestone is a premier sustainability consultancy driving carbon-neutral growth. We specialize in GHG Auditing, Carbon Credits, and bespoke Climate Strategy Services.
            </motion.p>

            {/* Mobile Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:hidden mb-8 w-full max-w-[28rem]"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/Hero.jpeg"
                  alt="Climate Action"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/10 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-sm font-bold text-white mb-0.5">Accelerating Climate Action</h3>
                  <p className="text-emerald-100/70 text-xs">Expert consulting for ESG and Carbon Credits.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-950 px-7 py-3 rounded-lg font-bold text-sm transition-all"
              >
                Discover Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/20 text-white px-7 py-3 rounded-lg font-bold text-sm transition-all backdrop-blur-sm"
              >
                Partner With Us
              </a>
            </motion.div>


          </motion.div>

          {/* Right Visual Element: Immersive Integrated Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative lg:h-[450px] flex items-center justify-end hidden lg:flex"
          >
            <div className="relative w-full max-w-[28rem] group">
              {/* Outer Immersive Glow */}
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-2xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

              {/* Main Visual Container */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/30">
                {/* Hero Image */}
                <img
                  src="/Hero.jpeg"
                  alt="Climate Action"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Immersive Depth Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/10 to-transparent" />
                <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />

                {/* Internal Content Layer */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="relative z-10">

                    <h3 className="text-lg font-bold text-white mb-1 shadow-sm">Accelerating Climate Action</h3>
                    <p className="text-emerald-100/70 text-sm leading-snug">Expert consulting for ESG and Carbon Credits.</p>
                  </div>
                </div>

                {/* Subtle Animated Rings (Integrated into background) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-emerald-400/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
              </div>


            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Curve Divider */}
      <div className="absolute -bottom-px left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto relative -bottom-px">
          <path d="M0 120L1440 120V0C1440 0 1100 80 720 80C340 80 0 0 0 0V120Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
