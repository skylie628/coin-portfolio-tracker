import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const isLogged = window.localStorage.getItem("accessToken");
  if (!isLogged) {
    return <Navigate to="/sign-in" />;
  } else {
    return <>{children}</>;
  }
}
