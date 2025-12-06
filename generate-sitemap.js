import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://doozadesk.com';

const staticPages = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: '/features',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: '/pricing',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: '/blog',
    changefreq: 'weekly',
    priority: 0.9,
  },
];

const generateSitemap = () => {
  const blogUrls = blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: 0.8
  }));

  const allPages = [...staticPages, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((page) => {
    return `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
