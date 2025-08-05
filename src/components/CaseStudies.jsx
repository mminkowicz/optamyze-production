'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign, Star } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Growth Engine",
    company: "Fashion Retailer",
    industry: "E-commerce",
    challenge: "Manual order processing was taking 4 hours daily, causing delays and customer complaints.",
    solution: "Built automated order management system with real-time inventory sync and customer notifications.",
    results: [
      { metric: "Time Saved", value: "85%", icon: Clock },
      { metric: "Revenue Increase", value: "40%", icon: TrendingUp },
      { metric: "Customer Satisfaction", value: "98%", icon: Star }
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Automation", "E-commerce", "CRM"]
  },
  {
    id: 2,
    title: "Real Estate Lead Management",
    company: "Property Group",
    industry: "Real Estate",
    challenge: "Scattered lead data across 5 different platforms with no unified view or follow-up system.",
    solution: "Integrated CRM with automated lead scoring, follow-up sequences, and performance analytics.",
    results: [
      { metric: "Lead Conversion", value: "300%", icon: TrendingUp },
      { metric: "Response Time", value: "2 min", icon: Clock },
      { metric: "Team Efficiency", value: "60%", icon: Users }
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Integration", "Real Estate", "Lead Management"]
  },
  {
    id: 3,
    title: "SaaS Customer Success Platform",
    company: "Tech Startup",
    industry: "SaaS",
    challenge: "Customer churn was 25% due to poor onboarding and lack of usage tracking.",
    solution: "Developed comprehensive customer success platform with automated onboarding and health scoring.",
    results: [
      { metric: "Churn Reduction", value: "70%", icon: TrendingUp },
      { metric: "Customer Lifetime Value", value: "2.5x", icon: DollarSign },
      { metric: "Support Tickets", value: "-50%", icon: Users }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["SaaS", "Customer Success", "Analytics"]
  }
];

const industries = ['All', 'E-commerce', 'Real Estate', 'SaaS', 'Healthcare', 'Finance'];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);

  const filteredCases = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.industry === selectedIndustry);

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
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we've transformed businesses across industries with custom CRM solutions 
            that drive measurable growth and efficiency.
          </p>
        </motion.div>

        {/* Industry Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedIndustry === industry
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {industry}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredCases.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedCase(caseStudy)}
            >
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      {caseStudy.industry}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {caseStudy.challenge}
                  </p>

                  {/* Results Preview */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {caseStudy.results.slice(0, 3).map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-green-600">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{caseStudy.company}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", icon: TrendingUp },
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "300%", label: "Avg. Efficiency Gain", icon: Clock },
              { number: "24/7", label: "Support Available", icon: Users }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-soft">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for Case Study Details */}
      {selectedCase && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedCase(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedCase.industry}
                </span>
                <span className="text-gray-500">{selectedCase.company}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedCase.title}</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedCase.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedCase.solution}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedCase.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <result.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{result.value}</div>
                      <div className="text-gray-600">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
} 