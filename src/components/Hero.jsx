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

  // Disable ALL animations on mobile for maximum performance
  const shouldDisableAnimations = isMobile || isReducedMotion;

  return (
    <section className="relattive min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Static background for all devices - no animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Enhanced Badge */}
          {shouldDisableAnimations ? (
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-soft">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-semibold text-blue-800">Trusted by 500+ Businesses</span>
              </div>
              <div className="flex -space-x-1 sm:-space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white" />
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-soft"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-semibold text-blue-800">Trusted by 500+ Businesses</span>
              </div>
              <div className="flex -space-x-1 sm:-space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white" />
                ))}
              </div>
            </motion.div>
          )}

          {/* Main Heading */}
          {shouldDisableAnimations ? (
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black leading-[0.9] tracking-tight text-gray-900">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Business Systems
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stop struggling with disconnected tools and manual processes. 
                We build integrated systems that actually work and scale with your business.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6 sm:space-y-8"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black leading-[0.9] tracking-tight text-gray-900">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Business Systems
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stop struggling with disconnected tools and manual processes. 
                We build integrated systems that actually work and scale with your business.
              </p>
            </motion.div>
          )}

          {/* Key Benefits */}
          {shouldDisableAnimations ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, text: "Integrated Systems" },
                { icon: Zap, text: "Automated Workflows" },
                { icon: Shield, text: "Secure & Reliable" },
                { icon: Sparkles, text: "Proven Results" }
              ].map((prop, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-700">
                  <prop.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm lg:text-base">{prop.text}</span>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: CheckCircle, text: "Integrated Systems" },
                { icon: Zap, text: "Automated Workflows" },
                { icon: Shield, text: "Secure & Reliable" },
                { icon: Sparkles, text: "Proven Results" }
              ].map((prop, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-700">
                  <prop.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm lg:text-base">{prop.text}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTA Buttons */}
          {shouldDisableAnimations ? (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-large shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-glow w-full sm:w-auto"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ArrowRight className="mr-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                Speak to a Systems Expert
              </Button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8"
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-large shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-glow w-full sm:w-auto"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ArrowRight className="mr-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                Speak to a Systems Expert
              </Button>
            </motion.div>
          )}

          {/* Trust Indicators */}
          {shouldDisableAnimations ? (
            <div className="pt-8 sm:pt-12">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-4 sm:mb-6">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 opacity-60">
                {['HubSpot', 'Salesforce', 'ClickUp', 'Monday.com', 'Zapier'].map((brand, i) => (
                  <div
                    key={brand}
                    className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-8 sm:pt-12"
            >
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-4 sm:mb-6">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 opacity-60">
                {['HubSpot', 'Salesforce', 'ClickUp', 'Monday.com', 'Zapier'].map((brand, i) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                    className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {brand}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
