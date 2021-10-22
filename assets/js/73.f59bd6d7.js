(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{477:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("p",[t._v("下述的指南基于以下条件：")]),t._v(" "),a("ul",[a("li",[t._v("文档放置在项目的 "),a("code",[t._v("docs")]),t._v(" 目录中；")]),t._v(" "),a("li",[t._v("使用的是默认的构建输出位置；")]),t._v(" "),a("li",[t._v("VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的 npm scripts:")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"云开发-cloudbase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云开发-cloudbase","aria-hidden":"true"}},[t._v("#")]),t._v(" 云开发 CloudBase")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloudbase.net/?site=vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("云开发 CloudBase"),a("OutboundLink")],1),t._v(" 是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 "),a("a",{attrs:{href:"https://cloudbase.net/framework.html?site=vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("CloudBase Framework"),a("OutboundLink")],1),t._v(" 来一键部署应用。")]),t._v(" "),a("ol",[a("li",[t._v("全局安装 CloudBase  CLI")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install -g @cloudbase/cli\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 "),a("a",{attrs:{href:"https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("开通环境"),a("OutboundLink")],1),t._v("：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cloudbase init --without-template\ncloudbase framework:deploy\n")])])]),a("p",[t._v("CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认")]),t._v(" "),a("p",[t._v("确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 Github Action 来持续部署 Github 上的 VuePress 应用。")]),t._v(" "),a("p",[t._v("也可以使用 "),a("code",[t._v("cloudbase init --template vuepress")]),t._v(" 快速创建和部署一个新的 VuePress 应用")]),t._v(" "),a("p",[t._v("更多详细信息请查看 CloudBase Framework 的"),a("a",{attrs:{href:"https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署项目示例"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub Pages")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在 "),a("code",[t._v("docs/.vuepress/config.js")]),t._v(" 中设置正确的 "),a("code",[t._v("base")]),t._v("。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME>.github.io/")]),t._v("，则可以省略这一步，因为 "),a("code",[t._v("base")]),t._v(" 默认即是 "),a("code",[t._v('"/"')]),t._v("。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME>.github.io/<REPO>/")]),t._v("（也就是说你的仓库在 "),a("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("），则将 "),a("code",[t._v("base")]),t._v(" 设置为 "),a("code",[t._v('"/<REPO>/"')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在你的项目中，创建一个如下的 "),a("code",[t._v("deploy.sh")]),t._v(" 文件（请自行判断去掉高亮行的注释）:")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("你可以在你的持续集成的设置中，设置在每次 push 代码时自动运行上述脚本。")])]),t._v(" "),a("h3",{attrs:{id:"github-pages-and-travis-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-and-travis-ci","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub Pages and Travis CI")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在 "),a("code",[t._v("docs/.vuepress/config.js")]),t._v(" 中设置正确的 "),a("code",[t._v("base")]),t._v("。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME or GROUP>.github.io/")]),t._v("，则可以省略这一步，因为 "),a("code",[t._v("base")]),t._v(" 默认即是 "),a("code",[t._v('"/"')]),t._v("。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME or GROUP>.github.io/<REPO>/")]),t._v("（也就是说你的仓库在 "),a("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("），则将 "),a("code",[t._v("base")]),t._v(" 设置为 "),a("code",[t._v('"/<REPO>/"')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在项目的根目录创建一个名为 "),a("code",[t._v(".travis.yml")]),t._v(" 的文件；")])]),t._v(" "),a("li",[a("p",[t._v("在本地执行 "),a("code",[t._v("yarn")]),t._v(" 或 "),a("code",[t._v("npm install")]),t._v(" 并且提交生成的 lock 文件（即 "),a("code",[t._v("yarn.lock")]),t._v(" 或 "),a("code",[t._v("package-lock.json")]),t._v("）；")])]),t._v(" "),a("li",[a("p",[t._v("使用 GitHub Pages 部署提供程序模板并遵循 "),a("a",{attrs:{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis 文档"),a("OutboundLink")],1),t._v("。")])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn install "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm ci")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run docs:build")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep_history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),a("h3",{attrs:{id:"gitlab-pages-and-gitlab-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-pages-and-gitlab-ci","aria-hidden":"true"}},[t._v("#")]),t._v(" GitLab Pages and GitLab CI")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在 "),a("code",[t._v("docs/.vuepress/config.js")]),t._v(" 中设置正确的 "),a("code",[t._v("base")]),t._v("。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME or GROUP>.gitlab.io/")]),t._v("，则可以省略这一步，因为 "),a("code",[t._v("base")]),t._v(" 默认即是 "),a("code",[t._v('"/"')]),t._v("。")]),t._v(" "),a("p",[t._v("如果你打算发布到 "),a("code",[t._v("https://<USERNAME or GROUP>.gitlab.io/<REPO>/")]),t._v("（也就是说你的仓库在 "),a("code",[t._v("https://gitlab.com/<USERNAME>/<REPO>")]),t._v("），则将 "),a("code",[t._v("base")]),t._v(" 设置为 "),a("code",[t._v('"/<REPO>/"')]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 中将 "),a("code",[t._v("dest")]),t._v(" 设置为 "),a("code",[t._v("public")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在你项目的根目录下创建一个名为 "),a("code",[t._v(".gitlab-ci.yml")]),t._v(" 的文件，无论何时你提交了更改，它都会帮助你自动构建和部署：")])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("9.11.1\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules/\n\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn install "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm install")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" yarn docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run docs:build")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("artifacts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" public\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])]),a("h2",{attrs:{id:"netlify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[t._v("#")]),t._v(" Netlify")]),t._v(" "),a("ol",[a("li",[t._v("在 Netlify 中, 创建一个新的 GitHub 项目，使用以下设置：")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Build Command:")]),t._v(" "),a("code",[t._v("yarn docs:build")]),t._v(" 或者 "),a("code",[t._v("npm run docs:build")])]),t._v(" "),a("li",[a("strong",[t._v("Publish directory:")]),t._v(" "),a("code",[t._v("docs/.vuepress/dist")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("点击 deploy 按钮！")])]),t._v(" "),a("h2",{attrs:{id:"google-firebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-firebase","aria-hidden":"true"}},[t._v("#")]),t._v(" Google Firebase")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("请确保你已经安装了 "),a("a",{attrs:{href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("firebase-tools"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在你项目的根目录下创建 "),a("code",[t._v("firebase.json")]),t._v(" 和 "),a("code",[t._v(".firebaserc")]),t._v("，并包含以下内容：")])])]),t._v(" "),a("p",[a("code",[t._v("firebase.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hosting"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"public"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./docs/.vuepress/dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignore"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v(".firebaserc")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"projects"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<YOUR_FIREBASE_ID>"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在执行了 "),a("code",[t._v("yarn docs:build")]),t._v(" 或 "),a("code",[t._v("npm run docs:build")]),t._v(" 后, 使用 "),a("code",[t._v("firebase deploy")]),t._v(" 指令来部署。")])]),t._v(" "),a("h2",{attrs:{id:"surge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#surge","aria-hidden":"true"}},[t._v("#")]),t._v(" Surge")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先，假设你已经安装了 "),a("a",{attrs:{href:"https://www.npmjs.com/package/surge",target:"_blank",rel:"noopener noreferrer"}},[t._v("surge"),a("OutboundLink")],1),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("运行 "),a("code",[t._v("yarn docs:build")]),t._v(" 或者 "),a("code",[t._v("npm run docs:build")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("想要使用 surge 来部署，你可以运行： "),a("code",[t._v("surge docs/.vuepress/dist")]),t._v("；")])])]),t._v(" "),a("p",[t._v("你也可以通过 "),a("code",[t._v("surge docs/.vuepress/dist yourdomain.com")]),t._v(" 来部署到 "),a("a",{attrs:{href:"http://surge.sh/help/adding-a-custom-domain",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义域名"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"heroku"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heroku","aria-hidden":"true"}},[t._v("#")]),t._v(" Heroku")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先安装 "),a("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heroku CLI"),a("OutboundLink")],1),t._v("；")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这里"),a("OutboundLink")],1),t._v(" 注册一个 Heroku 账号；")])]),t._v(" "),a("li",[a("p",[t._v("运行 "),a("code",[t._v("heroku login")]),t._v(" 并填写你的 Heroku 证书：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("heroku login\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在你的项目根目录中，创建一个名为 "),a("code",[t._v("static.json")]),t._v(" 的文件，并包含下述内容：")])])]),t._v(" "),a("p",[a("code",[t._v("static.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./docs/.vuepress/dist"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里是你项目的配置，请参考 "),a("a",{attrs:{href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"}},[t._v("heroku-buildpack-static"),a("OutboundLink")],1),t._v(" 了解更多。")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("配置 Heroku 的 git 远程仓库：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 版本变化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My site ready for deployment."')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以指定的名称创建一个新的 heroku 应用")]),t._v("\nheroku apps:create example\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为静态网站设置构建包")]),t._v("\nheroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("部署你的网站：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布网站")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push heroku master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开浏览器查看 Helku CI 的 dashboard")]),t._v("\nheroku "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v("\n")])])]),a("h2",{attrs:{id:"vercel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vercel","aria-hidden":"true"}},[t._v("#")]),t._v(" Vercel")]),t._v(" "),a("p",[t._v("请查看 "),a("a",{attrs:{href:"https://vercel.com/guides/deploying-vuepress-to-vercel",target:"_blank",rel:"noopener noreferrer"}},[t._v("用 Vercel 创建和部署一个 VuePress 应用"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_21-云盒子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-云盒子","aria-hidden":"true"}},[t._v("#")]),t._v(" 21 云盒子")]),t._v(" "),a("p",[t._v("请查看 "),a("a",{attrs:{href:"https://www.21yunbox.com/docs/#/deploy-vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("21 云盒子 - 部署一个 VuePress 静态网页"),a("OutboundLink")],1),t._v("。")])])},[],!1,null,null,null);s.default=n.exports}}]);