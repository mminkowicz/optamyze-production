'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Settings, 
  Rocket, 
  CheckCircle, 
  Headphones 
} from 'lucide-react';

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your business processes, pain points, and goals to understand exactly what you need.",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
    details: [
      "Business process mapping",
      "Current system audit",
      "Stakeholder interviews",
      "Requirements gathering"
    ]
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "We design a comprehensive roadmap that aligns your technology with your business objectives.",
    icon: Lightbulb,
    gradient: "from-purple-500 to-pink-500",
    details: [
      "System architecture design",
      "Tool selection & evaluation",
      "Implementation timeline",
      "Resource planning"
    ]
  },
  {
    step: "03",
    title: "Customization & Setup",
    description: "We build and configure your systems exactly how you need them, with all the integrations and automations.",
    icon: Settings,
    gradient: "from-green-500 to-emerald-500",
    details: [
      "System configuration",
      "Custom field creation",
      "Workflow automation",
      "Third-party integrations"
    ]
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "We thoroughly test everything and launch your new system with full support and monitoring.",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
    details: [
      "Comprehensive testing",
      "User acceptance testing",
      "Data migration",
      "Go-live support"
    ]
  },
  {
    step: "05",
    title: "Training & Handover",
    description: "We train your team and provide comprehensive documentation to ensure smooth adoption.",
    icon: CheckCircle,
    gradient: "from-teal-500 to-blue-500",
    details: [
      "Team training sessions",
      "Documentation creation",
      "Best practices guide",
      "Knowledge transfer"
    ]
  },
  {
    step: "06",
    title: "Ongoing Support",
    description: "We provide continuous support, maintenance, and optimization to keep your systems running perfectly.",
    icon: Headphones,
    gradient: "from-indigo-500 to-purple-500",
    details: [
      "24/7 technical support",
      "Regular maintenance",
      "Performance monitoring",
      "Continuous optimization"
    ]
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures your CRM implementation is successful, 
            efficient, and delivers real business value from day one.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 transform hover:-translate-y-2">
                
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business Systems?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your needs and create a custom implementation plan that fits your timeline and budget.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 