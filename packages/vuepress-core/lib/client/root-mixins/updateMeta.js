import unionBy from "lodash/unionBy";
import escape from "escape-html";

export default {
  // created will be called on both client and ssr
  created() {
    this.siteMeta = this.$site.headTags
      .filter(([headerType]) => headerType === "meta")
      .map(([, headerValue]) => headerValue);

    if (this.$ssrContext) {
      const mergedMetaItems = this.getMergedMetaTags();

      this.$ssrContext.title = this.$title;
      this.$ssrContext.lang = this.$lang;
      this.$ssrContext.pageMeta = renderPageMeta(mergedMetaItems);
      this.$ssrContext.canonicalLink = renderCanonicalLink(this.$canonicalUrl);
    }
  },
  // Other life cycles will only be called at client
  mounted() {
    // init currentMetaTags from DOM
    this.currentMetaTags = [...document.querySelectorAll("meta")];

    // update title / meta tags
    this.updateMeta();
    this.updateCanonicalLink();
  },

  methods: {
    updateMeta() {
      document.title = this.$title;
      document.documentElement.lang = this.$lang;

      const newMetaTags = this.getMergedMetaTags();
      this.currentMetaTags = updateMetaTags(newMetaTags, this.currentMetaTags);
    },

    getMergedMetaTags() {
      const pageMeta = this.$page.frontmatter.meta || [];
      // pageMetaTags have higher priority than siteMetaTags
      // description needs special attention as it has too many entries
      return unionBy(
        [{ name: "description", content: this.$description }],
        pageMeta,
        this.siteMeta,
        metaIdentifier
      );
    },

    updateCanonicalLink() {
      removeCanonicalLink();

      if (!this.$canonicalUrl) {
        return;
      }

      document.head.insertAdjacentHTML(
        "beforeend",
        renderCanonicalLink(this.$canonicalUrl)
      );
    },
  },

  watch: {
    $page() {
      this.updateMeta();
      this.updateCanonicalLink();
    },
  },

  beforeDestroy() {
    updateMetaTags(null, this.currentMetaTags);
    removeCanonicalLink();
  },
};

function removeCanonicalLink() {
  const canonicalEl = document.querySelector("link[rel='canonical']");

  if (canonicalEl) {
    canonicalEl.remove();
  }
}

function renderCanonicalLink(link = "") {
  if (!link) {
    return "";
  }
  return `<link href="${link}" rel="canonical" />`;
}

/**
 * Replace currentMetaTags with newMetaTags
 * @param {Array<Object>} newMetaTags
 * @param {Array<HTMLElement>} currentMetaTags
 * @returns {Array<HTMLElement>}
 */
function updateMetaTags(newMetaTags, currentMetaTags) {
  if (currentMetaTags) {
    [...currentMetaTags]
      .filter((c) => c.parentNode === document.head)
      .forEach((c) => document.head.removeChild(c));
  }
  if (newMetaTags) {
    return newMetaTags.map((m) => {
      const tag = document.createElement("meta");
      Object.keys(m).forEach((key) => {
        tag.setAttribute(key, m[key]);
      });
      document.head.appendChild(tag);
      return tag;
    });
  }
}

/**
 * Try to identify a meta tag by name, property or itemprop
 *
 * Return a complete string if none provided
 * @param {Object} tag from frontmatter or siteMetaTags
 * @returns {String}
 */
function metaIdentifier(tag) {
  for (const item of ["name", "property", "itemprop"]) {
    // eslint-disable-next-line no-prototype-builtins
    if (tag.hasOwnProperty(item)) return tag[item] + item;
  }
  return JSON.stringify(tag);
}

/**
 * Render meta tags
 *
 * @param {Array} meta
 * @returns {String}
 */

function renderPageMeta(meta) {
  if (!meta) return "";
  return meta
    .map((m) => {
      let res = `<meta`;
      Object.keys(m).forEach((key) => {
        res += ` ${key}="${escape(m[key])}"`;
      });
      return res + `>`;
    })
    .join("\n    ");
}
