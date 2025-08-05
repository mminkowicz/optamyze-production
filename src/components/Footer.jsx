
import React from "react";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Customization", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Support", href: "#" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" }
  ]
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:bg-sky-500" },
  { name: "Email", icon: Mail, href: "mailto:mendel@optamyze.com", color: "hover:bg-red-500" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                className="h-16 w-auto"
                src="/logoof.svg"
                alt="Optamyze Logo"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              We transform business systems into growth engines through intelligent automation, 
              seamless integrations, and expert optimization.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">mendel@optamyze.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (678) 612-8355</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-tight text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-tight text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Optamyze. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                className={`w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  social.color === 'hover:bg-blue-600' ? 'hover:bg-blue-600' :
                  social.color === 'hover:bg-sky-500' ? 'hover:bg-sky-500' :
                  social.color === 'hover:bg-gray-800' ? 'hover:bg-gray-800' :
                  'hover:bg-red-500'
                }`}
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
