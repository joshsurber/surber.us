const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("*.js");
  eleventyConfig.addPassthroughCopy("*.css");

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("excerpt", (post, len = 300) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", len)) + "...";
  });

  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByTag("projects").sort(function (a, b) {
      return a.data.pride - b.data.pride;
    });
  });

  eleventyConfig.setBrowserSyncConfig({
    ui: { port: 8081 },
    // ghostMode: { clicks: true, forms: true, scroll: true, location: true, },
    open: "external",
    // reloadOnRestart: true,
  });

  // I started using non-default directories but why not just use 11ty as designed?
  // Keeping this here in case I find reason to change my mind...
  // return { dir: { input: "src", output: "public", }, };

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
};
