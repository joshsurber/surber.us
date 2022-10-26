// Don’t forget to `npm install sass`!
const sass = require("sass");
const path = require("node:path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("scss");

  // Creates the extension for use
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    // can be an async function
    compile: function (inputContent, inputPath) {
      if (parsed.name.startsWith("_")) {
        return;
      }
      let parsed = path.parse(inputPath);

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || ".", this.config.dir.includes],
      });

      return (data) => {
        return result.css;
      };
    },
  });
};
