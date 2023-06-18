/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    secret: process.env.STRIPE_SECRET_KEY,
  },
};

module.exports = nextConfig;
