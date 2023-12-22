//components
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
//others
import "./index.css";
import { chakraTheme } from "./config/chakraTheme.js";
import { store } from "./redux/store.js";
import queryClient from "./lib/reactquery/index.js";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimatePresence mode="wait">
    <ChakraProvider theme={chakraTheme}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
        <ToastContainer />
      </Provider>
    </ChakraProvider>
  </AnimatePresence>
);
