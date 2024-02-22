/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media3.giphy.com",
      "media2.giphy.com",
      "media1.giphy.com",
      "media4.giphy.com",
    ],
  },
  env: {
    GIPHY_API_KEY: process.env.GIPHY_API_KEY,
  },
};

export default nextConfig;
