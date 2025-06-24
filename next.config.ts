import type { NextConfig } from "next";

const nextConfig: NextConfig = {

   experimental: {
    optimizePackageImports: ['react-hook-form', 'react-hot-toast', 'resend', 'sitemap', 'uuid', 'tailwindcss']
  }
  // output:  'export',

  // images: {
  //   unoptimized: true,
  // },

  /* config options here */
};

export default nextConfig;
