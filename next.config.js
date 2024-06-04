/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  env: {
    BASE_URL: "https://api.externship.ai/",
  },
  images: {
    domains: ['www.strategydriven.com'],
  },
};

module.exports = nextConfig;
