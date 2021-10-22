(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{470:function(e,t,a){"use strict";a.r(t);var r=a(17),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("p",[e._v("You may stumble upon some unfamiliar concepts in the documentation. This section lists the common terms in the documentation for easy access, learning and plugin/theme development.")]),e._v(" "),a("h2",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[e._v("#")]),e._v(" layout")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.frontmatter.layout")])])]),e._v(" "),a("p",[e._v("Name of the layout component used by the current page.")]),e._v(" "),a("h2",{attrs:{id:"frontmatter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter"}},[e._v("#")]),e._v(" frontmatter")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.frontmatter")])])]),e._v(" "),a("p",[e._v("Configuration wrapped by "),a("code",[e._v("---")]),e._v(" in the "),a("code",[e._v("markdown")]),e._v(" file of the current page, generally used to do some page-level configuration. For more details, please see "),a("RouterLink",{attrs:{to:"/guide/frontmatter.html"}},[e._v("Frontmatter")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"permalink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalink"}},[e._v("#")]),e._v(" permalink")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.frontmatter.permalink")])])]),e._v(" "),a("p",[e._v("Permalinks. For more details, please head "),a("RouterLink",{attrs:{to:"/guide/permalinks.html"}},[e._v("permalinks")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"regularpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regularpath"}},[e._v("#")]),e._v(" regularPath")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.regularPath")])])]),e._v(" "),a("p",[e._v("The current page is based on the URL generated by the directory structure.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("When dynamically generating routes during the build period, a page’s URL ("),a("code",[e._v("$page.path")]),e._v(") will use "),a("code",[e._v("$page.frontmatter.permalink")]),e._v(" first, and if it doesn’t exist, it will be downgraded to "),a("code",[e._v("$page.regularPath")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" headers")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$page.headers")])])]),e._v(" "),a("p",[e._v("That is, those titles defined by one or more "),a("code",[e._v("#")]),e._v(" in "),a("code",[e._v("markdown")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"siteconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#siteconfig"}},[e._v("#")]),e._v(" siteConfig")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$site | Context.siteConfig")])])]),e._v(" "),a("p",[a("code",[e._v(".vuepress/config.js")]),e._v(", i.e., "),a("code",[e._v("site configuration")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"themeconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig"}},[e._v("#")]),e._v(" themeConfig")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("$themeConfig | Context.themeConfig")])])]),e._v(" "),a("p",[e._v("Value of "),a("code",[e._v("themeConfig")]),e._v(" in "),a("code",[e._v(".vuepress/config.js")]),e._v(", i.e., user’s theme configuration.")]),e._v(" "),a("h2",{attrs:{id:"themepath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themepath"}},[e._v("#")]),e._v(" themePath")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("Context.themeAPI.theme.path")])])]),e._v(" "),a("p",[e._v("Root path (absolute path) of the used theme.")]),e._v(" "),a("h2",{attrs:{id:"themeentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeentry"}},[e._v("#")]),e._v(" themeEntry")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("Context.themeAPI.theme.entry")])])]),e._v(" "),a("p",[e._v("Theme’s configuration file - "),a("code",[e._v("themePath/index.js")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"parentthemepath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentthemepath"}},[e._v("#")]),e._v(" parentThemePath")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("Context.themeAPI.parentTheme.path")])])]),e._v(" "),a("p",[e._v("If the current theme is a derived theme, "),a("code",[e._v("parentThemePath")]),e._v(" refers to the absolute path of the parent theme.")]),e._v(" "),a("h2",{attrs:{id:"parentthemeentry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parentthemeentry"}},[e._v("#")]),e._v(" parentThemeEntry")]),e._v(" "),a("ul",[a("li",[e._v("Access: "),a("code",[e._v("Context.themeAPI.parentTheme.entry")])])]),e._v(" "),a("p",[e._v("If the current theme is a derived theme, "),a("code",[e._v("parentThemeEntry")]),e._v(" refers to the theme configuration of the parent theme.")])])}),[],!1,null,null,null);t.default=s.exports}}]);