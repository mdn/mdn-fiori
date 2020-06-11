const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    // remove svg from existing rule
    config.module.rules = config.module.rules.map(rule => {
      if (
        String(rule.test) ===
        String(
          /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        )
      ) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
        };
      }

      return rule;
    });
    // Allows us to import SCSS files in stories
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: [
          path.resolve(__dirname),
          path.resolve(__dirname, "..", "sass")
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                // Disable this one svgo plugin because it
                // strips the role attribute from our svgs
                plugins: [{ removeUnknownsAndDefaults: false }]
              }
            }
          }
        ]
      }
    );

    // Adds https://github.com/mzgoddard/hard-source-webpack-plugin
    // for faster builds
    config.plugins.push(new HardSourceWebpackPlugin());

    return console.dir(config, { depth: null }) || config;
  }
};
