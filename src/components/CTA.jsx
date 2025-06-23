import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, CheckCircle } from "lucide-react";

export default function BookCall() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center space-y-12">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-display font-black leading-tight tracking-tight text-white">
              Ready to Optimize
              <br />
              Your Systems?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Schedule a free 30-minute consultation with our systems experts. 
              We'll analyze your current setup and show you exactly how we can optimize your operations.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="w-6 h-6 text-cyan-300" />
              <span className="font-semibold">Free 30-min systems analysis</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="w-6 h-6 text-cyan-300" />
              <span className="font-semibold">Custom optimization roadmap</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <CheckCircle className="w-6 h-6 text-cyan-300" />
              <span className="font-semibold">No commitment required</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-gray-900 font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center space-x-3"
            >
              <Calendar className="w-6 h-6 text-blue-600" />
              <span>Book Your Free Systems Analysis</span>
              <ArrowRight className="w-6 h-6 text-blue-600" />
            </motion.button>
          </motion.div>

          {/* Time Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-2 text-blue-200"
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">
              Average response time: Less than 2 hours
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}