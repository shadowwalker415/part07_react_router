import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducers/blogReducer";
import notificationReducer from "./reducers/notificationReducer";
import operationStatusReducer from "./reducers/operationStatusReducer";
import activeUserReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    notification: notificationReducer,
    operationStatus: operationStatusReducer,
    user: activeUserReducer,
  },
});

export default store;
