const textInput = document.querySelector('#location');
const submitBtn = document.querySelector('#submitButton');
const img = document.querySelector('#img');
const locationDisplay = document.querySelector('#name');
const tempDisplay = document.querySelector('#temp');
const descDisplay = document.querySelector('#desc');
const tempMinDisplay = document.querySelector('#tempMin');
const tempMaxDisplay = document.querySelector('#tempMax');
const tempFDisplay = document.querySelector('#tempF');
const humidityDisplay = document.querySelector('#humidity');
const windSpeedDisplay = document.querySelector('#windSpeed');


let info;
const key = 'b2b8205a689c0964f19b22bc18a429e2'; // API key as a string


submitBtn.addEventListener("click", (event) => {

    event.preventDefault();

    info = textInput.value; // Get the value of the input field

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + info + "&units=imperial&appid=" + key)
    .then((response) => response.json())
    .then((data) => {
        const temp = Math.round(data.main.temp) + '°F';
        const tempF = Math.round(data.main.feels_like) + '°F';
        const tempMin = Math.round(data.main.temp_min) + '°F';
        const tempMax = Math.round(data.main.temp_max) + '°F';
        const humid = Math.round(data.main.humidity) + '%';
        const name = data.name + ', ' + data.sys.country;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
        const speeds = Math.round(data.wind.speed) + 'mph';


        img.src = iconUrl;
        img.classList.add('border-style');
        img.style.width = '100px';
        img.style.height = '100px';

        locationDisplay.textContent = "LOCATION: " + name;
        descDisplay.textContent = "DESCRIPTION: " + desc;
        tempDisplay.textContent = "TEMP: " + temp;
        tempMinDisplay.textContent = "TEMP MIN: " + tempMin;
        tempMaxDisplay.textContent = "TEMP MAX: " + tempMax;
        tempFDisplay.textContent = "FEELS LIKE: " + tempF;
        humidityDisplay.textContent = "HUMIDITY: " + humid;
        windSpeedDisplay.textContent = "WIND SPEED: " + speeds;
        });
    });