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
        // background:"black",
        // color:"white"
      }}
    >
      <div style={{display:"flex", width: "100vw"}}>
      <div className="login-image" style={{background:"#b9d1fd",  height:"100vh",width:"50vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <figure>
              <img
                src={loginimg}
                alt="registration pic"
                style={{ Width: "1000px"}}
              />
            </figure>
            <div style={{padding:"5px 15px"}}>
              <h1 style={{fontSize:"15px", fontWeight:"bold"}}>Welcome to Pawfect Finds! Login to discover your new furry companion and begin your journey towards finding the perfect pet companion. <br /> <br />
              Sign in to Pawfect Finds and explore a world of adorable pets waiting to be adopted. Your next best friend is just a login away! <br /> <br />
              Login to Find Your Pawfect Companion <br /> <br />
              Not a member yet? Join Pawfect Finds today and embark on a heartwarming journey of pet adoption!</h1>
            </div>
          </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"50vw"}}>
        <h1 className="form-title" style={{display:"flex", justifyContent:"center", fontSize:"50px", fontWeight:"bolder", position:"relative", top:"120px"}}>Login</h1>{" "}
        {/* Placed the title above the form */}
        <form onSubmit={handleLogin} style={{display:"flex", flexDirection:"column", height:"100%", justifyContent:"center", gap:"30px"}}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <label htmlFor="email" style={{fontSize:"20px", fontWeight:"bold"}} >Your Email:</label>
            <input style={{padding: ' 3px 10px',
          border: '2px solid #ccc',
          borderRadius: '5px',
          fontSize: '16px',
          width: '300px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',}}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <label htmlFor="password" style={{fontSize:"20px", fontWeight:"bold"}}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{padding: ' 3px 10px',
          border: '2px solid #ccc',
          borderRadius: '5px',
          fontSize: '16px',
          width: '300px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)'}}
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
          <NavLink to="/signup" className="signup-image-link" style={{width: "306px",
    padding: "8px 10px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center", background:"rgb(77 115 184)", color:"white", borderRadius:"10px", position:"relative", bottom:"20px", }}>
              {" "}
              I Still Have To Register
            </NavLink>

          </form>
          </div>
        
      </div>
    </div>
  );
};

export default Login;
