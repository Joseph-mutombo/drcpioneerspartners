import type { Plugin } from 'vite';
import { writeFileSync } from 'fs';

const baseUrl = 'https://www.drcpioneers.com';

const routes = [
  { path: '/', priority: 1.0, changefreq: 'daily' as const },
  { path: '/about', priority: 0.9, changefreq: 'monthly' as const },
  { path: '/navigators', priority: 0.8, changefreq: 'weekly' as const },
  { path: '/audit-consultation', priority: 0.9, changefreq: 'monthly' as const },
  { path: '/formations', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/certifications', priority: 0.9, changefreq: 'weekly' as const },
  { path: '/certifications/icxs', priority: 0.8, changefreq: 'monthly' as const },
  { path: '/certifications/idcxs', priority: 0.8, changefreq: 'monthly' as const },
  { path: '/certifications/iehws', priority: 0.8, changefreq: 'monthly' as const },
  { path: '/certifications/tisse', priority: 0.8, changefreq: 'monthly' as const },
  { path: '/blog', priority: 0.7, changefreq: 'weekly' as const },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' as const },
];

function generateSitemap(): string {
  const now = new Date().toISOString();
  
  const urls = routes.map(route => ({
    loc: `${baseUrl}${route.path}`,
    lastmod: now,
    changefreq: route.changefreq,
    priority: route.priority,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(url => `    <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
        <xhtml:link rel="alternate" hreflang="fr" href="${url.loc}" />
        <xhtml:link rel="alternate" hreflang="en" href="${url.loc}" />
    </url>`).join('\n')}
</urlset>`;

  return xml;
}

export function sitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    writeBundle() {
      try {
        const sitemap = generateSitemap();
        writeFileSync('dist/sitemap.xml', sitemap, 'utf-8');
        console.log('✓ Sitemap generated at dist/sitemap.xml');
      } catch (error) {
        console.error('Error generating sitemap:', error);
      }
    },
  };
}
