import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Це дозволить Vercel ігнорувати помилки стилю при збірці
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Це дозволить ігнорувати технічні помилки типів
    ignoreBuildErrors: true,
  },
};

export default nextConfig;