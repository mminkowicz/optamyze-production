import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-black leading-tight tracking-tight text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              We believe your systems should work for you, not against you. Our mission is to optimize, 
              automate, and integrate your business technology so you can focus on what you do best — 
              growing your business and serving your customers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From customization and automation to ongoing support and strategic guidance, 
              we're your dedicated technology partners committed to making your operations 
              smoother, more efficient, and perfectly aligned with your business goals.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center"
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#ED1C5B] rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-300 rounded-full opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}