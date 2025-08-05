'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Users, Zap, Target } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Analysis',
    description: 'We analyze your current systems, identify pain points, and understand your business goals.',
    icon: Target,
    color: 'blue'
  },
  {
    step: 2,
    title: 'Strategy & Planning',
    description: 'Create a custom roadmap with clear milestones, timelines, and success metrics.',
    icon: Clock,
    color: 'purple'
  },
  {
    step: 3,
    title: 'Design & Build',
    description: 'Develop your optimized system with automation, integrations, and user-friendly interfaces.',
    icon: Zap,
    color: 'green'
  },
  {
    step: 4,
    title: 'Testing & Training',
    description: 'Thorough testing and team training to ensure smooth adoption and maximum efficiency.',
    icon: Users,
    color: 'orange'
  },
  {
    step: 5,
    title: 'Launch & Support',
    description: 'Go live with ongoing support, monitoring, and continuous optimization.',
    icon: CheckCircle,
    color: 'pink'
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple 5-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We make system transformation simple and predictable. Here's exactly how we'll work together 
            to optimize your business processes.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg ${
                    step.color === 'blue' ? 'bg-blue-600' :
                    step.color === 'purple' ? 'bg-purple-600' :
                    step.color === 'green' ? 'bg-green-600' :
                    step.color === 'orange' ? 'bg-orange-600' :
                    'bg-pink-600'
                  }`}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    step.color === 'blue' ? 'bg-blue-100' :
                    step.color === 'purple' ? 'bg-purple-100' :
                    step.color === 'green' ? 'bg-green-100' :
                    step.color === 'orange' ? 'bg-orange-100' :
                    'bg-pink-100'
                  }`}>
                    <step.icon className={`w-6 h-6 ${
                      step.color === 'blue' ? 'text-blue-600' :
                      step.color === 'purple' ? 'text-purple-600' :
                      step.color === 'green' ? 'text-green-600' :
                      step.color === 'orange' ? 'text-orange-600' :
                      'text-pink-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (except for last step) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block mt-6">
                      <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's begin with step 1 - a free discovery session where we'll analyze your current systems 
              and create a custom roadmap for your business.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Start Your Free Discovery Session
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 