import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import CreateBlogForm from "./CreateBlogForm";
import { sortItems } from "../helpers/helpers";
const Home = ({ blogs }) => {
  const [displayForm, setDisplayForm] = useState(false);

  const sortedBlogs = sortItems(blogs);

  if (!blogs) return null;

  const style = {
    border: "2px solid #d0ebff",
    marginBottom: "1.5px",
  };
  return (
    <>
      <div className="container-sm mt-4 p-4 w-50">
        {!displayForm && (
          <div className="d-grid fw-bold">
            <button
              className="btn btn-primary"
              onClick={() => setDisplayForm((displayForm) => !displayForm)}
            >
              create new
            </button>
          </div>
        )}
        {displayForm && <CreateBlogForm />}
        {sortedBlogs.map((blog) => (
          <Card className="mt-4 shadow-sm" key={blog.id} style={style}>
            <Card.Body>
              <Link className="text-primary fw-bold" to={`/blogs/${blog.id}`}>
                {blog.title} {blog.author}
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
