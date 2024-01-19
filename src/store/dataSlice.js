import { createSlice } from "@reduxjs/toolkit";

// this will be our initial state for this particular slice of state which will contain our data array and aggregateTotal arr
const dataInitialState = {
  datas: [],
  aggregateTotal: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState: dataInitialState,
  reducers: {
    getDatas(state, actions) {},
  },
});

// This is gonna provide the actions of our dataSlice reducer to be dispatch; ex: dataActions.getDatas()
export const dataActions = dataSlice.actions;
