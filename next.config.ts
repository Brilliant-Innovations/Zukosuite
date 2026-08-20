import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Parent folder also has a package-lock.json; pin this app as the root.
    root: path.resolve(process.cwd()),
  },
  experimental: {
    // Next 16.3 enabled the Turbopack build cache by default. It snapshots
    // process.env values (e.g. RESEND_API_KEY) into .next/cache/turbopack/*.sst,
    // which Netlify's secrets scanner flags. Disable it so secrets never hit disk.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
