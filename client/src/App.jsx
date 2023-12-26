// component
import React from "react";
const Analytics = React.lazy(() => import("@/features/statistic"));
const DashBoard = React.lazy(() => import("@/features/market"));
const Portfolio = React.lazy(() => import("@/features/portfolio"));
const TransactionsList = React.lazy(() => import("@/features/transaction"));
const Currency = React.lazy(() => import("@/features/currency"));
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./components/Loading";
//

import "./App.css";
const SignIn = React.lazy(() => import("./features/auth/SignIn"));
const SignUp = React.lazy(() => import("./features/auth/SignUp"));
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/MainLayout";
import { Suspense } from "react";
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
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<LoadingPage />}>
                <DashBoard />
              </Suspense>
            }
          >
            <Route
              path="currencies/:coinId"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Currency />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="statistics"
            element={
              <Suspense fallback={<LoadingPage />}>
                <PrivateRoute>
                  <Analytics />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="portfolio"
            element={
              <Suspense fallback={<LoadingPage />}>
                <PrivateRoute>
                  <Portfolio />
                </PrivateRoute>
              </Suspense>
            }
          >
            <Route
              path=":coinId"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <TransactionsList />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route
            path="sign-in"
            element={
              <Suspense fallback={<LoadingPage />}>
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="sign-up"
            element={
              <Suspense fallback={<LoadingPage />}>
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
