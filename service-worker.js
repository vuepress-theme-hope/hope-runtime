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
    "revision": "79af498b179ddc194db014efc8d93b11"
  },
  {
    "url": "api/cli.html",
    "revision": "9f1831252c3b6dc91947556e522c8430"
  },
  {
    "url": "api/node.html",
    "revision": "da024eecea891a914c4e22674257ed03"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.aeae219e.css",
    "revision": "59e71361666c6d54a45ca566de6069e4"
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
    "url": "assets/js/11.6ef7e49b.js",
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
    "url": "assets/js/19.e7d0a855.js",
    "revision": "c189e3627299827d4a697a4aec22c412"
  },
  {
    "url": "assets/js/20.bad75c4a.js",
    "revision": "295a84054c0df5e2dfd92911a2cbbdb6"
  },
  {
    "url": "assets/js/21.a1de1268.js",
    "revision": "906f0a1340eedabb9117f3616b1a429d"
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
    "url": "assets/js/app.cf200adc.js",
    "revision": "d9a682e620635a7d459b5713e1a49ca7"
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
    "revision": "d4a426d83256c1a4c861398e98bf7d8d"
  },
  {
    "url": "faq/index.html",
    "revision": "d071083d7990869ad3b3230750cb3dee"
  },
  {
    "url": "guide/assets.html",
    "revision": "b29d679ac9b4e0eb1abd2ba25e8dfc4a"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "dd74e583cb3a54e3fa6711ffc519ce6b"
  },
  {
    "url": "guide/deploy.html",
    "revision": "f94ed4394a7d5f144a04b55b4dcedc11"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "7a4e86e5fb17a8b6eecf69a2bc1e08e8"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "8dfcec005b545b93b0bcc71a2b708ca8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5f3b8a5465a3f5817ffea88ae1c1c0b5"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "7cc0610da912fb43ee293fd204d122d2"
  },
  {
    "url": "guide/i18n.html",
    "revision": "838bbd6303547265503cd70481f7c011"
  },
  {
    "url": "guide/index.html",
    "revision": "5fa2c223f98a635fe574d969ed7391e1"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "cc9090dbaf9171fc835d07412c9292c9"
  },
  {
    "url": "guide/markdown.html",
    "revision": "2da0b18c8d23365a80dab7b591b8ff38"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "f4fad22a2ff0dff191c25ece8af5b6ec"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "c095247993c9814024b68afb6c911580"
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
    "revision": "86dc9732379407e7ecf775e21f564ae6"
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
    "revision": "a296494f6c331d361df207b37c041c72"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "a5d36ab494cc86e9cbc32ffbb204c47c"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "0aa19a336a8fbb12963b17a1f1c54774"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "142ecaff70fe16d7c3731d55496ffda4"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "e3fb5221d79bbefd8095f8363010fa38"
  },
  {
    "url": "plugin/index.html",
    "revision": "db66f1cae40f38433188b1d8e05ec0f9"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "790937a4bfaf4cfa0755f1a960f39163"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "c4cde57f7a30b08610e48287821b3a7d"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "17d888e4d58afb21844597e73f331fd0"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "efa29e8a0e3cb5930e0ffb0e1e76bc8e"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "328fb271dd966b8427933b4c9439f6fe"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "d603b0e57f45da6e20b138169f851e87"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "7d82b0f41f07c2037d6f1f2912bb6bd2"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "b7cea204d9d419dfe6a80588e7058f45"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "d8e7da15b889f5e8aa195f701b8fd69c"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "72dac819cf350532c98390c2dc2707fd"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "d943644e83e4f76f78744cd24b7ae21a"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "63c199ce06dc5d5f28c9f5b29589d9ca"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "fe581859731f33e4521d880b49519e20"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "30562f6bebe345a3fa6861e007a7dfbb"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "413434dd94ee067237d8da37ac2d05a1"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "c575c19747e5a3af19afbcdc072b5732"
  },
  {
    "url": "theme/index.html",
    "revision": "2ba48570787e0e1158da372351268375"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "f64c77186ff75aa93fe0f6d13d440b85"
  },
  {
    "url": "theme/option-api.html",
    "revision": "4d0d0a144122e0146ba466b0f6d51383"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "d8ba1f12864fb61c41fc487a4b786398"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "ff7d765528f0bd188032e0a482dd8913"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "04f4c3fda6f00076d6731ea00de6ca91"
  },
  {
    "url": "zh/api/node.html",
    "revision": "40c18b46fa0b8914277910a3bae60a0d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "fbe4db8807388ac49c4247fd787c6431"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "a01bba9539da27d3d919e91a07f40539"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "5ed87c5f4a1227d2e48bd6efc5430a8b"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "d435db2cacb0e34f4aba1be7c74e11b8"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "06a00cdcd77cd0f4946435d357d15248"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "39639d242651d18c1913f811d35b00ce"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "155e837d78c4d95f0affdc7e8eeac767"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "5bfb360b7dc79157e46014d9337e51fd"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "6087c09b6e36326a35f3e2e2b5309ada"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "7aeb5e4a8d55e5751a6ddff0191192dd"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "9f133edac75359c9cffa8aa05411694a"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "1d7e8a45630a7e4e2ef7ecebb1436b4d"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "64ea8b1ffdd82666ad6489cc0a134ec2"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "b5933971900d9c2bddd3fcf9743ea75c"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "66cec8e547a88d868ce8e14a32bfbe81"
  },
  {
    "url": "zh/index.html",
    "revision": "fc45166b281901f2f563acb93d884564"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "26c890bc4298c8c36a091f8c4e7f9f87"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "54bf4dcb5aa27cf98f6ac5cad9c643e7"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "ff4c2f776ee31c1bd109ce42eb2ba8d6"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "f36217235bdab6e94d42ba346df1e66d"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "c774f43f5bb61fc84cec86acf6c08e6d"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "d4f615bfbf8a5802ddc0b2ac3161ea8c"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "027ea902662fa205442380142b942897"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "7f1ea6b09462ac57456e1cd5ab22b310"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "7a6a50939b5a024db3d62b6eb79fe31c"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "2ecb69f78ab84810bf5272018ec3ace5"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "0b51701e2070f185a27c1db35ad7ed4e"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "fa3aeac7bbd70f526ad86ad713d0b9de"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "bea44538aae1df1e1a153aea05d553f9"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "66b92626ec0c9424128f9347a8363c5b"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "baa869c5ed7e505e9ca6e5eecd8d187e"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "04c7968a4cbd2ee670541f18abd86d5b"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "b90c3e659cfa66ab8d9508470e1d58fb"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "49e642eed845ed78a91d883da92f5cb5"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "968b496134cf159483e6afe4e935192c"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "364837eaacd3a3406033308dcdaa3fd7"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "0f9a5a5227cc629db4c33208c847fe1a"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "aab84ed4618f99cdb9c5e17c4d2fac21"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "880abe05e26670975056ff65e94b9288"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "8cdd5bf346285702acd6fa606d056101"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "bf11cc756d9a30d5cdd71c70b0e3e23a"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "06b50f8c7164c386934ec94b3484e0d7"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "b64b3d87bb821ee5bf623b2be1e2d71b"
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
