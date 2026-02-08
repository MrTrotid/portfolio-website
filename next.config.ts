import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path(.*)',
          has: [
            {
              type: 'host',
              value: 'resume\\..+',
            },
          ],
          destination: '/resume.pdf',
        },
      ],
    };
  },
  // Security headers are managed in proxy.ts to support per-request CSP nonces.
};

export default nextConfig;
