if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,d)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let b={};const t=s=>a(s,r),c={module:{uri:r},exports:b,require:t};e[r]=Promise.all(i.map((s=>c[s]||t(s)))).then((s=>(d(...s),b)))}}define(["./workbox-b584cb72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.html-DriRDWlS.js",revision:"ad23def1043a9b880401f52ffa2b0867"},{url:"assets/apkxa.html-CtLMpRI_.js",revision:"9528c2d2acfcb029f67dc150969c7c81"},{url:"assets/app-BQDMNDi5.js",revision:"0936f6cd5495406b83e17913914ba901"},{url:"assets/app.html-1fKnL7Vh.js",revision:"e58ef9cd46d3fe12b5a1b444789bf428"},{url:"assets/assets.html-fCUz9ecm.js",revision:"40b9c83a61030312141ffd71c0550f51"},{url:"assets/auto-CAdRPfCH.js",revision:"7f70af0686c2be25e7afd510cd83c172"},{url:"assets/bomber.html-DNWHLY9f.js",revision:"76e0a9b3d273a63efbbd2221bb81d2fa"},{url:"assets/bp.html-BIminqtW.js",revision:"d5f8419cf7f61a799bc55cd56da41b33"},{url:"assets/browser-D6eOinvE.js",revision:"348930a69aa8673fd8f8c8ce762cf810"},{url:"assets/bs.html-CCVHaZio.js",revision:"0219f836c765bcc17b847a45d3d96ca2"},{url:"assets/catalog.html-BfHSsj6U.js",revision:"685f701d5c2e47e5620d2ff0b9b16d75"},{url:"assets/cn-warships.html-B0dYdruA.js",revision:"5ee5a04ae710a4fe32353aa29142305f"},{url:"assets/cn.html-DJnCY_Ao.js",revision:"16b88fd8b5c20f11f2a7a2160f95dfec"},{url:"assets/commonjsHelpers-Cpj98o6Y.js",revision:"146eaf85c344cee008c91f2685dbf82f"},{url:"assets/component-DzcHSYJV.js",revision:"39921586467843502535143a7b598f12"},{url:"assets/cruiser.html-DNN1Perr.js",revision:"fa2a1bda45c323e4d0bfba3820ad9fda"},{url:"assets/ct.html-BT9Z91w3.js",revision:"9c08fc28ba693a0f3f52c1ad9573b1a5"},{url:"assets/ctto.html-DN6ekh4o.js",revision:"07072c7462c8ad3e1ca374a879501820"},{url:"assets/cyct.html-DppM126z.js",revision:"f94e7610f74a460781cce72b28b54cbd"},{url:"assets/dash.all.min-S0Hns9UN.js",revision:"f38801bfc625dcbe599a9730f39d6bdd"},{url:"assets/de.html-CxgsScLB.js",revision:"1c18c78233283efe8151640ebd0465b0"},{url:"assets/destroyer.html-C03yYsQS.js",revision:"6ad6b1c0755bf9d2448bf995c707b276"},{url:"assets/dpm.html-9ye_lxaH.js",revision:"cb9c34785fa23e3436597cbde301325c"},{url:"assets/egg.html-eVgiPAhn.js",revision:"32611a7911b04901c5af2c822c689957"},{url:"assets/errors-Ye4WyXdS.js",revision:"1c57e3a3ecf467685f1969a6a0915e8c"},{url:"assets/events-less.html-BVjaJTQZ.js",revision:"a6afc9ca2e8fc68133163ff4a2f249f7"},{url:"assets/fighter.html-d8lksKQU.js",revision:"35e9cf9d15b96f415eb7303fb6f2f391"},{url:"assets/game-info.html-C9LFCy0g.js",revision:"f90dd9664aacc73b9faff9c05a764c87"},{url:"assets/game-info.html-DzEwh5Rs.js",revision:"0bcdf2f81d4818d03527a9144eec5896"},{url:"assets/game-modes.html-D1K-qzCb.js",revision:"8ba7a445a45e3e85323772d822f902d8"},{url:"assets/game.html-D_UhRUP7.js",revision:"9e6df03866159b2334fd1d361ed7118a"},{url:"assets/google.html-CND77oA6.js",revision:"dc07aac83ce26921c33b863072e16bde"},{url:"assets/helicopter.html-u9hg1dIV.js",revision:"a10c7ae09541cc390fdbe7413e5e5ec8"},{url:"assets/hls.min-BClKjIdj.js",revision:"b164174a379555fbdb96b60b197549a1"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-wZ-hXvzw.js",revision:"e80f63302e5fb9e9be29399c386ef22f"},{url:"assets/index.html-B0HIAWPy.js",revision:"49fe4cb5f5d207f42c58e0fe3cc7f797"},{url:"assets/index.html-BaL-sv4K.js",revision:"dea30574d4095723eb4db43c30bc2a36"},{url:"assets/index.html-Bd9aLGMD.js",revision:"06d5c074bb28a8564d2531dc0f7131cf"},{url:"assets/index.html-BTOd_njB.js",revision:"436999d755a4189d4693d3d2ac0c7c4a"},{url:"assets/index.html-BuqusYtv.js",revision:"657c9498f2ea7d1379cd49c04700857a"},{url:"assets/index.html-BX2NHJyL.js",revision:"6b0d679e0cd1a4577482f707a9775564"},{url:"assets/index.html-CbTbyjLG.js",revision:"bee8f2f5211be379845be3332747f8ab"},{url:"assets/index.html-CdGzU5PC.js",revision:"c18717a6f5523f39b25286b61637aaf3"},{url:"assets/index.html-CfH1eZk3.js",revision:"c1add66903a65767e7f896b71464eb53"},{url:"assets/index.html-Cmo-kxMb.js",revision:"d6e1922f6f3d1b2bb334a2a94511d4ab"},{url:"assets/index.html-CnIZ60t9.js",revision:"7934b365b280b39c0fb424deb12faa2e"},{url:"assets/index.html-Cutrf8ym.js",revision:"b34b4802ce6e1a785c2dea0b63fdcb09"},{url:"assets/index.html-Db1KuUBI.js",revision:"7418a6f06ead37f720f7297fdd54c55b"},{url:"assets/index.html-DdlTg6I1.js",revision:"8286a1608a48fdb9131664b99a999e78"},{url:"assets/index.html-Dv0UwU5W.js",revision:"e0247f676aff28adda063a731a1ba0ef"},{url:"assets/index.html-DvevluSx.js",revision:"09c7eaaefcb0ddab4822fb844df142b7"},{url:"assets/index.html-DwmT9iQM.js",revision:"0ed012c117ed54bd43b3344d271c72b5"},{url:"assets/index.html-DySfk5tt.js",revision:"6cbeae6e881d59007b65b69eb8b8a527"},{url:"assets/index.html-iDEh3OHT.js",revision:"463a6b09678ff0455362f01abdd52d7a"},{url:"assets/index.html-V6ED3yeB.js",revision:"66402a3bf43077db218a09c45642d465"},{url:"assets/index.html-vv_HtRjp.js",revision:"503200b14349c4274d884061306326ea"},{url:"assets/ios.html-DJXTgQZw.js",revision:"a93d0ec319843863cb0dae207c1a730b"},{url:"assets/jd.html-DD0AAwmP.js",revision:"20ff40a3afa4d93ba70fe5025b6a1c8d"},{url:"assets/link.html-Ds3vb6k5.js",revision:"3bf68188950134affb284ea2f269b266"},{url:"assets/lj.html-DjUrFXtD.js",revision:"1f3e960f5e954f429cbaae5eb0901c4b"},{url:"assets/lt.html-CL4rz6T-.js",revision:"d88495ddc137fb3565650d82dc54575b"},{url:"assets/market.html-B26A7kUH.js",revision:"d11344e1a7a110360b599563e54054a7"},{url:"assets/md.html-DfCknqvo.js",revision:"4500c3a42631a5daf14a2b9ef26e6665"},{url:"assets/mod.html-rGqRqcEs.js",revision:"d716f97381878ca0ce36d01fc6cba30d"},{url:"assets/mom.html-BdpCQ3Gd.js",revision:"5a935d8b91e0583d33fbe328eb9cf06c"},{url:"assets/musk.html-CdmanL7K.js",revision:"48176b2d59e17fc7db59f0676c0e11bd"},{url:"assets/mw-game-lottery.html-DI34vvIZ.js",revision:"3cecdfe9ab1dec1edf9d7bb17da3cbb7"},{url:"assets/mw-press.html-CqYjla3o.js",revision:"624f367ca716afdc581df37f99866472"},{url:"assets/mw-rules.html-C0bL-po7.js",revision:"400f544745f33e85152edf9b360e8f9d"},{url:"assets/mw68.html-COfaCF5V.js",revision:"e5a4ae98e31975bd5e39c172c7d415e3"},{url:"assets/mw70.html-C9tBjJA8.js",revision:"3055ab2a35d92d073d13d04f316ba06e"},{url:"assets/mw77.html-B4xEIzAG.js",revision:"be0c7a9f3613d70cbe3e10cfb8ca796d"},{url:"assets/mw78.html-BLnJCgcF.js",revision:"9b08753b02c6f8c989dd450f76675ff6"},{url:"assets/mw79.html-C1yHlvSb.js",revision:"437fe1369ecd3bd10a246ee1ae274317"},{url:"assets/mw80.html-C1mp9W9m.js",revision:"52ce36cabd9e1078946bc777fcf2abd3"},{url:"assets/mwben.html-bhrk1Xjp.js",revision:"47245184eb5f0a6b0a1a1ec2c26787a8"},{url:"assets/newplayer.html-CtLU8tpZ.js",revision:"edd0b432e3c46210befb8375062d6339"},{url:"assets/news.html-Z_vc5u8_.js",revision:"f3c9c7475d417d9bcb348909f579623a"},{url:"assets/pan.html-0ZH6gOm9.js",revision:"15b084c890764358e725823d30ad0378"},{url:"assets/pc.html-Dlr47dFi.js",revision:"b05e429d8acea4ad85672052bb945089"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/prod-CdUfoiHz.js",revision:"fc5818cb8f38d72e6a082d7b3baa413c"},{url:"assets/qt.html-DKzSibsk.js",revision:"3266c78eebd8374118304b15e097b27a"},{url:"assets/sc.html-DhOfAAaa.js",revision:"accbf859619ede6a0b7aa59a8ba7ea99"},{url:"assets/sd.html-FyfnqyI-.js",revision:"fe3ae585e4d0ff9863795777bcabdb1e"},{url:"assets/SearchResult-DPDalIhj.js",revision:"af5f7321bdc669898e41f441ca1e25a5"},{url:"assets/sitehelp.html-BnVV6GPv.js",revision:"4c80dc456e1eab7ad9bb082a0b2de6fd"},{url:"assets/srt-parser-DxjzBOQI.js",revision:"272d60feb05344e7ce0c5b27ed6083d3"},{url:"assets/ssa-parser-DSSEAmPd.js",revision:"01bdc82443f7695678c3cfeacc9d07b0"},{url:"assets/stan-bilibili.html-BZxNPdQR.js",revision:"19d637b3455aa9fe025fd921d6b2b38d"},{url:"assets/strike-fighters.html-BQSlccYD.js",revision:"85000d873b940ac98ec10b757f8e807f"},{url:"assets/style-BADcpmEf.css",revision:"7a45305437704d54e2c56e946780f33b"},{url:"assets/sys.html-CbdX55Xj.js",revision:"5ca00906758e5d306554ab991f23e68e"},{url:"assets/twitch.html-B_hYnDww.js",revision:"a64892475ad20f2ffc0b0a5095103e51"},{url:"assets/uav.html-bVyNUJ4s.js",revision:"2fc1da789fa40dd039e74ed333dcbe81"},{url:"assets/up.html-BmozCLrN.js",revision:"b37980b9e7fec7021e645f6419d68516"},{url:"assets/vidstack-audio-DmCJUazS.js",revision:"e33f3c3f39228d6a6f1a1c970e2a23e7"},{url:"assets/vidstack-BJs9jZ9Z-CnYrzQJ_.js",revision:"b5e716ed9827d5834d5e8645208a2c07"},{url:"assets/vidstack-BTBUzdbF-Cao5mZMB.js",revision:"29e058cf9bf2d6312a1180a59f36fa68"},{url:"assets/vidstack-CRlTZX3Z-PBDNdscv.js",revision:"90c561f5e8ffad78ab5cf7aa481d8242"},{url:"assets/vidstack-CSNoShp--CbyhjOu9.js",revision:"b949b769bee253d3cc63dc7bdd83edf4"},{url:"assets/vidstack-D6ttsqNA-DFzgzHei.js",revision:"b21c456742ef68b14e325b0c42bb4e52"},{url:"assets/vidstack-dash-D6_3v9jO.js",revision:"d2a4dca39690cedb234e7e589d0fe823"},{url:"assets/vidstack-DQ6dSZwe-BTtv5vWE.js",revision:"39f9d3a1376b03367f4f9b0cfb3bd278"},{url:"assets/vidstack-DscYSLiW-CA6XwpqT.js",revision:"59f9869cc72391bd49987feea77674d2"},{url:"assets/vidstack-google-cast-CEKiJ8fl.js",revision:"4672f2a0b8213c227ba40e5a8e98ebf7"},{url:"assets/vidstack-hls-CoNJr8K0.js",revision:"baaf0d220cf825dfe25dcaad5ffe0793"},{url:"assets/vidstack-j0Yq8ejv-DRUSzVID.js",revision:"53a345d9ea815f803e80645017d2f3b6"},{url:"assets/vidstack-Mh1hsFYs-Cw_RDVD2.js",revision:"2afed5785962ec74dfab8030132f02d4"},{url:"assets/vidstack-player-default-layout-CI8sebI5.js",revision:"d9ce99eb05463cc253f560904cd7ac30"},{url:"assets/vidstack-player-ui-CNeLqNjU.js",revision:"edb2036be44e24580b69c7cf3fec3186"},{url:"assets/vidstack-rsZGrNIW-BiUwPbUx.js",revision:"5c3bc120a6c8aae3bb73f18878a44c39"},{url:"assets/vidstack-TNK4vPcR-BIWgi55j.js",revision:"5e4c52f93b08605d4b04d2b7ab21bf1b"},{url:"assets/vidstack-video-BEYhMmN2.js",revision:"fdddbdc9c75d4a0698bb265c78386e7a"},{url:"assets/vidstack-vimeo-C-twmOQW.js",revision:"f0a0fefb33e4f4b9d1a7d5f0cc7d86ec"},{url:"assets/vidstack-youtube-CTNMSzkd.js",revision:"2c26a26d451f629f6209e14727f8e516"},{url:"assets/wf.html-CjsQl0e3.js",revision:"25895d8669795d4a73c96e38bb5b0a5d"},{url:"assets/x51.html-vuodlnHe.js",revision:"bd7eabdd6f123f3bf80cfb995592a786"},{url:"assets/yj.html-BJ1P4n6w.js",revision:"e2ecdcf85c8ae23d6144b9be43c64900"},{url:"assets/zb.html-v86LBiPy.js",revision:"49afd7257b22fb56d5c139a89f06fc5f"},{url:"assets/zd.html-C2_a8lle.js",revision:"ed3e198d706724b38b748828eac6742c"},{url:"assets/zg.html-kMULxMYp.js",revision:"a62fbb9adb5c72167c566f758bb31c95"},{url:"assets/zh.html-wycTVkiC.js",revision:"b94f994b050209708fdc6b93e9a70281"},{url:"assets/zy.html-RxLmoTfv.js",revision:"5ff68a9aed88bbaca7e7d46f23ea14f0"},{url:"bg.svg",revision:"cf398a4e163baf4a18104368cbe4b813"},{url:"bg2.svg",revision:"d83cada89f5e80bba4cb91330be08b73"},{url:"bg3.svg",revision:"01d3b2641647092de1b581d1c4dc2f35"},{url:"bg4.svg",revision:"e5f71f0305bd29e2653240034be925db"},{url:"mwop/mwop.js",revision:"e0e9ebb896b35075aa2bc52e4912f8c8"},{url:"index.html",revision:"b50d291bd3b0dd436a0bc528e1b07bbc"},{url:"404.html",revision:"9f44ac2467af3061d5b8b9c1d75a16fd"}],{}),s.cleanupOutdatedCaches()}));
