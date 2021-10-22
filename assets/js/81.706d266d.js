(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{498:function(e,t,a){"use strict";a.r(t);var r=a(19),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"术语",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#术语","aria-hidden":"true"}},[e._v("#")]),e._v(" 术语")]),e._v(" "),a("p",[e._v("你可能会在文档中碰到一些陌生的概念，本节列出了文档中常见的术语，方便查阅、学习、插件/主题开发之用。")]),e._v(" "),a("h2",{attrs:{id:"layout",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout","aria-hidden":"true"}},[e._v("#")]),e._v(" layout")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.frontmatter.layout")])])]),e._v(" "),a("p",[e._v("当前页面所使用的布局组件名。")]),e._v(" "),a("h2",{attrs:{id:"frontmatter",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter","aria-hidden":"true"}},[e._v("#")]),e._v(" frontmatter")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.frontmatter")])])]),e._v(" "),a("p",[e._v("当前页面的 "),a("code",[e._v("markdown")]),e._v(" 文件中包裹在 "),a("code",[e._v("---")]),e._v(" 中的配置，一般用于做一些页面级别的配置，参考 "),a("RouterLink",{attrs:{to:"/zh/guide/frontmatter.html"}},[e._v("Front Matter")]),e._v(" 一节了解更多。")],1),e._v(" "),a("h2",{attrs:{id:"permalink",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalink","aria-hidden":"true"}},[e._v("#")]),e._v(" permalink")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.frontmatter.permalink")])])]),e._v(" "),a("p",[e._v("永久链接，参考 "),a("RouterLink",{attrs:{to:"/zh/guide/permalinks.html"}},[e._v("Permalinks")]),e._v(" 一节了解更多。")],1),e._v(" "),a("h2",{attrs:{id:"regularpath",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regularpath","aria-hidden":"true"}},[e._v("#")]),e._v(" regularPath")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.regularPath")])])]),e._v(" "),a("p",[e._v("当前页面基于目录结构生成的 URL。")]),e._v(" "),a("h2",{attrs:{id:"path",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path","aria-hidden":"true"}},[e._v("#")]),e._v(" path")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.path")])])]),e._v(" "),a("p",[e._v("当前页面的实际 URL。在构建期生成路由时，一个页面的 URL 将优先使用 "),a("code",[e._v("permalink")]),e._v("，若不存在则降级到 "),a("code",[e._v("regularPath")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"headers",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers","aria-hidden":"true"}},[e._v("#")]),e._v(" headers")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.headers")])])]),e._v(" "),a("p",[e._v("即 "),a("code",[e._v("markdown")]),e._v(" 中那些以一个或多个 "),a("code",[e._v("#")]),e._v(" 定义的标题。")]),e._v(" "),a("h2",{attrs:{id:"siteconfig",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#siteconfig","aria-hidden":"true"}},[e._v("#")]),e._v(" siteConfig")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$site | Context.siteConfig")])])]),e._v(" "),a("p",[e._v("即 "),a("code",[e._v(".vuepress/config.js")]),e._v("，译为 "),a("code",[e._v("站点配置")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"themeconfig",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig","aria-hidden":"true"}},[e._v("#")]),e._v(" themeConfig")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$themeConfig | Context.themeConfig")])])]),e._v(" "),a("p",[e._v("即 "),a("code",[e._v(".vuepress/config.js")]),e._v(" 中 "),a("code",[e._v("themeConfig")]),e._v(" 的值，是用户对当前所使用的主题的配置。")]),e._v(" "),a("h2",{attrs:{id:"themepath",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themepath","aria-hidden":"true"}},[e._v("#")]),e._v(" themePath")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("Context.themeAPI.theme.path")])])]),e._v(" "),a("p",[e._v("当前使用的主题的所在的绝对路径。")]),e._v(" "),a("h2",{attrs:{id:"themeentry",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeentry","aria-hidden":"true"}},[e._v("#")]),e._v(" themeEntry")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("Context.themeAPI.theme.entry")])])]),e._v(" "),a("p",[e._v("主题的配置文件 "),a("code",[e._v("themePath/index.js")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"parentthemepath",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentthemepath","aria-hidden":"true"}},[e._v("#")]),e._v(" parentThemePath")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("Context.themeAPI.parentTheme.path")])])]),e._v(" "),a("p",[e._v("如果当前使用的主题是一个派生主题，那么 "),a("code",[e._v("parentThemePath")]),e._v(" 就是指父主题的所在绝对路径。")]),e._v(" "),a("h2",{attrs:{id:"parentthemeentry",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentthemeentry","aria-hidden":"true"}},[e._v("#")]),e._v(" parentThemeEntry")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("Context.themeAPI.parentTheme.entry")])])]),e._v(" "),a("p",[e._v("如果当前使用的主题是一个派生主题，那么 "),a("code",[e._v("parentThemePath")]),e._v(" 就是指父主题的主题的配置文件 "),a("code",[e._v("parentThemePath/index.js")]),e._v("。")])])}),[],!1,null,null,null);t.default=v.exports}}]);