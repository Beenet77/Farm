import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/images/a.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div class="px-8 shadow-xl h-full w-full">
      <nav class="top-0  w-full">
        <div class=" mx-auto py-5 flex items-center justify-between container">
          <div class="text-2xl font-medium">
            <img src={Logo} alt="logo" className="h-[55px] rounded-md" />
          </div>
          <ul class="flex space-x-10">
            <Link to="/">
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
            <Link to="/marketplace">
              <li class="hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1">
                MarketPlace
              </li>
            </Link>
            <Link to="/expert">
              <li class="hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1">
                Experts
              </li>
            </Link>
          </ul>
          <span class="rounded-md text-white bg-[#25913e] px-2 py-2  hover:bg-[rgb(56,130,60)] ease-out duration-100 ">
            Farmconnect
          </span>
          {/* <span>4</span> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
