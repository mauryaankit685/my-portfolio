import { Navigate } from "react-router-dom";
import { auth } from "./firebase/firebase";

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/products" replace /> : children;
}

export default PublicRoute;
