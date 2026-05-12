// Testimonials Section Component

"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Kartik Kandpal",
    content: "Green Milestone completely transformed our approach to carbon offsetting. Their deep industry expertise and transparent reporting helped us achieve net-zero two years ahead of schedule.",
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=Sarah",
  },
  {
    name: "Shudhanshu Pal",
    content: "The GHG Auditing process was incredibly thorough yet surprisingly smooth. Their team identified inefficiencies we never knew existed, saving us both emissions and operational costs.",
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=David",
  },
  {
    name: "Amit Prakash",
    content: "Partnering with Green Milestone for our ESG framework was the best decision we made. Their strategic advisory provided us with a clear, actionable roadmap that resonated with our investors.",
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=Elena",
  },
  {
    name: "Vishal Singh",
    content: "Their CCTS Consulting is unmatched. They guided us seamlessly through complex compliance requirements, turning what seemed like a regulatory burden into a massive competitive advantage.",
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=Marcus",
  },
  {
    name: "Rahul Kumar",
    content: "We needed to decarbonize our supply chain fast. Green Milestone delivered a highly tailored strategy that not only reduced our carbon footprint but also improved our overall supplier relationships.",
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=Aisha",
  },
  {
    name: "Gagan Kardam",
    content: "As an impact-focused fund, we rely heavily on accurate data. Green Milestone's sustainability advisory services gave us the exact carbon accounting metrics we needed to make confident investment decisions.",
    image: "https://api.dicebear.com/7.x/thumbs/svg?seed=Julian",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-emerald-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900 border border-emerald-700/50 text-emerald-300 text-xs font-bold mb-4 tracking-wide"
          >
            OUR TESTIMONIALS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Trusted by <span className="text-emerald-400">Industry Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-emerald-100/70"
          >
            See how we've helped forward-thinking organizations achieve their sustainability goals and drive meaningful environmental impact.
          </motion.p>
        </div>

        <div className="relative overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-emerald-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-emerald-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 120,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-emerald-900/30 border border-emerald-800/50 rounded-2xl p-6 relative group hover:bg-emerald-900/50 transition-colors w-[300px] sm:w-[380px] flex-shrink-0 flex flex-col"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-800/50 group-hover:text-emerald-700 transition-colors" />

                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                  ))}
                </div>

                <p className="text-sm text-emerald-50 mb-6 leading-relaxed relative z-10 flex-grow">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full border-2 border-emerald-700/50 object-cover"
                  />
                  <div>
                    <h4 className="text-sm text-white font-bold">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
