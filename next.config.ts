import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static Export per GitHub Pages (obligatori)
  output: "export",
  images: { unoptimized: true },
  // Repo: https://github.com/BielC19/carinyaRegalCumple26.git
  // En dev (npm run dev) sense basePath -> http://localhost:3000/
  // En prod (npm run build) amb basePath -> https://bielc19.github.io/carinyaRegalCumple26/
  basePath: isProd ? "/carinyaRegalCumple26" : "",
  assetPrefix: isProd ? "/carinyaRegalCumple26/" : undefined,
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
