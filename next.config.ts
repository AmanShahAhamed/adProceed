import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.adproceed.com",
        port: "",
        pathname: "/wp-content/uploads/**", // Ensure this matches the image path structure
      },
    ],
  },
};

export default nextConfig;
