import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/produk-saya",
        destination: "/product",
      },
      {
        source: "/kalkulator-hpp",
        destination: "/calculator",
      },
    ];
  },
};

export default nextConfig;
