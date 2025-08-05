'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Users, TrendingUp, Code } from 'lucide-react';

const teamMembers = [
  {
    name: "Mendel Minkowicz",
    role: "Founder & CEO",
    bio: "10+ years in business systems optimization and strategic technology implementation. Former VP of Operations at TechCorp with expertise in scaling operations.",
    icon: Crown,
    linkedin: "#"
  },
  {
    name: "Jonathan Hakari",
    role: "Chief Operations Officer",
    bio: "Expert in operational efficiency and process optimization. Led 50+ enterprise transformations with proven results.",
    icon: Users,
    linkedin: "#"
  },
  {
    name: "Alex Rivera",
    role: "Head of Sales",
    bio: "Sales strategy expert with deep knowledge of B2B sales processes and client relationship management.",
    icon: TrendingUp,
    linkedin: "#"
  },
  {
    name: "Sarah Chen",
    role: "Chief Software Engineer",
    bio: "Expert in CRM architecture and custom development. Specializes in scalable system solutions and enterprise integrations.",
    icon: Code,
    linkedin: "#"
  }
];



export default function About() {
  return (
    <>
      {/* Team Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a dedicated team of systems optimization experts with over 50+ years of combined experience. 
              Our mission is to transform your business processes and drive measurable results through intelligent 
              automation and custom CRM solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Meet Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Experts Behind Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines deep technical expertise with business acumen to deliver 
              systems that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                    <member.icon className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 