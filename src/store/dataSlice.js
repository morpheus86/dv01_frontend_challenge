import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../request/api";
import { UIActions } from "./uiSlice";
import { getGroupByFeature, getAggregateTotal } from "../utilities/functions";

// this will be our initial state for this particular slice of state which will contain our data array and aggregateTotal arr
const dataInitialState = {
  datas: [],
  aggregateTotal: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState: dataInitialState,
  reducers: {
    getDatas(state, action) {
      // this fncion is dispatched in our thunk and will receive the data through action.payload
      // I am getting these function from my utility file to modify / update state
      console.log("action.payload :>> ", action);
      const allGroups = getGroupByFeature(action.payload.data);
      const getAggregate = getAggregateTotal(allGroups, action.payload.data);
      state.datas = action.payload.datas;
      state.aggregateTotal = getAggregate;
    },
  },
});

// This is gonna provide the actions of our dataSlice reducer to be dispatch; ex: dataActions.getDatas()
export const dataActions = dataSlice.actions;

// Thunk and function to get async data from request/api
export const getAllDatas = () => async (dispatch) => {
  dispatch(
    UIActions.fireNotification({
      message: "Loading...",
      status: "Loading...",
      title: "Loading",
    })
  );
  try {
    const response = await getData();

    dispatch(
      UIActions.fireNotification({
        message: "Success getting data",
        status: "Success...",
        title: "Success",
      })
    );
    console.log("response :>> ", response);
    dispatch(
      dataActions.getDatas({
        datas: response,
      })
    );
  } catch (error) {
    dispatch(
      UIActions.fireNotification({
        message: `There has been an error retrieving the data: ${error}`,
        status: "Error...",
        title: "Error",
      })
    );
  }
};
