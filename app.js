var min = 0;
var sec = 0;
var mili = 0;
var showmin = document.getElementById("min")
var showsec = document.getElementById("sec")
var showmili = document.getElementById("mili")

function timer (){
    mili++
    showmili.innerHTML = mili
    if(mili == 100){
        sec++
        showsec.innerHTML = sec
        mili = 0
    }else if (sec == 60){
        min++
        showmin.innerHTML = min
        sec = 0
    }
}

function start(){
    document.getElementById("start").style.display = 'none'
    interval = setInterval(timer,10);
}
function stop(){
    document.getElementById("start").style.display='inline-block'
    clearInterval(interval)
}

function reset(){
    min = 0
    sec = 0
    mili = 0
    showmin.innerHTML = min
    showsec.innerHTML = sec
    showmili.innerHTML = mili
}