'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Client Logos
import agudah from '../assets/Clients/agudah.png';
import chabadMiami from '../assets/Clients/chabad-miami.png';
import ecomDiversify from '../assets/Clients/ecom-diversify.png';
import forwardPPC from '../assets/Clients/forward-ppc.png';
import machane from '../assets/Clients/machane-israel.png';

const clientLogos = [
  { name: 'Agudah Israel', logo: agudah },
  { name: 'Chabad of Miami', logo: chabadMiami },
  { name: 'Ecom Diversify', logo: ecomDiversify },
  { name: 'Forward PPC', logo: forwardPPC },
  { name: 'Machane Yisrael', logo: machane },
];

const testimonials = [
  {
    name: 'Sarah Klein',
    title: 'Executive Director',
    company: 'Chabad of Midtown',
    text: 'Simplora completely transformed how we manage donor data and communications. Everything is now automated, organized, and stress-free.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Klein&background=0D8ABC&color=fff',
    rating: 5,
  },
  {
    name: 'Mark Daniels',
    title: 'COO',
    company: 'Ecom Diversify',
    text: 'Their ClickUp and CRM integration helped us reduce manual work by 70%. Our workflows are now seamless across sales, support, and operations.',
    avatar: 'https://ui-avatars.com/api/?name=Mark+Daniels&background=0D8ABC&color=fff',
    rating: 5,
  },
  {
    name: 'Rivka Stein',
    title: 'Director of Development',
    company: 'Machane Yisrael',
    text: 'From messy spreadsheets to a fully automated donor system — Simplora made it all work together beautifully.',
    avatar: 'https://ui-avatars.com/api/?name=Rivka+Stein&background=0D8ABC&color=fff',
    rating: 5,
  },
  {
    name: 'David Nguyen',
    title: 'CEO',
    company: 'ForwardPPC',
    text: 'They set up our HubSpot automation in record time and helped us clean up years of cluttered data. Couldn’t be happier.',
    avatar: 'https://ui-avatars.com/api/?name=David+Nguyen&background=0D8ABC&color=fff',
    rating: 5,
  },
];

export default function ClientsAndTestimonials() {
  const [current, setCurrent] = useState(0);
  const logoRefs = useRef([]);

  useEffect(() => {
    if (!logoRefs.current.length) return;

    logoRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 200 + i * 100);
      }
    });
  }, []);

  return (
    <>
      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-lg font-semibold text-gray-500 mb-12 tracking-wider uppercase"
          >
            Trusted by forward-thinking organizations
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-10"
          >
            {clientLogos.map((client, i) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                ref={(el) => (logoRefs.current[i] = el)}
                className="h-7 sm:h-8 w-auto opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact from real businesses who partnered with Simplora
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
              >
                <div className="text-center space-y-6">
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
                    “{testimonials[current].text}”
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonials[current].name}
                      </div>
                      <div className="text-gray-600">{testimonials[current].title}</div>
                      <div className="text-blue-600 font-medium">{testimonials[current].company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 flex items-center justify-center transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 flex items-center justify-center transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
