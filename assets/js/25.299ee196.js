(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{442:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"introduction",tabindex:"-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("Bit"),e._v(" "),r("p",[e._v("VuePress is composed of two parts: a "),r("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core",target:"_blank",rel:"noopener noreferrer"}},[e._v("minimalistic static site generator"),r("OutboundLink")],1),e._v(" with a Vue-powered "),r("RouterLink",{attrs:{to:"/theme/"}},[e._v("theming system")]),e._v(" and "),r("RouterLink",{attrs:{to:"/plugin/"}},[e._v("Plugin API")]),e._v(", and a "),r("RouterLink",{attrs:{to:"/theme/default-theme-config.html"}},[e._v("default theme")]),e._v(" optimized for writing technical documentation. It was created to support the documentation needs of Vue’s own sub projects.")],1),e._v(" "),r("p",[e._v("Each page generated by VuePress has its own pre-rendered static HTML, providing great loading performance and is SEO-friendly. Yet, once the page is loaded, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Extra pages are fetched on demand as the user navigates around the site.")]),e._v(" "),r("h2",{attrs:{id:"how-it-works",tabindex:"-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[e._v("#")]),e._v(" How It Works")]),e._v(" "),r("p",[e._v("A VuePress site is in fact a SPA powered by "),r("a",{attrs:{href:"http://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Router"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1),e._v(". If you’ve used Vue before, you will notice the familiar development experience when you are writing or developing custom themes (you can even use Vue DevTools to debug your custom theme!).")]),e._v(" "),r("p",[e._v("During the build, we create a server-rendered version of the app and render the corresponding HTML by virtually visiting each route. This approach is inspired by "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nuxt"),r("OutboundLink")],1),e._v("'s "),r("code",[e._v("nuxt generate")]),e._v(" command and other projects like "),r("a",{attrs:{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gatsby"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Each Markdown file is compiled into HTML with "),r("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it"),r("OutboundLink")],1),e._v(" and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.")]),e._v(" "),r("h2",{attrs:{id:"features",tabindex:"-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),r("p",[r("strong",[e._v("Built-in Markdown extensions")])]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/guide/markdown.html#table-of-contents"}},[e._v("Table of Contents")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/guide/markdown.html#custom-containers"}},[e._v("Custom Containers")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/guide/markdown.html#line-highlighting-in-code-blocks"}},[e._v("Line Highlighting")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/guide/markdown.html#line-numbers"}},[e._v("Line Numbers")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/guide/markdown.html#import-code-snippets"}},[e._v("Import Code Snippets")])],1)]),e._v(" "),r("p",[r("strong",[e._v("Using Vue in Markdown")])]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/guide/using-vue.html#templating"}},[e._v("Templating")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/guide/using-vue.html#using-components"}},[e._v("Using Components")])],1)]),e._v(" "),r("p",[r("strong",[e._v("Vue-powered custom theme system")])]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#site-and-page-metadata"}},[e._v("Metadata")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#content-excerpt"}},[e._v("Content Excerpt")])],1)]),e._v(" "),r("p",[r("strong",[e._v("Default theme")])]),e._v(" "),r("ul",[r("li",[e._v("Responsive layout")]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/theme/default-theme-config.html#homepage"}},[e._v("Optional Homepage")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/theme/default-theme-config.html#built-in-search"}},[e._v("Simple out-of-the-box header-based search")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/theme/default-theme-config.html#algolia-search"}},[e._v("Algolia Search")])],1),e._v(" "),r("li",[e._v("Customizable "),r("RouterLink",{attrs:{to:"/theme/default-theme-config.html#navbar"}},[e._v("navbar")]),e._v(" and "),r("RouterLink",{attrs:{to:"/theme/default-theme-config.html#sidebar"}},[e._v("sidebar")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/theme/default-theme-config.html#git-repo-and-edit-links"}},[e._v("Auto-generated GitHub link and page edit links")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/theme/default-theme-config.html#popup-ui-to-refresh-contents"}},[e._v("PWA: Popup UI to refresh contents")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/theme/default-theme-config.html#last-updated"}},[e._v("Last Updated")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/guide/i18n.html"}},[e._v("Multi-Language Support")])],1)]),e._v(" "),r("p",[r("strong",[e._v("Blog theme")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://vuepress-theme-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Live Example"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[e._v("Plugin")])]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/plugin/"}},[e._v("Powerful Plugin API")])],1),e._v(" "),r("li",[r("a",{attrs:{href:"https://vuepress-plugin-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blog Plugin"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/plugin/official/plugin-search.html"}},[e._v("Search Plugin")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/plugin/official/plugin-pwa.html"}},[e._v("PWA Plugin")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/plugin/official/plugin-google-analytics.html"}},[e._v("Google Analytics Plugin")])],1),e._v(" "),r("li",[e._v("...")])]),e._v(" "),r("h2",{attrs:{id:"why-not",tabindex:"-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-not","aria-hidden":"true"}},[e._v("#")]),e._v(" Why Not ...?")]),e._v(" "),r("h3",{attrs:{id:"nuxt",tabindex:"-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nuxt","aria-hidden":"true"}},[e._v("#")]),e._v(" Nuxt")]),e._v(" "),r("p",[e._v("Nuxt is capable of doing what VuePress does, but it’s designed for building applications. VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box.")]),e._v(" "),r("h3",{attrs:{id:"docsify-docute",tabindex:"-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docsify-docute","aria-hidden":"true"}},[e._v("#")]),e._v(" Docsify / Docute")]),e._v(" "),r("p",[e._v("Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.")]),e._v(" "),r("h3",{attrs:{id:"hexo",tabindex:"-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hexo","aria-hidden":"true"}},[e._v("#")]),e._v(" Hexo")]),e._v(" "),r("p",[e._v("Hexo has been serving the Vue docs well - in fact, we are probably still a long way to go from migrating away from it for our main site. The biggest problem is that its theming system is static and string-based - we want to take advantage of Vue for both the layout and the interactivity. Also, Hexo’s Markdown rendering isn’t the most flexible to configure.")]),e._v(" "),r("h3",{attrs:{id:"gitbook",tabindex:"-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gitbook","aria-hidden":"true"}},[e._v("#")]),e._v(" GitBook")]),e._v(" "),r("p",[e._v("We’ve been using GitBook for most of our sub project docs. The primary problem with GitBook is that its development reload performance is intolerable with a large amount of files. The default theme also has a pretty limiting navigation structure, and the theming system is, again, not Vue based. The team behind GitBook is also more focused on turning it into a commercial product rather than an open-source tool.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);