// tailwind.config.js
module.exports = {
  darkMode: "class", // <-- THIS IS CRITICAL
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    // or wherever your files live
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
