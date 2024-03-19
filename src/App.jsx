import { RouterProvider } from "react-router-dom";
import { privateRoutes } from "../src/routes/PrivateRoutes";
import { publicRoutes } from "../src/routes/PublicRoutes";
import { getAuthToken } from "./auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-green-100">
      <ToastContainer />
      <RouterProvider router={getAuthToken() ? privateRoutes : publicRoutes} />
    </div>
  );
}

export default App;
