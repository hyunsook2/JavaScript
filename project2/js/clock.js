$(document).ready(function() {
    setInterval( function() {
    var hours = new Date().getHours();
    $(".hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
    setInterval( function() {
    var minutes = new Date().getMinutes();
    $(".min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
    setInterval( function() {
    var seconds = new Date().getSeconds();
    $(".sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    },1000);
    });

    // function getClock(){
    //     const clock=$('#clcok');
    //     const date=new Date();
    //     const hour=String(date.getHours()).padStart(2,'0');
    //     const minute=String(date.getMinutes()).padStart(2,'0');
    //     const seconds=String(date.getSeconds()).padStart(2,'0');
    //     // console.log(hour,minute,seconds);
    //     clock.text(`${hour}:${minute}:${seconds}`);
    // }
    // getClock();
    // setInterval(getClock,1000);