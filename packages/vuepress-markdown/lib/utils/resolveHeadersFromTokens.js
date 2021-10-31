const { resolveTitleFromToken } = require("./resolveTitleFromToken");

/**
 * Resolve headers from markdown-it tokens
 */
const resolveHeadersFromTokens = (
  tokens,
  { level, allowHtml, escapeText, slugify, format }
) => {
  // store the result of headers
  const headers = [];

  // a temp headers stack for generating the headers tree
  const stack = [];

  // push a header to the headers tree
  const push = (header) => {
    while (stack.length !== 0 && header.level <= stack[0].level) {
      stack.shift();
    }

    if (stack.length === 0) {
      headers.push(header);
      stack.push(header);
    } else {
      stack[0].children.push(header);
      stack.unshift(header);
    }
  };

  tokens.forEach((_, idx) => {
    const token = tokens[idx];

    // if the token type does not match, skip
    if (token?.type !== "heading_open") {
      return;
    }

    // get the level from the tag, h1 -> 1
    const headerLevel = Number.parseInt(token.tag.slice(1), 10);

    // if the level should not be extracted, skip
    if (!level.includes(headerLevel)) {
      return;
    }

    // the next token of 'heading_open' contains the heading content
    const nextToken = tokens[idx + 1];

    // if the next token does not exist, skip
    if (!nextToken) {
      return;
    }

    const title = resolveTitleFromToken(nextToken, {
      allowHtml,
      escapeText,
    });

    // the id of the heading anchor is the slugify result of markdown-it-anchor
    // if the id does not exist, slugify the title ourselves
    const slug = token.attrGet("id") ?? slugify(title);

    // push the header to tree
    push({
      level: headerLevel,
      title: typeof format === "function" ? format(title) : title,
      slug,
      children: [],
    });
  });

  return headers;
};

module.exports = {
  resolveHeadersFromTokens,
};
