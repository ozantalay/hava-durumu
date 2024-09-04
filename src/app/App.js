
'use client'
import '../image/image.jpg'
import React, { useState, useEffect, useRef } from "react";
import WeatherCreate from "./WeatherCreate";
import "./globals.css";

const App = () => {
  const cityInputRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Istanbul");

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = "dc94700a2d8138a744baa043929d8cf3";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const handleSearch = () => {
    const cityValue = cityInputRef.current.value;
    setCity(cityValue);
  };

  return (
    <div className="App">
        <div>

      <h1>Project 8 : Weather App</h1>
      <div className="input-app">

      <input type="text" ref={cityInputRef} placeholder="ŞEHİR GİRİNİZ" />
      <button onClick={handleSearch}>Git</button>
      </div>
        </div>
      <div>

      <WeatherCreate weatherData={weatherData} />
      </div>
    </div>
  );
};

export default App;