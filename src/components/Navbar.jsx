import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../src/images/a.jpg";
import storage from "../storage";

const Navbar = () => {
  const navigate = useNavigate();
  const [isTogle, setIsTogle] = useState(true);
  const data = JSON.parse(localStorage.getItem("cartData")) || [];

  function handleLogout() {
    storage.clearToken();
    alert("you are loged out!");
    navigate("/");
    window.location.reload();
  }

  return (
    <div class="px-8 h-full w-full bg-green-800 text-white">
      <nav class="top-0  w-full">
        <div class=" mx-auto py-5 flex items-center justify-between container">
          <div class="text-2xl font-medium">
            <img src={Logo} alt="logo" className="h-[55px] rounded-md" />
          </div>
          <ul class="flex space-x-10">
            <Link to="/home">
              <li class="hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1  ">
                Home
              </li>
            </Link>

            <Link to="/feedback">
              <li class="hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1">
                Feedback
              </li>
            </Link>

            <Link to="/weather ">
              <li class="hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1">
                Weather
              </li>
            </Link>

            <Link to="/blogs">
              <li class="hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1">
                Blogs
              </li>
            </Link>
            {/* <Link to="/marketplace">
              <li class="hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1">
                MarketPlace
              </li>
            </Link> */}
            <Link to="/expert">
              <li class="hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1">
                Experts
              </li>
            </Link>
          </ul>
          <span className="flex gap-10">
            <Link to="/cart">
              <div class=" flex justify-center items-center">
                <div class="relative py-2">
                  {Boolean(data.length) && (
                    <div class="t-0 absolute left-3">
                      <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        {data.length}
                      </p>
                    </div>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="file: mt-4 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <div>
              <img
                className="w-14 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                alt=""
                onClick={() => setIsTogle(!isTogle)}
              />
              <div className={`${isTogle && "hidden"} list-none`}>
                <li
                  onClick={() => handleLogout()}
                  className="my-2 cursor-pointer"
                >
                  Logout
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </li>
              </div>
            </div>
            {/* <button onClick={handleLogout}>Logout</button> */}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
