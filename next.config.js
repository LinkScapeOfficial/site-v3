/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL("https://cdn.linkscape.app/**"),
      new URL("https://avatars.githubusercontent.com/**"),
      new URL("https://files.ohevan.com/**"),
      new URL("https://assets.ohevan.com/**"),
    ],
  },
};

module.exports = nextConfig;
