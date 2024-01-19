import { createSlice } from "@reduxjs/toolkit";

const UI_initialState = {
  isLoading: false,
  notifications: null,
};

export const UISlice = createSlice({
  name: "UI",
  initialState: UI_initialState,
  reducers: {
    fireNotification(state, action) {
      state.notifications = {
        message: action.payload.message,
        status: action.payload.status,
        title: action.payload.title,
      };
    },
    resetNotification(state, action) {
      state.notifications = null;
    },
  },
});

export const UIActions = UISlice.actions;
