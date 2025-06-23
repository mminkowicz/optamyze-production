'use client';

import { motion } from 'framer-motion';
import {
  FaTools,
  FaCogs,
  FaPlug,
  FaRocket,
  FaSyncAlt,
  FaDatabase,
} from 'react-icons/fa';

import clickup from '../assets/platforms/clickup.png';
import hubspot from '../assets/platforms/hubspot.png';
import make from '../assets/platforms/make.png';
import monday from '../assets/platforms/monday.png';
import pipedrive from '../assets/platforms/pipedrive logo.png';

const services = [
  {
    title: 'Customization',
    description:
      'We tailor your systems to match your exact needs — from custom fields, objects, modules, dashboards, and page layouts to user roles, security permissions, and approval processes. Whether you need a completely new setup or refining what you already have, we make your platform work your way.',
    icon: FaCogs,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Automation',
    description:
      'Say goodbye to repetitive tasks. We design powerful automations and intelligent workflows tailored to your unique processes — no matter how simple or complex. From task triggers and status updates to multi-step logic and cross-platform actions, we help your systems run smoothly, efficiently, and hands-free.',
    icon: FaSyncAlt,
    gradient: 'from-yellow-400 to-orange-400',
  },
  {
    title: 'Integrations',
    description:
      'Connect the tools your business relies on. We integrate your systems with third-party apps like Make, Zapier, Google Workspace, Mailchimp, QuickBooks, and more — creating a seamless ecosystem where data flows automatically and everything works together effortlessly.',
    icon: FaPlug,
    gradient: 'from-pink-500 to-red-400',
  },
  {
    title: 'Management & Support',
    description:
      'We don’t just set it up and walk away. We manage, maintain, and oversee your systems daily — ensuring updates are applied, users are supported, issues are resolved quickly, and everything runs at peak performance.',
    icon: FaTools,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Advisory & Strategy',
    description:
      'We’re more than just implementers — we’re strategic partners. We help you choose the right tools, map out your tech stack, and align your systems with your business goals to drive real, long-term growth.',
    icon: FaRocket,
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Data Services',
    description:
      'We clean, import, and export your data with precision. From deduplication and formatting to structuring and segmenting, we ensure your database is accurate, reliable, and ready for action — because clean data = better decisions.',
    icon: FaDatabase,
    gradient: 'from-teal-500 to-blue-400',
  },
];

const platforms = [
  { name: 'ClickUp', src: clickup },
  { name: 'HubSpot', src: hubspot },
  { name: 'Make', src: make },
  { name: 'Monday.com', src: monday },
  { name: 'Pipedrive', src: pipedrive },
];

export default function Services() {
  // removed platform toggle state

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            We help businesses simplify and scale by managing, customizing, integrating, and implementing their systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full group rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow hover:shadow-2xl p-6 sm:p-8 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="w-8 h-8 text-white group-hover:animate-pulse transition-all" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-white bg-black/80 px-2 py-0.5 rounded-full">
                    0{i + 1}
                  </span>
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

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
            {platforms.map((platform) => (
              <img
                key={platform.name}
                src={platform.src}
                alt={platform.name}
                className="h-12 sm:h-16 w-auto max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
