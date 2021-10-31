"use strict";

/**
 * Module dependencies.
 */

const Config = require("markdown-it-chain");
const highlight = require("./highlight");
const { PLUGINS, REQUIRED_PLUGINS } = require("./constant");
const highlightLinesPlugin = require("./highlightLines");
const preWrapperPlugin = require("./preWrapper");
const lineNumbersPlugin = require("./lineNumbers");
const componentPlugin = require("./component");
const hoistScriptStylePlugin = require("./hoist");
const convertRouterLinkPlugin = require("./link");
const snippetPlugin = require("./snippet");
const emojiPlugin = require("markdown-it-emoji");
const anchorPlugin = require("markdown-it-anchor");
const { tocPlugin } = require("./tocPlugin");
const {
  chalk,
  logger,
  slugify: slugifyDefault,
  normalizeConfig,
  moduleResolver: { getMarkdownItResolver },
} = require("@mr-hope/vuepress-shared-utils");

function dataReturnable(md) {
  // override render to allow custom plugins return data
  const render = md.render;
  md.render = (...args) => {
    md.$data = {};
    md.$data.__data_block = {};
    md.$dataBlock = md.$data.__data_block;
    const html = render.call(md, ...args);
    return {
      html,
      data: md.$data,
      dataBlockString: toDataBlockString(md.$dataBlock),
    };
  };
}

function toDataBlockString(ob) {
  if (Object.keys(ob).length === 0) {
    return "";
  }
  return `<data>${JSON.stringify(ob)}</data>`;
}

function isRequiredPlugin(plugin) {
  return REQUIRED_PLUGINS.includes(plugin);
}

function removePlugin(config, plugin) {
  logger.debug(
    `Built-in markdown-it plugin ${chalk.green(plugin)} was removed.`
  );
  config.plugins.delete(plugin);
}

function removeAllBuiltInPlugins(config) {
  Object.keys(PLUGINS).forEach((key) => {
    if (!isRequiredPlugin(PLUGINS[key])) {
      removePlugin(config, PLUGINS[key]);
    }
  });
}

/**
 * Create markdown by config.
 */

const createMarkdown = (markdown = {}) => {
  const {
    externalLinks,
    pageSuffix,
    anchor,
    toc,
    plugins,
    lineNumbers,
    beforeInstantiate,
    afterInstantiate,
  } = markdown;

  const resolver = getMarkdownItResolver();

  // allow user config slugify
  const slugify = markdown.slugify || slugifyDefault;

  // using chainedAPI
  const config = new Config();

  config.options
    .html(true)
    .highlight(highlight)
    .end()

    .plugin(PLUGINS.COMPONENT)
    .use(componentPlugin)
    .end()

    .plugin(PLUGINS.HIGHLIGHT_LINES)
    .use(highlightLinesPlugin)
    .end()

    .plugin(PLUGINS.PRE_WRAPPER)
    .use(preWrapperPlugin)
    .end()

    .plugin(PLUGINS.SNIPPET)
    .use(snippetPlugin)
    .end()

    .plugin(PLUGINS.CONVERT_ROUTER_LINK)
    .use(convertRouterLinkPlugin, [
      {
        target: "_blank",
        rel: "noopener noreferrer",
        ...externalLinks,
      },
      pageSuffix,
    ])
    .end()

    .plugin(PLUGINS.HOIST_SCRIPT_STYLE)
    .use(hoistScriptStylePlugin)
    .end()

    .plugin(PLUGINS.EMOJI)
    .use(emojiPlugin)
    .end()

    .plugin(PLUGINS.ANCHOR)
    .use(anchorPlugin, [
      {
        level: [1, 2, 3, 4, 5, 6],
        slugify,
        permalink: anchorPlugin.permalink.ariaHidden({
          class: "header-anchor",
          symbol: "¶",
          space: true,
          placement: "before",
        }),
        ...anchor,
      },
    ])
    .end()

    .plugin(PLUGINS.TOC)
    .use(tocPlugin, [
      {
        level: [2, 3],
        slugify,
        linkTag: "RouterLink",
        ...toc,
      },
    ])
    .end();

  if (lineNumbers) {
    config.plugin(PLUGINS.LINE_NUMBERS).use(lineNumbersPlugin);
  }

  beforeInstantiate && beforeInstantiate(config);

  const md = config.toMd(require("markdown-it"), markdown);

  const pluginsConfig = normalizeConfig(plugins || []);
  pluginsConfig.forEach(([pluginRaw, pluginOptions]) => {
    const plugin = resolver.resolve(pluginRaw);
    if (plugin.entry) {
      md.use(plugin.entry, pluginOptions);
    } else {
      // TODO: error handling
    }
  });

  afterInstantiate && afterInstantiate(md);

  dataReturnable(md);

  // expose slugify
  md.slugify = slugify;

  return md;
};

module.exports = {
  PLUGINS,
  createMarkdown,
  dataReturnable,
  isRequiredPlugin,
  removePlugin,
  removeAllBuiltInPlugins,
};
