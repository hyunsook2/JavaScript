const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY = "ae4f74e6b4e59995a3cdeb3583ba6e83";

window.navigator.geolocation.getCurrentPosition(geoOk,geoErr);

function geoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
        console.log(data);
        city.innerHTML=data.name;
        weather.innerText=`${data.weather[0].main}/${data.main.temp}`;
    });
}

function geoErr(){
    alert(
    "can't find you.NO weather info."
    )
}