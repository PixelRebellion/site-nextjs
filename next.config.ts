import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
