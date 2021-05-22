/**
 * Weather App
 * DONE: Complete getWeatherData() to return json response Promise
 * DONE: Complete searchCity() to get user input and get data using getWeatherData()
 * DONE: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) => {
        return response.json();
    });
};


/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
    const city = document.getElementById("city-input").value;
    getWeatherData(city)
        .then((response) => {
            showWeatherData(response);
        })
        .catch((err) => {
            console.log(err);
        });
};

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerHTML = weatherData.name;
    document.getElementById("weather-type").innerHTML =
        weatherData.weather[0].description;
    document.getElementById("temp").innerHTML = weatherData.main.temp;
    document.getElementById("min-temp").innerHTML = weatherData.main.temp_min;
    document.getElementById("max-temp").innerHTML = weatherData.main.temp_max;
};
