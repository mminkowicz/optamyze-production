'use client';

import React, { useState, useEffect } from 'react';
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
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
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
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
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
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
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
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
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
    color: "text-green-600",
    bgColor: "bg-green-100",
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
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
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
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
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
    color: 'text-violet-600',
    bgColor: 'bg-violet-100',
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
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        <div className="text-center mb-16">
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
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openServiceModal(service)}
            >
              <div className="text-center mb-4">
                <div className={`w-16 h-16 rounded-lg ${service.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Service Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={closeServiceModal}
          >
            <div
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-lg ${selectedService.bgColor} flex items-center justify-center`}>
                      <selectedService.icon className={`w-8 h-8 ${selectedService.color}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
                      <p className="text-gray-600">{selectedService.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeServiceModal}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
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
                <div className="text-center pt-6 border-t border-gray-200 mt-6">
                  <a
                    href="https://calendar.app.google/7JhbHhJhNG9fHj849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
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
        <div className="mt-20 sm:mt-24 text-center">
          <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
            Platforms We Work With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {platforms.map((p) => (
              <img
                key={p.name}
                src={p.src}
                alt={p.name}
                className="h-12 sm:h-16 w-auto max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
