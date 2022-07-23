/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};
*/
// write your code here
//let city = prompt("Enter a city").toLowerCase();

/*if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let celsius = Math.round(temperature);
  let fahrenheit = Math.round((temperature * 9) / 5 + 32);
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${celsius}°C (${fahrenheit}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
*/

// Show current time:
function currentTime() {
    let time = document.querySelector("#current-time");
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
  
    time.innerHTML = `${hours}:${minutes} ${day}`;
  }
  
  let now = new Date();
  currentTime();
  
  // Change input city:
  function changeCity(event) {
    event.preventDefault();
    currentCity.innerHTML = `${inputNewCity.value}`;
  
    function getNewCity(response) {
      //  let mathRoundedTemp = Math.round(response.data.main.temp);
      currentTemperature.innerHTML = `${response.data.main.temp}`;
    }
  
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputNewCity.value}&appid=648a7061e4cc76852d26d41d4a66634b&units=metric`;
    axios.get(apiUrl).then(getNewCity);
  }
  let currentCity = document.querySelector("#current-city");
  
  let inputNewCity = document.querySelector("#input-city");
  let form = document.querySelector("#change-city");
  form.addEventListener("submit", changeCity);
  
  // Change Celsius to Fahrenheit:
  function changeCelsius(event) {
    event.preventDefault();
    currentTemperature.innerHTML = "19°C";
  }
  let newCelsius = document.querySelector("#current-celcius");
  let currentTemperature = document.querySelector("#current-temperature");
  newCelsius.addEventListener("click", changeCelsius);
  
  function changeFahrenheit(event) {
    event.preventDefault();
    currentTemperature.innerHTML = "66°F";
  }
  
  let fahrenheit = document.querySelector("#current-fahrenheit");
  fahrenheit.addEventListener("click", changeFahrenheit);
  
  // Show own current city and temp:
  function showButtonCurrent() {
    function handlePosition(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
  
      let positionUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=648a7061e4cc76852d26d41d4a66634b`;
      axios.get(positionUrl).then((response) => {
        console.log(response.data.name);
        currentCity.innerHTML = `${response.data.name}`;
  
        currentTemperature.innerHTML = `${response.data.main.temp}`;
      });
    }
    navigator.geolocation.getCurrentPosition(handlePosition);
  }
  let buttonCurrent = document.querySelector("#currentcity-button");
  buttonCurrent.addEventListener("click", showButtonCurrent);
  