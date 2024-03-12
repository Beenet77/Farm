import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import Logo from "../../images/b.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import UserContext from "../../context/userContext";
import storage from "../../storage";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  // const { setUser } = useContext(UserContext);

  // console.log(user, "sdfsdgdfgdfg");

  const onSubmit = async (data) => {
    const result = await axios.post(
      "http://127.0.0.1:8000/accounts/login/",
      data,
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (result.data) {
      // console.log(result.data);
      // setUser(true);
      storage.setToken(result.data.access);
      navigate("/home");
      window.location.reload(true);
    }
  };

  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-16">
          <div className="home_reference_section my-5">
            <Link to="/" className="cursor-pointer">
              <figure className="flex justify-center items-center">
                <img src={Logo} alt="Logo" className="w-20" />
              </figure>
            </Link>
          </div>
          <div className="mx-auto max-w-lg text-center">
            <Link
              to="/"
              className="cursor-pointer text-[#f2d16c] text-[34px] font-semibold "
            >
              <span>Farm Connect</span>
            </Link>
          </div>

          <form
            className="mx-auto mt-8 mb-0 max-w-md space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label for="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-300 p-4 pr-12 text-sm shadow-lg"
                  placeholder="Enter email"
                  {...register("email")}
                />
              </div>
            </div>

            <div>
              <label for="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-300 p-4 pr-12 text-sm shadow-lg"
                  placeholder="Enter password"
                  {...register("password")}
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?&nbsp;
                <Link to="/register" className="underline hover:font-semibold">
                  Sign up
                </Link>
              </p>

              <ButtonPrimary text="Login" />
            </div>
          </form>
        </div>

        <div
          className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80")',
          }}
        ></div>
      </section>
    </div>
  );
};

export default Login;
