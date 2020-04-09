const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styleguide/css");

  eleventyConfig.addPlugin(syntaxHighlight);
};
