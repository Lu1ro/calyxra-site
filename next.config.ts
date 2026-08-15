import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  agentRules: false,
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/pricing", destination: "/#sprint", permanent: true },
      { source: "/case-studies", destination: "/#verification", permanent: true },
      { source: "/deliverables", destination: "/#recovery-sprint", permanent: true },
      { source: "/dashboards", destination: "/#problems", permanent: true },
      { source: "/dashboard-demo", destination: "/#problems", permanent: true },
      { source: "/demo", destination: "/#resolution", permanent: true },
      { source: "/report", destination: "/#verification", permanent: true },
      { source: "/refunds", destination: "/terms#fees", permanent: true },
      { source: "/data-deletion", destination: "/privacy#your-rights", permanent: true },
    ];
  },
};

export default nextConfig;
