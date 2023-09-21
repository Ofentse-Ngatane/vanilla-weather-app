function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "8ad93ca36e804c7caaet5d5bac5b34of";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Johannesburg&key=8ad93ca36e804c7caaet5d5bac5b34of&units=metric";
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
