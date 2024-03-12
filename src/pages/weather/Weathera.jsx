// Weather.jsx
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  // const openWeatherMapApiKey = "71f6779186cc32448b4c412eea65b982";
  // 9cc1c6365f785a0a2398e84f87199316
  const openWeatherMapApiKey = "9cc1c6365f785a0a2398e84f87199316";

  useEffect(() => {
    // Get user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const weatherResponse = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}&units=metric`
            );
            setWeatherData(weatherResponse.data);
            setBackgroundImage(
              getBackgroundImage(weatherResponse.data.weather[0].icon)
            );
            setError(null);

            const forecastResponse = await axios.get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&appid=${openWeatherMapApiKey}&units=metric`
            );
            setForecastData(forecastResponse.data);
          } catch (err) {
            setError("Weather information not available");
          }
        },
        () => {
          setError("Geolocation not available. Please enter a city manually.");
        }
      );
    }
  }, []);

  const fetchWeatherData = async (cityName) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherMapApiKey}&units=metric`
      );
      setWeatherData(weatherResponse.data);
      setBackgroundImage(
        getBackgroundImage(weatherResponse.data.weather[0].icon)
      );
      setError(null);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${openWeatherMapApiKey}&units=metric`
      );
      setForecastData(forecastResponse.data);
    } catch (err) {
      setError("Failed to fetch weather data");
    }
  };

  const getBackgroundImage = (iconCode) => {
    // Map different weather conditions to Unsplash image URLs
    const conditionMap = {
      "01d": "https://source.unsplash.com/1920x1080/?clear-sky",
      "01n": "https://source.unsplash.com/1920x1080/?night-sky",
      "02d": "https://source.unsplash.com/1920x1080/?partly-cloudy",
      "02n": "https://source.unsplash.com/1920x1080/?night-cloudy",
      "03d": "https://source.unsplash.com/1920x1080/?cloudy",
      "03n": "https://source.unsplash.com/1920x1080/?night-cloudy",
      "04d": "https://source.unsplash.com/1920x1080/?overcast",
      "04n": "https://source.unsplash.com/1920x1080/?overcast",
      "09d": "https://source.unsplash.com/1920x1080/?rainy",
      "09n": "https://source.unsplash.com/1920x1080/?rainy",
      "10d": "https://source.unsplash.com/1920x1080/?rainy",
      "10n": "https://source.unsplash.com/1920x1080/?rainy",
      "11d": "https://source.unsplash.com/1920x1080/?storm",
      "11n": "https://source.unsplash.com/1920x1080/?night-storm",
      "13d": "https://source.unsplash.com/1920x1080/?snow",
      "13n": "https://source.unsplash.com/1920x1080/?night-snow",
      "50d": "https://source.unsplash.com/1920x1080/?fog",
      "50n": "https://source.unsplash.com/1920x1080/?night-fog",
    };
    return (
      conditionMap[iconCode] ||
      "https://source.unsplash.com/1920x1080/?landscape"
    );
  };

  const renderEmoji = (description) => {
    if (description.includes("clear")) return "☀️";
    if (description.includes("cloud")) return "☁️";
    if (description.includes("rain")) return "🌧️";
    if (description.includes("storm")) return "⛈️";
    if (description.includes("snow")) return "❄️";
    if (description.includes("mist") || description.includes("fog"))
      return "🌫️";
    return "🌦️";
  };

  const renderForecast = () => {
    if (forecastData && forecastData.list) {
      const dailyForecasts = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      return dailyForecasts.map((forecast, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-xl font-semibold mb-2">
            {new Date(forecast.dt * 1000).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </h3>
          <p>Temperature: {forecast.main.temp} °C</p>
          <p>
            Weather: {renderEmoji(forecast.weather[0].description)}{" "}
            {forecast.weather[0].description}
          </p>
        </div>
      ));
    }
    return null;
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Weather App</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter city name"
            className="w-full p-2 border rounded-l-md focus:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-md"
            onClick={() => fetchWeatherData(city)}
          >
            <FiSearch />
          </button>
        </div>

        {weatherData && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              Temperature: {weatherData.main.temp} °C
            </p>
            <p className="text-lg text-gray-700">
              Weather: {weatherData.weather[0].description}
            </p>
          </div>
        )}

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
          7-Day Forecast
        </h2>
        {renderForecast()}

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Weather;
