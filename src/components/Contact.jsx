'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, CheckCircle, ArrowRight, Calendar, X } from 'lucide-react';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get a response soon',
    value: 'mendel@optamyze.com',
    action: 'Send Email',
    color: 'blue',
    link: 'mailto:mendel@optamyze.com?subject=Business Systems Consultation&body=Hi Mendel,%0D%0A%0D%0AI would like to discuss optimizing my business systems.%0D%0A%0D%0APlease let me know when you are available for a consultation.%0D%0A%0D%0AThank you!'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with an expert today',
    value: '+1 (678) 612-8355',
    action: 'Call Now',
    color: 'green',
    link: 'tel:+16786128355'
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Book a 30-minute consultation',
    value: 'Free Strategy Session',
    action: 'Book Now',
    color: 'purple',
    link: 'https://calendar.app.google/THHTdAYLmPwdbyxt8'
  }
];



export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_company: '',
    user_phone: '',
    user_message: '',
    user_timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        user_company: '',
        user_phone: '',
        user_message: '',
        user_timeline: ''
      });
      
      // Reset form fields
      if (form.current) {
        form.current.reset();
      }
      
    } catch (error) {
      console.error('Email send failed:', error.text);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookMeeting = () => {
    setShowMeetingModal(true);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    console.log('Email button clicked!'); // Debug log
    
    // Create a temporary link element to trigger mailto
    const mailtoLink = 'mailto:mendel@optamyze.com?subject=Business Systems Consultation&body=Hi Mendel,%0D%0A%0D%0AI would like to discuss optimizing my business systems.%0D%0A%0D%0APlease let me know when you are available for a consultation.%0D%0A%0D%0AThank you!';
    
    console.log('Attempting to open:', mailtoLink); // Debug log
    
    // Try multiple methods to ensure it works
    try {
      // Method 1: Create temporary link
      const tempLink = document.createElement('a');
      tempLink.href = mailtoLink;
      tempLink.target = '_self';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      console.log('Method 1 (temp link) executed'); // Debug log
    } catch (error) {
      console.log('Method 1 failed, trying method 2:', error); // Debug log
      // Method 2: Fallback to window.location
      window.location.href = mailtoLink;
    }
  };

  // Load HubSpot meetings script when modal opens
  useEffect(() => {
    if (showMeetingModal) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Clean up script when modal closes
        const existingScript = document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [showMeetingModal]);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Get Started
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Systems?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can optimize your business processes and drive growth. 
            Get a free consultation and custom roadmap for your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-large p-8 lg:p-12"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h3>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
                    {error}
                  </div>
                )}
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        value={formData.user_name || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        value={formData.user_email || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="user_company"
                        value={formData.user_company || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="user_phone"
                        value={formData.user_phone || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      name="user_timeline"
                      value={formData.user_timeline || ''}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="12months+">12+ months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="user_message"
                      value={formData.user_message || ''}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your current systems, challenges, and goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Get Free Consultation
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you within the hour.
                </p>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm text-blue-700">
                    📧 Check your email for a confirmation.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              {contactMethods.map((method, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    method.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                    method.color === 'green' ? 'bg-green-100 group-hover:bg-green-200' :
                    'bg-purple-100 group-hover:bg-purple-200'
                  }`}>
                    <method.icon className={`w-6 h-6 ${
                      method.color === 'blue' ? 'text-blue-600' :
                      method.color === 'green' ? 'text-green-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                    <p className="text-lg font-semibold text-gray-900">{method.value}</p>
                  </div>
                  {method.action === 'Book Now' ? (
                    <button
                      onClick={handleBookMeeting}
                      className={`px-4 py-2 text-white rounded-lg text-sm font-semibold transition-colors ${
                        method.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                        method.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                        'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      {method.action}
                    </button>
                  ) : method.action === 'Send Email' ? (
                    <button
                      onClick={handleEmailClick}
                      className={`px-4 py-2 text-white rounded-lg text-sm font-semibold transition-colors ${
                        method.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                        method.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                        'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      {method.action}
                    </button>
                  ) : (
                    <a 
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`px-4 py-2 text-white rounded-lg text-sm font-semibold transition-colors ${
                        method.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                        method.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                        'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      {method.action}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>



            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-gray-400">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency Support</span>
                  <span className="font-semibold text-green-600">24/6 Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Meeting Modal */}
      <AnimatePresence>
        {showMeetingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowMeetingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Schedule Your Free Consultation</h3>
                <button
                  onClick={() => setShowMeetingModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 min-h-[600px]">
                <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/minkowicz/intro-call?embed=true"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 