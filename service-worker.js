if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,r)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let c={};const b=s=>a(s,d),f={module:{uri:d},exports:c,require:b};e[d]=Promise.all(i.map((s=>f[s]||b(s)))).then((s=>(r(...s),c)))}}define(["./workbox-b584cb72"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.html-BF6PyMCd.js",revision:"b3224e964c59f07df6f69b1d5a3b8d48"},{url:"assets/apkxa.html-0anKP_DN.js",revision:"f5d7555a8d73d2fa77629290704a79fe"},{url:"assets/app-DW-3ynVn.js",revision:"7126efb59d0651f76bec6ba519c35006"},{url:"assets/app.html-DcyDea-Q.js",revision:"d05d52fb6807d0513d0cea68daa0158b"},{url:"assets/assets.html-Bwji6ckj.js",revision:"8c2999f3aa1092573b10c238a9b725d8"},{url:"assets/auto-CAdRPfCH.js",revision:"7f70af0686c2be25e7afd510cd83c172"},{url:"assets/bomber.html-Dtknb9Eh.js",revision:"18c4bf9e7034bf5fc981f171cafa6573"},{url:"assets/bp.html-BkOJrfFq.js",revision:"fb1aa910c32e327d9eb0954ae8388f90"},{url:"assets/browser-D6eOinvE.js",revision:"348930a69aa8673fd8f8c8ce762cf810"},{url:"assets/bs.html-BN5P3RTP.js",revision:"8b4ebce338ee632d6868b918afef0c16"},{url:"assets/catalog.html-BhJij1Dw.js",revision:"29634c32fc242224491b2174dc2f7233"},{url:"assets/cn-warships.html-3QKX3OsC.js",revision:"4cd71523e94a4a28d4d0cdc3bcb489f5"},{url:"assets/cn.html-ejlaST7z.js",revision:"27ac2c3dc968337a13df86a9dec8f6e0"},{url:"assets/commonjsHelpers-Cpj98o6Y.js",revision:"146eaf85c344cee008c91f2685dbf82f"},{url:"assets/component-Bc6-vNwy.js",revision:"594fe681165aff91b73d5d8d79df6981"},{url:"assets/cruiser.html-DFI_G1Ux.js",revision:"7b02d35f2b6a74dfc56195ff114787e0"},{url:"assets/ct.html-5rTxD_0H.js",revision:"1b31a36b0b1310391bb8f645efd3da80"},{url:"assets/ctto.html-CdOp5WUw.js",revision:"6ecd9b780125257c312e40ebd81d593f"},{url:"assets/cyct.html-BVJRgarr.js",revision:"08adae5d922e5dd4c96ecb831ebe9107"},{url:"assets/dash.all.min-S0Hns9UN.js",revision:"f38801bfc625dcbe599a9730f39d6bdd"},{url:"assets/de.html-cczn3ZBu.js",revision:"3732d954bcf26a63b0410dc820456f2b"},{url:"assets/destroyer.html-DazkXA4c.js",revision:"8a187ae21dc6083643abc1739efe7f2a"},{url:"assets/dpm.html-Bv5LjX7R.js",revision:"b5cd8399d101ee1b3f2d6e5797073e2c"},{url:"assets/egg.html-DDsUrKdW.js",revision:"8e71ce564458320030d80eb4343de5b7"},{url:"assets/errors-hhR4da2T.js",revision:"269066d21b12ef578f0e20d6362cc748"},{url:"assets/events-less.html-B3HzFncN.js",revision:"582e187391a64acf18b28c8d81a41826"},{url:"assets/fighter.html-C4qei4Xx.js",revision:"259c448805bfa0e902ef7497381c73aa"},{url:"assets/game-info.html-6x99iFxC.js",revision:"deb16921338d3aa02de286228fd4eabd"},{url:"assets/game-info.html-DOP6PTXr.js",revision:"68ec74d213ed6cfaecc59d1e6be661ca"},{url:"assets/game-modes.html-DI3vToxI.js",revision:"77338aa5ab4fa2c49e0253f30f0ddb28"},{url:"assets/game.html-DYpYQ6bl.js",revision:"c2c5b198b767a893329dfe877e721cc7"},{url:"assets/google.html-BA1JBHUp.js",revision:"0adedb43890f36725336cd5a9707f63c"},{url:"assets/helicopter.html-C1NLqX6c.js",revision:"25d56c2afd3e75c892c108846f4295b4"},{url:"assets/hls.min-BClKjIdj.js",revision:"b164174a379555fbdb96b60b197549a1"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-wZ-hXvzw.js",revision:"e80f63302e5fb9e9be29399c386ef22f"},{url:"assets/index.html-336zCsa4.js",revision:"7453d86a62a93d2f2006fe9647c4d95b"},{url:"assets/index.html-8OoalxQQ.js",revision:"72ae0e7f8e8c5a40098364e69feb7c3f"},{url:"assets/index.html-B8F-ntoT.js",revision:"76f22ab201f8f6ecf31b86f55bab9204"},{url:"assets/index.html-BDBkkxDF.js",revision:"605dde4c36cd87d126ad4f1dc53b5e1d"},{url:"assets/index.html-BgBPsZni.js",revision:"6f443cb554f5cb04f2f043b0039558e8"},{url:"assets/index.html-BM8IJred.js",revision:"25100c0d136cae412aeb2211b4f1fb9c"},{url:"assets/index.html-BOOHXxTz.js",revision:"7ad66a0a78f563f0a47cd0be091fe4e4"},{url:"assets/index.html-BpttvN6k.js",revision:"e92f74d1a4b65038acecf901418df909"},{url:"assets/index.html-BvsPcP6g.js",revision:"b5819108fb8f792d5c3c316e77b20fe6"},{url:"assets/index.html-CAGFKOGz.js",revision:"49c4bbded446e79dca2c1ba8873699c3"},{url:"assets/index.html-CCsqzoWE.js",revision:"13175c08ccf520eca3e4f2322046330a"},{url:"assets/index.html-CdAWd823.js",revision:"9a68caf9c9a8121c2e5821f4c3cc9f1d"},{url:"assets/index.html-ChjpWd0_.js",revision:"310f38103b35987196666714029f5712"},{url:"assets/index.html-D37Sdz3d.js",revision:"92656477949e86ab68eabb0552d4f530"},{url:"assets/index.html-DfoxlALl.js",revision:"04a3d5195b984fef00e0c945209a27d6"},{url:"assets/index.html-Dh8OHjFY.js",revision:"b437ee805c4551fecc3f0490e351f1fa"},{url:"assets/index.html-DNjEXZJ9.js",revision:"729d800b205500d9c7f88af2e3f57cbe"},{url:"assets/index.html-LXiRo7Gc.js",revision:"4b176dd3ab4b4a5bb4026bf2aa6bad65"},{url:"assets/index.html-nib-jVkm.js",revision:"b775c2c49813d657543536d33e21a2b5"},{url:"assets/index.html-tqQUmyeA.js",revision:"20b201e4a74b80f0e0be8de823d5d8a6"},{url:"assets/index.html-veXJZjYL.js",revision:"42eac14d63b006c9c2e0574df4c1aea5"},{url:"assets/ios.html-DDxshQ8P.js",revision:"23eaf9902c91df193ce6797f4ba0bce7"},{url:"assets/jd.html-QM-VBTFw.js",revision:"8ff043572b89d095322b9c673743ad4b"},{url:"assets/link.html-BHTHnM3O.js",revision:"6c6b32200525b84b41104b76f25eb1f6"},{url:"assets/lj.html-DTyTLUbQ.js",revision:"bf3e6574ce18304bf20ce07b01ba4b98"},{url:"assets/lt.html-Bkx_od14.js",revision:"729d12de6ee73136bf88c42226c6184b"},{url:"assets/market.html-bOOYIhag.js",revision:"47818dbc410c5fa16bdf4012b0d6fef3"},{url:"assets/md.html-BAbqxWLM.js",revision:"ae12c983f9656ac5167f5988f120d2fc"},{url:"assets/mod.html-CjS8bior.js",revision:"167caa289661a02f394ecaa9baed920b"},{url:"assets/mom.html-BM3CJyhA.js",revision:"d598b6c6c8bb067ef8f56e172f7dde3b"},{url:"assets/musk.html-BzPwUUKY.js",revision:"a2a25482aef925f62fe67ab263894dc3"},{url:"assets/mw-game-lottery.html-MY-fFr83.js",revision:"78de5af4a5a26074aecef0616604b7ab"},{url:"assets/mw-press.html-DW-bl2k4.js",revision:"63b07e8e572a6b63e761543b0b239d70"},{url:"assets/mw-rules.html-BmBZdPBE.js",revision:"ada25e9072664a75be92871f25f93c7f"},{url:"assets/mw68.html-BB4mEZFb.js",revision:"23d1c2bf8496c3ec1c90a250590e73a3"},{url:"assets/mw70.html-cveuREd_.js",revision:"ec348b0718a159c74f57e1e06848aa23"},{url:"assets/mw77.html-Cw3EeV6j.js",revision:"3ca70dfc69dd583a06129b407b0fa01a"},{url:"assets/mw78.html-DGlHqS6j.js",revision:"0c6db989154a33d0f36da386b8bf6d1b"},{url:"assets/mw79.html-Dpwg7uCo.js",revision:"36ae0541b3a1a32ca04e3dc9c36687b1"},{url:"assets/mw80.html-N9gyQ46m.js",revision:"07368d189c4cd11f41876ec3f716f7be"},{url:"assets/mwben.html-DOOboWMS.js",revision:"d4285c74e714074d018b0a573ba5e572"},{url:"assets/newplayer.html-BxSD2uia.js",revision:"b2004729f1d85fdd5ee78ef8512c6127"},{url:"assets/news.html-v4JcCwyF.js",revision:"58726127366ae1c945e0191007cb6b55"},{url:"assets/pan.html-C1o_Rlxs.js",revision:"f5b97d1ff59cf7dff75185b4afdf7dc3"},{url:"assets/pc.html-PpM73EBB.js",revision:"5c78c0e6fbc5d7152b595fc555dc6217"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/prod-BojpbEky.js",revision:"2b56aad9f55affc5fb590c0e7fac61ea"},{url:"assets/qt.html-C4iYwxUL.js",revision:"b99c17bc93b592b4395b0477888db5cc"},{url:"assets/sc.html-CdgUH19V.js",revision:"c039d3ae7691ff9ae9144927954b8760"},{url:"assets/sd.html-B5KTtnmo.js",revision:"6a052ce65f88394af6d9311c24ed8429"},{url:"assets/SearchResult-HZA5_ux4.js",revision:"343e27ca8be8081c629b5ef698234c91"},{url:"assets/sitehelp.html-DAe7DCGc.js",revision:"9fbd84e7b5a055cec92ce4ea90a7bfcf"},{url:"assets/srt-parser-BRs9qpOB.js",revision:"f0797e5c54686535ab1c93d4dcd9d2d7"},{url:"assets/ssa-parser-D-k5sQ-i.js",revision:"379b89339e793da1540b9e2ea4a188b6"},{url:"assets/stan-bilibili.html-BunQxllC.js",revision:"15cb32d198d103bbf2148bf21411dbf4"},{url:"assets/strike-fighters.html-DNU4yZGB.js",revision:"afefd6151dfda50f3a480c1effb5b6fc"},{url:"assets/style-BADcpmEf.css",revision:"7a45305437704d54e2c56e946780f33b"},{url:"assets/sys.html-B2usku0r.js",revision:"4b8e21a76a1163a1a4a104b1a0a74b27"},{url:"assets/twitch.html-CRnHL5h-.js",revision:"6a363fa884c9fa43435c6ec6deb73232"},{url:"assets/uav.html-BV0eFAwk.js",revision:"4a3b609c7afb8d494fff119b5be46804"},{url:"assets/up.html-_JRb7yGh.js",revision:"88cc46ba6cd0524dab6665c102015308"},{url:"assets/vidstack-audio-BfuH3KDO.js",revision:"9d0f1b5004cc483601edb8d14a9f2a63"},{url:"assets/vidstack-BJs9jZ9Z-BYvpP0Gi.js",revision:"7ab78dc975bfe7523897209dab900d92"},{url:"assets/vidstack-BTBUzdbF-Cao5mZMB.js",revision:"29e058cf9bf2d6312a1180a59f36fa68"},{url:"assets/vidstack-CRlTZX3Z-PBDNdscv.js",revision:"90c561f5e8ffad78ab5cf7aa481d8242"},{url:"assets/vidstack-CSNoShp--DFyimeAg.js",revision:"ac7eff082d519fbeb86b5f43f1572549"},{url:"assets/vidstack-D6ttsqNA-bhuUih1Q.js",revision:"5e064d89794ea39911b060ab386b9bb1"},{url:"assets/vidstack-dash-VlSlrOLM.js",revision:"f84d668fca236a5bcb574ec82e171052"},{url:"assets/vidstack-DQ6dSZwe-BTtv5vWE.js",revision:"39f9d3a1376b03367f4f9b0cfb3bd278"},{url:"assets/vidstack-DscYSLiW-CA6XwpqT.js",revision:"59f9869cc72391bd49987feea77674d2"},{url:"assets/vidstack-google-cast-BzvK7GO8.js",revision:"f140a3b00c0f4792fdf4c202b0dc81f5"},{url:"assets/vidstack-hls-ClKKQWGr.js",revision:"ade69359274e63a289ff3f976ef47be7"},{url:"assets/vidstack-j0Yq8ejv-CFDDr_7M.js",revision:"f5c42915f584d369a0b265b503f30209"},{url:"assets/vidstack-Mh1hsFYs-BNpSOk2L.js",revision:"1f29fb8f738a6d84e8dcb38da4be47ac"},{url:"assets/vidstack-player-default-layout-UCskwMf4.js",revision:"f8737a25dca80386a911d4e616cc5dc8"},{url:"assets/vidstack-player-ui-D0pl_H10.js",revision:"2864af999e0565fc13a1abce18253a4e"},{url:"assets/vidstack-rsZGrNIW-BiUwPbUx.js",revision:"5c3bc120a6c8aae3bb73f18878a44c39"},{url:"assets/vidstack-TNK4vPcR-C-b6VZa1.js",revision:"30be77f17d927097e314e9d2f8088fca"},{url:"assets/vidstack-video-Ouc9guOM.js",revision:"82d36e4cf662770ae7f5d39ad368c297"},{url:"assets/vidstack-vimeo-Bj_p7LM_.js",revision:"e56185ba5a9a382a8fc2af611a468bf2"},{url:"assets/vidstack-youtube-DxHor4NF.js",revision:"912d4fd92ed29737d1c8f60acc81e877"},{url:"assets/wf.html-D0_NuDKd.js",revision:"faa4fdc9c2d8854c67df45b138855422"},{url:"assets/x51.html-BHGDv3dA.js",revision:"0546151458b28b25de1bf688b937d999"},{url:"assets/yj.html-2roNIYaU.js",revision:"b07d8619ee5bc9866dbf97d1c00f39ad"},{url:"assets/zb.html-D6b54rRt.js",revision:"5b2876d7bc70b475540e76ddea1bbfae"},{url:"assets/zd.html-CkQvBxM2.js",revision:"4788f39ef9bbc65f4a368309b5a4793d"},{url:"assets/zg.html-D4VDKH5W.js",revision:"e58506aed92f500e7b0825ff196f21f6"},{url:"assets/zh.html-CWOqB7p_.js",revision:"339f8cea57c5cb34b9508265b75a6809"},{url:"assets/zy.html-C9DMNW2H.js",revision:"7855086e30a9324c43b670c742e121a0"},{url:"bg.svg",revision:"cf398a4e163baf4a18104368cbe4b813"},{url:"bg2.svg",revision:"d83cada89f5e80bba4cb91330be08b73"},{url:"bg3.svg",revision:"01d3b2641647092de1b581d1c4dc2f35"},{url:"bg4.svg",revision:"e5f71f0305bd29e2653240034be925db"},{url:"mwop/mwop.js",revision:"e0e9ebb896b35075aa2bc52e4912f8c8"},{url:"index.html",revision:"383a1672e97ae407d16a2d9b88be5e0a"},{url:"404.html",revision:"fc8eaf1444dd6cee6e54898d2f2ee441"}],{}),s.cleanupOutdatedCaches()}));
