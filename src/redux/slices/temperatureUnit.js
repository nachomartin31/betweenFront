/* eslint-disable no-param-reassign */
/* @reduxjs/toolkit implements Immer to handle state change avoiding mutation
so it's safe to disable no-params-reassign on this module */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: "celsius"
};

export const temperatureUnitSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    setTemperatureUnit: (state, action) => {
      state.unit = action.payload;
    }
  }
});

export const { setTemperatureUnit } = temperatureUnitSlice.actions;

export default temperatureUnitSlice.reducer;
