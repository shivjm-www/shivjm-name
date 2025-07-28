import pug from "@11ty/eleventy-plugin-pug";
import { load } from "js-yaml";

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(pug);

  eleventyConfig.addDataExtension("yaml", (contents) => load(contents));
  eleventyConfig.addPassthroughCopy("assets");
};
