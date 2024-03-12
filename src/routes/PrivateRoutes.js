import { Outlet, createBrowserRouter } from "react-router-dom";
import Blog from "../pages/blogs/Blog";
import Blogpost from "../pages/blogs/BlogPost";
import Feedback from "../pages/feedback/Feedback";
import Home from "../pages/home/Home";
import ProductDetail from "../pages/home/ProductDetail";
import Mentors from "../pages/expert/Mentors";
import Weather from "../pages/weather/Weathera";
// import MarketPlace from "../pages/marketplace/MarketPlace";
import AppLayout from "../layout/AppLayout";
import { Suspense } from "react";
import Cart from "../pages/cart/Cart";
import Profile from "../pages/profile/Profile";

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
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/expert",
        element: <Mentors />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
