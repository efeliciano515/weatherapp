// Feature 1

let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];

let currentDate = document.querySelector(".time");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

// Feature 2

function destination(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", destination);

// Feature 3

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 87;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 30;
}

function showTemperature(response) {
  let temperatureCity = Math.round(response.data.main.temp);
  let current = document.querySelector("#temperature");
  current.innerHTML = temperatureCity;
}

let apiKey = "1f2a00b94ccf72a91aab930e47d01923";
let city = "Hollywood";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
axios.get(apiUrl).then(showTemperature);
