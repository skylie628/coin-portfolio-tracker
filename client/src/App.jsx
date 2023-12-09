// component
import DashBoard from "./pages/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//

import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/privateRoute";
export default function App() {
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
