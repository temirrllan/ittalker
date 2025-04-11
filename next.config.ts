import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/__nextjs_original-stack-frames',
        destination: '/_next/development/static/chunks/fallback',
      },
    ];
  },
};

export default nextConfig;
