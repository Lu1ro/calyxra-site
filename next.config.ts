import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/demo',
        destination: '/dashboards',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;