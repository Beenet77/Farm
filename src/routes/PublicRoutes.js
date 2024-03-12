import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
// import Home from "../pages/home/Home";

export const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
