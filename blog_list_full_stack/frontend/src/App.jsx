import Navigation from "./components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import blogService from "./services/blogs";
import { getUserFromLocal } from "./helpers/helpers";
import { setBlogs } from "./reducers/blogReducer";
import { useGetUsers, useMatchUrl } from "./hooks";
import Login from "./components/Login";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Notification from "./components/Nofitication";
import UserList from "./components/UserList";
import User from "./components/User";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);
  const notification = useSelector((state) => state.notification);
  const users = useGetUsers();
  const matchedUser = useMatchUrl("/users/:id", users);
  const matchedBlog = useMatchUrl("/blogs/:id", blogs);

  useEffect(() => {
    blogService.getBlogs().then((blogs) => {
      dispatch(setBlogs(blogs));
    });
  }, []);

  useEffect(() => {
    getUserFromLocal("loggedUser", dispatch);
  }, []);

  return (
    <>
      <div
        className="container-lx bg-secondary.bg-gradient"
        style={{ height: "100%" }}
      >
        <Navigation user={user} />
        {notification && <Notification message={notification} />}
        <h1
          style={{ textAlign: "center", fontWeight: "bold", color: "#495057" }}
        >
          Blog App
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              user ? <Home blogs={blogs} /> : <Navigate replace to={"/login"} />
            }
          />
          <Route
            path="/blogs"
            element={
              user ? <Home blogs={blogs} /> : <Navigate replace to={"/login"} />
            }
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate replace to={"/"} />}
          />
          <Route
            path="/blogs/:id"
            element={
              user ? (
                <Blog user={user} blog={matchedBlog} />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route
            path="/users"
            element={
              user ? (
                <UserList users={users} />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
          <Route
            path="/users/:id"
            element={
              user ? (
                <User user={matchedUser} />
              ) : (
                <Navigate replace to={"/login"} />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
