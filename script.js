const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather_img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');
const location_not_found= document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

// const url='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';


 searchBtn.addEventListener('click',()=>
 {  
    checkWeather(inputBox.value);
 })
 

async function checkWeather(city)
{
    
    const api_key="bfd625084877c5401907ad91d4f15857";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod=='404')
    {   
        location_not_found.style.display="flex";
        weather_body.style.display='none';
        return; 
    }
    location_not_found.style.display='none';

    weather_body.style.display='flex';
   
    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)} °C`;
                                        // Converting temperature into cellsius
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

    // For Changing the Image according to the weather

    switch(weather_data.weather[0].main)
    {
        case 'Clouds':
            weather_img.src="images/cloud.png";
            break;
              //Agar weather ke main me Clouds likha hua hai to image update hogi

        case 'Clear':
            weather_img.src='images/clear.png';
            break;

        case 'Mist':
            weather_img.src='images/mist.png';
            break;

        case 'Rain':
            weather_img.src='images/rain.png';
            break;

        case 'Snow':
            weather_img.src='images/snow.png';
            break;
    }
}   