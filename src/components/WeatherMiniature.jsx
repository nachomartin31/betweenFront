import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sunny from "../img/sunny.svg";
import cloudy from "../img/cloudy.svg";
import rainy from "../img/rainy.svg";
import windy from "../img/windy.svg";
import styles from "../styles/weatherMiniature.module.css";

function WeatherMiniature({ entry }) {
  const {
    location, averageTemperature, date, weatherType, _id: id
  } = entry;
  const temperatureUnit = useSelector((state) => state.temperatureUnit.unit);
  const [weatherTypeImage, setWeatherTypeImage] = useState("");
  useEffect(() => {
    switch (weatherType) {
      case "Sunny":
        setWeatherTypeImage(sunny);
        break;
      case "Windy":
        setWeatherTypeImage(windy);

        break;
      case "Cloudy":
        setWeatherTypeImage(cloudy);

        break;
      case "Rainy":
        setWeatherTypeImage(rainy);

        break;

      default:
        break;
    }
  }, []);
  return (
    <Link className={styles.miniatureLink} to={`/${id}`}>
      <p>
        {location.city}
        ,
        {" "}
        {location.country}
      </p>
      <p>{date}</p>
      <img src={weatherTypeImage} alt="Weather" />
      {temperatureUnit === "celsius" ? (
        <p>
          {averageTemperature.celsius}
          ºC
        </p>
      )
        : (
          <p>
            {averageTemperature.farenheit}
            ºF
          </p>
        )}
    </Link>
  );
}

export default WeatherMiniature;

WeatherMiniature.propTypes = {
  entry: PropTypes.shape({
    averageTemperature: PropTypes.shape({
      celsius: PropTypes.number,
      farenheit: PropTypes.number
    }),
    hourlyTemperature: PropTypes.arrayOf(PropTypes.shape({
      celsius: PropTypes.number,
      farenheit: PropTypes.number
    })),
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string
    }),
    date: PropTypes.string,
    averageWindSpeed: PropTypes.shape({
      metric: PropTypes.number,
      imperial: PropTypes.number
    }),
    weatherType: PropTypes.string,
    _id: PropTypes.string
  }).isRequired
};
