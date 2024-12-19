import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  if (!users) return null;
  return (
    <>
      <div className="container-sm d-flex justify-center w-50 gap-4">
        <div className="container mt-4 p-4">
          <p className="fw-bold text-center">User</p>
          {users.map((user) => (
            <div
              className="mb-2 shadow-sm p-4 text-center"
              style={{ border: "2px solid #d0ebff" }}
              key={user.id}
            >
              <Link style={{ fontWeight: "bold" }} to={`/users/${user.id}`}>
                {user.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="container mt-4 p-4">
          <p className="fw-bold text-center">Blogs Created</p>
          {users.map((user) => (
            <div
              className="fw-bold shadow-sm text-center p-4 mb-2"
              style={{ border: "2px solid #d0ebff" }}
              key={user.id}
            >
              {user.blogs.length}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
