let apiKey = "5863935ee9cca4c02ed68203f807c65b";
let tempSpan = "https://api.openweathermap.org/data/2.5/weather";

let searchInput = document.querySelector("#cityName");

let temperatureSearch = document.querySelector("#temperatureSearch");
function searchCity(event) {
    event.preventDefault();
    if (searchInput.value) {
        temperatureSearch.innerHTML = `${searchInput.value}`;
        axios.get(`${tempSpan}?q=${searchInput.value}&appid=${apiKey}&units=metric`).then(showTemperature);

    } else {
        temperatureSearch.innerHTML = null;
        alert("Please type a city");
    }
}
let form = document.querySelector("#searchForm");
form.addEventListener("submit", searchCity);

let now = new Date();
let temperatureDay = document.querySelector("#temperatureDay");
let data = now.getDate();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let month = months[now.getMonth()];
temperatureDay.innerHTML = `${day} ${data} ${month}`;

let tempFahrenheit = document.querySelector("#tempfahrenheit");
let tempCelsius = document.querySelector("#tempcelsius");

function convertToF(celsius) {
    return Math.round( (celsius * 9) / 5 + 32);
}
tempFahrenheit.addEventListener("click", function () {
    let celsius = tempCelsius.querySelector("span");
    tempFahrenheit.querySelector("span").textContent = convertToF(
        celsius.textContent
    );
});
convertToF(30);

function showCurrentTime(){
    var currDate = new Date();
    var hours = currDate.getHours();
    var minutes = currDate.getMinutes();
    var seconds = currDate.getSeconds();
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    document.Clock.timer.value = hours + ":" + minutes + ":" + seconds;
    setTimeout("showCurrentTime()", 2000);
}
showCurrentTime();


function showTemperature(response) {
    tempCelsius.querySelector("span").innerHTML = `${Math.round(response.data.main.temp)}`
}





