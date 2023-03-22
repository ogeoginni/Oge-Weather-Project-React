import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="Weather-main-temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="Weather-units">°C</span>
    </div>
  );
}
