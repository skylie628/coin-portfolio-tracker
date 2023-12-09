import { Navigate } from "react-router-dom";
export default function PublicRoute({ children }) {
  const isLogged = window.localStorage.getItem("accessToken");
  if (isLogged) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
}
