// FAQ Section Component

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What exactly are Carbon Credits and how can my company benefit?",
    answer: "Carbon credits are permits that represent 1 ton of carbon dioxide removed from the atmosphere. By purchasing or generating them, your company can offset its unavoidable emissions, achieve net-zero targets, and enhance its brand reputation among eco-conscious consumers and investors.",
  },
  {
    question: "How does the GHG Auditing process work?",
    answer: "Our GHG auditing involves a comprehensive assessment of your Scope 1, 2, and 3 emissions. We collect data from your operations, apply recognized calculation methodologies (like the GHG Protocol), and provide a detailed report highlighting major emission sources and reduction opportunities.",
  },
  {
    question: "What is ACV Consultancy?",
    answer: "ACV stands for Analyse du Cycle de Vie, or Life Cycle Assessment (LCA). It's a systematic analysis of the environmental impact of your products or services from raw material extraction through to end-of-life disposal, helping you design more sustainable offerings.",
  },
  {
    question: "Why are ESG Solutions important for modern businesses?",
    answer: "Environmental, Social, and Governance (ESG) frameworks are critical for risk management and sustainable growth. Strong ESG performance attracts investment, ensures regulatory compliance, and builds long-term trust with stakeholders and the community.",
  },
  {
    question: "Do you offer tailored Climate Strategy Services for startups?",
    answer: "Absolutely. We understand that startups have unique constraints and rapid growth trajectories. We offer scalable climate strategies that integrate sustainability into your core business model from day one without stifling innovation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-4 tracking-wide"
          >
            COMMON QUESTIONS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600"
          >
            Everything you need to know about our sustainability consulting services and methodologies.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "bg-emerald-50/50 border-emerald-200" : "bg-white border-slate-200 hover:border-emerald-200"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-bold transition-colors ${isOpen ? "text-emerald-900" : "text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-emerald-200 text-emerald-800" : "bg-slate-100 text-slate-500"}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
