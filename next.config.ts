import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/produk-saya",
        destination: "/product",
      },
    ];
  },
};

export default nextConfig;
