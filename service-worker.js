/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ec845b3d966817f99560eade96d7aeb1"
  },
  {
    "url": "api/cli.html",
    "revision": "05e18997ef294048fbf295a12c12ac70"
  },
  {
    "url": "api/node.html",
    "revision": "13a2917b22866a1e3bbbed6c5d540240"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.2b3ee69b.css",
    "revision": "52e327eb502992ad3598ffd66d6020e6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.74f08185.js",
    "revision": "527749d903b27fb5101b0ff2c9341da8"
  },
  {
    "url": "assets/js/100.997f6544.js",
    "revision": "3f93cf62a88a55e57b3e512389b94249"
  },
  {
    "url": "assets/js/101.1c759efb.js",
    "revision": "dfd3c39c2f76b76f94db399548ecf535"
  },
  {
    "url": "assets/js/102.41392e65.js",
    "revision": "aa382d7199940bcb51b2c354c71c4a90"
  },
  {
    "url": "assets/js/103.04741a94.js",
    "revision": "d94241b12f1ac65ae972d37d124e9927"
  },
  {
    "url": "assets/js/104.dcbc123f.js",
    "revision": "9285e2091e7fef96eb0dad3a33b2da66"
  },
  {
    "url": "assets/js/105.fce7b005.js",
    "revision": "24695f107794e1bc6ab731334fa43710"
  },
  {
    "url": "assets/js/106.0ef07f76.js",
    "revision": "5ddfca0b6afcdb83ba0c918969bec95c"
  },
  {
    "url": "assets/js/107.89ca393f.js",
    "revision": "7e493866495e06d8f382d11171f703ed"
  },
  {
    "url": "assets/js/108.e23218f2.js",
    "revision": "42dfc2a73da875109b270a32f9410100"
  },
  {
    "url": "assets/js/11.3348147a.js",
    "revision": "a565822ea0cac9b09ffecdcfde4f0268"
  },
  {
    "url": "assets/js/12.e3beab4b.js",
    "revision": "ce509b2e43d95d17a384bdd7918ff400"
  },
  {
    "url": "assets/js/13.be8a7bae.js",
    "revision": "2940d54fa143837b0fdc5ff3b4e6c293"
  },
  {
    "url": "assets/js/14.6254a8de.js",
    "revision": "0f2e70fc9c8ab1f683a8f4082e1c24fc"
  },
  {
    "url": "assets/js/15.50a9bf02.js",
    "revision": "4b2014ecf12372f96fe2d164d7be793d"
  },
  {
    "url": "assets/js/16.4ebd90ce.js",
    "revision": "1266e973da74ad99503034caef2ed357"
  },
  {
    "url": "assets/js/17.7b74ab04.js",
    "revision": "c0ad6e942159a7f92a98a74c65cab90a"
  },
  {
    "url": "assets/js/18.f213ae82.js",
    "revision": "12142c5e05971114235fa9a541e78bed"
  },
  {
    "url": "assets/js/19.8af9b53a.js",
    "revision": "4e53bd83c3b55a6e0970c2ce07d25bfc"
  },
  {
    "url": "assets/js/20.c0d71686.js",
    "revision": "295a84054c0df5e2dfd92911a2cbbdb6"
  },
  {
    "url": "assets/js/21.bfdf9bc5.js",
    "revision": "816ff42d7143963542d21e919ebe9567"
  },
  {
    "url": "assets/js/22.9b25c876.js",
    "revision": "1233bb3e2aef98f148babe4648d90b36"
  },
  {
    "url": "assets/js/23.be71ad4a.js",
    "revision": "108de9183ed200668c76bd9047116faa"
  },
  {
    "url": "assets/js/24.ec961d0a.js",
    "revision": "06add4c08175ae506d3860f6d8af1051"
  },
  {
    "url": "assets/js/25.bc270fae.js",
    "revision": "52c9e1e6d2d019f3a1d237b275dc1c36"
  },
  {
    "url": "assets/js/26.d98da75f.js",
    "revision": "aedb87501ff89a8df91573570d877f8f"
  },
  {
    "url": "assets/js/27.b5e07cb7.js",
    "revision": "db2ecfe922a2e25d9da35d61a3f650c9"
  },
  {
    "url": "assets/js/28.78a3fd68.js",
    "revision": "d588e1ecdb4959039c6e2345c446500b"
  },
  {
    "url": "assets/js/29.3970d85d.js",
    "revision": "c4d866e760ac144a1f49b33810fd9998"
  },
  {
    "url": "assets/js/30.f7ed1868.js",
    "revision": "f43ee5d1b5d43862900355556637741c"
  },
  {
    "url": "assets/js/31.dd7b29cd.js",
    "revision": "efe1657cefeb1f614a9f9f94fdce9cd8"
  },
  {
    "url": "assets/js/32.fe4a64d3.js",
    "revision": "8d0a859648a409563c2f568226ce811e"
  },
  {
    "url": "assets/js/33.19d58f0c.js",
    "revision": "2807fbd027a7767d5335282dd5516f8e"
  },
  {
    "url": "assets/js/34.864ae3a0.js",
    "revision": "5d0e5b5dcff9ff99ada59cae67d9b9f1"
  },
  {
    "url": "assets/js/35.569a8110.js",
    "revision": "3fd9e3efbca79539cd8d4b65dd1351e8"
  },
  {
    "url": "assets/js/36.461c1593.js",
    "revision": "6b9443f0c01bb67c66b72c422b776329"
  },
  {
    "url": "assets/js/37.26c6ef62.js",
    "revision": "88e1b975c1e2948ce50ce88b693be86e"
  },
  {
    "url": "assets/js/38.18de27d8.js",
    "revision": "a9843ee3fd043283be1424fa46acd8bb"
  },
  {
    "url": "assets/js/39.de408e44.js",
    "revision": "5b2f949542384c93c25a4f06a176aef0"
  },
  {
    "url": "assets/js/40.b9316922.js",
    "revision": "2376bba5e4e7abea82150d74cbcbaeb0"
  },
  {
    "url": "assets/js/41.c8688aeb.js",
    "revision": "2be6e7a12d10e6765b107d7c3b5d618a"
  },
  {
    "url": "assets/js/42.dfba6d22.js",
    "revision": "fb1ae401f37946cdb443c581752a52a6"
  },
  {
    "url": "assets/js/43.b8dd20ec.js",
    "revision": "8e589df8b3d8a3fd92861a37cf0b76a2"
  },
  {
    "url": "assets/js/44.3cf646b1.js",
    "revision": "96d336027243a7ec340dddd5beae0a93"
  },
  {
    "url": "assets/js/45.b70192a1.js",
    "revision": "2e8f3c0c17d8df70e27c0c5bcf8d35fa"
  },
  {
    "url": "assets/js/46.125b8bed.js",
    "revision": "265823a9d6e63a30593721cf0ad0d4f3"
  },
  {
    "url": "assets/js/47.2ed785ab.js",
    "revision": "4638fd608f35506433699b9f6a789726"
  },
  {
    "url": "assets/js/48.9239b027.js",
    "revision": "3dd018f0af6714064dec4afa30b24cdd"
  },
  {
    "url": "assets/js/49.805a99ad.js",
    "revision": "d9645ddbc41918727e0d4c93a1a9f888"
  },
  {
    "url": "assets/js/5.14c15ef4.js",
    "revision": "2a66bae2410bb9b2ccc717c06a8edd51"
  },
  {
    "url": "assets/js/50.e2aca0e7.js",
    "revision": "99f49a1131a32644d1a369dccb34e45b"
  },
  {
    "url": "assets/js/51.bf6d9f03.js",
    "revision": "8e5d91e3751bf50ed3d78b645950ce52"
  },
  {
    "url": "assets/js/52.04cda039.js",
    "revision": "49a8b39c7a1312be700c73b9758008f5"
  },
  {
    "url": "assets/js/53.86abb7d6.js",
    "revision": "7800f029a297e444cc214d22d1da2c2c"
  },
  {
    "url": "assets/js/54.4929cc38.js",
    "revision": "22af7f19a24174ca20297ad4753bfb0f"
  },
  {
    "url": "assets/js/55.aafe4065.js",
    "revision": "e7eba0d4ba0b023c0ba2baa8dc7230a2"
  },
  {
    "url": "assets/js/56.8089a90d.js",
    "revision": "b809205abd2864c1530bccc3b5ac7f52"
  },
  {
    "url": "assets/js/57.46f3da0d.js",
    "revision": "b00ff699499216cace49e1f7885edb0b"
  },
  {
    "url": "assets/js/58.4021a087.js",
    "revision": "854f1e495fa718210c230eb1376ddf84"
  },
  {
    "url": "assets/js/59.9bf2d841.js",
    "revision": "592630bde62b9e37d6b683620ccc66b3"
  },
  {
    "url": "assets/js/6.ffd6ff51.js",
    "revision": "0ef6fbb613ad603c37dbf275946ada19"
  },
  {
    "url": "assets/js/60.ee2f59f7.js",
    "revision": "ad779f77a786ed4e8044e73013807fcb"
  },
  {
    "url": "assets/js/61.56778bf2.js",
    "revision": "53ba2e490a86438286bc55a2cebc429a"
  },
  {
    "url": "assets/js/62.26092bf7.js",
    "revision": "f2027843b9a4201011a0cff1023eb677"
  },
  {
    "url": "assets/js/63.d9001b1f.js",
    "revision": "4930e6465f4a3632e95b79e3ed4065bf"
  },
  {
    "url": "assets/js/64.b2cc794d.js",
    "revision": "03e3f7bc2ed3ceec0b4f59baddcd51b5"
  },
  {
    "url": "assets/js/65.44578cc9.js",
    "revision": "fb7309094f71f9344c76eb0577a1b088"
  },
  {
    "url": "assets/js/66.097b49f6.js",
    "revision": "132f5a6435868faa1be5ec84ef859e9f"
  },
  {
    "url": "assets/js/67.d0d81222.js",
    "revision": "489287cbd857a32d11b77c8319f277f2"
  },
  {
    "url": "assets/js/68.4e139172.js",
    "revision": "fbf45389f3edbb3a4ccd42fe83560f55"
  },
  {
    "url": "assets/js/69.eb215339.js",
    "revision": "be917a86dad5f10e3d9cb086ee815c2d"
  },
  {
    "url": "assets/js/7.859bfd2a.js",
    "revision": "5ce4eb8b5c71469ac45421e1dee16c1c"
  },
  {
    "url": "assets/js/70.93c4b7d1.js",
    "revision": "ceb8eedeebff555705c63743e03b29ec"
  },
  {
    "url": "assets/js/71.bb4d0f2a.js",
    "revision": "c678b49cd6d145251fc4fb6f342bbf2a"
  },
  {
    "url": "assets/js/72.1f0742c7.js",
    "revision": "cdeeb1b2720e7d0060b07ebb377dd679"
  },
  {
    "url": "assets/js/73.a1685de1.js",
    "revision": "23f5d894d932660bccf20ba413b261d3"
  },
  {
    "url": "assets/js/74.3236b202.js",
    "revision": "31c672a42cc6be865cde357cff2a2bcc"
  },
  {
    "url": "assets/js/75.279188dc.js",
    "revision": "cfaed07c75a820452a9470a9bea6ec73"
  },
  {
    "url": "assets/js/76.05c90654.js",
    "revision": "f014e38f15cc508b1065dec1b39e4b6a"
  },
  {
    "url": "assets/js/77.f0820740.js",
    "revision": "a40d90c667d4e3a632a39e3cc1e9ff9d"
  },
  {
    "url": "assets/js/78.ba77a8f8.js",
    "revision": "295760f5d9f190a7b5506ddf72d51992"
  },
  {
    "url": "assets/js/79.7fc54b8d.js",
    "revision": "798f9bcdc0ba27b240f2991335ffea58"
  },
  {
    "url": "assets/js/8.700031fe.js",
    "revision": "5c98d25950d8b1278c053f7ef3ed0560"
  },
  {
    "url": "assets/js/80.f25c40aa.js",
    "revision": "babcdf459bd6f97fcc02cc3012cbb73a"
  },
  {
    "url": "assets/js/81.c8437d54.js",
    "revision": "f1bf2e7e851aa2a9b7565893096cb77a"
  },
  {
    "url": "assets/js/82.6035ca73.js",
    "revision": "82e8c8c02bab2734d2a5665a2f429b4f"
  },
  {
    "url": "assets/js/83.f94a3b4b.js",
    "revision": "a27465053f088b52b8cfd4e3eaf3f475"
  },
  {
    "url": "assets/js/84.03bd3665.js",
    "revision": "5386b2d6b979583bdc357dbfe5f321d3"
  },
  {
    "url": "assets/js/85.c2220581.js",
    "revision": "f5c54df1d6da6c9d49fe03a30d218d1e"
  },
  {
    "url": "assets/js/86.67fae974.js",
    "revision": "33a9a353f0d3b6aec7e7a646bd7cda32"
  },
  {
    "url": "assets/js/87.0534ea0a.js",
    "revision": "6e8c3288aa056a4d1b1e987983db6d57"
  },
  {
    "url": "assets/js/88.4927ffcd.js",
    "revision": "d23c622b5dda1d57be56e6cc3c0bdbc1"
  },
  {
    "url": "assets/js/89.40102b41.js",
    "revision": "32206a87c6cc7a2ff16a911f5560c092"
  },
  {
    "url": "assets/js/9.b32acb91.js",
    "revision": "6c1594f5155266cd815bb13d2209f4c6"
  },
  {
    "url": "assets/js/90.3c663978.js",
    "revision": "72caf38b12da0e7f886a6cb3f9e8237a"
  },
  {
    "url": "assets/js/91.b2d25d5e.js",
    "revision": "5a82f31f39b98de3fb4ae3b702dce00c"
  },
  {
    "url": "assets/js/92.5a4dd228.js",
    "revision": "a65c9ecb3e29482dd82e446a6a65ef6a"
  },
  {
    "url": "assets/js/93.176b52cb.js",
    "revision": "04956857e72a9b22af9456530e8091b7"
  },
  {
    "url": "assets/js/94.fe6f741f.js",
    "revision": "09dd62e844d52e91e8cb3d653118e132"
  },
  {
    "url": "assets/js/95.7ed81e79.js",
    "revision": "3f87eefbcf409a20b4b33bffba897d8a"
  },
  {
    "url": "assets/js/96.3a14fdab.js",
    "revision": "8e3e54046e9f1c51bbc268dff4a122f2"
  },
  {
    "url": "assets/js/97.ff3d4c0d.js",
    "revision": "25af815f63759c16a6f42cb893e682a6"
  },
  {
    "url": "assets/js/98.3d4a2685.js",
    "revision": "77e1c46b2fb0a90faf6a4e36dcc30293"
  },
  {
    "url": "assets/js/99.b399cd57.js",
    "revision": "425c1ecf35c41560eb233702e7f49e6f"
  },
  {
    "url": "assets/js/app.efdab850.js",
    "revision": "75c93a26fa6e7059ea552f381862b665"
  },
  {
    "url": "assets/js/vendors~docsearch.49ad9c45.js",
    "revision": "261531456db3668f32e6ae73c96a411b"
  },
  {
    "url": "assets/js/vendors~flowchart.92fd2dd8.js",
    "revision": "16e666c497452eae4b802f01305f64be"
  },
  {
    "url": "assets/js/vendors~notification.7b99544e.js",
    "revision": "86dddcddc0128bfeb6c8ddc50ded8c97"
  },
  {
    "url": "config/index.html",
    "revision": "df5e2a8d2e373490e8550dfab3c55024"
  },
  {
    "url": "faq/index.html",
    "revision": "b7bb902919e6d9d605a430637808dc71"
  },
  {
    "url": "guide/assets.html",
    "revision": "48b85a446562cc8897c44c0c5d5580a0"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "b6c28c85fcc487df200e5b069978f466"
  },
  {
    "url": "guide/deploy.html",
    "revision": "19b50b9cf85bd0f36c113ff024d78c92"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "7ae7911c991136e679d202601b626ed7"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "42a6399c6743036d4237f7bf118f1e8c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9980557e0d4f3e70d7e95cb343f7efa3"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "748c769a05e6636159ec970185027c47"
  },
  {
    "url": "guide/i18n.html",
    "revision": "58c6fc4b183449bed72e168a94b7655c"
  },
  {
    "url": "guide/index.html",
    "revision": "a7404703d1416efa8999187ed54dc9b9"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "d23f21ada5296055aca7c7f7e32e72ed"
  },
  {
    "url": "guide/markdown.html",
    "revision": "0a73d033a173c2c53b1f7c3c9b5669ca"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "2226745b69d045408c2591e5b8f3855a"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "3accbf9bc350d9af2f033c38fccfc210"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "4e1fc2ce5b4ecd7d6b4064148fcb7461"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "47a677148529d8108b366c3874228739"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "9393efbb27e30923910f02b1f57f0ed8"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "db5d06ac5a8aff5712960d2c509d6430"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "66bcd275508cf6832039d74e614b08f3"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "c83cf495736751fe80d1717eeec2a00c"
  },
  {
    "url": "plugin/index.html",
    "revision": "32095d1a3f9edc85ca373038a8198015"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "7fa446a425db0c4766bd93cb483e1a16"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "6686ba1badb06d6242f0da20c7ac5e7e"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "82159238b1942a9b783af81d9f35fcb7"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "4b66f47c7b41b8aee7c5abdf4c67a958"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "1930a61117a7d84adeb893c762cd69e3"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "87784a6876e698a614cd83a6e97997af"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "9551375c176ccbee97d8b4785f060f80"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "d6c233b6222d25da93c6ee3553e5ded5"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "2bdf071c286a998aa99cc12cfb9085bd"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "466e166646891e8835813f57d80abc32"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "3c81a97ad38f225eb27b039d9ebd7b45"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "035a47fc5b8b3564b8f4a41b9e273952"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "4c3486caa37fb0bfc16a765cbc7ad54d"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "22f411df105ba3e8c4ed9dac8b4ef2af"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "53ba6b0af52bbe0fa7ab963b3cb1b65f"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "8601c0e08d425316d1ab280f14acfd3b"
  },
  {
    "url": "theme/index.html",
    "revision": "070a30635f0f1f25d33b0bade6a1d43c"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "d00f496eed0f46d7b9aa285a7a3c0406"
  },
  {
    "url": "theme/option-api.html",
    "revision": "6489d7ccc76ba37e2fb57ba7ad79d832"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "610db120b3a9660e5ac9ed4a5ab68f6c"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "02017eb8808d25910de2272ec645bf6e"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "71355b18316aa020f401a3f7a29ee19b"
  },
  {
    "url": "zh/api/node.html",
    "revision": "3e305b4ac226bfa926a89a17540da4aa"
  },
  {
    "url": "zh/config/index.html",
    "revision": "6e5881f0da8fcd518e701f5333866c7a"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "779c25072c1ccea71ba9c6932cfcd9f4"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "89852ff0926087dcc2e0fd49116001b4"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "632c8ad641b10c402973bc2cd271fca1"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "50711c9a69a99dbd8fb8542e99df9f6f"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "a8053577498dac3cdd19d980b234f6ad"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "3bd66ef7728e82445a208b7c157e4e1f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "98c75b6ceaae444e04a5ee288a5eb024"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "efa8d5cbbbfbba82db2b0cbc38ee2079"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "00edbd5440f75f06aa9587fd846fa234"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "fcb4e98aefc706d560d73c0360db924b"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "a7f0bea895b04283848ff781e56777bf"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "308bfe2b4b7382c3bdbbce6f558d99d9"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "63caa0c6945ae233cedc4c520279c500"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "a06eb20a9f8920b93c9d02b52fb47ab4"
  },
  {
    "url": "zh/index.html",
    "revision": "63662d918c5d79314b1c329e363e5c4a"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "c7140670aad67bbab027cc368147838e"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "3727d9b8009442768831690631a0beb2"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "72063024ee505eca38eab48eee13701e"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "30d067c96fee73207a988fbfff1c0045"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "2637d26b06bf182aee693cc66978e639"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "c1884d56f1e8aa0f163de8dd9b873b87"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "4bd620c4edef69102d404510db2193bb"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "55aa2975160044d7ac5bcc6cb75c5005"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "ed2864d4a06c14e34f2c27fb86502f72"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "257b69ee4beb74f5c3b911c3ffeec68c"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "eb2cb63a03ab3aa08a2799c7dee99a40"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "ad0fe942b2926176ae13c8fc127ec709"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "1b500ca361feeeec3d92a23361c409dc"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "1af1448b4302b6fb9407732de5442d23"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "b3133918204ed91d8f9db47276de2de0"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "bb006f8275313f5a97b5bf782b163681"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "57d11ec1245115c940f624a329e23298"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "4f204111e047de2a9fa40254e129c72e"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "379517efc2ea2ecaae0bfb73928fb314"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "9d5e556896c1f9be7b5c5a414c9fd4e4"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "f6b705185b532466e4c5b4403a79a0b8"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "d0b4e7ef73b0e4a1d8b9c70f8bd1a952"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "bb1d392a94945dd0d4d6b67b4be985cd"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "37a5d5f4274ed0c2ef7d4a7914dc4129"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "71e61788e68af628c6c9f010c357c181"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "dd0c98ce64b283af2d50ad27574e151b"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "3a16a2825707b68f09ca07446f77d54a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting") {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
  }
});
