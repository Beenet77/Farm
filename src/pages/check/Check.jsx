import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Herosection from "../..//components/Herosecton";
import Select from "react-select";

const data = [
  {
    place: "Kathmandu",
    temperature: "28°C",
    description: "Partly Cloudy",
    humidity: "63%",
  },
  {
    place: "Pokhara",
    temperature: "26°C",
    description: "Sunny",
    humidity: "58%",
  },
  {
    place: "Udayapur",
    temperature: "30°C",
    description: "Clear Sky",
    humidity: "70%",
  },
  {
    place: "Butwal",
    temperature: "29°C",
    description: "Scattered Clouds",
    humidity: "67%",
  },
];

const options = [
  { value: "Kathmandu", label: "Kathmandu" },
  { value: "Pokhara", label: "Pokhara" },
  { value: "Udayapur", label: "Udayapur" },
  { value: "Butwal", label: "Butwal" },
];

const Check = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState(null);

  // Function to handle place click and update selectedWeather
  const handlePlaceClick = (place) => {
    const weather = data.find((d) => d.place === place);
    setSelectedWeather(weather);
  };

  return (
    <div>
      <Herosection className=" mt-10" />

      <div className="p-0 pt-20  flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-md -mt-30">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Weather Forecast
          </h1>
          <div className=" flex justify-between items-center mb-6">
            {data.map((d) => {
              if (d.place === (selectedOption && selectedOption.value)) {
                return <p>{d.temperature}</p>;
              }
              <div
                key={d.place}
                onClick={() => handlePlaceClick(d.place)} // Handle click event
                style={{
                  cursor: "pointer",
                  fontWeight:
                    selectedWeather && selectedWeather.place === d.place
                      ? "bold"
                      : "normal", // Highlight selected place
                }}
              >
                {d.place} <br />
              </div>;
            })}
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
            {/* <input
              type="text"
              placeholder="Enter location"
              className="w-3/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800"
            /> */}
            {/* <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none">
              Search
            </button> */}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <img
                src="https://via.placeholder.com/100"
                alt="Weather Icon"
                className="w-16 h-16"
              />
              <p className="text-xl font-semibold text-gray-800">
                {selectedWeather ? selectedWeather.description : ""}
              </p>
            </div>

            <div className="text-right">
              <p className="text-4xl font-bold text-blue-500">
                {selectedWeather ? selectedWeather.temperature : ""}
              </p>
              {/* <p className="text-gray-600">Thursday, 16th September</p> */}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600">
              {selectedWeather ? "Humidity: " + selectedWeather.humidity : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;
