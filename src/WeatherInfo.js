import React from "react";
import CurrentDate from "./currentDate";
import "./weather.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-md-8">
          <ul>
            <li>
              <CurrentDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
          <ul>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}%</span>
              , Wind:
              <span className="wind">{props.data.wind}km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <span className="temperature-info">
                {" "}
                {Math.round(props.data.temperature)}
              </span>
              <span className="weather-degrees">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
