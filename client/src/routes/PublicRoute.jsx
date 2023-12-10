import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PublicRoute({ children }) {
  const isLogged = useSelector((state) => state.user).isLogged;
  if (isLogged) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
}
