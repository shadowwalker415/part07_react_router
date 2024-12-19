import { setOperationStatus } from "../reducers/operationStatusReducer";
import { setUser } from "../reducers/userReducer";
import BlogService from "../services/blogs";
import { createNotification } from "../reducers/notificationReducer";

export const sortItems = (blogs) => {
  const sorted = [...blogs].sort((a, b) => b.likes - a.likes);
  return sorted;
};

export const isCreator = (blog, user) => {
  if (!blog || !user) return false;
  return blog.user.username === user.username;
};

export const handleOnError = (dispatch, err) => {
  dispatch(setOperationStatus("error"));
  createNotification(dispatch, err.response?.data?.message, 5);
};

export const handleOnSuccess = (dispatch, message) => {
  dispatch(setOperationStatus("success"));
  createNotification(dispatch, message, 5);
};

export const setUserToLocal = (key, user) => {
  const userString = JSON.stringify({ ...user });
  window.localStorage.setItem(`${key}`, userString);
};

export const getUserFromLocal = (key, dispatch) => {
  const userString = localStorage.getItem(key);
  const user = JSON.parse(userString);
  if (!user) {
    return null;
  } else {
    BlogService.setToken(user.token);
    dispatch(setUser(user));
  }
};

export const removeUserFromLocal = (key, dispatch) => {
  localStorage.removeItem(key);
  BlogService.setToken(null);
  dispatch(setUser(null));
};
