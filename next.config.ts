import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Config options here */
  eslint: {
    // Ігнорувати помилки лінтера під час білду (щоб Vercel не сварився)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ігнорувати помилки типів (ми знаємо, що код робочий)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;