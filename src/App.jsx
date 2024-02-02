import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blog from "./pages/blogs/Blog";
import Blogpost from "./pages/blogs/BlogPost";
import Weather from "./pages/weather/Weather.jsx";
import Feedback from "./pages/feedback/Feedback";
import Home from "./pages/home/Home";
import Mentors from "./pages/expert/Mentors";
import ProductDetail from "./pages/home/ProductDetail";
import NoticeBoard from "./pages/noticeboard/NoticeBoard";
import ProtectedRoute from "./components/ProtectedRoute";
import MarketPlace from "./pages/marketplace/MarketPlace";
import Cart from "./pages/cart/Cart";
import Notice from "./components/Notice";
import Check from "./pages/check/Check";
import LayOut from "./components/LayOut";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/blogs",
      element: <Blog />,
    },
    {
      path: "/blogs/:id",
      element: <Blogpost />,
    },

    {
      path: "/feedback",
      element: <Feedback />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/products/:productId",
      element: <ProductDetail />,
    },
    {
      path: "/expert",
      element: <Mentors />,
    },
    {
      path: "/noticeboard",
      element: <NoticeBoard />,
    },
    {
      path: "/marketplace",
      element: <MarketPlace />,
    },
  ]);

  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <LayOut>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/noticeboard" element={<NoticeBoard />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/expert" element={<Mentors />} />
                <Route path="/marketplace" element={<MarketPlace />} />
                <Route
                  path="/products/:productId"
                  element={<ProductDetail />}
                />
                <Route path="/blogs/:id" element={<Blogpost />} />
              </Route>
            </Routes>
          </LayOut>
          {/* <RouterProvider router={router} /> */}
        </header>
      </div>
    </CartProvider>
  );
}

export default App;
