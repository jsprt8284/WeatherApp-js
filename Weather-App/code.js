
const apiKey = `667e1f5b4b2a2ff4c6564f29aeb186fe`
const form = document.querySelector("form");
const search=document.querySelector("#searchbox");
const weather=document.querySelector("#weather");
const weathericon=document.querySelector(".weather-icon");


const getweather = async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showweather(data)
}

const showweather = (data) =>{

    if(data.cod==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else if(search.value==""){
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="none";
    }
    else{
    
        document.querySelector(".temp").innerHTML=data.main.temp + " ℃";
        document.querySelector(".weather-type").innerHTML=data.weather[0].main;
        document.querySelector("#humidity").innerHTML=data.main.humidity + "%";
        document.querySelector("#wind").innerHTML=data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clear"){
            weathericon.src="./icons/clear.png";
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src="./icons/mist.png";
        }
        else if(data.weather[0].main == "Clouds"){
            weathericon.src="./icons/sclouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src="./icons/rain.png";
        }
        else if(data.weather[0].main == "Haze"){
            weathericon.src="./icons/haze.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src="./icons/drizzle.png";
        }
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    }
    
   

}


form.addEventListener(
    "submit",
    function(event){
        getweather(search.value);
        event.preventDefault();
    }
)