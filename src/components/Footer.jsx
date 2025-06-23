import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 pt-14 pb-10 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">Simplora Consulting</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Your systems. Our responsibility. We customize, automate, and manage the tools that power your business.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Services', 'Features', 'Clients', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Connect</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <a href="mailto:hello@simplora.co" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                hello@simplora.co
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <a href="https://instagram.com/simploraconsulting" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                @simploraconsulting
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <a href="https://linkedin.com/company/simploraconsulting" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-xs text-gray-400 dark:text-gray-500 px-4 space-y-1">
        <p>© {new Date().getFullYear()} Simplora Consulting. All rights reserved.</p>
        <p className="text-gray-400 dark:text-gray-600">Designed by Simplora Consulting</p>
      </div>
    </footer>
  );
}
