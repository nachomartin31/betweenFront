import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTemperatureUnit } from "../redux/slices/temperatureUnit";
import { setSpeedSystem } from "../redux/slices/speedUnit";

import styles from "../styles/header.module.css";

function Header() {
  const dispatch = useDispatch();
  const temperatureUnit = useSelector((state) => state.temperatureUnit.unit);
  const windSystem = useSelector((state) => state.speedSystem.system);
  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <h1>Daily Weather</h1>
      <div className={styles.unit_setters}>
        <label htmlFor="temperature">
          <div className={styles.dropdown} name="temperature" defaultValue="celsius">
            <span className={styles.units}>
              Temperature:
              {" "}
              {temperatureUnit === "celsius"
                ? <span>ºC</span>
                : <span>ºF</span>}
            </span>
            <div className={styles.dropdown_content}>
              <input type="button" className={styles.option} value="Celsius" onClick={() => { dispatch(setTemperatureUnit("celsius")); }} />
              <input type="button" className={styles.option} value="Farenheit" onClick={() => { dispatch(setTemperatureUnit("farenheit")); }} />
            </div>
          </div>
        </label>
        <label htmlFor="wind">
          <div className={styles.dropdown} name="wind" defaultValue="metric">
            <span className={styles.units}>
              Wind:
              {" "}
              {windSystem === "metric"
                ? <span>Kmh</span>
                : <span>Mph</span>}
            </span>
            <div className={styles.dropdown_content}>
              <input type="button" className={styles.option} value="Kmh" onClick={() => { dispatch(setSpeedSystem("metric")); }} />
              <input type="button" className={styles.option} value="Mph" onClick={() => { dispatch(setSpeedSystem("imperial")); }} />
            </div>
          </div>
        </label>
      </div>

    </header>
  );
}

export default Header;
