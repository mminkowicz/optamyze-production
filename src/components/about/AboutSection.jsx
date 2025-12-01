import React from "react";
import { Lightbulb, Heart, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We solve business challenges with creative, future-ready solutions."
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "We build trust through transparency, honesty, and accountability."
  },
  {
    icon: Zap,
    title: "Efficiency",
    desc: "We streamline systems so you can focus on what matters most."
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We treat your business like our own and grow together."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Optamyze is a team of passionate system architects and CRM experts dedicated to making business technology simple, powerful, and human-centered. We believe the right systems unlock your team's true potential.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-10 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-2">Our Mission</h3>
          <p className="text-gray-700 text-base max-w-xl mx-auto">
            To empower organizations with seamless, scalable, and stress-free business systems—so you can focus on growth, not tech headaches.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white rounded-xl p-6 shadow group hover:shadow-lg transition"
            >
              <div className="mb-3 p-3 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100">
                <v.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-1">{v.title}</h4>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 