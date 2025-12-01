import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, we rebranded!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Visit us at our new home
        </p>
        <a
          href="https://minkowa.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Visit minkowa.com →
        </a>
      </div>
    </div>
  );
}

export default App;
