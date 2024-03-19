import { Outlet, createBrowserRouter } from "react-router-dom";
import Blog from "../pages/blogs/Blog";
import Blogpost from "../pages/blogs/BlogPost";
import Feedback from "../pages/feedback/Feedback";
import Home from "../pages/home/Home";
import ProductDetail from "../pages/home/ProductDetail";
import Mentors from "../pages/expert/Mentors";
import Weather from "../pages/weather/Weathera";
import AppLayout from "../layout/AppLayout";
import { Suspense } from "react";
import Cart from "../pages/cart/Cart";
import Profile from "../pages/profile/Profile";
import Notice from "../components/Notice";
import MarketPlace from "../pages/marketplace/Marketplace";
import Order from "../pages/order /Order";
import Weathera from "../pages/weather/Weathera";

const AppUser = () => {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};

export const privateRoutes = createBrowserRouter([
  {
    path: "",
    element: <AppUser />,
    children: [
      {
        path: "/home",
        element: <Home />,
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
        path: "/products",
        element: <ProductDetail />,
      },
      {
        path: "/expert",
        element: <Mentors />,
      },
      {
        path: "/weather",
        element: <Weathera />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/marketplace",
        element: <MarketPlace />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
]);
