import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../App";
import loginimg from "../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../redux/auth/action";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.password.length <= 5) {
      window.alert("Invalid password");
      return;
    }
    dispatch(login(formData, navigate));
    dispatch(getUser());
    console.log("my debug" + auth?.user?.isAdmin);
    if (auth?.user?.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h2 className="form-title">Login</h2>{" "}
        {/* Placed the title above the form */}
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* <button type="submit">Login</button> */}
          <div className="form-group form-button">
            <input
              type="submit"
              name="signup"
              id="signup"
              className="form-submit"
              value="Login"
            />
          </div>

          <div className="login-image">
            <figure>
              <img
                src={loginimg}
                alt="registration pic"
                style={{ maxWidth: "400px", height: "auto" }}
              />
            </figure>
            <NavLink to="/signup" className="signup-image-link">
              {" "}
              I Still Have To Register
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
