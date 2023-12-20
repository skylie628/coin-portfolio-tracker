// component
import Analytics from "./features/statistic";
import DashBoard from "./features/market";
import Portfolio from "./features/portfolio";
import TransactionsList from "./features/transaction/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//

import "./App.css";
import SignIn from "./features/auth/SignIn";
import SignUp from "./features/auth/SignUp";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/MainLayout";
import { Navigate } from "react-router-dom";
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
  let coins = [
    "BTC",
    "ETH",
    "BNB",
    "USDT",
    "SOL",
    "ADA",
    "XRP",
    "DOT",
    "USDC",
    "DOGE",
  ];
  const streamsarr = coins.reduce((acc, x) => `${acc}usdt@trade/${x}`, 0);
  console.log(streamsarr);
  /*var wss = new WebSocket(
    `wss://stream.binance.com:9443/ws/${streamsarr.toLowerCase()}usdt@trade`
  );
  wss.onmessage = function (event) {
    var messageObject = JSON.parse(event.data);
    console.log(messageObject);
  };*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" index element={<DashBoard />} />
          <Route
            path="statistics"
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
