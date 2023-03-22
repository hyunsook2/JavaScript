function printTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    const now = hour + ':' + min + ':' + sec;
    console.log(now);
    document.querySelector('#clock').innerHTML = now;
    setTimeout(printTime,1000);
} printTime();