import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

const Shop = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

export default Shop;
