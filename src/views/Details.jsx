import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import fetchDataFromApi from "../utils/fetchData";
import sunny from "../img/sunny.svg";
import cloudy from "../img/cloudy.svg";
import rainy from "../img/rainy.svg";
import windy from "../img/windy.svg";
import styles from "../styles/details.module.css";

export default function Details() {
  const [entry, setEntry] = useState(null);
  const [weatherTypeImage, setWeatherTypeImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const temperatureUnit = useSelector((state) => state.temperatureUnit.unit);
  const windSystem = useSelector((state) => state.speedSystem.system);
  const loadEntry = async () => {
    const [data] = await fetchDataFromApi(`${process.env.REACT_APP_URL}?_id=${id}`);
    await setEntry(data);
  };
  useEffect(() => {
    loadEntry();
  }, []);
  useEffect(() => {
    switch (entry?.weatherType) {
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
  }, [entry]);

  return (
    <main className={styles.main}>
      {
        entry
          ? (
            <>
              <h2>{`${entry.location?.city}, ${entry.date}`}</h2>
              <div className={styles.weather_data}>
                <img src={weatherTypeImage} alt="Weather" />
                <div className={styles.weather_mesures}>
                  <label htmlFor="averageTemp" className={styles.row}>
                    {" "}
                    Average temperature:
                    {temperatureUnit === "celsius"
                      ? (
                        <span name="averageTemp">
                          {entry.averageTemperature?.celsius }
                          {" "}
                          ºC
                        </span>
                      )
                      : (
                        <span name="averageTemp">
                          {entry.averageTemperature?.farenheit }
                          {" "}
                          ºF
                        </span>
                      )}
                  </label>
                  <label htmlFor="averageWind" className={styles.row}>
                    {" "}
                    Wind speed:
                    {windSystem === "metric"
                      ? (
                        <span name="averageWind">
                          {entry.averageWindSpeed?.metric }
                          {" "}
                          Kmh
                        </span>
                      )
                      : (
                        <span name="averageWind">
                          {entry.averageWindSpeed?.imperial }
                          {" "}
                          Mph
                        </span>
                      )}
                  </label>
                </div>
              </div>
              <table className={styles.table}>
                <thead className={styles.table_header}>
                  <tr className={styles.table_row}>
                    <th className={styles.table_element}>00h</th>
                    <th className={styles.table_element}>01h</th>
                    <th className={styles.table_element}>02h</th>
                    <th className={styles.table_element}>03h</th>
                    <th className={styles.table_element}>04h</th>
                    <th className={styles.table_element}>05h</th>
                    <th className={styles.table_element}>06h</th>
                    <th className={styles.table_element}>07h</th>
                    <th className={styles.table_element}>08h</th>
                    <th className={styles.table_element}>09h</th>
                    <th className={styles.table_element}>10h</th>
                    <th className={styles.table_element}>11h</th>
                    <th className={styles.table_element}>12h</th>
                    <th className={styles.table_element}>13h</th>
                    <th className={styles.table_element}>14h</th>
                    <th className={styles.table_element}>15h</th>
                    <th className={styles.table_element}>16h</th>
                    <th className={styles.table_element}>17h</th>
                    <th className={styles.table_element}>18h</th>
                    <th className={styles.table_element}>19h</th>
                    <th className={styles.table_element}>20h</th>
                    <th className={styles.table_element}>21h</th>
                    <th className={styles.table_element}>22h</th>
                    <th className={styles.table_element}>23h</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.table_row}>
                    {entry?.hourlyTemperature?.map(
                      (temperature) => (
                        <td
                          key={(Math.random() * 1000) / (Math.random() * 2)}
                          className={styles.table_element}
                        >
                          {temperatureUnit === "celsius"
                            ? (
                              <span>
                                {temperature.celsius }
                                {" "}
                                ºC
                              </span>
                            )
                            : (
                              <span>
                                {temperature.farenheit }
                                {" "}
                                ºF
                              </span>
                            )}

                        </td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>
              <input
                type="button"
                className={styles.back_button}
                value="Back"
                onClick={() => navigate(-1)}
              />
            </>
          )

          : null
      }
    </main>
  );
}
