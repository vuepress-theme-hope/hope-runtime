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
    "revision": "e535cc0c533e05782b76d15c5712da09"
  },
  {
    "url": "api/cli.html",
    "revision": "e1395b975d0add974f0a1d733b990d60"
  },
  {
    "url": "api/node.html",
    "revision": "99fadb9d473c09d8ba23eb58db5316fd"
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
    "url": "assets/js/107.60cd6584.js",
    "revision": "6543843e81a93de524f67d7255588cc2"
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
    "url": "assets/js/app.2608defc.js",
    "revision": "73dee768e90748cf401897fbf6ebd94d"
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
    "revision": "c6cd746f265228b58d7d5a30f3449a18"
  },
  {
    "url": "faq/index.html",
    "revision": "16bf822459637752355a4abfbbd15ab7"
  },
  {
    "url": "guide/assets.html",
    "revision": "f00e935831004319208e1a6392065394"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "59abe24ef6e62f6485acda136e1e98ef"
  },
  {
    "url": "guide/deploy.html",
    "revision": "3a719ed6834ee29752bb8db7af17fd91"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "4478a22fe22b8f7f0d52e36bb70592c6"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "8f97eda1e2093fc4b79dbd1bcb21e357"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0eaa45822cde32ed231e6a00d4422420"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "2ec6c56411c71bde60214314a3591b28"
  },
  {
    "url": "guide/i18n.html",
    "revision": "eca69c3a598fd98ced5e1b0edddc1cac"
  },
  {
    "url": "guide/index.html",
    "revision": "c55b566e39715970cf0a34dea6ae11b4"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "445dd7e2983b33795862d66346b416b9"
  },
  {
    "url": "guide/markdown.html",
    "revision": "b654a7983b87c3a011c87a3efbe756fd"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "8290a97e7fe641f592b4a134413ee40b"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "38d6bf7a39b33eb2b62fa28b036c53f6"
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
    "revision": "e972b896d8657c59e8f2bb32945ef105"
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
    "revision": "5149bfcd31acb58c6c255e5bfbd633e2"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "c19a59a3f1e9b41df348de0bd62d8959"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "68a98b4e362aacac8dcd913c3f04ac75"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "1113d12f9632df7460c016e0029ff978"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "59e05261ca4c63e13529b9a01cc76682"
  },
  {
    "url": "plugin/index.html",
    "revision": "1bae46a831e81411d12c27c3f16bcf8c"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "dc656266c6cd52a9a094973bc3252c61"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "75ccadef5a2b7a147f71e8e4f2c29d27"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "86d8bbc4040956ef82a8521d08fcbe2c"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "00f33a7c203fdaee3249481790dbe29f"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "64fa231213ec68937c5eb5efbd2d3d11"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "b6d2a058e8537ce226361ca1e6d44a72"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "e01547ad1248c18e01e79f8836030282"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "4e8b2cef6f7ac785fea14f360e84841b"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "e437230dbd23e8cbe22da986bd200bfa"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "1b9dbfdef6086fdbf0b961c502ae5536"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "f7b467b42025be59127acfb71c1ba179"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "533e52d059e7e420ee52c5510f13fe16"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "d236fe238877fbcdff4562622073c5e6"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "4d0bc3ce966dc4c5800cfd779d28910c"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "9e2f06d7d89f4cf8c243a0774e3ce306"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "b50e4ab29622b827a036dd9820065896"
  },
  {
    "url": "theme/index.html",
    "revision": "80969f7a1cb1039f592248b5eafd273e"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "383fd3cb791fd6389445719a0eb5a7cc"
  },
  {
    "url": "theme/option-api.html",
    "revision": "f423ae957e798ab0f9f58179accbd49d"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "29acc2483edfaeb306399756d5d68647"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "5f3a0e7100c4580a2a4d1badc7c283cc"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "e8dfb1de3f88693b015ffd81d7dabb7c"
  },
  {
    "url": "zh/api/node.html",
    "revision": "e5c3fe2614379b1d89d6a15577066b75"
  },
  {
    "url": "zh/config/index.html",
    "revision": "e744cbc47c6cd79bdf766fff8065c878"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "d6fa501eb9391bfa8fd9248b7fdf8f5e"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "129227b1f40d48dd8cec0bef9b7c9a99"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "d5312d2ac82e4bd4f532deb28bc8d161"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "57d4139519938237d307e3e0bc17de70"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "e31362683e5547b3d5ffdd3bc71c2fcd"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "561cc26b3e56fdbf3554f9d407d3313e"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "80917b7a8d9aad0d6c72f1866f08ce09"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "eef4aa7f4cd9260dbc673fa35414e5df"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "c85fadcaecf5453c6f28642be2447039"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e2966c29a08c6badb6ab0745a9b6fa35"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "772b7ef68e1ec00a2ee94c89b847e7c1"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "3dc6890a5251639ee50592519c81d883"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "df7b5a85f59be04d93091bd27d685a4a"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "e6c86c15fe73a340bb1fca737d3031b4"
  },
  {
    "url": "zh/index.html",
    "revision": "08a008aed42d8da87e1285a6983cdd15"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "88e990a690dfb3110ed898dbdeb65016"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "7b805feefedceccdbe3f9bead9b475dd"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "60f97ba9d7b109fc467c91ecd172622b"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "6bacd5bc6f32a2ce3a83a4925b500a86"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "54b6d17fdc123d843e96da269afe8804"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "81d59b64ac7ac4ee44c45b230ae23931"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "b3c7b987b6d08a9fc877b8f94b4b821d"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "ca76823712f0888e0182cc21922a7a83"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "221ae627962cd76f942cfa69119c6c3e"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "43a71c5844b09c70ba290258fb007eb7"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "5df5cf4efb82c6d8fc0694bef7c76fc8"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "f006987a3ad501fcfbca086d4ff017d1"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "906a2786af776d49b6f1b442d0ea6936"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "6a457c17c4f7dda9423aff8511149abb"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "89618930ac42f7b401ad8c6cb67e57d3"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "e43737c761403decbba033cbbc548943"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "d2f7656a6694a3e6599953338be8efa8"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "67ebf388a61cdbd087cfa6878e92e827"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "a5eb2040279c4119d4e7040275e5a5d6"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "5879b505496c809933cbaeb03daee898"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "f0d6dc207a4b5cdf9e1b1557eae0e210"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "e25c916a7e4757b17d9748c28df80707"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "774cf17ecf6167c8862bc27a2c38ddf3"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "b2eee079db45aaae109d96eba28db927"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "337161bfb5e3099069917a493bdbe663"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "0318bbaee8f4246667d993dbb484e10e"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "6b1182a98f7e7300d29b21869c93ce70"
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
