import path from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  output: "standalone",  // Changed from "export" for Docker deployment
  basePath: "",
  assetPrefix: "/litellm-asset-prefix",
  turbopack: {
    // Must be absolute; "." is no longer allowed
    root: __dirname,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,  // Prevent useSearchParams errors
  },
};

export default nextConfig;
