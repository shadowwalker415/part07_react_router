import { createSlice } from "@reduxjs/toolkit";
import { login } from "../services/login";
import blogService from "../services/blogs";
import { setUserToLocal } from "../helpers/helpers";
import { handleOnError, handleOnSuccess } from "../helpers/helpers";
const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return initialState;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const loginUser = (userInfo) => {
  return async (dispatch) => {
    try {
      const loggedUser = await login(userInfo);
      dispatch(setUser(loggedUser));
      setUserToLocal("loggedUser", loggedUser);
      blogService.setToken(loggedUser.token);
      handleOnSuccess(dispatch, null);
    } catch (err) {
      handleOnError(dispatch, err);
    }
  };
};

export default userSlice.reducer;
