'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 80%',
      },
    });

    tl.fromTo(headlineRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' });
    tl.fromTo(subRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6');
    tl.fromTo(buttonRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.4');
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 sm:px-6 md:px-10 pt-32 pb-20 text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight break-words"
        >
          Your systems. Our responsibility.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mt-2 break-words leading-snug">
            Customized. Automated. Integrated. Managed.
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          From data chaos to platform overload — we simplify, optimize, and take ownership of the systems your business depends on.
        </p>

        <div ref={buttonRef} className="mt-10">
          <a
            href="#services"
            className="inline-block px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base sm:text-lg shadow hover:scale-105 transition-transform"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      <div className="mt-16 text-center max-w-3xl mx-auto">
  <p className="text-lg sm:text-xl font-semibold text-gray-800">
    You focus on your mission.
  </p>
  <p className="mt-2 text-sm sm:text-base text-gray-600">
    We’ll handle the tools, tech, and systems that power it — so everything behind the scenes runs exactly how it should.
  </p>
</div>

      {/* Background Visuals */}
      <div className="absolute top-[-80px] left-[-60px] w-80 h-80 sm:w-96 sm:h-96 bg-cyan-400 opacity-20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-60px] w-72 h-72 sm:w-80 sm:h-80 bg-blue-300 opacity-20 blur-2xl rounded-full pointer-events-none" />
    </section>
  );
}
