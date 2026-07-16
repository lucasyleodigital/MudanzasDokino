import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // NEXT_PUBLIC_BASE_PATH=/MudanzasDokino en GitHub Actions → "" en Cloudflare Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;
