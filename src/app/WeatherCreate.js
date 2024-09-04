import React from "react";

const WeatherCreate = ({ weatherData }) => {
  if (!weatherData) return <p>Loading...</p>; 
  const timezoneOffset = weatherData.timezone; // Saniye cinsinden UTC sapması
  const localTime = new Date((Date.now() + timezoneOffset * 1000)); // Yerel saat hesaplaması
  const formattedTime = localTime.toLocaleTimeString(); // Saat dilimine göre formatlama
  const formattedDate = localTime.toLocaleDateString('tr-TR', { weekday: 'long', });


  return (
    <div className="container-wc">
      <span className="city">
      <h2>{weatherData.name}</h2>
      </span>
      <p className="date">{formattedDate} {formattedTime}</p>

      <div className="sıcaklık">
        <b>{weatherData.main.temp.toFixed(0)}</b>
        <span className="degree-symbol">°C|F°</span>
      </div>
      <span className="time">
      </span>

      <p><h3>{weatherData.weather[0].description}</h3></p>
      <p className="soluk">Nem:%{weatherData.main.humidity} Hissedilen:{weatherData.main.feels_like}°C</p>
  
   

      <div className="weather-list">

      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        alt="Weather Icon"
        />
        
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        alt="Weather Icon"
        />
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        alt="Weather Icon"
        />
        </div>
    </div>
  );
};

export default WeatherCreate;