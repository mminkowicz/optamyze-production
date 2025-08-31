'use client';

import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, CheckCircle, Zap, Shield } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen bg-white">
      {/* Simple background - no heavy effects */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full opacity-20" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full opacity-20" />
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="text-center space-y-8">
          {/* Simple badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Trusted by 500+ Businesses</span>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your
              <br />
              <span className="text-blue-600">Business Systems</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stop struggling with disconnected tools and manual processes. 
              We build integrated systems that actually work and scale with your business.
            </p>
          </div>

          {/* Key benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: CheckCircle, text: "Integrated Systems" },
              { icon: Zap, text: "Automated Workflows" },
              { icon: Shield, text: "Secure & Reliable" },
              { icon: Sparkles, text: "Proven Results" }
            ].map((prop, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <prop.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm">{prop.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors w-full sm:w-auto"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-lg transition-colors w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Speak to an Expert
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12">
            <p className="text-sm font-medium text-gray-500 mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              {['HubSpot', 'Salesforce', 'ClickUp', 'Monday.com', 'Zapier'].map((brand) => (
                <div
                  key={brand}
                  className="text-sm font-medium text-gray-400"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
