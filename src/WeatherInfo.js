import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="mt-4">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="additional-info">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
            <li>Feels like: {Math.round(props.data.feelsLike)} °F</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
