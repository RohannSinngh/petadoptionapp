import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/action";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout(navigate));
  }, [navigate]);

  return <div style={{ textAlign: "center", marginTop: "20vh" }}></div>;
};

export default Logout;
