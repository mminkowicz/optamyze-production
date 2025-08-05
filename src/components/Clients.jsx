'use client';

import { useEffect, useRef } from 'react';

// Client Logos
import agudah from '../assets/Clients/agudah.png';
import chabadMiami from '../assets/Clients/chabad-miami.png';
import ecomDiversify from '../assets/Clients/ecom-diversify.png';
import forwardPPC from '../assets/Clients/forward-ppc.png';
import machane from '../assets/Clients/machane-israel.png';
import gforce from '../assets/Clients/gforce.png';
import KCAFirm from '../assets/Clients/KCAFirm.png';

const clientLogos = [
  { name: 'Agudath Israel of America', logo: agudah },
  { name: 'Chabad of Miami Bet Ovadia', logo: chabadMiami },
  { name: 'Ecom Diversity', logo: ecomDiversify },
  { name: 'Forward PPC', logo: forwardPPC },
  { name: 'Machane Yisrael', logo: machane },
  { name: 'G Force Technology Consulting', logo: gforce },
  { name: 'KCA Firm Healthcare Staffing Solutions', logo: KCAFirm },
];

export default function Clients() {
  const logoRefs = useRef([]);

  useEffect(() => {
    logoRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.8)';
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'scale(1)';
        }, 200 + i * 100);
      }
    });
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-center text-base font-medium text-gray-700 uppercase tracking-widest mb-16 animate-fade-in-up"
        >
          TRUSTED BY INNOVATIVE ORGANIZATIONS
        </h2>

        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Top Row - 5 logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-16">
            {clientLogos.slice(0, 5).map((client, i) => (
              <div key={client.name} className="flex justify-center items-center p-2 sm:p-4 relative z-10">
                <img
                  src={client.logo}
                  alt={client.name}
                  ref={(el) => (logoRefs.current[i] = el)}
                  className="h-16 sm:h-20 lg:h-24 w-auto max-w-32 sm:max-w-40 lg:max-w-48 object-contain transition-all duration-300 hover:scale-105 drop-shadow-sm relative z-10"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 logos */}
          <div className="flex justify-center items-center gap-8 sm:gap-16 lg:gap-32">
            {clientLogos.slice(5, 7).map((client, i) => (
              <div key={client.name} className="flex justify-center items-center p-2 sm:p-4 relative z-10">
                <img
                  src={client.logo}
                  alt={client.name}
                  ref={(el) => (logoRefs.current[i + 5] = el)}
                  className="h-16 sm:h-20 lg:h-24 w-auto max-w-32 sm:max-w-40 lg:max-w-48 object-contain transition-all duration-300 hover:scale-105 drop-shadow-sm relative z-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 