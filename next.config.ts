import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/diensten/diagnose-uitlezen", destination: "/diensten/vag-coderen", permanent: true }];
  },
};

export default nextConfig;
