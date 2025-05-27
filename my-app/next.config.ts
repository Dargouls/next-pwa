import withPWA from 'next-pwa';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  ...nextConfig,
});