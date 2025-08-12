'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

export default function Transformation() {
  const [isBeforeView, setIsBeforeView] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable heavy animations on mobile or when reduced motion is preferred
  const shouldDisableAnimations = isMobile || isReducedMotion;

  return (
    <section id="transformation" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={shouldDisableAnimations ? false : { opacity: 0, y: 20 }}
          whileInView={shouldDisableAnimations ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Life Before vs After Optamyze
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            See how we turn chaos into clarity — with clean data, aligned tools, and effortless automation.
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => setIsBeforeView(true)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
              isBeforeView
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setIsBeforeView(false)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
              !isBeforeView
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            After
          </button>
        </div>

        {/* Panels */}
        <div className="rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm bg-white/70 ring-1 ring-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[480px] lg:min-h-[520px]">

            {/* BEFORE */}
            <AnimatePresence mode="wait">
              {isBeforeView ? (
                <motion.div
                  key="before"
                  initial={shouldDisableAnimations ? false : { opacity: 0, x: -40 }}
                  animate={shouldDisableAnimations ? false : { opacity: 1, x: 0 }}
                  exit={shouldDisableAnimations ? false : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 p-6 sm:p-8 lg:p-12 flex flex-col justify-center"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <span className="inline-block px-3 sm:px-4 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full border border-purple-200 w-fit">
                      Before: Messy & Manual
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                      Scattered platforms. Broken processes. Constant frustration.
                    </h3>
                    <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {[
                        'Disconnected tools, siloed data, and unclear systems',
                        'Manual entry, outdated info, and lost productivity',
                        'No automations — everything depends on you',
                        'Your team spends more time fixing tech than using it',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1.5 sm:mt-2 w-2 h-2 bg-purple-400 rounded-full shrink-0" />
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
                  initial={shouldDisableAnimations ? false : { opacity: 0, x: 40 }}
                  animate={shouldDisableAnimations ? false : { opacity: 1, x: 0 }}
                  exit={shouldDisableAnimations ? false : { opacity: 0, x: 40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-br from-green-100 via-blue-100 to-cyan-100 p-6 sm:p-8 lg:p-12 flex flex-col justify-center"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <span className="inline-block px-3 sm:px-4 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full border border-green-200 w-fit">
                      After: Optimized & Automated
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                      Integrated systems. Automated workflows. Effortless growth.
                    </h3>
                    <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base lg:text-lg">
                      {[
                        'Connected tools, unified data, and crystal-clear processes',
                        'Automated workflows, real-time updates, and maximum efficiency',
                        'Smart automations that work while you focus on growth',
                        'Your team spends time on strategy, not system maintenance',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1.5 sm:mt-2 w-2 h-2 bg-green-400 rounded-full shrink-0" />
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
              initial={shouldDisableAnimations ? false : { opacity: 0, y: 20 }}
              animate={shouldDisableAnimations ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/80 p-6 sm:p-8 lg:p-12 flex items-center justify-center"
            >
              <div className="text-center space-y-4 sm:space-y-6">
                <motion.div
                  animate={shouldDisableAnimations ? false : { rotate: [0, 5, -5, 0] }}
                  transition={shouldDisableAnimations ? false : { repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </motion.div>

                {isBeforeView ? (
                  <>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Still stuck in the chaos?</h4>
                    <a
                      href="#contact"
                      className="inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:opacity-90 transition"
                    >
                      Request a Free Audit
                    </a>
                  </>
                ) : (
                  <>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Ready to Optamyze your systems?</h4>
                    <a
                      href="#contact"
                      className="inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition"
                    >
                      Let's Talk Optimization
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
