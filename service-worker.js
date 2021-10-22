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
    "revision": "04f4f28937e7d1cc4806c6e5e85ef826"
  },
  {
    "url": "api/cli.html",
    "revision": "7d567059ef9a75d0ee081c4e70237a31"
  },
  {
    "url": "api/node.html",
    "revision": "1c3e8dc705e280672760cb6046856eb1"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.d91b2644.css",
    "revision": "22633173e3b81d204dd620c1b91b5aeb"
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
    "url": "assets/js/100.508f26cf.js",
    "revision": "3fb052658e174c67ea805bdc5d2b5398"
  },
  {
    "url": "assets/js/101.998983cb.js",
    "revision": "e8c3520c70233bd42e7ee3d2309ea356"
  },
  {
    "url": "assets/js/102.f40c47ce.js",
    "revision": "83e6752706741197f77726cff288486b"
  },
  {
    "url": "assets/js/103.381a5996.js",
    "revision": "c53bd847998b2cfa427cf1728f3552c5"
  },
  {
    "url": "assets/js/104.34e2d504.js",
    "revision": "1f7a766ec48cf29076ea59aa39b77635"
  },
  {
    "url": "assets/js/105.a7a6e5ed.js",
    "revision": "b92da9eabd42e37334e049e8e53782ce"
  },
  {
    "url": "assets/js/106.21002c6e.js",
    "revision": "07e6d328575f43367ed66537a88e60b7"
  },
  {
    "url": "assets/js/107.0fdc4df0.js",
    "revision": "7e8d5d14cc25f54384002b150549e35c"
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
    "url": "assets/js/13.41e2501a.js",
    "revision": "51fe9f9a2c03a410d2709c05a92f9adc"
  },
  {
    "url": "assets/js/14.42c2d3f5.js",
    "revision": "57e4f63ce7c89a1325a98b672c160c6a"
  },
  {
    "url": "assets/js/15.00e06687.js",
    "revision": "0fbcfa7c00b5c56c4f54d9382d6912d3"
  },
  {
    "url": "assets/js/16.c9240dd9.js",
    "revision": "beba5b15bbc90f7eeb88add08f05ee78"
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
    "url": "assets/js/22.a30e9867.js",
    "revision": "de036029e3f0e320ad0127bc4f398a7b"
  },
  {
    "url": "assets/js/23.0fd39fcd.js",
    "revision": "52a26a1254af0286640a41861576412a"
  },
  {
    "url": "assets/js/24.37256b87.js",
    "revision": "77d8ed42f37ef16819fae1a8890746b0"
  },
  {
    "url": "assets/js/25.691ca136.js",
    "revision": "893b7d0f6fe44b3fc86850c28fc8d9e5"
  },
  {
    "url": "assets/js/26.a3e678fe.js",
    "revision": "adec205e42b4f0080c0430bd0ff2a787"
  },
  {
    "url": "assets/js/27.ddf0008f.js",
    "revision": "d11e56ba506e243804f8e0f778e17559"
  },
  {
    "url": "assets/js/28.6aefcb41.js",
    "revision": "550716906c8ef36f7eb3f29a60919832"
  },
  {
    "url": "assets/js/29.11006013.js",
    "revision": "bdf0dbab0e20bcb2c6e32f8fc9159400"
  },
  {
    "url": "assets/js/30.b8895849.js",
    "revision": "cd0b815b511c7b2738be7da39b3613a8"
  },
  {
    "url": "assets/js/31.c2cb4f35.js",
    "revision": "187086f6210928fa866fc9c0f9d25ad2"
  },
  {
    "url": "assets/js/32.46ba80e7.js",
    "revision": "40777d30bbe0cf49f6260fa763e5767e"
  },
  {
    "url": "assets/js/33.c282c2b2.js",
    "revision": "cdba26747b5b6855e4d206656e04f1d2"
  },
  {
    "url": "assets/js/34.66ac0804.js",
    "revision": "08d8c3d54156ca4eb65395ea5d1f3563"
  },
  {
    "url": "assets/js/35.897350cb.js",
    "revision": "cf2ca12a320b6d9748dea1bcbce2cedc"
  },
  {
    "url": "assets/js/36.55d07cf6.js",
    "revision": "ae691f18f2fd736c92bc07519417ef96"
  },
  {
    "url": "assets/js/37.26c6ef62.js",
    "revision": "88e1b975c1e2948ce50ce88b693be86e"
  },
  {
    "url": "assets/js/38.91075b05.js",
    "revision": "836d3ffc385f03cdf435d19c9740dabc"
  },
  {
    "url": "assets/js/39.db04bb94.js",
    "revision": "557274d918cc7390c50067731bec2e1f"
  },
  {
    "url": "assets/js/40.c5379ae1.js",
    "revision": "b428dcb791a97ef628657724066314d6"
  },
  {
    "url": "assets/js/41.3b5267a2.js",
    "revision": "d4ec59e183170ab245aeb068cf2cb232"
  },
  {
    "url": "assets/js/42.dbff53db.js",
    "revision": "cb3e198f8ec91db1fc3ae005277dc9f3"
  },
  {
    "url": "assets/js/43.2736d92b.js",
    "revision": "bf340bbb4225a9cc6beeaeef59a14977"
  },
  {
    "url": "assets/js/44.d2a3f48d.js",
    "revision": "0a0de50dc5140cd73937511ae7cde070"
  },
  {
    "url": "assets/js/45.851e877a.js",
    "revision": "201ea476870fb699a7334053f203a692"
  },
  {
    "url": "assets/js/46.fffe4f6d.js",
    "revision": "10e3bcb235ad0e6455ed8bf7e49537f4"
  },
  {
    "url": "assets/js/47.55e6bc19.js",
    "revision": "59dff9222d8e1a9e0528d88b13ca1c26"
  },
  {
    "url": "assets/js/48.45f3692c.js",
    "revision": "bb03f4f9174d54ad5185dc3d862fc8df"
  },
  {
    "url": "assets/js/49.bab8ebd6.js",
    "revision": "3c84ebaf984491bd5e2315b5151c5617"
  },
  {
    "url": "assets/js/5.3c91061e.js",
    "revision": "f94d4e5590ed9345c255c7201f581507"
  },
  {
    "url": "assets/js/50.4918edfb.js",
    "revision": "0cd572ea7143940c7f6b8b88fb904f8e"
  },
  {
    "url": "assets/js/51.51d3ffc7.js",
    "revision": "d46c8234aee1eedcbbd291f154f23765"
  },
  {
    "url": "assets/js/52.a04e9887.js",
    "revision": "9a896407b33baf62e2d50bf773806914"
  },
  {
    "url": "assets/js/53.ebb849e7.js",
    "revision": "bcaddf9b04bd6ee4ad851cdf8593c462"
  },
  {
    "url": "assets/js/54.ce0076fb.js",
    "revision": "6c0ce4b5020138c52afe8ef4932dc809"
  },
  {
    "url": "assets/js/55.c6b33904.js",
    "revision": "fc22e55b4895320b4e29787abaa8fcb9"
  },
  {
    "url": "assets/js/56.8d5feb92.js",
    "revision": "e6c771ed2e93da13f17ed43e38fc6106"
  },
  {
    "url": "assets/js/57.30eb7e88.js",
    "revision": "61d135823f903532b8f23f9fed448c64"
  },
  {
    "url": "assets/js/58.1b29edbf.js",
    "revision": "59e3083e3cc725e213f5f961946766d5"
  },
  {
    "url": "assets/js/59.f4fd89f3.js",
    "revision": "c9ee701c2de22ea7f56b45de712c12cb"
  },
  {
    "url": "assets/js/6.3ab14631.js",
    "revision": "bd648bf0c3db5fbcaf31ad42e73c2a40"
  },
  {
    "url": "assets/js/60.98097310.js",
    "revision": "376a8129b482ec392a4f0b33c7e20e99"
  },
  {
    "url": "assets/js/61.d06595bc.js",
    "revision": "d4b87c0deed0d4ea6f5608a842102ef8"
  },
  {
    "url": "assets/js/62.944a5152.js",
    "revision": "06e48d2911eb1972a5ab57a19d76f63f"
  },
  {
    "url": "assets/js/63.b03a2794.js",
    "revision": "20323c07be89e0c1f4ccd72b2bf0b800"
  },
  {
    "url": "assets/js/64.b348325d.js",
    "revision": "6b508ca507c4d442ac3bfa9d41419eaf"
  },
  {
    "url": "assets/js/65.575cd3bd.js",
    "revision": "81361401f8aa602c16efcf02340cb715"
  },
  {
    "url": "assets/js/66.84e153a7.js",
    "revision": "0d5ba36e4b281194221a5de82edaaacc"
  },
  {
    "url": "assets/js/67.948cb746.js",
    "revision": "4b5fd430bb779d71233b807403f98cb2"
  },
  {
    "url": "assets/js/68.5e00bbf8.js",
    "revision": "8d3605a496453fa15a1cfb36fcb79a52"
  },
  {
    "url": "assets/js/69.20dfdabf.js",
    "revision": "1103dc777dacde4fd0e3a99f10d09c02"
  },
  {
    "url": "assets/js/7.859bfd2a.js",
    "revision": "5ce4eb8b5c71469ac45421e1dee16c1c"
  },
  {
    "url": "assets/js/70.f0717ff2.js",
    "revision": "a2e3cd36aede6c5e4b1f925c416716b2"
  },
  {
    "url": "assets/js/71.06ed2161.js",
    "revision": "f25ebb382bdcad9a408cced008d15a6a"
  },
  {
    "url": "assets/js/72.a0f98632.js",
    "revision": "c91736c6d0b9fe397820a28549a5f9bb"
  },
  {
    "url": "assets/js/73.bf15a65c.js",
    "revision": "e486c79e38d09c2cc61cc1f3cd7acd57"
  },
  {
    "url": "assets/js/74.6d4a5810.js",
    "revision": "d8f7eeeadc11177af698fcaed57917a7"
  },
  {
    "url": "assets/js/75.6a9f57ad.js",
    "revision": "3ff676808ef1ed3415d8bfa445cddeff"
  },
  {
    "url": "assets/js/76.2d657e9f.js",
    "revision": "772042d4f25daeb284f9b28556a9f9c0"
  },
  {
    "url": "assets/js/77.2075ede5.js",
    "revision": "35de88e854969a260880e997366754d9"
  },
  {
    "url": "assets/js/78.45a70b7e.js",
    "revision": "bddf639baf37d49ed439db34ed8678b8"
  },
  {
    "url": "assets/js/79.2e015c01.js",
    "revision": "934694a107aac32acebbd6ccfbfa2492"
  },
  {
    "url": "assets/js/8.700031fe.js",
    "revision": "5c98d25950d8b1278c053f7ef3ed0560"
  },
  {
    "url": "assets/js/80.bdd3df73.js",
    "revision": "ff7c0f17d063706ea03701e4d6924227"
  },
  {
    "url": "assets/js/81.b1498c97.js",
    "revision": "42d6277bd1cd5607ec8c5f12e032a7eb"
  },
  {
    "url": "assets/js/82.7532b8b7.js",
    "revision": "e51aa2801cef4ff6e04673ed93a28145"
  },
  {
    "url": "assets/js/83.80617eec.js",
    "revision": "5cf0cb04fa91af37a85722201ca7f22c"
  },
  {
    "url": "assets/js/84.fdf2f019.js",
    "revision": "bb36960524dcb03f455f0b22898370de"
  },
  {
    "url": "assets/js/85.c26003cc.js",
    "revision": "c60fd2834ca89bfda83c17311da45524"
  },
  {
    "url": "assets/js/86.15d40b7f.js",
    "revision": "4a57f3bdd0a761ed9254fd3950367fd6"
  },
  {
    "url": "assets/js/87.d6c17473.js",
    "revision": "4e0ba8fc58926676107957044b95d0ac"
  },
  {
    "url": "assets/js/88.4e09e2e2.js",
    "revision": "1ce7851666b9f1c5626c709053794fac"
  },
  {
    "url": "assets/js/89.cd9af5d8.js",
    "revision": "9fc3b1e005fb817b4e0ccbc0a2a9bf2b"
  },
  {
    "url": "assets/js/9.b32acb91.js",
    "revision": "6c1594f5155266cd815bb13d2209f4c6"
  },
  {
    "url": "assets/js/90.bb8800ec.js",
    "revision": "0615d1af7ea7d53019db9e17e94bc828"
  },
  {
    "url": "assets/js/91.5c980b89.js",
    "revision": "c6bd2923d368f3bf615e1b68e1c0f506"
  },
  {
    "url": "assets/js/92.d577ceb9.js",
    "revision": "881fd293718d99de37d5a54ef76f9c6e"
  },
  {
    "url": "assets/js/93.4647e651.js",
    "revision": "d5867bb1dc40b5dd0fd57e5f1c90c316"
  },
  {
    "url": "assets/js/94.842f7b4a.js",
    "revision": "20cbe89cf9aa03d0b2a6956c6bb26209"
  },
  {
    "url": "assets/js/95.e3805ac0.js",
    "revision": "c8b2b94971090e6337fcb1f21a92f2a3"
  },
  {
    "url": "assets/js/96.4f6d09ac.js",
    "revision": "5a51764cc62332255e6f4aebd3bc9686"
  },
  {
    "url": "assets/js/97.169f7267.js",
    "revision": "b3357c6ce74d843b3cfc3197b3ff0ab5"
  },
  {
    "url": "assets/js/98.33bf4978.js",
    "revision": "3ca76a70a22b58ebe046c3dc0ac1cc6c"
  },
  {
    "url": "assets/js/99.4b6fc9ed.js",
    "revision": "917c330dd90cfebded494a59f6a578d1"
  },
  {
    "url": "assets/js/app.47faa21b.js",
    "revision": "5eb512763d6c72ccff2f72426a3c99c0"
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
    "revision": "a14764d18dabf9873b86c4f15d4ba590"
  },
  {
    "url": "faq/index.html",
    "revision": "b7806cfaefc7f0fe9beaef91371ba8d1"
  },
  {
    "url": "guide/assets.html",
    "revision": "71ce000f962cc83c29100550bab4b807"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "458f8c96d6d34c6fb2939e9ee1f90b1c"
  },
  {
    "url": "guide/deploy.html",
    "revision": "cccc7089c09ceb815d3efe968fda21c8"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "35b55264899705379af38591bada7b97"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "8b95a8a234186557196be003123c1640"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ad204dbaa8b46c1baa00d1784bf8cc78"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "9650458fe25ac0dfa0be6e94fe0671f1"
  },
  {
    "url": "guide/i18n.html",
    "revision": "a22320d0598a41eb38d16cbeb14e598b"
  },
  {
    "url": "guide/index.html",
    "revision": "ce29264467feec767e1b66d16ec510b7"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "743c479191cf60c83055509ab61ab70a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "fadecb0708a2ea0462c0722de90015eb"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "6a352847b0587c45e555e7fb0a820a2b"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "1f2807c68a0f162280d483238d452e34"
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
    "revision": "caf301c9eb6351a11d5970d69eb11fd5"
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
    "revision": "5b3dc34213293948d9e597aa8d7c91ef"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "5af1d897a723130c7bda41abef36e5f2"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "38daa9b0cf113abf7f8119cc5d11c0ea"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "07e0256734bdaff279a29a9039ee05a1"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "2ed0aef014bdddd936fa188a2279028f"
  },
  {
    "url": "plugin/index.html",
    "revision": "6d827937ba6024e1419cd34b096872f5"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "7abde2c15df7f7068b88534d2a72963d"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "cedb4f5750c8bf71035d9e512d80c9dc"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "d5a81b9a4e734ff00e1484f20783fe74"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "63efbe7305c9f91610a4cd541831ba90"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "f2c21e9a4ad4c252c470702580894881"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "c49918b652143b8ed51ad254016040c1"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "81db9c03fc7c5871460071650c3fb25f"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "f09dddc6088e0310918d4590db0e0d4a"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "eea82451b84419f3f3af6964053355bd"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "51f5c12e771e8c06341e233b0e450e66"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "e2d8ce8e104b639a0f10bc9cde6bb607"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f70037f17fb95b8c4b015b52b4e148b6"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "3722bac3f31a23e6cab8bc4d9a882682"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "d77c7c1dfd6d88d415855cb2c8694251"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "114dbf61cfff3890eb56c5fa14169096"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "5fb23f5cc36409be17344cf4c38ca629"
  },
  {
    "url": "theme/index.html",
    "revision": "9096de50fe24cd192d1a7fce9e61204a"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "6b3722966e5e4271d29389f85f5ec40e"
  },
  {
    "url": "theme/option-api.html",
    "revision": "48456955313002927b23b65daac5afe3"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "971b952e21c1a90a4694be439e70ad0d"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "6fda5c59230c457abcd9ec2bfb59c1ab"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "9e3878d7f1cf7b2520dd55d650dc30d9"
  },
  {
    "url": "zh/api/node.html",
    "revision": "48e645c4d02e25f80d1f1eca6a660533"
  },
  {
    "url": "zh/config/index.html",
    "revision": "7cf53ab012e0bc0bd94c48573b2eda44"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "46735099af31123ea2bac7f1801131e2"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "e0ecd4ada844d8011dfaa47c0053ae15"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "909a880ca28db71a621fba37b3c47104"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "ee7156dbe5207e2b6c4ab9c85443e3f7"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "03c14fd5b303f2e28f01a5bc3ebce5dc"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "fde932389e986e18c5168cc2e928f6eb"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "9f2d07bce0b816397287fa331ea15101"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "6ec13f604ef418dd09ab610847fa39f1"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "bad4ce82461df6f12e119b1829183173"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "eb729de9162fb5642599d178d5c33931"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "b68004e137082432217dda019e844890"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "f84c792903a95b0973c2dd943ffb2cc4"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "8c7671b4a1528e26eaac54f05bb6fb7b"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "e884ae1473c94abe11d3342242dada1f"
  },
  {
    "url": "zh/index.html",
    "revision": "203683f1c78227097155ddbed71cc601"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "1e4bdc6d617647ab9d54459a144224ad"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "223eaf8aee5db415e6982b807fdc6b02"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "e0147d111c449831399d1e3163fd245e"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "b8e4eabfb94138a77c64867f8296d507"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "b06f1a7eb8345e0a8574e8fc3b8d2b7f"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "3495273b5e3085b0b15ebc86f8f98c57"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "f4ceef083ce705c2f2dae914321da5a4"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "7e99943f85a8b494d7cb6c30723493b3"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "edaa727a1fe60ce59c7927de9c9dde20"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "8cac1b48596bd18bb7df2a4cdace5d80"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "736fa6557cce1205098a31a0bb9b5462"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "673361960629ced1d584597d9392496b"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "77ac3a693093a0a1f3d1ab2b64d54993"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "0942809a59e239cf3d8d401e4a81e09d"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "c081e53b91a141b4eac4c0e00d5f3420"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "21e4e15878988fbe336ea502ab685ce9"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "7de70551f944f33fce10894c3d8cef0d"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "4f579ae30d50919b153e0a00b87c2134"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "1ed804b1bc2615c4c9fa75da9114e186"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "0eec53d50aedddb037598df45556aa0b"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "5829962e6747a2bddf2544b82fbbbdbe"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "050c20eac8f739f41329692a232e1ca3"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "1209eb3eb8072edf77e3223a9e361a8b"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "ffdc9ac465ac8dff03c66d76ce13cc28"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "bc45fd3528ec3dc32dba85055fd4cd18"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "cd10ec49773ff1ec3dea11d614fa7ce1"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "5a8676dea9a111f6d34d1f22e76405b3"
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
