import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () => {
  let user = true;
  return user ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoute;
