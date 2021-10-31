const { htmlEscape } = require("@mr-hope/vuepress-shared-utils");

const createRenderHeaders = ({
  listTag,
  listClass,
  itemClass,
  linkTag,
  linkClass,
}) => {
  const listTagString = htmlEscape(listTag);
  const listClassString = listClass ? ` class="${htmlEscape(listClass)}"` : "";
  const itemTagString = "li";
  const itemClassString = itemClass ? ` class="${htmlEscape(itemClass)}"` : "";
  const linkTagString = htmlEscape(linkTag);
  const linkClassString = linkClass ? ` class="${htmlEscape(linkClass)}` : "";
  const linkTo = (slug) =>
    linkTag === "RouterLink" ? ` to="#${slug}"` : ` href="#${slug}"`;

  const renderHeaders = (headers) => `\
<${listTagString}${listClassString}>\
${headers
  .map(
    (header) => `\
<${itemTagString}${itemClassString}${itemClassString}>\
<${linkTagString}${linkClassString}${linkTo(header.slug)}>\
${header.title}\
</${linkTagString}>\
${header.children.length > 0 ? renderHeaders(header.children) : ""}\
</${itemTagString}>\
`
  )
  .join("")}\
</${listTagString}>`;

  return renderHeaders;
};

module.exports = { createRenderHeaders };
