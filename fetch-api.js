const fetch = require("node-fetch");
require('dotenv').config();

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='

const fetchWeather = async function(city = "London"){
    const apiKey = process.env.SECRET_KEY ;
    const requestUrl = `${BASE_URL}${city}&appid=${apiKey}`
    const response = await fetch(requestUrl);
    return response.json()
}

module.exports = fetchWeather