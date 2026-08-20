import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Parent folder also has a package-lock.json; pin this app as the root.
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
