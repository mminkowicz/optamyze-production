
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Systems Strategist",
    bio: "10+ years optimizing business systems with expertise in CRM customization, automation design, and strategic technology alignment.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b631?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@optamyze.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Lead Integration Specialist",
    bio: "Expert in platform integrations and automation workflows, specializing in connecting complex tech stacks seamlessly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@optamyze.com"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Automation Engineer",
    bio: "Workflow optimization specialist with a track record of designing intelligent automations that save businesses hours every day.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@optamyze.com"
    }
  },
  {
    name: "David Park",
    role: "Customization Expert",
    bio: "Specializes in CRM customization and system configuration, ensuring every platform perfectly matches client workflows.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@optamyze.com"
    }
  },
  {
    name: "Lisa Thompson",
    role: "Client Success Manager",
    bio: "Dedicated to ensuring seamless system implementations and providing ongoing support for optimal performance.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@optamyze.com"
    }
  },
  {
    name: "James Wilson",
    role: "Data Services Specialist",
    bio: "Expert in data cleanup, migration, and management — ensuring your business data is clean, organized, and actionable.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@optamyze.com"
    }
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-black leading-tight tracking-tight text-gray-900">
            Meet Our
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Systems Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Our specialized team brings decades of combined experience in system optimization, 
            automation, and strategic technology implementation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-gray-100 hover:border-blue-200">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
                      {member.name}
                    </h3>
                    <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-lg">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
