if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,b)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let f={};const r=s=>a(s,d),i={module:{uri:d},exports:f,require:r};e[d]=Promise.all(c.map((s=>i[s]||r(s)))).then((s=>(b(...s),f)))}}define(["./workbox-6db16f92"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.html-1ab2d20c.js",revision:"ef8158a89f784f9395588b50a2d3e28f"},{url:"assets/404.html-34a9ea96.js",revision:"f747674c80260bba3b59e0f976044019"},{url:"assets/align.html-34cc4efd.js",revision:"0ce8f5821ee47706c056b8278e697468"},{url:"assets/align.html-d558821b.js",revision:"2faf36881c4513eef9ac29f45625b47a"},{url:"assets/apkxa.html-38c18177.js",revision:"35f2a51d437ea871306da59bdfb0c051"},{url:"assets/apkxa.html-4e65d7ea.js",revision:"0f78a14cb38145160e3cb122531d1650"},{url:"assets/app-3203d19b.js",revision:"b9371c92bbe0a8307994c2071abb07dc"},{url:"assets/app.html-9b4e17d3.js",revision:"b7bd51cadacdbd07414fa945fd35363b"},{url:"assets/app.html-e6aab65a.js",revision:"76ad8f18abc2eb7ce9484db0faeecd38"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/BP.html-6d78c4d2.js",revision:"d41b591a157735559f6ce73eedeef89a"},{url:"assets/BP.html-e9c5cd73.js",revision:"c06b90366728bc7c3af64186ca86b330"},{url:"assets/BS.html-2793f9fa.js",revision:"3f8c8151839e1223b7b53edcada3ca5b"},{url:"assets/BS.html-682775f4.js",revision:"fae069096d932d5e95c272966271a562"},{url:"assets/card.html-9783b5c9.js",revision:"728095e51b054c1db71beeff6883ae28"},{url:"assets/card.html-a88cb62b.js",revision:"d62eeef359f4c1f3c49776b80f22d900"},{url:"assets/chart.html-82f52045.js",revision:"cdb63d57bdf3d5572a15706d3b70339f"},{url:"assets/chart.html-adfbdc7d.js",revision:"e23594b893b793189237867f58516cae"},{url:"assets/cn.html-b904024a.js",revision:"2b88fc019f93ebc7796f7ae23307921a"},{url:"assets/cn.html-e5caa139.js",revision:"e4c0724c24f6f272db989d181817a179"},{url:"assets/container.html-46c83429.js",revision:"bef6557a0cc4a796708fc271de8da9f8"},{url:"assets/container.html-a7106cbd.js",revision:"a265e94afca766d10f23964afd141a77"},{url:"assets/ct.html-beac7395.js",revision:"6b73c1d60a3ffab1d4ddaa132a38bd5d"},{url:"assets/ct.html-e6c15035.js",revision:"1d022d027e42b7d3783538d5328cb71f"},{url:"assets/ctto.html-57da7628.js",revision:"d4bdadedba0ce5440070ac32c8296108"},{url:"assets/ctto.html-9c976f84.js",revision:"d069295310c61f6568c310c7bda8fc41"},{url:"assets/CYCT.html-2ed0bd6b.js",revision:"557990b750cfa26f756781263d889c05"},{url:"assets/CYCT.html-c385d123.js",revision:"c7ce761199bca63502a304b12ccad147"},{url:"assets/DE.html-e4fb8de3.js",revision:"52844a5d86c0fba86067b3aee72f1831"},{url:"assets/DE.html-e85a301b.js",revision:"9c6a5775185492312b98b99b98f5e61a"},{url:"assets/echarts.html-b61f5dec.js",revision:"2ff7fa627791c790efce0976b6b3b344"},{url:"assets/echarts.html-f5f3345f.js",revision:"e4356cee5736901684e5eff6330dcea4"},{url:"assets/EGG.html-6093fb8f.js",revision:"1e3536404729402ef12997aaca44b958"},{url:"assets/EGG.html-78f9cfa5.js",revision:"6b86fedf8cd25ad1965b70c69f413d45"},{url:"assets/external.html-5910576b.js",revision:"ef26ac17bf9b6cdc028b161888afd245"},{url:"assets/external.html-b21e5c2c.js",revision:"b038279b910ad7e5159fe144eb9866db"},{url:"assets/game-info.html-0bb5eaf6.js",revision:"dd3ab291b005bd0392f06c3f676f6bc1"},{url:"assets/game-info.html-491e77fe.js",revision:"f31e5fb6600c287c1244aec50191e06f"},{url:"assets/Game.html-cd79a93a.js",revision:"a6eb11ce7f689f42a54a28a5c000c507"},{url:"assets/Game.html-f2af159d.js",revision:"4e9df207de38f521338e832d0300073d"},{url:"assets/GO.html-05846360.js",revision:"fcb0eb95c32615ca04a425db0cd4de77"},{url:"assets/GO.html-db9adf2a.js",revision:"560d0a707c0c6e4ba479a79b551af540"},{url:"assets/Google.html-3be26c71.js",revision:"7db9951126d26907274fc683d6481e26"},{url:"assets/Google.html-e39ef658.js",revision:"5a360d0bb78ba0eb2c50f72742648d06"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-1be6a79a.js",revision:"10211edf312eb2b9e5fa9a6ab3aebad6"},{url:"assets/index.html-237e2a74.js",revision:"671f8b7123fa0fdab5185f2cdeb853bc"},{url:"assets/index.html-28ec4389.js",revision:"a8da719bcbeb40211963d5c6f43590e0"},{url:"assets/index.html-431cc447.js",revision:"eca9a61e04828601d32462474ee05e89"},{url:"assets/index.html-71d26e7b.js",revision:"3e414b42f0c13222c4e8bd2ecc789505"},{url:"assets/index.html-72800a20.js",revision:"e18b6058fc354891bd6708d9b11154f6"},{url:"assets/index.html-8ce3ba73.js",revision:"9acfc8efd6c68bf4de1bfa7b0dfd3d5e"},{url:"assets/index.html-a117632f.js",revision:"b69c7ce3e383d46216315e8bbfe79a77"},{url:"assets/index.html-ee96934c.js",revision:"793f0e242057d06b13990bb587817e74"},{url:"assets/index.html-f13071c5.js",revision:"ebec76746b961a2391defa64303b2b45"},{url:"assets/info.html-1599c2d2.js",revision:"aa2130605d61f9f90e8109405a47ec63"},{url:"assets/info.html-1ecec71a.js",revision:"e93a69ec28c74cc5f8495bdeeddddc58"},{url:"assets/JC.html-9f552334.js",revision:"7743f741635de1f6f640d55648c7776f"},{url:"assets/JC.html-e92f2032.js",revision:"8917035c34c1b724b52cdf771ccd1ba1"},{url:"assets/JD.html-52dd4124.js",revision:"52d0816529896f29863f2c9862f5e0eb"},{url:"assets/JD.html-f1bf57c9.js",revision:"3a04636b907649c1e59f7ae7ba539e16"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/LJ.html-0efb5ccd.js",revision:"24d73dcf05d20372d46134fc4f14b551"},{url:"assets/LJ.html-4284eea5.js",revision:"e4607a4980a6874b4abb18d18c251fee"},{url:"assets/LT.html-0cf1d1a0.js",revision:"ebd44bbb0888b3abd9e912714f2edecf"},{url:"assets/LT.html-9d07f9d7.js",revision:"dca715dc4e581836dfc516b50ac138aa"},{url:"assets/mark.html-0176b26e.js",revision:"f695766ef82e6a0b81ebff8e81a09404"},{url:"assets/mark.html-b51cfef4.js",revision:"b1300ec4fc2e12fae3eb8e8a9e1c121e"},{url:"assets/markdown.esm-9d5bc2ce.js",revision:"00403f340754f834b0b81192f798dd6d"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/md.html-516822d5.js",revision:"47bf557e5c75910466fe0f1bd3e1ba0b"},{url:"assets/md.html-e1319533.js",revision:"d37a01b7890cdda6772b263f8a33e0da"},{url:"assets/mod.html-4151d14a.js",revision:"8750100537e78ff08e36d24be4e3d732"},{url:"assets/mod.html-99a1ab80.js",revision:"d84cc097e754bb337baf91f981df6819"},{url:"assets/musk.html-4e6ff7d3.js",revision:"5b92d3a7adb258612e39a605e0652af2"},{url:"assets/musk.html-cc635a88.js",revision:"e5a9fed20513bc650ee62ebeb2a55eea"},{url:"assets/mw68.html-dd92f675.js",revision:"73c02180fd1ec0682076e0d386e4d407"},{url:"assets/mw68.html-de3e6eb6.js",revision:"325b7da5c9bef15b3f2e26322900c851"},{url:"assets/mw70.html-0b658fcf.js",revision:"96cf3cb90c5e8d35e42a7c0d8caa59a6"},{url:"assets/mw70.html-ed0360ca.js",revision:"8bb8804fb85e9767dcfef2b44bc1605c"},{url:"assets/mwdocs-app.html-7810b2c6.js",revision:"b449a539b6205286453021048eee09e8"},{url:"assets/mwdocs-app.html-f364412e.js",revision:"e5e59a5e64611c4574a4cad81b131e24"},{url:"assets/nature.html-2a93cd6c.js",revision:"2e7c7df259c99084d3281338840aa037"},{url:"assets/nature.html-51b057ec.js",revision:"f593443bf352e3310ca659d1477695ca"},{url:"assets/news.html-48fc4efb.js",revision:"252c48824bab8e0d5027837003a942a1"},{url:"assets/news.html-8981ebde.js",revision:"942648143b06e438ecc0b2ac1ddc1332"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/object.html-a8e4eb4c.js",revision:"8f89d630cb286adccd2dfe9b7cdf2e53"},{url:"assets/object.html-efbcdc8c.js",revision:"094235fba1beaa6bdf855839c47bcc88"},{url:"assets/pan.html-27699385.js",revision:"008c17963cce08346850885c504c466f"},{url:"assets/pan.html-a36a8b28.js",revision:"82329075cce32f53c1d4f535c1430514"},{url:"assets/PC.html-b397d934.js",revision:"1cf6769cad77fa251e2faaa23d2dfd5b"},{url:"assets/PC.html-ce497ae9.js",revision:"9bdd8b8ef2c07ac733a7f33e010a9081"},{url:"assets/people.html-318ca759.js",revision:"abb44acf7b7e062f6507694fc503e3c0"},{url:"assets/people.html-5053553e.js",revision:"110172a9a737c33dde5a48a8b951359b"},{url:"assets/photoswipe.esm-5762295a.js",revision:"cf58d0074e27e533fae9f4b5258a9fd4"},{url:"assets/place.html-28227062.js",revision:"a5f3f2a6a22f3cc1a3343327451b56b4"},{url:"assets/place.html-b38e4c15.js",revision:"c13fd5b61e74f828b70c898b36bf8fc1"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/presentation.html-823ffa05.js",revision:"03368e0e21ed202e668430e9c656068f"},{url:"assets/presentation.html-893fc14a.js",revision:"d91d78e29f6d04d57c97c6553ec8311e"},{url:"assets/QT.html-0ec12d3a.js",revision:"2a0c6e3761565a4af1b4f529a4b0b79f"},{url:"assets/QT.html-5071d4de.js",revision:"5532748b2ab0853416979f5b386d1128"},{url:"assets/reveal.esm-1a4c3ae7.js",revision:"fc90b48ee14a4f200f16eadd1328ff85"},{url:"assets/SC.html-e1b78764.js",revision:"c6683c20f196f0326447ab925c8980cd"},{url:"assets/SC.html-e4d3ee83.js",revision:"d7a56ae766ebdf2e70e5c1def93983bf"},{url:"assets/SD.html-b249a9dd.js",revision:"9688ede3b2c3e93f194a4f24640c4d5d"},{url:"assets/SD.html-bdf91d5e.js",revision:"7f94287b64484c36d12fc605a038f747"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/SearchResult-4b2f0a6a.js",revision:"f5a15ef46c7153b7d37b6b85e09ff0e9"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-000e8d38.css",revision:"571082dee98e48801f786f46afbef340"},{url:"assets/sup-sub.html-622d7e13.js",revision:"b6519b38b026fdaeb436771197516205"},{url:"assets/sup-sub.html-849f8775.js",revision:"b7b81abdf5a586f98294f083cdd0a29d"},{url:"assets/symbol.html-528b2508.js",revision:"60a6045074d323677fb5956471d46721"},{url:"assets/symbol.html-a440da01.js",revision:"afdf198651d72d021d1ba29ed58a1036"},{url:"assets/sys.html-2f9f6b87.js",revision:"62515f20b9f266edb716133bbc088bbe"},{url:"assets/sys.html-a7caf5aa.js",revision:"c87da8279cb4c9ae619994b2b9a646c3"},{url:"assets/tabs.html-c466f7ac.js",revision:"da8dbdb5758eafa430ffbaf7e2ed48ec"},{url:"assets/tabs.html-d34fe672.js",revision:"503adce81b1a1adf573c3c25b6dd4c10"},{url:"assets/tasklist.html-cdabf402.js",revision:"a38580fe8c9675144f6e1c37add8b228"},{url:"assets/tasklist.html-f7f38dad.js",revision:"d8b89b59feee1adcef04230919c898b3"},{url:"assets/UP.html-49056c0a.js",revision:"3a4b4b842eff032215e8435e7c93c703"},{url:"assets/UP.html-ecf9dd6d.js",revision:"b4a863bddcfc554ffa7435bce364ba86"},{url:"assets/WF.html-7eb65b0e.js",revision:"6b2a2ccd330100b3529a8d78f053413b"},{url:"assets/WF.html-a584e8f4.js",revision:"b7c037272db616e1238872ca1a771ff5"},{url:"assets/YJ.html-d85c1c6b.js",revision:"8016d2e7ae34a6977a4cdf1198bb01cd"},{url:"assets/YJ.html-f83dbc55.js",revision:"f2d93d97beec05729634caae6b3bd1c4"},{url:"assets/ZB.html-47711a7c.js",revision:"2350929dc97482b77f0357d365dd7ac0"},{url:"assets/ZB.html-e1849d9d.js",revision:"1b652b9b7d18a76e4af853176f219ce8"},{url:"assets/ZD.html-1b89457b.js",revision:"c3798f4f108a24760bd9fe59848b9862"},{url:"assets/ZD.html-5c549b43.js",revision:"3cd8f2cd164d9124accc775a1551ca1a"},{url:"assets/ZG.html-c27dc60f.js",revision:"565c75e0b6a264709db80b645041869f"},{url:"assets/ZG.html-d4c24f3d.js",revision:"164aeb00ef34847ceadf297cb285b58e"},{url:"assets/ZH.html-691236e4.js",revision:"858735dd9f6a54a6e630c0be2879bc77"},{url:"assets/ZH.html-90520ee7.js",revision:"99e4fa94833c86950b4047a15904bf5a"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"assets/ZY.html-5fa3ffe5.js",revision:"177b6792a7c15350f90566d021ed66fc"},{url:"assets/ZY.html-7c2104a3.js",revision:"3f9cef3dc33017b0b09b84338a4326ee"},{url:"bg.svg",revision:"cf398a4e163baf4a18104368cbe4b813"},{url:"index.html",revision:"36b0b02ac09ca406b5799977d03ce522"},{url:"404.html",revision:"9a6142634bda36add9ac7aa216efb52e"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
