var currentTime = $(".mplayer_curtime");
var durationTime = $(".mplayer_durtime");
var circle = $('.m-circle .a')[0];
var circumference = 2 * Math.PI * 160;
var timer;

function on1(objInfo) {
    mid = "myAudio";
}

function on2(objInfo) {
    mid = "myAudio1";
}

function on3(objInfo) {
    mid = "myAudio2";
}

function on4(objInfo) {
    mid = "myAudio3";
}

function on5(objInfo) {
    mid = "myAudio4";
}

function on6(objInfo) {
    mid = "myAudio5";
}

function on7(objInfo) {
    mid = "myAudio6";
}

function on8(objInfo) {
    mid = "myAudio7";
}

function clo(objInfo) {
    document.getElementById(mid).load();
    $('.music-box').removeClass('mplaying');
}

function play() {
    var audio = document.getElementById(mid);
    if (audio.paused) {
        audio.play();
        $('.music-box').addClass('mplaying');
        // 计时器实时更新进度
        timer = setInterval(() => {
            if (audio.ended) {
                // 音频播放结束
                $('.music-box').removeClass('mplaying');
                circle.setAttribute(
                    'stroke-dasharray', '0 999'
                );
            }
        }, 0);
    } else {
        audio.pause();
        $('.music-box').removeClass('mplaying');
    }
}



function show() {
    alert("你还不信。");
}

function show_hamo() {
    window.location.href = 'Hidden/Hidden.html';
}

function Top() {
    window.scrollTo(0, 0);
}