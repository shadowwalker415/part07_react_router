import { createSlice } from "@reduxjs/toolkit";
import { resetOperationStatus } from "./operationStatusReducer";

const initialState = null;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      return action.payload;
    },
    clearNotification: (state, action) => {
      return initialState;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export const createNotification = (dispatch, message, duration) => {
  dispatch(setNotification(message));
  setTimeout(() => {
    dispatch(clearNotification());
    dispatch(resetOperationStatus());
  }, duration * 1000);
};

export default notificationSlice.reducer;
