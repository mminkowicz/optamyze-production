
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <div className="relative inline-block mb-6">
                <img
                  className="h-24 w-auto transition-all duration-300 hover:scale-105"
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/51b05e8ea_logo544.png"
                  alt="Optamyze Logo"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <p className="text-gray-400 font-medium leading-relaxed max-w-md">
                We make your systems work better through customization, automation, integrations, 
                and ongoing support — so you can focus on growing your business.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ED1C5B]" />
                <span className="font-medium">hello@optamyze.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ED1C5B]" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#ED1C5B]" />
                <span className="font-medium">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-tight">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors font-medium">System Customization</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Automation & Workflows</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Platform Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Ongoing Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Data Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-tight">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/About" className="hover:text-white transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-medium">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm font-medium">
            © 2024 Optamyze. All rights reserved. We make your systems work better.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ED1C5B] transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ED1C5B] transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ED1C5B] transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
