const { fs, path } = require("@mr-hope/vuepress-shared-utils");

/**
 * @param options
 * @param {AppContext} ctx
 */
module.exports = (options, ctx) => ({
  name: "@vuepress/internal-style",

  enhanceAppFiles: [path.resolve(__dirname, "client.js")],

  async ready() {
    const { sourceDir, writeTemp, themeAPI } = ctx;

    const themeStyle = path.resolve(themeAPI.theme.path, "styles/index.styl");
    const userStyle = path.resolve(sourceDir, ".vuepress/styles/index.styl");

    const themeStyleContent = fs.existsSync(themeStyle)
      ? `@import(${JSON.stringify(themeStyle.replace(/[\\]+/g, "/"))})`
      : "";

    const userStyleContent = fs.existsSync(userStyle)
      ? `@import(${JSON.stringify(userStyle.replace(/[\\]+/g, "/"))})`
      : "";

    const nullComment = "// null";

    // user's styles can override theme's styles.
    let styleContent =
      "// Theme's Styles\n" +
      (themeStyleContent || nullComment) +
      "\n\n// User's Styles\n" +
      (userStyleContent || nullComment);

    if (themeAPI.existsParentTheme) {
      const parentThemeStyle = path.resolve(
        themeAPI.parentTheme.path,
        "styles/index.styl"
      );
      const parentThemeStyleContent = fs.existsSync(parentThemeStyle)
        ? `@import(${JSON.stringify(parentThemeStyle.replace(/[\\]+/g, "/"))})`
        : "";

      styleContent =
        "// Parent Theme's Styles\n" +
        (parentThemeStyleContent || nullComment) +
        "\n\n" +
        styleContent;
    }

    await writeTemp("style.styl", styleContent);
  },
});
