'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTools,
  FaCogs,
  FaPlug,
  FaRocket,
  FaSyncAlt,
  FaDatabase,
  FaCode,           // NEW – icon for Custom Development
  FaGraduationCap,  // NEW – icon for Training & Onboarding
  FaSearchPlus      // NEW – icon for Audits & Optimization
} from 'react-icons/fa';

import clickup   from '../assets/platforms/clickup.png';
import hubspot   from '../assets/platforms/hubspot.png';
import make      from '../assets/platforms/make.png';
import monday    from '../assets/platforms/monday.png';
import pipedrive from '../assets/platforms/pipedrive logo.png';

/* ──────────────────────────────────────────────────────────────────────────
   SERVICE CARDS
   ────────────────────────────────────────────────────────────────────────── */
const services = [
  {
    title: 'Customization',
    description:
      'We tailor your systems to match your exact needs — from custom fields, objects, modules, dashboards, and page layouts to user roles, security permissions, and approval flows.',
    icon: FaCogs,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Automation',
    description:
      'Say goodbye to repetitive tasks. We design powerful automations and intelligent, multi-step workflows so everything runs smoothly and hands-free.',
    icon: FaSyncAlt,
    gradient: 'from-yellow-400 to-orange-400',
  },
  {
    title: 'Integrations',
    description:
      'Connect all the tools your business relies on. Optamyze integrates ClickUp, HubSpot, Make, Zapier, Google Workspace, QuickBooks, and more into one seamless ecosystem.',
    icon: FaPlug,
    gradient: 'from-pink-500 to-red-400',
  },
  {
    title: 'Management & Support',
    description:
      'Ongoing daily care: updates, troubleshooting, user support, and performance monitoring so your stack always runs at peak speed.',
    icon: FaTools,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Advisory & Strategy',
    description:
      'We’re strategic partners, not just implementers. Get roadmap planning, tool selection, and system alignment with long-term business goals.',
    icon: FaRocket,
    gradient: 'from-green-500 to-emerald-400',
  },
  /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  NEW SERVICE  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
  {
    title: 'Custom Development',
    description:
      'Need something your off-the-shelf software just can’t do? Our engineers build bespoke apps, scripts, and middleware that slot perfectly into your existing tech stack.',
    icon: FaCode,
    gradient: 'from-fuchsia-500 to-rose-500',
  },
  /* ----------------------------------------------------------------------- */
  {
    title: 'Data Services',
    description:
      'Clean, import, export, segment, dedupe — we make sure your data is accurate, analytics-ready, and decision-worthy.',
    icon: FaDatabase,
    gradient: 'from-teal-500 to-blue-400',
  },
  {
    title: 'Training & Onboarding',
    description:
      'We empower your team with hands-on training, clear documentation, and smooth onboarding to make the most of every system.',
    icon: FaGraduationCap,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Audits & Optimization',
    description:
      'We evaluate your current systems for inefficiencies, gaps, and opportunities — then streamline and enhance every part for better results.',
    icon: FaSearchPlus,
    gradient: 'from-amber-500 to-yellow-500',
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   PLATFORM LOGOS
   ────────────────────────────────────────────────────────────────────────── */
const platforms = [
  { name: 'ClickUp',    src: clickup   },
  { name: 'HubSpot',    src: hubspot   },
  { name: 'Make',       src: make      },
  { name: 'Monday.com', src: monday    },
  { name: 'Pipedrive',  src: pipedrive },
];

/* ──────────────────────────────────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────────────────────────────────── */
export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
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
            Core Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Optamyze simplifies, automates, and elevates the systems that power modern businesses.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full group rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow hover:shadow-2xl p-6 sm:p-8 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title + Index */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-white bg-black/80 px-2 py-0.5 rounded-full">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24 text-center"
        >
          <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
            Platforms We Work With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            {platforms.map((p) => (
              <img
                key={p.name}
                src={p.src}
                alt={p.name}
                className="h-12 sm:h-16 w-auto max-w-[120px] object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
