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
  const defineCities = () => {
    const totalCitiesFromEntries = weatherEntries.map((entry) => entry.location.city);
    const differentCities = [...new Set(totalCitiesFromEntries)];
    setCities(differentCities);
    setFilteredCities(differentCities);
  };

  useEffect(() => {
    loadWeatherEntries();
  }, []);
  useEffect(() => {
    defineCities();
  }, [weatherEntries]);

  const filterCities = (query) => {
    setFilteredCities(
      cities.filter((city) => city.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <main className={styles.main}>
      <label htmlFor="search" className={styles.searcher}>
        City:
        {" "}
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
        <section key={city}>
          <h2 key={`${city}heading`}>{city}</h2>
          <div className={styles.weatheByCity} key={city}>
            {weatherEntries.filter(
              (entry) => entry.location.city === city
            ).map(
              (entry) => <WeatherMiniature entry={entry} key={entry._id} />
            )}
          </div>
        </section>
      ))}

    </main>
  );
}
