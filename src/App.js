import React from "react";
import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="weather-data">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/Ronel3">Ronel Simelane</a> and is open
        sourced on{" "}
        <a href="https://github.com/Ronel3/react-weather-app">Github</a> and
        hosted on <a href="">Render.</a>
      </footer>
    </div>
  );
}

export default App;
