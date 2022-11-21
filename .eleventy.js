const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require("moment");
// Import prior to `module.exports` within `.eleventy.js`
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("*.js");
  eleventyConfig.addPassthroughCopy("*.css");

  eleventyConfig.addPlugin(syntaxHighlight);

  // Create a shortened excerpt of content, cut off at the end of a word
  // Pass in the max length ie `content | excerpt:150`
  eleventyConfig.addFilter("excerpt", (post, len = 300) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", len)) + "...";
  });

  // Return the projects collection sorted by how proud I am of each
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByTag("projects").sort(function (a, b) {
      return a.data.pride - b.data.pride;
    });
  });

  // Format a UTC date, using format patterns from moment.js
  // https://momentjs.com/docs/#/displaying/format/
  eleventyConfig.addLiquidFilter(
    "toUTCString",
    (date, fmt = "dddd, D MMMM YYYY") => {
      const utc = date.toUTCString();
      return moment.utc(utc).format(fmt);
    }
  );

  // Format a ISO date
  eleventyConfig.addLiquidFilter("toISOString", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).toISOString();
  });

  eleventyConfig.setBrowserSyncConfig({
    ui: { port: 8081 },
    // ghostMode: { clicks: true, forms: true, scroll: true, location: true, },
    open: "external",
    reloadOnRestart: true,
  });

  // {{ year }} will display the current year, great for copyright notices
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // I started using non-default directories but why not just use 11ty as designed?
  // Keeping this here in case I find reason to change my mind...
  // return { dir: { input: "src", output: "public", }, };
};
