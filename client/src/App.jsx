// component
import Analytics from "./pages/Analytics";
import DashBoard from "./pages/Dashboard";
import Portfolio from "./pages/portfolio";
import TransactionsList from "./pages/portfolio/TransactionsList";
import PortCoins from "./pages/portfolio/PortCoins";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//

import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/MainLayout";
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
        <Route path="/" element={<MainLayout />}>
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          />
          <Route
            path="analytics"
            element={
              <PrivateRoute>
                <Analytics />
              </PrivateRoute>
            }
          />
          <Route
            path="portfolio"
            element={
              <PrivateRoute>
                <Portfolio />
              </PrivateRoute>
            }
          >
            <Route path=":coinId" element={<TransactionsList />} />
          </Route>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route
            path="sign-in"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="sign-up"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
