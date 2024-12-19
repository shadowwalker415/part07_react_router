import { createSlice } from "@reduxjs/toolkit";

const initialState = "pending";

const operationStatusSlice = createSlice({
  name: "operationStatus",
  initialState,
  reducers: {
    setOperationStatus: (state, action) => {
      if (action.payload === "success" || action.payload === "error") {
        return action.payload;
      } else {
        return initialState;
      }
    },
    resetOperationStatus: () => {
      return initialState;
    },
  },
});

export const { setOperationStatus, resetOperationStatus } =
  operationStatusSlice.actions;

export default operationStatusSlice.reducer;
