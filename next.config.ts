import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), '@prisma/client'];
    }
    return config;
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