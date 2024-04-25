import React, { createContext, useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Petacc from './components/Petacc';
import { initialState, reducer } from "../src/reducer/UseReducer";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "./redux/actions/categories";
import { getUser } from "./redux/actions/user";
import UserRouters from "./router/UserRouters";
import AdminRouters from "./router/AdminRoutes";

export const UserContext = createContext();

const theme = createTheme({
  typography: {
    fontFamily: `"Trebuchet MS", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const App = () => {
  const [state, dispatch1] = useReducer(reducer, initialState);
  const { auth } = useSelector((store) => store);

  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);

  useEffect(() => {
    dispatch(getUser());
    fetchAllCategories({ dispatch });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserContext.Provider value={{ state, dispatch1 }}>
        <Routes>
          <Route path="/*" element={<UserRouters />}></Route>
          {auth?.user?.isAdmin && (
            <Route path="/admin/*" element={<AdminRouters />}></Route>
          )}
        </Routes>
      </UserContext.Provider>
      <Footer
        title="PET ADOPTION CENTER"
        description="Every Pet Deserves A Good Home"
      />
    </ThemeProvider>
  );
};

export default App;
