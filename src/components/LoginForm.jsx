import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/actions/authActions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password)).then(() => navigate("/otp"));
  };

  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">Login</h1>
      <hr />
      <div class="row my-4 h-100">
        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form onSubmit={handleSubmit}>
            <div class="my-3">
              <label for="display-4" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                placeholder="John_Doe"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label for="password display-4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <p>
                New Here?{" "}
                <Link
                  to="/register"
                  className="text-decoration-underline text-info"
                >
                  Register
                </Link>{" "}
              </p>
            </div>
            <button className="my-2 mx-auto btn btn-dark" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
