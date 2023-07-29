/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  esModule: true,
  compiler: {
    styledComponents: {
      displayName: true,
      fileName: true,
      ssr: true,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
