// component
import DashBoard from "./pages/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//

import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
