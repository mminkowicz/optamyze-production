export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-28 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Simplify Your Business?
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-10 text-white/90">
          Book a free consultation and let’s transform your systems into seamless success.
        </p>
        <a
          href="https://calendar.app.google/7JhbHhJhNG9fHj849"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-lg hover:bg-blue-100 transition"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
