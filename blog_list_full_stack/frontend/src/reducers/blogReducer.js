import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";
import { handleOnError, handleOnSuccess } from "../helpers/helpers";

const initialState = [];

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      return action.payload;
    },
    appendBlog: (state, action) => {
      state.push(action.payload);
    },
    modifyBlog: (state, action) => {
      return [
        ...state.map((blog) =>
          blog.id === action.payload.id
            ? { ...action.payload, comments: blog.comments, user: blog.user }
            : blog
        ),
      ];
    },
    removeBlog: (state, action) => {
      return [...state.filter((blog) => blog.id !== action.payload.id)];
    },
  },
});

export const { setBlogs, appendBlog, modifyBlog, removeBlog } =
  blogSlice.actions;

export const createBlog = (newBlog) => {
  return async (dispatch) => {
    try {
      const createdBlog = await blogService.createBlog(newBlog);
      dispatch(appendBlog(createdBlog));
      handleOnSuccess(dispatch, `${createdBlog.title} created`);
    } catch (err) {
      handleOnError(dispatch, err);
    }
  };
};

export const updateBlog = (blogToUpdate) => {
  return async (dispatch) => {
    try {
      const updatedBlog = await blogService.updateBlog(
        blogToUpdate.id,
        blogToUpdate
      );
      dispatch(modifyBlog(updatedBlog));
      handleOnSuccess(dispatch, `${updatedBlog.title} liked`);
    } catch (err) {
      handleOnError(dispatch, err);
    }
  };
};

export const deleteBlog = (blogToDelete) => {
  return async (dispatch) => {
    try {
      await blogService.deleteBlog(blogToDelete.id);
      dispatch(removeBlog(blogToDelete));
      handleOnSuccess(dispatch, `${blogToDelete.title} deleted`);
    } catch (err) {
      handleOnError(dispatch, err);
    }
  };
};
export default blogSlice.reducer;
