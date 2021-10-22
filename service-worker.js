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
    "revision": "83ce0ed7da31346ef26ba2e92bdba60d"
  },
  {
    "url": "api/cli.html",
    "revision": "0f9a167e4ea3841a576f748e0ea39799"
  },
  {
    "url": "api/node.html",
    "revision": "a472b58161d08e066c3116259e68a56d"
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
    "url": "assets/js/15.3dd16c3b.js",
    "revision": "0a98149e8fb8a9c453ae33184a6d6e86"
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
    "url": "assets/js/77.42cc90cb.js",
    "revision": "0b4aa639486c9a015c63ec2b14eb1b6d"
  },
  {
    "url": "assets/js/78.853e1f34.js",
    "revision": "098a7a4fd44e396c5709ac1871516185"
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
    "url": "assets/js/80.e995b349.js",
    "revision": "05582420e078f59427251ecd40881049"
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
    "url": "assets/js/87.194e5d77.js",
    "revision": "961581d3c35f6f62948d3736fd6e2d44"
  },
  {
    "url": "assets/js/88.71ea2817.js",
    "revision": "2ee25561f81208a6997a61e562940fa0"
  },
  {
    "url": "assets/js/89.547b0a45.js",
    "revision": "f693d3a7b201e5fc90f154cda3e7101a"
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
    "url": "assets/js/app.a464b9ba.js",
    "revision": "0ad9130fd29b56e9a6a7e544d1f6c4b3"
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
    "revision": "40194c1f18461580d11fcb849e8f4b06"
  },
  {
    "url": "faq/index.html",
    "revision": "77197c199f5bec0f63baa3668a711c4f"
  },
  {
    "url": "guide/assets.html",
    "revision": "6959f540dc57c60c13a1fba2e89a7663"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "f55722dd0f16d4b8f2546f8dbe72c164"
  },
  {
    "url": "guide/deploy.html",
    "revision": "b963d52539d35cf312da5aaf67893dc2"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "3279913502fa70041ea5205ec71621a9"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "7ca46cd39fbbafa987cc27b63b4f3505"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6214ef0f52a6d209d4073d4df45dbeb0"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "6e31036c60a3051184ea1db0aa83fb92"
  },
  {
    "url": "guide/i18n.html",
    "revision": "c3494732216924f54d9799c90d733ec5"
  },
  {
    "url": "guide/index.html",
    "revision": "c3b0ce7f96b5de7bf822511259afe611"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "bd2dcff0db70845d54d4ad7f1138fb4e"
  },
  {
    "url": "guide/markdown.html",
    "revision": "a9abac2803e2e96f375c6d8881fc4108"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "e28d7ee821b988724c41e5f209bdd915"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7ab9002997bc6210d6a0c9ef49925784"
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
    "revision": "76add030e2c68eeb692f832c370fd5ca"
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
    "revision": "075b8373e2f2c663ca0f517cb84c48ad"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "bd8749e73b175489769c5983d501fba1"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "cba44a2f296baf44bd451016a45f5637"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "1b6fe09e8cdb2d75addcfb957e7aadaa"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "62c1e81a5f519a19376d5f5f16380974"
  },
  {
    "url": "plugin/index.html",
    "revision": "a601433c9e9cd4456d942743ef54488e"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "a75d2272ecaf30dc9db9fde9f91527e1"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "8b50e9545a65184de93399f2650ff6db"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "471676678cbe87be136e8c063aa323be"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "5449e4174cc5200adf4d2aa7a1cc49be"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "be00b594c9c1fad9e8dd5b2818abe37a"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "da73163464204974a5e9178ec94e54b0"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "5f72d6d7181269eb8548111db988e049"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "d66c4233e75cdac6334ed61aaeb1a547"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "31bcaa3e5b1f250d6a431a2816e995bb"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "c5cebea91ba885c7ed69638e0cb5e46f"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "0ae79d54a889c88a3efc2acb09fb567b"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "b12ac1604a7b3103cc736be23871a26d"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "69d2d3b737e5b01caa4ba0715d6e2713"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "6a11895c74739ca33bc121dde5e41459"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "977ed20fa3f118dba1884f48ca7e0a5d"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "420e1311fa7a1b79965647ecd4e12486"
  },
  {
    "url": "theme/index.html",
    "revision": "7be4639e1f5edce2079581c23213e658"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "689b344e54e5b0d45fce8dcee470bf0b"
  },
  {
    "url": "theme/option-api.html",
    "revision": "0263209ffaee014b0388469503ab602b"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "61426abdfedbdb8560a1cf3704c5baa4"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "c63bc10336c4fb73597de8624c9d0f40"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "54b5fb40ccafbcf399becc44e75770ff"
  },
  {
    "url": "zh/api/node.html",
    "revision": "6c416f14b5e5467e3df969b0669c8bc3"
  },
  {
    "url": "zh/config/index.html",
    "revision": "080f0a6d559e2fd0c440776295467d5a"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "b856a772e2204416bf399a3a2be23233"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "9eb68c3b1aaf7ca95d7a26d35ec49874"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "eb4b4fd9f6b02fb9359d14afae99a1a4"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "312dd3df12e3ddf504f7f09880fb7d7b"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "deff0f069acba07ae0537673e2e30297"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "2ba3fa47118782fdda557d912ddd6824"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "f5dd8b2f9259d9ebde9be56e941e3a7b"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "98b1ef8888c811de19f642d4abd14b7d"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "193f17a21bd89f119139e51b742f2cce"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "f9f3ae93ea96ba59953a2417d1e16be4"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "35cad2c4e9cb0025787e585176b5bc6c"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "0e16007805eadb3701a902d5db792feb"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "fe310afe9951ecacc9fd852e449834fb"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "84281ac4e7a079321df9b75cf44a880e"
  },
  {
    "url": "zh/index.html",
    "revision": "bdc23d25812359c86fb36a0193c4845a"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "32a1c89a9a0ceb1f38b7eb57b7d7c109"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "0471610f8fe88e72a4f988be24dbabb2"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "456988cac88010bd0d8303c93f51e8d0"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "0548c88186c082f0d6b6326c0f46b98d"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "1c78ae9f69704fe5216c90be9535bd89"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "b28c01f8e7d7da2c28f44e3f3e355944"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "53d8647a5f8ac2688b27abe7ac4d60d2"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "271339628bb446d0c6ca2d3c0d304c16"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "f6b68ad7bfcefa0397e9011faefed6b7"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "5f4b6816553e4a841998897819b8f397"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "980294820224ce46eacc13c4925436da"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "489b149a39a075245231db0b3c98451d"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "27ef6c4cf322b90346dab7342de5f202"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "55f4cc8a7bb13d5c5f6f9d67abd9c4fb"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "523aaf7260284245057332941f5c5777"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "0a2f73ecc70efe166720c03ab55d4762"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "61daafc7c8d5ca035dae04577b9263f9"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "48ebc84cfac24c83288ea858d6480cde"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "8c1371b826a13e58a1e15afc928ebb54"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "21b387e776c1bd1c9cfc6c08af7fa785"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "d6740521b1049b4a92b16c0238102a8a"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "cab4e59040f67caa5e6d41ee29e7be2a"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "be01b7ef3277b0f010e8e3e8cef14f57"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "6758f0e367b2c148991de1da34f3e507"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "028f1d9b3bea420e2005de213b1bbce5"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "e33b00701dc5131b3b64edb6d222c0b7"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "d0286c5dad5348026a94e73021e3bd79"
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
