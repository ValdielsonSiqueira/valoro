import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@valoro/ui"],
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
