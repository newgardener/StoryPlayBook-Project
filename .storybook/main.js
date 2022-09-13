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
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets": path.join(__dirname, "../src/design-system/assets"),
    };
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.roots = [path.resolve(__dirname, "../src/")];

    config.module.rules = config.module.rules.map((rule) => {
      if (!rule.test.test(".svg")) return rule;
      const newRule = rule;
      newRule.test = /\.(jpg|jpeg|png|gif)$/;
      return newRule;
    });
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, "../src/"),
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};
