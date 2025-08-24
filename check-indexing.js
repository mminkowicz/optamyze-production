const https = require('https');
const http = require('http');

const siteUrl = 'https://www.optamyze.com';

// Function to make HTTP requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data }));
    }).on('error', reject);
  });
}

// Check various SEO elements
async function checkSEO() {
  console.log('🔍 Checking SEO and indexing status for:', siteUrl);
  console.log('='.repeat(60));

  try {
    // Check main page
    const mainPage = await makeRequest(siteUrl);
    console.log('✅ Main page status:', mainPage.status);
    
    // Check robots.txt
    const robots = await makeRequest(`${siteUrl}/robots.txt`);
    console.log('✅ Robots.txt status:', robots.status);
    console.log('📄 Robots.txt content:');
    console.log(robots.data);
    
    // Check sitemap
    const sitemap = await makeRequest(`${siteUrl}/sitemap.xml`);
    console.log('✅ Sitemap status:', sitemap.status);
    
    // Check if page has proper meta tags
    if (mainPage.data.includes('google-site-verification')) {
      console.log('✅ Google verification meta tag found');
    } else {
      console.log('❌ Google verification meta tag missing');
    }
    
    if (mainPage.data.includes('canonical')) {
      console.log('✅ Canonical URL found');
    } else {
      console.log('❌ Canonical URL missing');
    }
    
    if (mainPage.data.includes('og:title')) {
      console.log('✅ Open Graph tags found');
    } else {
      console.log('❌ Open Graph tags missing');
    }
    
    console.log('\n📋 Next Steps:');
    console.log('1. Get Google Search Console verification code');
    console.log('2. Replace YOUR_GOOGLE_VERIFICATION_CODE in index.html');
    console.log('3. Submit sitemap to Google Search Console');
    console.log('4. Request indexing for your homepage');
    console.log('5. Wait 1-4 weeks for Google to index your site');
    
  } catch (error) {
    console.error('❌ Error checking site:', error.message);
  }
}

checkSEO();
