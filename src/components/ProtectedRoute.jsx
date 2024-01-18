import { Outlet, Navigate } from "react-router-dom";
import { useGlobalUserAuth } from "../context/userAuthContext";
const ProtectedRoute = () => {
  const { loginUser } = useGlobalUserAuth();
  // console.log(loginUser);
  // let user = false;
  return loginUser ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
