// About Section Component 

"use client";

import { motion, Variants } from "framer-motion";
import { Target, Lightbulb, Users, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precision & Impact",
    description: "Data-driven strategies to ensure measurable environmental results.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Cutting-edge methodologies in carbon credit and ESG frameworks.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Partnering closely with organizations to build long-term sustainability.",
  },
];

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Images / Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-8 lg:mt-12"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-emerald-200/50 rounded-full blur-3xl transform -translate-x-10 translate-y-10" />

              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/About.jpg"
                  alt="Sustainable landscape representing our vision"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />


              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-4 tracking-wide">
              ABOUT US
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Pioneering a <span className="text-emerald-600">Greener</span> Tomorrow.
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base text-slate-600 mb-6 leading-relaxed">
              Green Milestone is a forward-thinking consultancy dedicated to guiding businesses through the complexities of environmental responsibility. We bridge the gap between corporate goals and ecological sustainability, providing tailored solutions in GHG Auditing, Carbon Credits, and ESG compliance.
            </motion.p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                      <feature.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
