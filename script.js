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

function displayWeather(response) {
    let temperatureElement = document.querySelector("#current-temperature-value")
    let temperature = Math.round(response.data.temperature.current);
    temperatureElement.innerHTML = temperature;
}

let searchForm = document.querySelector("#search-form"); 
searchForm.addEventListener("submit", showCity); //This line attaches an event listener to the searchForm. It listens for the "submit" event (when the form is submitted) and calls the showCity function when that event occurs.

/*Date */
let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let currentDay = days[now.getDay()];
let currentDate = now.getDate();
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = month[now.getMonth()];
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
let currentTime = document.querySelector("#current-date");
currentTime.innerHTML = (`${currentDay}, ${currentDate} ${currentMonth}, ${currentHour}:${currentMinute}`);

/* Weather details */
let currentPrecipitation = document.querySelector("#current-precipitation");
let currentHumidity = document.querySelector("#current-humidity");
let currentWindSpeed = document.querySelector("#current-wind-speed");
currentPrecipitation.innerHTML = `100%`;
currentHumidity.innerHTML = `100%`;
currentWindSpeed.innerHTML = `100km/h`;
