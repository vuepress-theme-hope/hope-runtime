const {
  fs,
  path,
  datatypes: { isPlainObject },
} = require("@mr-hope/vuepress-shared-utils");

module.exports = (options, ctx) => ({
  name: "@vuepress/internal-palette",

  async ready() {
    // 1. enable config.styl globally.
    const configFile = ctx.getLibFilePath("client/style/config.styl");
    if (!ctx.siteConfig.stylus) {
      ctx.siteConfig.stylus = {
        stylusOptions: {
          import: [configFile],
        },
      };
    } else if (isPlainObject(ctx.siteConfig.stylus)) {
      if (!ctx.siteConfig.stylus.stylusOptions)
        ctx.siteConfig.stylus.stylusOptions = {};

      ctx.siteConfig.stylus.stylusOptions.import = (
        ctx.siteConfig.stylus.stylusOptions.import || []
      ).concat([configFile]);
    }

    // 2. write palette.styl
    const { sourceDir, writeTemp } = ctx;

    const themePalette = path.resolve(
      ctx.themeAPI.theme.path,
      "styles/palette.styl"
    );
    const userPalette = path.resolve(
      sourceDir,
      ".vuepress/styles/palette.styl"
    );

    const themePaletteContent = fs.existsSync(themePalette)
      ? `@import(${JSON.stringify(themePalette.replace(/[\\]+/g, "/"))})`
      : "";

    const userPaletteContent = fs.existsSync(userPalette)
      ? `@import(${JSON.stringify(userPalette.replace(/[\\]+/g, "/"))})`
      : "";

    const nullComment = "// null";

    // user's palette can override theme's palette.
    let paletteContent =
      "// Theme's Palette\n" +
      (themePaletteContent || nullComment) +
      "\n\n// User's Palette\n" +
      (userPaletteContent || nullComment);

    if (ctx.themeAPI.existsParentTheme) {
      const parentThemePalette = path.resolve(
        ctx.themeAPI.parentTheme.path,
        "styles/palette.styl"
      );
      const parentThemePaletteContent = fs.existsSync(parentThemePalette)
        ? `@import(${JSON.stringify(
            parentThemePalette.replace(/[\\]+/g, "/")
          )})`
        : "";
      paletteContent =
        "// Parent Theme's Palette\n" +
        (parentThemePaletteContent || nullComment) +
        "\n\n" +
        paletteContent;
    }

    await writeTemp("palette.styl", paletteContent);
  },
});
