import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap", "ogl"],
  },
};

export default nextConfig;
