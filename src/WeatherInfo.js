import React from "react";
import CurrentDate from "./currentDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-md-10">
          <ul>
            <li>
              <CurrentDate date={props.data.date} /> {props.data.desciption}
            </li>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}%</span>
              , Wind:
              <span className="wind">{props.data.wind}km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <img src={props.data.iconUrl} />
          {Math.round(props.data.temperature)}
          <span className="weather-degrees">°C</span>
        </div>
      </div>
    </div>
  );
}
