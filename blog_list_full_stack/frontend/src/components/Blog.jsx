import Comment from "./Comment";
import { updateBlog, deleteBlog } from "../reducers/blogReducer";
import { isCreator } from "../helpers/helpers";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Blog = ({ blog, user }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  if (!blog || !user) return null;
  const handleLikes = () => {
    if (liked) return null;
    const updatedBlog = { ...blog, likes: blog.likes + 1 };
    dispatch(updateBlog(updatedBlog));
    setLiked((liked) => !liked);
  };

  const handleDelete = () => dispatch(deleteBlog(blog));
  return (
    <>
      <div className="container-sm mt-4">
        <h2 className="text-center mb-4 bg-primary text-white p-2">
          {blog.title} by {blog.author}
        </h2>
        <div className="container-md d-flex gap-4">
          <div className="container-sm text-center shadow-sm p-4">
            <span>Visit: </span>
            <a href="#">{blog.url}</a>
            <div className="mt-4">
              <p>
                Added by <strong>{user.name}</strong>
              </p>
            </div>
            <div className="container-sm gap-2 mb-4 grid col-2">
              <p className="text-center">
                Likes: <strong>{blog.likes}</strong>
              </p>
              <button className="btn btn-primary" onClick={handleLikes}>
                like
              </button>
            </div>
            {isCreator(blog, user) && (
              <button className="btn btn-danger" onClick={handleDelete}>
                delete blog
              </button>
            )}
          </div>
          <div
            style={{ maxHeight: "50vh", overflow: "auto" }}
            className="container-sm shadow-sm p-4 text-center"
          >
            <Comment blog={blog} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
