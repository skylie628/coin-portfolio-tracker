import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PrivateRoute({ children }) {
  const isLogged = useSelector((state) => state.user).isLogged;
  if (!isLogged) {
    return <Navigate to="/sign-in" />;
  } else {
    return <>{children}</>;
  }
}
