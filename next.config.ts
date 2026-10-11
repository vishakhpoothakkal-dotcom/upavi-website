import type { NextConfig } from "next";

const isVercel = Boolean(process.env.VERCEL);
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isVercel
    ? {}
    : {
        output: "export",
        images: {
          unoptimized: true,
        },
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? "/upavi-website" : ""),
      }),
};

export default nextConfig;
