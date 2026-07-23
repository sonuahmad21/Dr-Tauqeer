import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@shipla/ui", "@shipla/database"],
};

export default nextConfig;
