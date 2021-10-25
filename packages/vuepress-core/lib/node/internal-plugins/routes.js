/**
 * Import utilities
 * @param {string} globalLayout path of global layout component
 * @returns {string}
 */
const importCode = (globalLayout) =>
  `
import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from ${JSON.stringify(globalLayout)}

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
`;

function genRoute({
  path: pagePath,
  key: componentName,
  frontmatter: { layout },
  regularPath,
  _meta,
}) {
  let code = `
  {
    name: ${JSON.stringify(componentName)},
    path: ${JSON.stringify(pagePath)},
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded(${JSON.stringify(
        layout || "Layout"
      )}, ${JSON.stringify(componentName)}).then(next)
    },${_meta ? `\n    meta: ${JSON.stringify(_meta)}` : ""}
  }`;

  const decodePath = decodeURIComponent(pagePath);

  if (decodePath !== pagePath) {
    code += `,
  {
    path: ${JSON.stringify(decodePath)},
    redirect: ${JSON.stringify(pagePath)}
  }`;
  }

  if (/\/$/.test(pagePath)) {
    code += `,
  {
    path: ${JSON.stringify(pagePath + "index.html")},
    redirect: ${JSON.stringify(pagePath)}
  }`;
  }

  const decodedRegularPath = decodeURIComponent(regularPath);

  if (decodedRegularPath !== pagePath) {
    code += `,
  {
    path: ${JSON.stringify(decodedRegularPath)},
    redirect: ${JSON.stringify(pagePath)}
  },
  {
    path: ${JSON.stringify(regularPath)},
    redirect: ${JSON.stringify(pagePath)}
  }`;
  }

  return code;
}

const notFoundRoute = `,
  {
    path: '*',
    component: GlobalLayout
  }`;

/**
 * Get Vue routes code.
 * @param {array} pages
 * @returns {string}
 */
function routesCode(pages) {
  return `export const routes = [${pages
    .map(genRoute)
    .join(",")}${notFoundRoute}\n]`;
}

module.exports = (_options, ctx) => ({
  name: "@internal-routes",

  // @internal/routes
  async clientDynamicModules() {
    const code = importCode(ctx.globalLayout) + routesCode(ctx.pages);
    return { name: "routes.js", content: code, dirname: "internal" };
  },
});
