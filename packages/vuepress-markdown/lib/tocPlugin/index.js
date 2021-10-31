const { slugify: slugifyDefault } = require("@mr-hope/vuepress-shared-utils");
const {
  resolveHeadersFromTokens,
} = require("../utils/resolveHeadersFromTokens");
const { createRenderHeaders } = require("./createRenderHeaders");
const { createTocBlockRule } = require("./createTocBlockRule");

/**
 * Generate table of contents
 *
 * Forked and modified from markdown-it-toc-done-right:
 *
 * - Allows `html_inline` tags in headings to support vue components
 * - Allows render `<RouterLink>` instead of `<a>` for links
 * - Code refactor and optimizations
 *
 * @see https://github.com/nagaozen/markdown-it-toc-done-right
 */
const tocPlugin = (
  md,
  {
    pattern = /^\[\[toc\]\]$/i,
    slugify = slugifyDefault,
    format,
    level = [2, 3],
    containerTag = "nav",
    containerClass = "table-of-contents",
    listTag = "ul",
    listClass = "",
    itemClass = "",
    linkTag = "a",
    linkClass = "",
  }
) => {
  let headers;

  // push the rule to the end of the chain
  // resolve headers from the parsed tokens
  md.core.ruler.push("resolveTocHeaders", (state) => {
    headers = resolveHeadersFromTokens(state.tokens, {
      level,
      allowHtml: true,
      escapeText: true,
      slugify,
      format,
    });
    return true;
  });

  // add toc syntax as a block rule
  md.block.ruler.before(
    "heading",
    "toc",
    createTocBlockRule({
      pattern,
      containerTag,
      containerClass,
    }),
    {
      alt: ["paragraph", "reference", "blockquote"],
    }
  );

  const renderHeaders = createRenderHeaders({
    listTag,
    listClass,
    itemClass,
    linkTag,
    linkClass,
  });

  // custom toc_body render rule
  md.renderer.rules.toc_body = () => {
    /* istanbul ignore if */
    if (!headers) {
      return "";
    }

    return renderHeaders(headers);
  };
};

module.exports = { tocPlugin };
