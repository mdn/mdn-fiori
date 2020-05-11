const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-storysource"
  ],
  webpackFinal: async (config, { configType }) => {
    // Allows us to import SCSS files in stories
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: [path.resolve(__dirname), path.resolve(__dirname, "..", "sass")]
    });

    // Adds https://github.com/mzgoddard/hard-source-webpack-plugin
    // for faster builds
    config.plugins.push(new HardSourceWebpackPlugin());

    return config;
  }
};
