// create package.json and README for packages that don't have one yet

const fs = require("fs");
const { path } = require("@mr-hope/vuepress-shared-utils");
const baseVersion = require("../packages/vuepress-core/package.json").version;

const packagesDir = path.resolve(__dirname, "../packages");
const files = fs.readdirSync(packagesDir);

files.forEach((pkg) => {
  if (pkg.charAt(0) === ".") return;

  const isPlugin = /^plugin-/.test(pkg);
  const desc = isPlugin
    ? `${pkg.replace("plugin-", "")} plugin for vuepress`
    : `${pkg} for vuepress`;

  const pkgPath = path.join(packagesDir, pkg, `package.json`);
  if (!fs.existsSync(pkgPath)) {
    const json = {
      name: `@mr-hope/${pkg}`,
      version: baseVersion,
      description: desc,
      main: "index.js",
      publishConfig: {
        access: "public",
      },
      repository: {
        type: "git",
        url: "git+https://github.com/vuepress-theme-hope/hope-runtime.git",
      },
      keywords: ["documentation", "vue", "vuepress", "generator"],
      author: "Mister-Hope <zhangbowang@1998@gmail.com>",
      license: "MIT",
      bugs: {
        url: "https://github.com/vuepress-theme-hope/hope-runtime/issues",
      },
      homepage: `https://github.com/vuepress-theme-hope/hope-runtime/blob/main/packages/${pkg}#readme`,
    };
    fs.writeFileSync(pkgPath, JSON.stringify(json, null, 2));
  }

  const readmePath = path.join(packagesDir, pkg, `README.md`);
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, `# @mr-hope/${pkg}\n\n> ${desc}`);
  }

  const npmIgnorePath = path.join(packagesDir, pkg, `.npmignore`);
  if (!fs.existsSync(npmIgnorePath)) {
    fs.writeFileSync(npmIgnorePath, `__tests__\n__mocks__`);
  }
});
