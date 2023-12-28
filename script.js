/*City and API integration*/
function showCity(event) {
    event.preventDefault(); //This line prevents the default behavior of the form submission, which would normally be to reload the page. It allows the JavaScript code to handle the submission without a page refresh.
    let searchCity = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchCity.value.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());

    let city = searchCity.value;
    let apiKey = "410fa504959827feb595o996c3d3et87";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(displayWeather);
}

/* Weather details */
function displayWeather(response) {
    let temperatureElement = document.querySelector("#current-temperature-value")
    let temperature = Math.round(response.data.temperature.current);
    temperatureElement.innerHTML = temperature;

    // let weatherIconElement = document.querySelector("#weather-icon");
    // let weatherIcon = (response.data.condition.icon);
    // weatherIconElement.innerHTML = weatherIcon;

    let humidityElement = document.querySelector("#current-humidity");
    let currentHumidity = Math.round(response.data.temperature.current);
    humidityElement.innerHTML = `${currentHumidity}%`;

    let windSpeedElement = document.querySelector("#current-wind-speed");
    let currentWindSpeed = (response.data.wind.speed);
    windSpeedElement.innerHTML = `${currentWindSpeed} km/h`;

    let weatherDescriptionElement = document.querySelector("#current-weather-description");
    let weatherDescription = (response.data.condition.description);
    weatherDescriptionElement.innerHTML = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
}

let searchForm = document.querySelector("#search-form"); 
searchForm.addEventListener("submit", showCity); //This line attaches an event listener to the searchForm. It listens for the "submit" event (when the form is submitted) and calls the showCity function when that event occurs.

/* Date */
let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let currentDay = days[now.getDay()];
let currentDate = now.getDate();
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = month[now.getMonth()];
let currentHour = now.getHours();
let currentMinute = now.getMinutes();

if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
}

if (currentHour < 10) {
    currentHour = `0${currentHour}`;
}

let currentTimeElement = document.querySelector("#current-date");
let currentTime = (`${currentDay}, ${currentDate} ${currentMonth}, ${currentHour}:${currentMinute}`);
currentTimeElement.innerHTML = currentTime;