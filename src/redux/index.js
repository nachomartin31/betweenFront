import { configureStore } from "@reduxjs/toolkit";

import speedSystemReducer from "./slices/speedUnit";
import tempeperatureUnitReducer from "./slices/temperatureUnit";
import currentDateReducer from "./currentDate";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    speedSystem: speedSystemReducer,
    temperatureUnit: tempeperatureUnitReducer,
    currentDate: currentDateReducer
  }
});
