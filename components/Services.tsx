// Services Section Component 

"use client";

import { motion, Variants } from "framer-motion";
import {
  Leaf,
  BarChart3,
  Factory,
  ShieldCheck,
  Sprout,
  LineChart
} from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Carbon Credits",
    description: "Navigate the carbon market with confidence. We help you generate, manage, and trade high-quality carbon offsets.",
  },
  {
    icon: BarChart3,
    title: "GHG Auditing",
    description: "Comprehensive greenhouse gas accounting and reporting to ensure compliance with global standards and protocols.",
  },
  {
    icon: LineChart,
    title: "ESG Solutions",
    description: "Develop robust Environmental, Social, and Governance frameworks to attract responsible investment and drive sustainable growth.",
  },
  {
    icon: Factory,
    title: "CCTS Consulting",
    description: "Expert guidance on Carbon Capture, Transport, and Storage technologies to significantly reduce your industrial footprint.",
  },
  {
    icon: Sprout,
    title: "ACV Consultancy",
    description: "Life Cycle Assessment (LCA) services to analyze the environmental impact of your products from cradle to grave.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainability Advisory",
    description: "Strategic consulting to align your business operations with long-term climate goals and environmental compliance.",
  },
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-4 tracking-wide"
          >
            OUR SERVICES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
          >
            Comprehensive <span className="text-emerald-600">Sustainability</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-600"
          >
            We provide end-to-end consulting to help organizations transition towards a low-carbon, highly efficient, and environmentally compliant future.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-emerald-100 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
