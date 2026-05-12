// Process Section Component

"use client";

import { motion, Variants } from "framer-motion";
import { Search, Compass, Activity, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Search,
    title: "Discovery & Auditing",
    description: "We conduct a thorough GHG audit to establish your baseline footprint and identify key areas for emission reduction.",
  },
  {
    id: "02",
    icon: Compass,
    title: "Strategy Formulation",
    description: "Developing tailored ESG frameworks, ACV methodologies, and viable carbon credit strategies aligned with your goals.",
  },
  {
    id: "03",
    icon: Activity,
    title: "Implementation",
    description: "Executing CCTS and carbon reduction strategies with precision, ensuring seamless integration into your existing operations.",
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Monitoring & Compliance",
    description: "Continuous tracking and compliance reporting to guarantee sustained environmental impact and regulatory adherence.",
  },
];

export default function Process() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="process" className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-50/80 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-4 tracking-wide"
          >
            OUR METHODOLOGY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
          >
            A Strategic Approach to <span className="text-emerald-600">Net Zero</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-600"
          >
            Our proven four-step methodology ensures a seamless transition towards sustainable operations, maximizing ecological impact and business value.
          </motion.p>
        </div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative"
        >
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-50" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative z-10 group"
            >
              {/* Step Card */}
              <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 h-full flex flex-col items-center text-center hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-300 relative overflow-hidden">

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center h-full">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                      <step.icon className="w-6 h-6" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xs border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      {step.id}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
