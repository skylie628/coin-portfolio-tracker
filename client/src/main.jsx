import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { chakraTheme } from "./config/chakraTheme.js";
import { store } from "./redux/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <ChakraProvider theme={chakraTheme}>
        <Provider store={store}>
          <App />
          <ToastContainer />
        </Provider>
      </ChakraProvider>
    </AnimatePresence>
  </React.StrictMode>
);
