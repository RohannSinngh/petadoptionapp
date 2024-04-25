import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";
import { Navigate, useNavigate } from "react-router-dom";

//register
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

//login
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

//get user
const getUserDataRequest = () => ({ type: GET_USER_REQUEST });
const getUserDataSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});
const getUserDataFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

//methods
export const register = (userData, navigate) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
    } else {
      window.alert("Registration Successful");
      dispatch(registerSuccess(data));
      navigate("/login");
    }
  } catch (error) {
    dispatch(registerFailure(error.message));
    console.error("Error registering user:", error);
  }
};

export const login = (loginData, navigate) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      window.alert("Login successful");
    }
    const token = data.token;
    localStorage.setItem("jwtToken", token);
    dispatch(loginSuccess(token));
  } catch (error) {
    console.error("Login error:", error);
    dispatch(loginFailure(error.message));
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(getUserDataRequest());

  try {
    const res = await fetch("/about", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();

    if (!res.status === 200) {
      throw new Error("Failed to fetch data");
    }
    dispatch(getUserDataSuccess(data));
    console.log("getUser action ", data);
  } catch (err) {
    console.log("Error fetching data:", err);
    dispatch(getUserDataFailure(err));
  }
};

export const logout = (navigate) => (dispatch) => {
  fetch("/logout", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: LOGOUT, payload: false });

      if (data.message === "User LogOut Successfully") {
        window.alert("Logout Successfully!");
      } else if (data.error === "Login first") {
        window.alert("Login first!");
      }
      navigate("/login", { replace: true });
    })
    .catch((err) => {
      console.log(err);
    });
};
