'use client';

import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, CheckCircle, Zap, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Simplified Background Elements - Only on desktop and when animations are enabled */}
      {!shouldDisableAnimations && (
        <div className="absolute inset-0 hidden lg:block">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180],
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [180, 90, 0],
            }}
            transition={{ 
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"
          />
        </div>
      )}

      {/* Static background for mobile */}
      {shouldDisableAnimations && (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
        </div>
      )}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center space-y-12">
          {/* Enhanced Badge */}
          <motion.div
            initial={shouldDisableAnimations ? false : { opacity: 0, y: 20 }}
            animate={shouldDisableAnimations ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-6 py-3 shadow-soft"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">Trusted by 500+ Businesses</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white" />
              ))}
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={shouldDisableAnimations ? false : { opacity: 0, y: 30 }}
            animate={shouldDisableAnimations ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[0.9] tracking-tight text-gray-900">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Business Systems
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stop struggling with disconnected tools and manual processes. 
              We build integrated systems that actually work and scale with your business.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={shouldDisableAnimations ? false : { opacity: 0, y: 30 }}
            animate={shouldDisableAnimations ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: CheckCircle, text: "Integrated Systems" },
              { icon: Zap, text: "Automated Workflows" },
              { icon: Shield, text: "Secure & Reliable" },
              { icon: Sparkles, text: "Proven Results" }
            ].map((prop, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <prop.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">{prop.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={shouldDisableAnimations ? false : { opacity: 0, y: 30 }}
            animate={shouldDisableAnimations ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8"
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-large shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-glow w-full sm:w-auto"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowRight className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              Speak to a Systems Expert
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={shouldDisableAnimations ? false : { opacity: 0, y: 30 }}
            animate={shouldDisableAnimations ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-12 sm:pt-16"
          >
            <p className="text-sm font-medium text-gray-500 mb-6 sm:mb-8">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
              {['HubSpot', 'Salesforce', 'ClickUp', 'Monday.com', 'Zapier'].map((brand, i) => (
                <motion.div
                  key={brand}
                  initial={shouldDisableAnimations ? false : { opacity: 0, scale: 0.8 }}
                  animate={shouldDisableAnimations ? false : { opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                  className="text-sm sm:text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements - Only on desktop and when animations are enabled */}
      {!shouldDisableAnimations && (
        <>
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl hidden lg:block backdrop-blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-40 left-16 w-12 h-12 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full hidden lg:block backdrop-blur-sm"
          />
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              x: [0, 8, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-lg hidden lg:block backdrop-blur-sm"
          />
        </>
      )}
    </section>
  );
}
