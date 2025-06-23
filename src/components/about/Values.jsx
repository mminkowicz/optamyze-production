import React from "react";
import { motion } from "framer-motion";
import { Settings, Users, Lightbulb, HeadphonesIcon } from "lucide-react";

const values = [
  {
    icon: Settings,
    title: "Systems Excellence",
    description: "We're obsessed with making your systems work perfectly — customized, automated, and optimized for peak performance.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We're not just service providers — we're your dedicated technology partners, invested in your long-term success.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Strategic Thinking",
    description: "Every solution is designed with your business goals in mind, ensuring technology truly drives growth and efficiency.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "We don't disappear after implementation. We provide continuous management, updates, and support to keep everything running smoothly.",
    gradient: "from-orange-500 to-red-500"
  }
];

export default function Values() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-black leading-tight tracking-tight text-gray-900">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            These core principles guide how we approach every project and every client relationship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-6"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}