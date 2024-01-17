import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blog from "./pages/blogs/Blog";
import Blogpost from "./pages/blogs/BlogPost";
import Weather from "./pages/weather/Weather";
import Feedback from "./pages/feedback/Feedback";
import Home from "./pages/home/Home";
import Mentors from "./pages/expert/Mentors";
import ProductDetail from "./pages/home/ProductDetail";
import NoticeBoard from "./pages/noticeboard/NoticeBoard";
import Notice from "./components/Notice";
import Check from "./pages/check/Check";
import ProtectedRoute from "./components/ProtectedRoute";
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
      path: "/weather",
      element: <Check />,
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
      path: "/notice",
      element: <Notice />,
    },
    {
      path: "/weather",
      element: <Weather />,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/weather" element={<Check />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/noticeboard" element={<NoticeBoard />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/blogs/:id" element={<Blogpost />} />
          </Route>
        </Routes>
        {/* <RouterProvider router={router} /> */}
      </header>
    </div>
  );
}

export default App;