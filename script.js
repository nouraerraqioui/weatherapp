const apikey = "0962d6568950d8abd49bf2891e647fac";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon")

async function checkweather(city) {
    const res = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await res.json();
   
   

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main=="Clouds"){
weatherIcon.src ="cloudy-svgrepo-com.svg"

    }
   else if(data.weather[0].main==="Rain"){
weatherIcon.src ="rain-svgrepo-com.svg"

    }
    else if(data.weather[0].main==="Snow"){
weatherIcon.src ="snow.svg"

    }
    else if(data.weather[0].main==="Clear"){
weatherIcon.src ="sun-svgrepo-com.svg"

    }
}


searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});


