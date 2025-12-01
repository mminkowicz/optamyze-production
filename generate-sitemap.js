// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const generateSitemap = async () => {
  // Define the links for your sitemap.
  // Since your App.js is a single-page application without react-router-dom
  // or similar routing for distinct URLs, you likely only have one main URL.
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    // If you add other distinct pages with unique URLs later (e.g., /blog, /privacy-policy)
    // you would add them here.
    // Example (if you later add a separate privacy policy page at /privacy):
    // { url: '/privacy', changefreq: 'yearly', priority: 0.5 },
  ];

  // IMPORTANT: Replace 'https://your-domain.com' with your actual website domain.
  const sitemapStream = new SitemapStream({ hostname: 'https://www.optamyze.com' });

  const writeStream = createWriteStream(path.resolve(__dirname, 'public/sitemap.xml'));
  sitemapStream.pipe(writeStream);

  links.forEach(link => sitemapStream.write(link));
  sitemapStream.end();

  try {
    await streamToPromise(sitemapStream);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();