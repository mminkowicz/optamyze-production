'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Our Story
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building Systems That Actually Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We started Optamyze because we were tired of seeing businesses struggle with 
            complex, expensive systems that promised the world but delivered frustration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              From Frustration to Innovation
            </h3>
            <div className="space-y-6 text-gray-600">
              <p>
                Our founders spent years working with businesses that were drowning in 
                manual processes, scattered data, and expensive software that didn't 
                deliver on its promises.
              </p>
              <p>
                We realized the problem wasn't the tools themselves, but how they were 
                being implemented and integrated. Most businesses were trying to fit 
                their processes into rigid software instead of building systems that 
                worked for them.
              </p>
              <p>
                That's why we created Optamyze — to build business systems that actually 
                work, scale with your growth, and deliver measurable results from day one.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "Systems Built" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "300%", label: "Avg. Efficiency Gain" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
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