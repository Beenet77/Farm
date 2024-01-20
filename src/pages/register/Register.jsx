import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../images/b.jpg";
import BackgroundImage from "../../images/a.jpg";
import ButtonPrimary from "../../components/ButtonPrimary";
import { initial, reducer } from "./reducer";
import axios from "axios";
const Register = () => {
  let [state, dispatch] = useReducer(reducer, initial);
  const [userType, setUserType] = useState("Farmer");
  const navigate = useNavigate();
  // const [password, setPassword] = useState([]);
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [first_name,setFirstName] = useState();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };
  let handelUserRegister = async (e) => {
    e.preventDefault();
    // console.log(state);
    // return;
    const userRegisterData = { ...state };
    console.log(userRegisterData);
    // let result = await fetch("https://kt.esewi.com/accounts/register", {
    //   mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     first_name: state?.first_name,
    //     middle_name: state?.middle_name,
    //     last_name: state?.last_name,
    //     email: state?.email,
    //     phone_no: state?.phone_no,
    //     password: state?.password,
    //     confirm_password: state?.confirm_password,
    //     role: userType,
    //   }),
    // });
    const result = await axios.post(
      "http://10..5.3.253:8000/accounts/register/",
      userRegisterData,
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(result.data);
    if (result.data) {
      navigate("/login");
    }
  };

  // const handleConfirmPasswordChange = (event) => {
  //     setConfirmPassword(event.target.value);
  // };
  // console.log(state);
  return (
    <div
      className="bg-gradient-to-r from-black via-black to-transparent bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80")',
      }}
    >
      {/* <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-[#0F2B05]"> */}
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
            <span>FarmConnect</span>
          </Link>
        </div>

        <form
          onSubmit={handelUserRegister}
          className="mx-auto mt-8 mb-0 max-w-md space-y-4"
        >
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label htmlFor="first_name" className="sr-only">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="First Name"
                  value={state.first_name}
                  onChange={(e) => {
                    dispatch({
                      key: e.target.name,
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="middle_name" className="sr-only">
                Middle Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="middle_name"
                  name="middle_name"
                  className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Middle Name"
                  value={state.middle_name}
                  onChange={(e) => {
                    dispatch({
                      key: e.target.name,
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="last_name" className="sr-only">
              Last Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Last Name"
                value={state.last_name}
                onChange={(e) => {
                  dispatch({
                    key: e.target.name,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Email"
                value={state.email}
                onChange={(e) => {
                  dispatch({
                    key: e.target.name,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Contact Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone_no"
                name="phone_no"
                className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Contact Number"
                value={state.phone_no}
                onChange={(e) => {
                  dispatch({
                    key: e.target.name,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Password"
                value={state.password}
                onChange={(e) => {
                  dispatch({
                    key: e.target.name,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirm_password" className="sr-only">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Confirm Password"
                value={state?.onfirm_password}
                onChange={(e) => {
                  dispatch({
                    key: e.target.name,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="userType" className="sr-only">
              User Type
            </label>
            <div className="relative">
              <select
                id="userType"
                name="userType"
                className="w-full rounded border-gray-200 p-4 pr-12 text-sm shadow-sm"
                value={userType}
                onChange={handleUserTypeChange}
              >
                <option value="Farmer">Farmer</option>
                <option value="Vendor">Vendor</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Already have an account?&nbsp;
              <Link to="/login" className="underline hover:font-semibold">
                Login
              </Link>
            </p>

            <ButtonPrimary text="Signup" />
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 bg-[#0F2B05]">
        <img
          alt="Welcome"
          src={BackgroundImage}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {/* </section> */}
    </div>
  );
};

export default Register;
