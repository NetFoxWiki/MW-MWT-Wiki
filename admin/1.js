var time = 4;
var timer = setInterval(function(){
    time--;
    if(time <= 0){
        clearInterval(timer);
        document.title = "错误"
        window.location.href = "https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4";
    }
    document.querySelector(".time_h1").innerHTML = time;
    document.querySelector(".time_h3").innerHTML = time;
    if(time > 0){
        document.title = "检测中";
    }
    if(time < 2){
        document.querySelector(".distance_en_us_3").innerHTML = "SECOND";
    }
},1000);
