const yaml = require("js-yaml");
const tinyCSS = require("@sardine/eleventy-plugin-tinycss");

module.exports = (eleventyConfig) => {
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPlugin(tinyCSS);
};
