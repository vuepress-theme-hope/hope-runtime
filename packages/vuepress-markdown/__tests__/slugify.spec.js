import { Md } from "./util";
import anchorPlugin from "markdown-it-anchor";
import slugify from "@mr-hope/vuepress-shared-utils/lib/slugify.js";

const mdS = Md().use(anchorPlugin, {
  level: [1, 2, 3, 4, 5, 6],
  slugify,
  permalink: anchorPlugin.permalink.ariaHidden({
    class: "header-anchor",
    symbol: "#",
    space: true,
    placement: "before",
  }),
});

const asserts = {
  /* header: slug */
  "# a b": "a-b",
  "# a-b": "a-b",
  "# `<a>`": "a",
  "# `<a>`b": "a-b",
  "# `<a>` b": "a-b",
};

describe("slugify", () => {
  test("should convert headers to slug correctly", () => {
    for (const input in asserts) {
      const output = mdS.render(input);
      expect(getSlug(output)).toBe(asserts[input]);
    }
  });
});

function getSlug(output) {
  return output.match(/id=\\?"([^"]*)\\?"/)[1];
}
