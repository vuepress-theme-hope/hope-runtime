(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{411:function(e,t,a){"use strict";a.r(t);var s=a(21),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"permalinks",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalinks","aria-hidden":"true"}},[e._v("¶")]),e._v(" Permalinks")]),e._v(" "),a("h2",{attrs:{id:"background",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background","aria-hidden":"true"}},[e._v("¶")]),e._v(" Background")]),e._v(" "),a("p",[e._v("Prior to VuePress version 1.0.0, VuePress retrieved all Markdown files in the documents source directory and defined the page links based on the file hierarchy. For example, if you had the following file and directory structure:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("├── package.json\n└── source\n    ├── _post\n    │   └── intro-vuepress.md\n    ├── index.md\n    └── tags.md\n")])])]),a("p",[e._v("You would then get the following pages:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/source/\n/source/tags.html\n/source/_post/intro-vuepress.html\n")])])]),a("p",[e._v("But for blogs, a customized link of a post would be highly preferrable. VuePress version 1.0.0 introduced support for this feature, known as a "),a("strong",[e._v("permalink")]),e._v(". With version 1.0.0 or newer, you instead get the following pages:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/source/\n/source/tags/\n/source/2018/4/1/intro-vuepress.html\n")])])]),a("p",[e._v("This describes the beginning of how VuePress can be used for a blog!")]),e._v(" "),a("h2",{attrs:{id:"permalinks-1",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalinks-1","aria-hidden":"true"}},[e._v("¶")]),e._v(" Permalinks")]),e._v(" "),a("p",[e._v("A permalink is a URL that is intended to remain unchanged for a long time, yielding a hyperlink that is less susceptible to what is known as "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Link_rot",target:"_blank",rel:"noopener noreferrer"}},[e._v("link rot"),a("OutboundLink")],1),e._v(". VuePress supports a flexible way to build permalinks, allowing you to use template variables.")]),e._v(" "),a("p",[e._v("The default permalink is "),a("code",[e._v("/:regular")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"configure-permalinks",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-permalinks","aria-hidden":"true"}},[e._v("¶")]),e._v(" Configure Permalinks")]),e._v(" "),a("p",[e._v("You can enable permalinks globally for all pages:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// .vuepress/config.js")]),e._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  permalink"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/:year/:month/:day/:slug'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("You can also set set a permalink for a single page only. This overrides the aforementioned global setting:")]),e._v(" "),a("p",[e._v("📝 "),a("strong",[e._v("hello.md")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token font-matter yaml language-yaml"}},[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Hello World\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("permalink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("world")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n\nHello!\n")])])]),a("h3",{attrs:{id:"template-variables",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-variables","aria-hidden":"true"}},[e._v("¶")]),e._v(" Template Variables")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variable")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v(":year")]),e._v(" "),a("td",[e._v("Published year of post (4-digit)")])]),e._v(" "),a("tr",[a("td",[e._v(":month")]),e._v(" "),a("td",[e._v("Published month of post (2-digit)")])]),e._v(" "),a("tr",[a("td",[e._v(":i_month")]),e._v(" "),a("td",[e._v("Published month of post (without leading zeros)")])]),e._v(" "),a("tr",[a("td",[e._v(":day")]),e._v(" "),a("td",[e._v("Published day of post (2-digit)")])]),e._v(" "),a("tr",[a("td",[e._v(":i_day")]),e._v(" "),a("td",[e._v("Published day of post (without leading zeros)")])]),e._v(" "),a("tr",[a("td",[e._v(":slug")]),e._v(" "),a("td",[e._v("Slugified file path (without extension)")])]),e._v(" "),a("tr",[a("td",[e._v(":regular")]),e._v(" "),a("td",[e._v("Permalink generated by VuePress by default. See "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/shared-utils/src/fileToPath.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("fileToPath.ts"),a("OutboundLink")],1),e._v(" for details")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);