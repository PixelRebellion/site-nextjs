import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
    webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = true
    }
    return config
  }
};

export default nextConfig;
