import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./currentDate";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,

      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityInput(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "d3e48bf033atf207aaaofb4545b2099f";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-info">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-input"
            autoFocus="on"
            onChange={handleCityInput}
          />
          <input type="submit" value="Search" className="search-input" />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return <p>Loading....</p>;
  }
}
