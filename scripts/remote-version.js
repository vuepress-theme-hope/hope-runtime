const { join } = require("path");
const { readdirSync } = require("fs");
const chalk = require("chalk");
const execa = require("execa");

const PRIVATE_PACKAGES = ["docs"];

const scopePackages = readdirSync(join(__dirname, "../packages"))
  .filter((n) => !PRIVATE_PACKAGES.includes(n))
  .map((n) => `@mr-hope/${n}`);

async function log() {
  await Promise.all(
    ["vuepress", ...scopePackages].map(async (pkg) => {
      const version = (
        await execa("npm", ["view", `${pkg}@next`, "version"])
      ).stdout.toString();
      console.log(`${pkg}: ${chalk.cyan(version)}`);
    })
  );
}

log();
