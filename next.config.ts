import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
   swcOptions: {
    jsc: {
      target: 'es2022',
      minify: {
        compress: true,
        mangle: true,
      },
    },
    minify: true,
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
