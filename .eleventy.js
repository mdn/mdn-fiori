const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styleguide/css");
  eleventyConfig.addPassthroughCopy("styleguide/typography/");

  eleventyConfig.addPlugin(syntaxHighlight);
};
