"use strict";

/**
 * Module dependencies.
 */

const { chalk, semver } = require("@mr-hope/vuepress-shared-utils");

/**
 * Check if Node version meets VuePress requirement.
 */

module.exports = function checkEnv(pkg) {
  const requiredVersion = pkg.engines.node;

  if (!semver.satisfies(process.version, requiredVersion)) {
    console.log(
      chalk.red(
        `\n[vuepress] minimum Node version not met:` +
          `\nYou are using Node ${process.version}, but VuePress ` +
          `requires Node ${requiredVersion}.\nPlease upgrade your Node version.\n`
      )
    );
    process.exit(1);
  }
};
