'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

export default function Transformation() {
  const [isBeforeView, setIsBeforeView] = useState(true);

  return (
    <section id="transformation" className="py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Life Before vs After Optamyze
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See how we turn chaos into clarity — with clean data, aligned tools, and effortless automation.
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsBeforeView(true)}
            className={`px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
              isBeforeView
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-400'
            }`}
          >
            Before Optamyze
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsBeforeView(false)}
            className={`px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
              !isBeforeView
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-400'
            }`}
          >
            After Optamyze
          </motion.button>
        </div>

        {/* Panels */}
        <div className="rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm bg-white/70 ring-1 ring-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

            {/* BEFORE */}
            <AnimatePresence mode="wait">
              {isBeforeView ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 p-8 sm:p-12 flex flex-col justify-center"
                >
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full border border-purple-200 w-fit">
                      Before: Messy & Manual
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Scattered platforms. Broken processes. Constant frustration.
                    </h3>
                    <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                      {[
                        'Disconnected tools, siloed data, and unclear systems',
                        'Manual entry, outdated info, and lost productivity',
                        'No automations — everything depends on you',
                        'Your team spends more time fixing tech than using it',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 w-2 h-2 bg-purple-400 rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                // AFTER
                <motion.div
                  key="after"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-white via-blue-50 to-purple-100 p-8 sm:p-12 flex flex-col justify-center"
                >
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200 w-fit">
                      After: Streamlined & Scalable
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Connected platforms. Clean data. Automated everything.
                    </h3>
                    <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                      {[
                        'Your CRM, tools, and data fully aligned and automated',
                        'Everything customized — no more generic limitations',
                        'Your workflows trigger themselves while you focus on growth',
                        'Ongoing system care — we manage, you scale',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 w-5 h-5 text-purple-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA */}
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/80 p-8 sm:p-12 flex items-center justify-center"
            >
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                {isBeforeView ? (
                  <>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">Still stuck in the chaos?</h4>
                    <a
                      href="#contact"
                      className="inline-block px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:opacity-90 transition"
                    >
                      Request a Free Audit
                    </a>
                  </>
                ) : (
                  <>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">Ready to Optamyze your systems?</h4>
                    <a
                      href="#contact"
                      className="inline-block px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition"
                    >
                      Let’s Talk Optimization
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
