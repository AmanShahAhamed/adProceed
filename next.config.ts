import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.adslov.com",
        port: "",
        pathname: "/images/**", // Ensure this matches the image path structure
      },
    ],
  },
};

export default nextConfig;
