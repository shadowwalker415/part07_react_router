import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginUser } from "../reducers/userReducer";
import { useDispatch } from "react-redux";
import { useField } from "../hooks";

const Login = () => {
  const dispatch = useDispatch();
  const username = useField("text");
  const password = useField("password");

  const clearLoginInputs = () => {
    username.clearField();
    password.clearField();
  };

  const style = { fontWeight: "bold", color: "#495057" };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username: username.value,
      password: password.value,
    };
    dispatch(loginUser(newUser));
    clearLoginInputs();
  };

  return (
    <>
      <div className="container-sm p-4 shadow-sm mt-4 w-25">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={style}>Username</Form.Label>
            <Form.Control
              type={username.type}
              value={username.value}
              placeholder="Username"
              onChange={username.onChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your username with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={style}>Password</Form.Label>
            <Form.Control
              type={password.type}
              value={password.value}
              onChange={password.onChange}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
