import React, { useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import UserRouters from "./router/UserRouters";
import AdminRouters from "./router/AdminRoutes";
import { getUser } from "./redux/auth/action";
import { fetchAllCategories } from "./redux/categories/action";

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
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser())
      .then(() => console.log("fetching user"))
      .catch((error) => console.log(error));
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {auth?.user?.isAdmin ? (
          <Route path="/*" element={<AdminRouters />} />
        ) : (
          <Route path="/*" element={<UserRouters />} />
        )}
      </Routes>
      <Footer
        title="PET ADOPTION CENTER"
        description="Every Pet Deserves A Good Home"
      />
    </ThemeProvider>
  );
};

export default App;
