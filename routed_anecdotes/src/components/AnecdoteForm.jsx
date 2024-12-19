import { useField } from "../hooks";

const CreateNew = ({ addNew }) => {
  const content = useField("text");
  const author = useField("text");
  const info = useField("text");

  const resetInputFields = () => {
    content.clearField();
    author.clearField();
    info.clearField();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            value={content.value}
            type={content.type}
            onChange={content.onChange}
          />
        </div>
        <div>
          author
          <input
            type={author.type}
            value={author.value}
            onChange={author.onChange}
          />
        </div>
        <div>
          url for more info
          <input type={info.type} value={info.value} onChange={info.onChange} />
        </div>
        <button>create</button>
        <button onClick={resetInputFields}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
