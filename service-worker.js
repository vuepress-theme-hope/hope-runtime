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
    "revision": "30c940901cc994c07d810d849bc3c4f6"
  },
  {
    "url": "api/cli.html",
    "revision": "ffa4e9200d441cb35e70d2bfdb636331"
  },
  {
    "url": "api/node.html",
    "revision": "38653fa99a0a25819ff881056cea15ec"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.7f419f4a.css",
    "revision": "b273e4e26b459d05880e151e38b8dbd9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cc756456.js",
    "revision": "796f83186edd470b32be346bc16e667b"
  },
  {
    "url": "assets/js/100.7d13c929.js",
    "revision": "e5244a651e9ec5da6c917a68af4c8138"
  },
  {
    "url": "assets/js/101.dea97963.js",
    "revision": "17b1bef4b036bdd695715dafc97840c3"
  },
  {
    "url": "assets/js/102.2cef1d2e.js",
    "revision": "55092ca9db49a2f43627501940d26b4e"
  },
  {
    "url": "assets/js/103.e2fe748c.js",
    "revision": "0d85c47c74b1fcca8584cf3f99a1f8b9"
  },
  {
    "url": "assets/js/104.1320bb62.js",
    "revision": "5f33655ce51129b3f10f273866f47891"
  },
  {
    "url": "assets/js/105.08d568fc.js",
    "revision": "383a111dfa3a69ec90f10bd427ae9282"
  },
  {
    "url": "assets/js/106.9554797d.js",
    "revision": "8fc0eb12d01adf6834294978c4187a77"
  },
  {
    "url": "assets/js/107.51ec82d4.js",
    "revision": "693ddf61d01d27c7d39447bfab80c792"
  },
  {
    "url": "assets/js/108.d4386562.js",
    "revision": "6f8e1de04ea385e931ac4ba4803c826e"
  },
  {
    "url": "assets/js/11.4f86b094.js",
    "revision": "cc443e2c5338757674849a1c5f22aefc"
  },
  {
    "url": "assets/js/12.1cfd0c51.js",
    "revision": "30ada40c2978bb1bc33733536a317e63"
  },
  {
    "url": "assets/js/13.84f66e57.js",
    "revision": "928bd4b0e2e2f5b08c23bfdebcd427ae"
  },
  {
    "url": "assets/js/14.f4165974.js",
    "revision": "cd583385f60f121eed3e7caf4a101c48"
  },
  {
    "url": "assets/js/15.de98eb03.js",
    "revision": "9c8e1c7868ff7539a467e79b7edfde57"
  },
  {
    "url": "assets/js/16.a2c0a1b8.js",
    "revision": "f7791cba7e36ad8f47aa13ed3dd9af36"
  },
  {
    "url": "assets/js/17.fe743358.js",
    "revision": "9c2bd0616a28eb74981d30f233a55930"
  },
  {
    "url": "assets/js/18.b332e92a.js",
    "revision": "4e89cf57ebc3e759bc9bff6438916c8d"
  },
  {
    "url": "assets/js/19.b9a374c5.js",
    "revision": "cf5a037a174229002586959e0ae9a86f"
  },
  {
    "url": "assets/js/20.cfebba38.js",
    "revision": "bb0d323fab5737e472cd633f2f8958e1"
  },
  {
    "url": "assets/js/21.99b8039f.js",
    "revision": "836fd060336b20d9362eec8ed6125add"
  },
  {
    "url": "assets/js/22.428c315b.js",
    "revision": "1232a329a5198f9d5f7897b3a15010a5"
  },
  {
    "url": "assets/js/23.133da7fa.js",
    "revision": "04e6c3abb70418a9db47f8c807b05c72"
  },
  {
    "url": "assets/js/24.4bcc1461.js",
    "revision": "e5afb9c988c3dd2069bebeefae57cc58"
  },
  {
    "url": "assets/js/25.5b446eac.js",
    "revision": "271bce0f39be44bdc7fa8145b859ab20"
  },
  {
    "url": "assets/js/26.e64823a5.js",
    "revision": "54200a2a640f26f21909cd6c3b042bf2"
  },
  {
    "url": "assets/js/27.a6a903be.js",
    "revision": "98d3a1466612330a4cdcf8b7d83fadb2"
  },
  {
    "url": "assets/js/28.52b9d820.js",
    "revision": "355ee06e949e8a8431f06539905e3ef5"
  },
  {
    "url": "assets/js/29.eb897ca1.js",
    "revision": "c2c5a137e45544a30ed73697ef70c893"
  },
  {
    "url": "assets/js/30.79b0dab1.js",
    "revision": "ea10888e35e1d6f4f9a78d4c5c966b72"
  },
  {
    "url": "assets/js/31.a96d0eb8.js",
    "revision": "e7ff380ebbdf43074f9ed6bb7204ed09"
  },
  {
    "url": "assets/js/32.ef622592.js",
    "revision": "f509e4a6d1fab2d529005527928746c1"
  },
  {
    "url": "assets/js/33.eddfd713.js",
    "revision": "4f33e4b34e0cf850825591f68b7881ed"
  },
  {
    "url": "assets/js/34.00a49833.js",
    "revision": "de948adea8fd5c64c691184d554ff80a"
  },
  {
    "url": "assets/js/35.3c1a9b4c.js",
    "revision": "616715f6127e3d691b852b7074f8f72e"
  },
  {
    "url": "assets/js/36.f7a62c94.js",
    "revision": "37737f9502366a77d54a09d1e2ffdd56"
  },
  {
    "url": "assets/js/37.0922af29.js",
    "revision": "68d22bebbe0ac41ef74a5e915825b55e"
  },
  {
    "url": "assets/js/38.e0296d37.js",
    "revision": "3d2dad994ae424652d199e6a71eb4c3b"
  },
  {
    "url": "assets/js/39.f6eb248c.js",
    "revision": "fbd6cd2cc4003e5ea29571928287a6f2"
  },
  {
    "url": "assets/js/40.ac847484.js",
    "revision": "e7a1aca7a5bb852269296017af6bb95b"
  },
  {
    "url": "assets/js/41.6ddcff84.js",
    "revision": "965906e9866f8c54ccfd9ef28c0093ca"
  },
  {
    "url": "assets/js/42.a023aecc.js",
    "revision": "3953b4bdba3e03028fc74e92ecb6d0cb"
  },
  {
    "url": "assets/js/43.bf0ebd8d.js",
    "revision": "3f00d587cc771aa1356bbc138961e26a"
  },
  {
    "url": "assets/js/44.fac0edcc.js",
    "revision": "e68c3efa9b769c362b50b431208be66b"
  },
  {
    "url": "assets/js/45.e27b533f.js",
    "revision": "f19537ba5f3ac925e2468e988d312eed"
  },
  {
    "url": "assets/js/46.43762e8b.js",
    "revision": "985d12538f1e085624498412a6c8e942"
  },
  {
    "url": "assets/js/47.7cab199c.js",
    "revision": "f620f75245e006d46fe34a8b6c2e6c60"
  },
  {
    "url": "assets/js/48.221236d9.js",
    "revision": "e06bbd9afceb054c9552d957662d88f5"
  },
  {
    "url": "assets/js/49.ebe89997.js",
    "revision": "ee90f930395d8639e117bd5da6658d61"
  },
  {
    "url": "assets/js/5.0fe2da6d.js",
    "revision": "27397b839f013b395df38c832a85a87e"
  },
  {
    "url": "assets/js/50.8b8559f5.js",
    "revision": "7d0e0a3934d4029f03c9981e30487626"
  },
  {
    "url": "assets/js/51.decf06b4.js",
    "revision": "96b34d5a394390e4d456391146dd515a"
  },
  {
    "url": "assets/js/52.8161ec59.js",
    "revision": "70f9b1459eb28f2b8625ecbf66d494b2"
  },
  {
    "url": "assets/js/53.6f17342c.js",
    "revision": "0c5cdc5a04bcf8479f947580e0b78cd6"
  },
  {
    "url": "assets/js/54.10be0ed0.js",
    "revision": "03489757e2fe98a7642a9e3b8900b0e3"
  },
  {
    "url": "assets/js/55.963835c0.js",
    "revision": "c3fa3c54feee948457e5e85a7a053c92"
  },
  {
    "url": "assets/js/56.02f7c5a5.js",
    "revision": "c7cc65850d5f6c2dbdf569e4fbca3fe7"
  },
  {
    "url": "assets/js/57.4759df9e.js",
    "revision": "2eed03efed3b758cefb25cd421508b63"
  },
  {
    "url": "assets/js/58.ad005385.js",
    "revision": "6ee9ba2416b5076731e283e05bfbdce8"
  },
  {
    "url": "assets/js/59.1d4473f9.js",
    "revision": "ea73bdefc9dd47a46229b07e8bf3f019"
  },
  {
    "url": "assets/js/6.6b1879a4.js",
    "revision": "8a10ca8556415225e66289dc3636fefb"
  },
  {
    "url": "assets/js/60.0a3556b2.js",
    "revision": "2905c6f6d2fbc3ab72d3d40cff8dfc8d"
  },
  {
    "url": "assets/js/61.5bf46e29.js",
    "revision": "5a491af47885d4e97825fec354960970"
  },
  {
    "url": "assets/js/62.a47591a6.js",
    "revision": "a80c72e19f6d7baf2e8a48fcfb764783"
  },
  {
    "url": "assets/js/63.ffcd7795.js",
    "revision": "7f4e1617445c9fdd72c7bca254a51afc"
  },
  {
    "url": "assets/js/64.a7deb3a1.js",
    "revision": "444104bfffe04a014f8685c3f4b9de89"
  },
  {
    "url": "assets/js/65.7150cc57.js",
    "revision": "3f88ec403ea18fb544b9547e3d8b7057"
  },
  {
    "url": "assets/js/66.e88c595f.js",
    "revision": "a39fe29595ce7ee400b6ee7b67b78c52"
  },
  {
    "url": "assets/js/67.9cfebc16.js",
    "revision": "2f6a0277a9057e78539f0fa2d715f749"
  },
  {
    "url": "assets/js/68.aafbde74.js",
    "revision": "e0c5cd561e2c419b4a63c944c2cf7a26"
  },
  {
    "url": "assets/js/69.7906b7a1.js",
    "revision": "db64f49512bd70c15cc83ba30b7f977c"
  },
  {
    "url": "assets/js/7.0103e5d9.js",
    "revision": "b248038d138e0fd91fa6c4b7964bd47c"
  },
  {
    "url": "assets/js/70.26c296c3.js",
    "revision": "a6dd34fe733639663392c39e8571fa29"
  },
  {
    "url": "assets/js/71.46c9fd7f.js",
    "revision": "e28ea37663e1abb0faf14141cb27eebf"
  },
  {
    "url": "assets/js/72.6c011731.js",
    "revision": "5cb4c486aabba9b5093e68d060bf6408"
  },
  {
    "url": "assets/js/73.f59bd6d7.js",
    "revision": "883989c75046bc8c8439b07eeef8b9bb"
  },
  {
    "url": "assets/js/74.62d73087.js",
    "revision": "3591e49e02f4013f35e7e53273f780c1"
  },
  {
    "url": "assets/js/75.7902aba8.js",
    "revision": "205876eca7e2a5a3e0fd51005fee065b"
  },
  {
    "url": "assets/js/76.df177bc5.js",
    "revision": "50b70ab9f5b12c787d8615d02df18b7e"
  },
  {
    "url": "assets/js/77.b1674d65.js",
    "revision": "4071cec6971dcdf25b3f27be264b0074"
  },
  {
    "url": "assets/js/78.76f835a5.js",
    "revision": "320f2e434cb24f6d492569874ebd9d5a"
  },
  {
    "url": "assets/js/79.344a4ac3.js",
    "revision": "d41fc38cc3a98a0e0d0a4cabada85501"
  },
  {
    "url": "assets/js/8.60a91b09.js",
    "revision": "46060acbd08546927f79e16df47efb22"
  },
  {
    "url": "assets/js/80.88e923b5.js",
    "revision": "75b990503d6ae41bf58ae007ad0e112e"
  },
  {
    "url": "assets/js/81.15879af5.js",
    "revision": "ee62c7716e27aed6cfcb67da1e437d2e"
  },
  {
    "url": "assets/js/82.a6364362.js",
    "revision": "e0b731fbf87b76f13ee5751c28f23bf7"
  },
  {
    "url": "assets/js/83.83e748a9.js",
    "revision": "4e399c36d623399bd2a9350147629152"
  },
  {
    "url": "assets/js/84.ecd0437d.js",
    "revision": "05767e8dd4e0b1face6a25786134071e"
  },
  {
    "url": "assets/js/85.ae8cf1bb.js",
    "revision": "4826daa885e8e1005138fd502da98955"
  },
  {
    "url": "assets/js/86.e9ea81b8.js",
    "revision": "f3f35a77c229da244ee226ae7ffa2ec8"
  },
  {
    "url": "assets/js/87.2408958e.js",
    "revision": "8fcb9168d1eb164f79ae9b2d9aea6810"
  },
  {
    "url": "assets/js/88.827fa030.js",
    "revision": "e761cd7057c974744cd0ecfa85761b08"
  },
  {
    "url": "assets/js/89.98750170.js",
    "revision": "ec342d6272a420041f0657e0f666aecb"
  },
  {
    "url": "assets/js/9.98cdd569.js",
    "revision": "4a0863136de2c2009f62b9cbfaa1dbad"
  },
  {
    "url": "assets/js/90.9c1a722d.js",
    "revision": "f7c521dd055b32d4eae1647335d6fa04"
  },
  {
    "url": "assets/js/91.8df05150.js",
    "revision": "4393c1574a44761270b9d4329fd77c85"
  },
  {
    "url": "assets/js/92.3f08bd2e.js",
    "revision": "77c18425f5ee6bfbd2d9d2fcbb3e0329"
  },
  {
    "url": "assets/js/93.d94532dc.js",
    "revision": "2ac503ece6e460cbc418c6d7c1d49f17"
  },
  {
    "url": "assets/js/94.b1bf0321.js",
    "revision": "2396a83bccd9cbedc3da04c040f6e4ec"
  },
  {
    "url": "assets/js/95.cedb0f33.js",
    "revision": "5a67fed74500eb9e661cc18c08397f3d"
  },
  {
    "url": "assets/js/96.e8dea3eb.js",
    "revision": "d6ec6781e4a537578b117a586c0a52b4"
  },
  {
    "url": "assets/js/97.1aebe3fc.js",
    "revision": "a1b5a660b628de76ab43bfc23338f259"
  },
  {
    "url": "assets/js/98.1d61b826.js",
    "revision": "e4e4ca1dab2edecedeeaae6ea0ce15ba"
  },
  {
    "url": "assets/js/99.3a133f56.js",
    "revision": "8ec279724ad7b68f791996396539156e"
  },
  {
    "url": "assets/js/app.22ccf4a5.js",
    "revision": "61dfaba59151fef76de533eb920c6a4b"
  },
  {
    "url": "assets/js/vendors~docsearch.9668120d.js",
    "revision": "00022ce58b61947032bad1d9a87c4bff"
  },
  {
    "url": "assets/js/vendors~flowchart.26a5fd20.js",
    "revision": "e2bffacf84ad93b629b9db30c01afff3"
  },
  {
    "url": "assets/js/vendors~notification.e380e516.js",
    "revision": "3af87a56b7a8bb313941999b19c79bd2"
  },
  {
    "url": "config/index.html",
    "revision": "a307b5edf644f33cb599da0bc405c6d1"
  },
  {
    "url": "faq/index.html",
    "revision": "e5e36c06d7f0dcd6e2bb7c1c375f4a93"
  },
  {
    "url": "guide/assets.html",
    "revision": "00de04a0628a4d3cd8ee7b1e62703c01"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "ecb34a5dc5dc5d178536a87912b9006d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "1ca169ef9655ea71edf845e809acff8e"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "27c776fd4d8ffe543cecaa77478f6891"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "4ee6171fabc2d133ef83b3a2ac04272e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5dd1a3284a1c39cd18b13456b5f6d8f0"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "669c436022ed55563982c117ddf813f3"
  },
  {
    "url": "guide/i18n.html",
    "revision": "b4d9efeefa9e24253fd97434f82ec6ee"
  },
  {
    "url": "guide/index.html",
    "revision": "ac3b3eb049237da0fc9d940479df1456"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "5369717e6336d5fa249550570d00ab0d"
  },
  {
    "url": "guide/markdown.html",
    "revision": "65792f8879ba4f9eb8fb2993aeb975e3"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "f08b0295ae48653a274b279fdece4234"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "93c205fafed6e3a5b47813cbd79cde67"
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
    "revision": "e7a9df6809d7a46034a0713e53123f93"
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
    "revision": "a359c6f5b0d7dc0342bce1766ca4b886"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "9d8b86c3b2e69584a7eb2943bcaead5f"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "71af807f6a61cd29af6d30eaf923a4b9"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "f0d275b2097fa4ae3c0da7d2541c83e3"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "95e23c442e641b80a5057c9a69596888"
  },
  {
    "url": "plugin/index.html",
    "revision": "98b6726c31346c3973d8b7e4b8d2caac"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "487d4bcd51e9dd7bb6fa133690ecb9f9"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "269b70e11b4b2d213af572f1ca104330"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "3ad512d977a20c80b1e63e6e286325d4"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "e61734a4b8b64efea4f90d37295019d7"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "abccbb5ccfabdaba114c586f1430db26"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "0e9a2af81426a8cff13ace43da07df1d"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "509015fe675fb187e97245c21a85f58f"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "cc205849099ae9f9d9d86ff349462adb"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "de62fe9b1846318f5a8004de34379c65"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "cfa1f6e33655a3aa02c8dcc61ceda4fa"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "751a7617cf24fd7d75ddbc9d0238ff5c"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "19cb4bbbb212275c58535a19be72a819"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "7d7ce8d8956725541438452cf93dc710"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "a4a10b6a2fa6cacf7d9bf2490b89af02"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "0bf5ce040ee714e255cf14be5714d3f9"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "35970f29eb8095353994adc097c6434e"
  },
  {
    "url": "theme/index.html",
    "revision": "0c50d264b172d1f882d2b00e8cc7d50b"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "d5b1b9d83b4911298e3ac0b4d3a6aaa6"
  },
  {
    "url": "theme/option-api.html",
    "revision": "afbaf0be13ad81faf57dd878fe8cf4c0"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "54868f49f9c2cfc5eab38ba8d35c2167"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "a0b73d9ebbc08cffbd0e9377a89a8e97"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "d3c0f6646a6cc2d06e62864db517f36b"
  },
  {
    "url": "zh/api/node.html",
    "revision": "22d2fb3ae87799f7314061df22af2194"
  },
  {
    "url": "zh/config/index.html",
    "revision": "d8916289d17a87e4d9646488a3146e0d"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "3381f9d6e475ac47050730ed9ccc35e9"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "12aa897ddb6fa39a5fa09f7743795ff1"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "1fda01b35d457ec7dddf505b574ca054"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "4e092d0d1d8417927e192eaccfd4d844"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "f6611b3ae14923b4594000bb2fa31f53"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "1342eef8f1f850a301fc4833f833b22a"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "a48402053f6bfe09aee008ce5ec1640a"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "565607769c868e49c802653ca8e1ba4e"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "0807a1c1f02916b6905ea07b1549c922"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "ea641f5a5428e8e30dbd9574323a9dda"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "9dcd35cd39cd395a87a822045cedecd9"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "d2d24b97d38331bbd5ff52e42a27e5b4"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "e295934fb430ce2bba655f98b8fb9469"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "62fe8ccd0b040f433181a9e039da53a1"
  },
  {
    "url": "zh/index.html",
    "revision": "cf8c118ed5b32f2695a42ad85413e167"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "55d63b4c54f494a7c79cf61ab8b26202"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "d2eef22705c4507af5229b548b58a4f8"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "198ecd81840e76bfe7304a6cb7b11207"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "e6ebe5d1b7b86f7addde4fef234fe718"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "96748f3bb97458059db8e2cc2da603a4"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "b85099cd1d64a23a3d548743fbd1f016"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "d7ae1a809e4b2d1ef30ae303157eca9c"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "2df791b6441a12c82325bc0f212612e8"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "e837a65176d2f451e42a5dae13acd10d"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "cff908704ad006922284b0a1d2fa9269"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "e781e3dae69fa019626ed32fcc7a3f71"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "9878d564468bf9778f2689c4b5152949"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "15479450e4cc335289809c214e077fc3"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "b3d1f102b2bd44cb801529ae590e90e4"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "044e74d990922395e368dd5d677440b0"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "4561fba16661e8685c9992fc20a03047"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "1ce028244e4579841a17f76a9dfa722d"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "e2d4658ba386abe13344940a356735b2"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "c8de27894acab8bb7b1ce705c9fb4ca4"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "a252b3094592b96e730c2a3025ca8bb5"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "bc20248e862dcce07fab68236cfe5077"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "f62d0bc77271726816523d30c66fb419"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "1f6c73289e28fe84a6b60314dbb45b15"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "0b5e61e6cdc2ca79a41d68c7eda3f8be"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "7eddc3dd97fce1e6b2be6fba2df5eb11"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "8cef8c79e8d3fc6ab0ac4dbcc7150934"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "19f065fb36a9aa737c186d7c4238ac43"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
