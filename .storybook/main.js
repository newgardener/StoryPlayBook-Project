const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.roots = [path.resolve(__dirname, "../src/")];

    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, "../src/"),
      use: [
        "@svgr/webpack",
        {
          loader: "url-loader",
          options: {
            encoding: "utf8",
          },
        },
      ],
    });

    return config;
  },
};
