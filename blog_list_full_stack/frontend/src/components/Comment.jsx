import { useField } from "../hooks/index";
import BlogService from "../services/blogs";

const Comment = ({ blog }) => {
  const comment = useField("text");

  const clearInputField = () => {
    comment.clearField();
  };
  const handleComment = async (event) => {
    event.preventDefault();
    if (comment.value.length < 2) return null;
    await BlogService.addComment(blog.id, {
      data: comment.value,
    });
    clearInputField();
  };

  return (
    <>
      <h3 className="mb-4 text-center">Comments</h3>
      <form onSubmit={handleComment}>
        <div className="d-flex gap-2">
          <input
            value={comment.value}
            type={comment.type}
            onChange={comment.onChange}
            className="form-control w-75"
          />
          <div>
            <button className="btn btn-primary" type="submit">
              comment
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex  p-4  flex-column">
        {blog.comments.map((comment) => (
          <div
            className="container-sm mt-4 rounded b-primary bg-info text-white p-4 shadow-lg"
            key={comment.id}
          >{`"${comment.data}!"`}</div>
        ))}
      </div>
    </>
  );
};

export default Comment;
