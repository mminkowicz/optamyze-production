'use client';

import React, { useState } from 'react';
import {
  FaTools,
  FaCogs,
  FaPlug,
  FaRocket,
  FaSyncAlt,
  FaDatabase,
  FaCode,
  FaGraduationCap,
  FaSearchPlus
} from 'react-icons/fa';
import { CheckCircle, Zap, ArrowRight, X } from 'lucide-react';

import clickup from '../assets/platforms/clickup.png';
import hubspot from '../assets/platforms/hubspot.png';
import make from '../assets/platforms/make.png';
import monday from '../assets/platforms/monday.png';
import pipedrive from '../assets/platforms/pipedrive logo.png';
import salesforce from '../assets/platforms/salesforce.png';
import zapier from '../assets/platforms/zapier.png';

const services = [
  {
    id: "customization",
    title: 'Customization',
    description: 'We tailor your systems to match your exact needs — from custom fields, layouts, dashboards to roles and approvals.',
    icon: FaCogs,
    gradient: 'from-purple-500 to-indigo-500',
    features: [
      'Custom fields and data structures',
      'Branded dashboards and interfaces',
      'Role-based permissions and access',
      'Custom workflows and approval processes',
      'Integration with your existing tools',
      'White-label solutions'
    ]
  },
  {
    id: "automation",
    title: 'Automation',
    description: 'Say goodbye to repetitive tasks. We design powerful automations and workflows so everything runs smoothly and hands-free.',
    icon: FaSyncAlt,
    gradient: 'from-yellow-400 to-orange-400',
    features: [
      'Workflow automation design',
      'Trigger-based actions',
      'Multi-step process automation',
      'Error handling and notifications',
      'Performance monitoring',
      'Scalable automation architecture'
    ]
  },
  {
    id: "integrations",
    title: 'Integrations',
    description: 'Connect all the tools your business relies on — ClickUp, HubSpot, Make, Google Workspace, QuickBooks, and more.',
    icon: FaPlug,
    gradient: 'from-pink-500 to-red-400',
    features: [
      'API integration development',
      'Real-time data synchronization',
      'Bidirectional data flow',
      'Error handling and retry logic',
      'Data transformation and mapping',
      'Integration monitoring and alerts'
    ]
  },
  {
    id: "support",
    title: 'Management & Support',
    description: 'Ongoing updates, troubleshooting, user support, and performance monitoring so your stack runs at peak speed.',
    icon: FaTools,
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      '24/7 system monitoring',
      'Regular maintenance and updates',
      'User support and training',
      'Performance optimization',
      'Security updates and patches',
      'Backup and disaster recovery'
    ]
  },
  {
    id: "strategy",
    title: "Advisory & Strategy",
    description: "We're strategic partners — offering planning, tool selection, and long-term system alignment.",
    icon: FaRocket,
    gradient: "from-green-500 to-emerald-400",
    features: [
      'Technology strategy consulting',
      'Tool evaluation and selection',
      'System architecture design',
      'ROI analysis and planning',
      'Change management support',
      'Long-term technology roadmaps'
    ]
  },
  {
    id: "development",
    title: "Custom Development",
    description: "Need more than off-the-shelf? We build custom apps, scripts, and middleware tailored to your stack.",
    icon: FaCode,
    gradient: "from-fuchsia-500 to-rose-500",
    features: [
      'Custom web applications',
      'API development',
      'Database design and optimization',
      'Mobile app development',
      'Scripting and automation',
      'Third-party integrations'
    ]
  },
  {
    id: "data",
    title: 'Data Services',
    description: 'Clean, import, export, dedupe, and segment data so its accurate, usable, and analytics-ready.',
    icon: FaDatabase,
    gradient: 'from-teal-500 to-blue-400',
    features: [
      'Data cleaning and deduplication',
      'Data migration and import',
      'Database optimization',
      'Data analysis and reporting',
      'Data governance setup',
      'Backup and recovery systems'
    ]
  },
  {
    id: "training",
    title: 'Training & Onboarding',
    description: 'Empower your team with hands-on training, video docs, and onboarding flows built for adoption.',
    icon: FaGraduationCap,
    gradient: 'from-violet-500 to-purple-500',
    features: [
      'Custom training programs',
      'Video documentation',
      'Interactive workshops',
      'User adoption strategies',
      'Ongoing support and Q&A',
      'Training materials and resources'
    ]
  },
  {
    id: "audit",
    title: 'Audits & Optimization',
    description: 'We evaluate your systems, find gaps and inefficiencies, then optimize for performance and ROI.',
    icon: FaSearchPlus,
    gradient: 'from-amber-500 to-yellow-500',
    features: [
      'System performance audits',
      'Security assessments',
      'Cost optimization analysis',
      'User adoption evaluation',
      'Integration gap analysis',
      'Optimization recommendations'
    ]
  }
];

const platforms = [
  { name: 'ClickUp', src: clickup },
  { name: 'HubSpot', src: hubspot },
  { name: 'Make', src: make },
  { name: 'Monday.com', src: monday },
  { name: 'Pipedrive', src: pipedrive },
  { name: 'Salesforce', src: salesforce },
  { name: 'Zapier', src: zapier },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-6">
            <Zap className="w-4 h-4 mr-2" />
            What We Do Best
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We transform business operations through intelligent automation, seamless integrations, and custom solutions that scale with your growth.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => openServiceModal(service)}
            >
              <div className="w-full p-6 text-left hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/30 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                    <span className="text-xs font-semibold text-white bg-black/80 px-2 py-0.5 rounded-full">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeServiceModal}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center`}>
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
                      <p className="text-gray-600">{selectedService.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeServiceModal}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="space-y-6">
                  {/* What's Included */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      What's Included
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-6 border-t border-gray-100 mt-6">
                  <a
                    href="https://calendar.app.google/7JhbHhJhNG9fHj849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started with {selectedService.title}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Platform Logos Slideshow */}
        <div
          className="mt-20 sm:mt-24 text-center animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
            Platforms We Work With
          </p>
          <div className="relative overflow-hidden">
            <div 
              className="flex items-center gap-x-8 gap-y-6 animate-scroll"
              style={{ 
                width: 'fit-content',
                animation: 'scroll 30s linear infinite'
              }}
            >
              {/* First set of logos */}
              {platforms.map((p) => (
                <img
                  key={`first-${p.name}`}
                  src={p.src}
                  alt={p.name}
                  className="h-12 sm:h-16 w-auto max-w-[120px] object-contain opacity-80 hover:opacity-100 transition duration-300 flex-shrink-0"
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {platforms.map((p) => (
                <img
                  key={`second-${p.name}`}
                  src={p.src}
                  alt={p.name}
                  className="h-12 sm:h-16 w-auto max-w-[120px] object-contain opacity-80 hover:opacity-100 transition duration-300 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
