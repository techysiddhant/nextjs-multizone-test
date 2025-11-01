import type { NextConfig } from "next";
const { BLOG_URL, DASHBOARD_URL } = process.env;

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: '/blog',
        destination: `${BLOG_URL}`,
      },
      {
        source: '/blog/:path+',
        destination: `${BLOG_URL}/blog/:path+`,
      },
      {
        source: '/dashboard',
        destination: `${DASHBOARD_URL}`,
      },
      {
        source: '/dashboard/:path+',
        destination: `${DASHBOARD_URL}/:path+`,
      },
    ];
  },
};

export default nextConfig;
