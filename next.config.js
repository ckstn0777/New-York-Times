const { NEW_YORK_TIMES_API_KEY: API_KEY } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/nytimes/search",
        destination: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
