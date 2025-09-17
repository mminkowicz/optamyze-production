'use client';

import React from 'react';
import { 
  Search, 
  Lightbulb, 
  Settings, 
  Rocket, 
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Discovery & Analysis',
    description: 'We dive deep into your current systems, processes, and pain points to understand exactly what needs to be optimized.',
    icon: Search,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    details: [
      'Current system audit',
      'Process mapping',
      'Pain point identification',
      'ROI opportunity analysis'
    ]
  },
  {
    id: 2,
    title: 'Strategy & Planning',
    description: 'We design a custom solution strategy tailored to your specific business needs and growth goals.',
    icon: Lightbulb,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    details: [
      'Custom solution design',
      'Technology roadmap',
      'Implementation timeline',
      'Success metrics definition'
    ]
  },
  {
    id: 3,
    title: 'Build & Configure',
    description: 'Our team builds and configures your systems with precision, ensuring everything works seamlessly together.',
    icon: Settings,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    details: [
      'System configuration',
      'Custom development',
      'Integration setup',
      'Quality assurance testing'
    ]
  },
  {
    id: 4,
    title: 'Launch & Deploy',
    description: 'We launch your new systems with comprehensive training and support to ensure smooth adoption.',
    icon: Rocket,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    details: [
      'System deployment',
      'Team training',
      'Go-live support',
      'Performance monitoring'
    ]
  },
  {
    id: 5,
    title: 'Optimize & Scale',
    description: 'We continuously monitor, optimize, and scale your systems as your business grows and evolves.',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    details: [
      'Performance optimization',
      'Regular updates',
      'Scalability planning',
      'Ongoing support'
    ]
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Transform Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step process ensures your systems are built right, deployed smoothly, 
            and optimized for long-term success.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-yellow-200 via-green-200 via-purple-200 to-red-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.id} className="text-center group">
                {/* Step Number & Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">{step.id}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {/* Step Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's start with a free discovery call to understand your needs and show you 
              exactly how we can help optimize your systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendar.app.google/7JhbHhJhNG9fHj849"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Your Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Learn More About Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
