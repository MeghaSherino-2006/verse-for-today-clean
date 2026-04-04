module.exports = function(eleventyConfig) {

  // ✅ Date filter
  eleventyConfig.addFilter("formatDate", function(dateObj) {
    const date = new Date(dateObj);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  });

  // ✅ ONLY posts collection (this fixes your issue)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  // ✅ Timeline collection (grouped by year)
  eleventyConfig.addCollection("postsByYear", function(collectionApi) {
    const posts = collectionApi.getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date);

    const grouped = {};

    posts.forEach(post => {
      const year = new Date(post.date).getFullYear();
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(post);
    });

    return grouped;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};