// component
import DashBoard from "./pages/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//

import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
//use hook
import { useDispatch } from "react-redux";
//other
import { signinSuccess } from "./store/reducer/reducer.user";
export default function App() {
  //option 1: mapping data from local storage to redux state
  //option 2: using redux persits?
  const dispatch = useDispatch();
  const isLogged = window.localStorage.getItem("refreshToken");
  if (isLogged) {
    dispatch(signinSuccess());
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
