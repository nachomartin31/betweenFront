/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from "react";
import fetchDataFromApi from "../utils/fetchData";
import WeatherMiniature from "../components/WeatherMiniature";
import styles from "../styles/home.module.css";

export default function Home() {
  const [weatherEntries, setWeatherEntries] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const loadWeatherEntries = async () => {
    const data = await fetchDataFromApi(`${process.env.REACT_APP_URL}`);
    setWeatherEntries(data);
  };
  useEffect(() => {
    loadWeatherEntries();
  }, []);
  useEffect(() => {
    weatherEntries.forEach((entry) => {
      if (!cities.includes(entry.location.city)) {
        setCities([...cities, `${entry.location.city}`]);
      }
    });
  }, [weatherEntries]);
  useEffect(() => {
    setFilteredCities(cities);
  }, [cities]);

  const filterCities = (query) => {
    setFilteredCities(
      cities.filter((city) => city.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <>
      <h1>City weather searcher</h1>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          placeholder="City search"
          autoComplete="off"
          onChange={(event) => filterCities(event.target.value)}
        />
      </label>
      {filteredCities.map((
        city
      ) => (
        <div className={styles.weatheByCity} key={city}>
          {weatherEntries.filter(
            (entry) => entry.location.city === city
          ).map(
            (entry) => <WeatherMiniature entry={entry} key={entry._id} />
          )}
        </div>
      ))}

    </>
  );
}
