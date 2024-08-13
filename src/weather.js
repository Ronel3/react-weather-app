import React from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const apiKey = "d3e48bf033atf207aaaofb4545b2099f";
  let city = "Seoul";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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

      <h1>Seoul</h1>

      <div className="row">
        <div className="col-md-10">
          <ul>
            <li>Monday 13:36, scattered clouds</li>
            <li>
              Humidity: <span className="humidity">94%</span>, Wind:
              <span className="wind">4.02km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-md-2">12°C</div>
      </div>
    </div>
  );
}
