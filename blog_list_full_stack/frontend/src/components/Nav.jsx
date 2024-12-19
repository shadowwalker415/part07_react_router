import { Link } from "react-router-dom";
import { removeUserFromLocal } from "../helpers/helpers";
import { useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Navigation = ({ user }) => {
  const dispatch = useDispatch();

  const handleLoggout = () => {
    removeUserFromLocal("loggedUser", dispatch);
  };
  const style = {
    fontWeight: "bold",
  };
  return (
    <>
      <Nav
        className=" container-sm pt-3 mb-3 pl-3"
        justify="center"
        variant="underline"
        defaultActiveKey="/login"
      >
        <Nav.Link style={style} as={Link} to="/blogs">
          Blogs
        </Nav.Link>
        <Nav.Link style={style} as={Link} to="/users">
          Users
        </Nav.Link>

        {user ? (
          <span className="text-primary mt-2">{user.name} logged in</span>
        ) : (
          <Nav.Link style={style} as={Link} to="/login">
            Login
          </Nav.Link>
        )}
        {user && (
          <Button variant="danger" onClick={handleLoggout}>
            Logout
          </Button>
        )}
      </Nav>
    </>
  );
};

export default Navigation;
