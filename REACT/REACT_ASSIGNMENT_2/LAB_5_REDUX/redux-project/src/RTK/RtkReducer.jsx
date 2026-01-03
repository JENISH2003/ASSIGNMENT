import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const RtkReducer = createSlice({
  name: "Counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});
export const {increment,decrement} = RtkReducer.actions
export default RtkReducer.reducer;
