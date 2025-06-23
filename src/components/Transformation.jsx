'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

export default function Transformation() {
  const [isBeforeView, setIsBeforeView] = useState(true);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-blue-100" id="transformation">
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
            Before vs After Simplora
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A clear look at what happens when your systems, tools, and data actually work <em>for</em> your business.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsBeforeView(true)}
            className={`px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
              isBeforeView
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
            }`}
          >
            Before Simplora
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsBeforeView(false)}
            className={`px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
              !isBeforeView
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
            }`}
          >
            After Simplora
          </motion.button>
        </div>

        {/* Content Card */}
        <div className="rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm bg-white/80 ring-1 ring-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
            {/* Left Panel */}
            <AnimatePresence mode="wait">
              {isBeforeView ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-red-100 to-orange-50 p-8 sm:p-12 flex flex-col justify-center"
                >
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-1 bg-red-200 text-red-800 text-sm font-semibold rounded-full border border-red-300 w-fit">
                      Before: Messy & Manual
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Disconnected tools. Inconsistent data. Wasted time.</h3>
                    <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                      {[
                        'CRMs and platforms not customized or synced',
                        'Manual data entry, duplicate records, outdated info',
                        'No clear processes or automations in place',
                        'Too much time spent on the tech instead of your actual work',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 w-2 h-2 bg-red-500 rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-emerald-50 to-green-100 p-8 sm:p-12 flex flex-col justify-center"
                >
                  <div className="space-y-6">
                    <span className="inline-block px-4 py-1 bg-green-200 text-green-800 text-sm font-semibold rounded-full border border-green-300 w-fit">
                      After: Smart & Streamlined
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Customized systems. Clean data. Seamless operations.</h3>
                    <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                      {[
                        'CRM and tools fully customized to your needs',
                        'Data cleaned, imported/exported, and always accurate',
                        'Platforms integrated and automated end-to-end',
                        'Ongoing support — we handle the tech, you run your business',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 w-5 h-5 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Panel */}
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-sky-50 to-cyan-100 p-8 sm:p-12 flex items-center justify-center"
            >
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                {isBeforeView ? (
                  <>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">Let’s Clean Up the Chaos</h4>
                    <a
                      href="https://calendar.app.google/BYvoopidMCTQkwJn6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow hover:from-blue-700 hover:to-cyan-700 transition"
                    >
                      Book Your Free Consultation
                    </a>
                  </>
                ) : (
                  <>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">Let’s Build Your Ideal System</h4>
                    <a
                      href="https://calendar.app.google/BYvoopidMCTQkwJn6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold shadow hover:from-green-700 hover:to-emerald-700 transition"
                    >
                      Start Your Transformation
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
