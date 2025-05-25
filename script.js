const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
	const api_key = "2569bf39eac211e5d40044898cb7b186";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

	const weather_data = await fetch(`${url}`).then(response => response.json());

	if(weather_data.cod === '404'){
		location_not_found.style.display = "flex";
		weather_body.style.display = "none";
		console.log("error");
		return;
	}
	
	console.log("run");
	location_not_found.style.display = "none";
	weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
	description.innerHTML = `${weather_data.weather[0].description}`

	humidity.innerHTML = `${weather_data.main.humidity}%`;
	wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

	switch(weather_data.weather[0].main){
		case 'Clouds':
			weather_img.src = "/assests/cloud.png";
			console.log("Clouds: ./assests/cloud.png");
			break;
		case 'Clear':
			weather_img.src = "/assests/clear.png";
			console.log("Clear: ./assests/clear.png");
			break;
		case 'Rain':
			weather_img.src = "/assests/rain.png";
			console.log("Rain: ./assests/rain.png");
			break;
		case 'Mist':
			weather_img.src = "/assests/mist.png";
			console.log("Mist: ./assests/mist.png");
			break;
		case 'Snow':
			weather_img.src = "/assests/snow.png";
			console.log("Snow: ./assests/snow.png");
			break;
		default:
        console.log("Weather type not matched");
	}
	console.log(`Final image path: ${weather_img.src}`);
}
searchBtn.addEventListener('click',()=>{
	checkWeather(inputBox.value);
});