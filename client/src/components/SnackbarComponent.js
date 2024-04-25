import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import { hideSnackbar } from "../redux/snackbar/action";

const SnackBarComponent = () => {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector((store) => store.snackbar);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => dispatch(hideSnackbar())}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        onClose={() => dispatch(hideSnackbar())}
        severity={type}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarComponent;
