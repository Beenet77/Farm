import { RouterProvider } from "react-router-dom";
import { privateRoutes } from "../src/routes/PrivateRoutes";
import { publicRoutes } from "../src/routes/PublicRoutes";
import { getAuthToken } from "./auth";

function App() {
  return (
    <div className="bg-green-100">
      <RouterProvider router={getAuthToken() ? privateRoutes : publicRoutes} />
    </div>
  );
}

export default App;
