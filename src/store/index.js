import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./dataSlice";
import { UISlice } from "./uiSlice";

// This is our main store and where all our state will be combine by redux to make the central store, but configureStore allows us to use piece of state that we need when working. Store will be provided to application by wrapping Provider around our app in root app
const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    UI: UISlice.reducer,
  },
});

export default store;
