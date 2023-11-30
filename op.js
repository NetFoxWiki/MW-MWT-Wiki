window.onload = function() {
//function genshinLaunch() {
        // 现代战舰，启动！
        // CSS
        const elm_style = document.createElement("style");
        elm_style.innerHTML = `
                    :root{
                        --img0: url('https://my-img.cc/i/2023/11/26/6562d986415bb.jpeg');
                        --img1: url('https://my-img.cc/i/2023/11/30/6568699774c40.jpg');
                        --img3: url('https://my-img.cc/i/2023/11/26/6562d9862924c.jpeg');
                    }

                    #genshinLaunch {
                        display: block;
                        position: fixed;
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        z-index: 1000000000;
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-color: #fff;
                        animation-name: launch;
                        animation-duration: 10s;
                        animation-fill-mode: forwards;
                    }
                    @keyframes launch {
                        0% {
                            background-image: var(--img0);
                        }
                        30% {
                            background-image: var(--img0);
                        }
                        40% {
                            background-image: var(--img1);
                        }
                        90% {
                            background-image: var(--img1);
                        }
                        100% {
                            background-image: var(--img3);
                        }
                    }
        `;
        document.head.appendChild(elm_style);

        // 启动音效
        const elm_audio = document.createElement("audio");
        elm_audio.style.display = "none";
        elm_audio.loop = true;
        elm_audio.src = "https://sharefs.hw.kugou.com/202311261354/ae6e2ffedbb2c5310276f0c398019685/v3/9238878ff36c151632e7d4998fa693f3/yp/full/a1000_u0_p409_s304224780.mp3";
        elm_audio.play();
		const elm_audio_2 = document.createElement("audio");
        elm_audio_2.style.display = "none";
        elm_audio_2.loop = false;
        elm_audio_2.src = "./mw.mp3"
		elm_audio_2.play();
        // 启动
        const elm_div = document.createElement("div");
        elm_div.id = "genshinLaunch";
        document.body.appendChild(elm_div);

        setTimeout(() => {
			//此处活跃更改
            window.location.href='https://mwdocs.info/DE.html';
            elm_div.onclick = () => {
                elm_audio.pause();
                elm_div.remove();
                elm_style.remove();
            }
        }, 12000)
    }
console.log("%c 现代战舰，启动！ %c https://mwdocs.info By MW & MWT 文档 & 阿布咕咕 ", "color: #fff; margin: 1em 0; padding: 5px 0; background: #74759b;", "margin: 1em 0; padding: 5px 0; background: #e7a23f;");
