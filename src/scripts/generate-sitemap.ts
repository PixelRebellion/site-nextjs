import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';


const BASE_URL = 'https://www.pixelrebellion.dev/'; // 🔁 replace with your domain


async function generateSitemap() {
 const sitemap = new SitemapStream({ hostname: BASE_URL });


 const writeStream = createWriteStream(
   path.resolve(process.cwd(), 'public', 'sitemap.xml')
 );


 sitemap.pipe(writeStream);


 // Add static pages (adjust based on your routes)
 const pages = [
   '/',
   '/about',
   '/contact',
   '/services',
   '/rebel-work',
   // add any additional routes here
 ];


 pages.forEach((page) => {
   sitemap.write({
     url: page,
     changefreq: 'monthly',
     priority: page === '/' ? 1.0 : 0.7,
   });
 });


 sitemap.end();


 await streamToPromise(sitemap);
 console.log('✅ Sitemap successfully created!');
}


generateSitemap();
