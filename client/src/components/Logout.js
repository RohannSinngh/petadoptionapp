import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/action";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout()).then(navigate("/login"));
  }, []);
  return <div style={{ textAlign: "center", marginTop: "20vh" }}></div>;
};

export default Logout;
