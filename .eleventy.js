module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("scr/img");
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  };
  