const User = ({ user }) => {
  if (!user) return null;
  return (
    <>
      <div className="container-sm p-4 w-50">
        <h3 className="text-center bg-primary text-white ">{user.name}</h3>
        <div className="text-center fw-bold mb-4">Added Blogs</div>
        {user.blogs.length < 1 ? (
          <div className="text-center">No blog found!</div>
        ) : (
          <div>
            {user.blogs.map((blog) => (
              <div
                className="container-sm mt-4 p-4 text-center text-primary fw-bold shadow-sm"
                key={blog.id}
                style={{ border: "2px solid #d0ebff" }}
              >
                {blog.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default User;
