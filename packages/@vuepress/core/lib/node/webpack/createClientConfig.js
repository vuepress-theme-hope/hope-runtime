"use strict";

/**
 * Expose createClientConfig method.
 */

module.exports = function createClientConfig(ctx) {
  const { env } = require("@vuepress/shared-utils");
  const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
  const createBaseConfig = require("./createBaseConfig");
  const safeParser = require("postcss-safe-parser");

  const config = createBaseConfig(ctx);

  config.entry("app").add(ctx.getLibFilePath("client/clientEntry.js"));

  config.node.merge({ global: false });

  // generate client manifest only during build
  if (process.env.NODE_ENV === "production") {
    config.plugin("ssr-client").use(VueSSRClientPlugin, [
      {
        filename: "manifest/client.json",
      },
    ]);

    config
      .plugin("optimize-css")
      .use(require("optimize-css-assets-webpack-plugin"), [
        {
          canPrint: false,
          cssProcessorOptions: {
            parser: safeParser,
            autoprefixer: { disable: true },
            mergeLonghand: false,
          },
        },
      ]);
  }

  if (!env.isDebug) {
    const WebpackBar = require("webpackbar");
    config.plugin("bar").use(WebpackBar, [
      {
        name: "Client",
        color: "#41b883",
        compiledIn: false,
      },
    ]);
  }

  ctx.pluginAPI.applySyncOption("chainWebpack", config, false /* isServer */);

  return config;
};
