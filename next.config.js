/** @type {import('next').NextConfig} */

const withVideos = require("next-videos");

module.exports = withVideos({
  webpack(config, options) {
    // Add rule for handling MP4 files
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/media/", // Adjust the output path as needed
            publicPath: "/_next/", // Adjust the public path as needed
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    // Modify the existing SVG rules
    const fileLoaderRule = config.module.rules.find(
      (rule) =>
        rule.test &&
        typeof rule.test.test === "function" &&
        rule.test.test(".svg")
    );
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
  // next.config.js

  experimental: {
    webpackBuildWorker: true,
  },
  // Other Next.js configurations...

  // other configs
});
