// import Button from "react-bootstrap/Button";
import { useField } from "../hooks";
import { createBlog } from "../reducers/blogReducer";
import { useDispatch } from "react-redux";

const BlogForm = () => {
  const dispatch = useDispatch();
  const title = useField("");
  const author = useField("");
  const url = useField("");

  const clearInputFields = () => {
    title.clearField();
    author.clearField();
    url.clearField();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      title: title.value,
      author: author.value,
      url: url.value,
      likes: 0,
    };
    dispatch(createBlog(newBlog));
    clearInputFields();
  };

  return (
    <>
      <div className="container-sm w-75 shadow-sm p-4">
        <h2 className="mb-4 text-center bg-primary text-white p-2 rounded">
          New blog
        </h2>
        <form className="fw-bold" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              className="form-control"
              data-testid="title"
              value={title.value}
              type={title.type}
              onChange={title.onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              id="author"
              data-testid="author"
              value={author.value}
              type={author.type}
              onChange={author.onChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="url">
              Url
            </label>
            <input
              data-testid="url"
              id="url"
              value={url.value}
              type={url.type}
              onChange={url.onChange}
              className="form-control"
              required
            />
          </div>
          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-primary btn-lg">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogForm;
