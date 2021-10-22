"use strict";

/**
 * Module dependencies.
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { normalizeHeadTag } = require("../util/index");

/**
 * Expose HeadPlugin class.
 */

module.exports = class HeadPlugin {
  constructor({ tags }) {
    this.tags = tags;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap("vuepress-site-data", (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(
        "vuepress-site-data",
        (data, cb) => {
          try {
            this.tags.forEach((tag) => {
              data.headTags.push(normalizeHeadTag(tag));
            });
          } catch (e) {
            return cb(e);
          }
          cb(null, data);
        }
      );
    });
  }
};
