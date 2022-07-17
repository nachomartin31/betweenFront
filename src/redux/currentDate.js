/* eslint-disable no-param-reassign */
/* @reduxjs/toolkit implements Immer to handle state change avoiding mutation
so it's safe to disable no-params-reassign on this module */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: Date.now()
};

export const currentDateSlice = createSlice({
  name: "currentDate",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    }
  }
});

export const { setDate } = currentDateSlice.actions;

export default currentDateSlice.reducer;
