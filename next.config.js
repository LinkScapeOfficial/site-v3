/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.linkscape.app" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "assets.hackclub.com" },
      { protocol: "https", hostname: "files.ohevan.com" },
      { protocol: "https", hostname: "assets.ohevan.com" },
    ],
  },
  async redirects() {
    return [
      // /projects and /legal predate the Work hub and the Governance section.
      // Both were linked externally, so they redirect rather than 404.
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/legal", destination: "/governance", permanent: true },
    ];
  },
};

module.exports = nextConfig;
