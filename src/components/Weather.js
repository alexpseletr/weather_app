import { useState } from 'react';
import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

const Weather = ({ data, loading, error, onCityChange, unit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    onCityChange(inputValue);
  };
  const temperatureUnit = unit === 'metric' ? 'C' : 'F';

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error ? (
        <>
          <h2>Current Weather in ERROR</h2>
          <p>
            Temperature: ERROR°{temperatureUnit}
          </p>
          <p>Weather: ERROR </p>
          <p>Humidity: ERROR%</p>
          <p>Wind Speed: ERRORm/s</p>
        </>
      ) : (
        <>
          <h2>Current Weather in {data.name}</h2>
          <p>
            Temperature: {data.main.temp}°{temperatureUnit}
          </p>
          <p>Weather: {data.weather[0].description}</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed}m/s</p>
        </>
      )}
    </div>
  );
};

export default Weather;

