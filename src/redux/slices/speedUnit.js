/* eslint-disable no-param-reassign */
/* @reduxjs/toolkit implements Immer to handle state change avoiding mutation
so it's safe to disable no-params-reassign on this module */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  system: "km/h"
};

export const speedSystemSlice = createSlice({
  name: "speed",
  initialState,
  reducers: {
    setSpeedSystem: (state, action) => {
      state.system = action.payload;
    }
  }
});

export const { setSpeedSystem } = speedSystemSlice.actions;

export default speedSystemSlice.reducer;
