import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data.temperature);
    setWeatherData({
      ready: true,

      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      desciption: response.data.condition.desciption,
      iconUrl: response.data.condition.icon_Url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-info">
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-input"
          />
          <input type="submit" value="Search" className="search-input" />
        </form>

        <h1>{weatherData.city}</h1>

        <div className="row">
          <div className="col-md-10">
            <ul>
              <li>Monday 13:36, {weatherData.desciption}</li>
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}</span>, Wind:
                <span className="wind">{weatherData.wind}km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <img src={weatherData.iconUrl} />
            {Math.round(weatherData.temperature)}
            <span className="weather-degrees">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d3e48bf033atf207aaaofb4545b2099f";
    let city = "Tokyo";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading....</p>;
  }
}
