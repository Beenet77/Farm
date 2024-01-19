import React from "react";
import Navbar from "../../components/Navbar";
import Herosection from "../../components/Herosecton";
// import { FaBeer } from 'react-icons/fa';

function Weather() {
  // Calculate the height for the hero section
  const heroHeight = 16 * 3; // Adjust the multiplier as needed (e.g., 3 to 5)

  return (
    <div>
      <Navbar />
      <Herosection />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 items-center justify-center mb-4">
            Weather Forecastbbbbb
          </h1>
          <div className=" gap-2 justify-between items-center mb-6">
            <div className="">
              <input
                type="text"
                placeholder="Enter location"
                className="w-3/4 p-2 mar border border-gray-300 rounded-lg focus:outline-none focus:border-green-800"
              />
            </div>
            <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none">
              Search
            </button>
          </div>

          <div className="flex items-center justify-between">
            {/* <div>
            <img
              src="https://via.placeholder.com/100"
              alt="Weather Icon"
              className="w-16 h-16"
            />
            <p className="text-xl font-semibold text-gray-800">Sunny</p>
          </div> */}

            <div className="text-right">
              <p className="text-4xl font-bold text-blue-500">25°C</p>
              <p className="text-gray-600">Thursday, 16th September</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              congue purus eu libero efficitur, a euismod ipsum ultrices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
