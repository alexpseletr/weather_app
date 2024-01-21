import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import TemperatureToggle from './components/TemperatureToggle';
import './styles.css';

const API_KEY = 'YOUR_API_KEY';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const DEFAULT_CITY = 'New york';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState(DEFAULT_CITY);
  const [unit, setUnit] = useState('metric');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const weatherResponse = await axios.get(
          `${API_BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
        );
        setWeatherData(weatherResponse.data);

        const forecastResponse = await axios.get(
          `${API_BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
        );
        setForecastData(forecastResponse.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, unit]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <div>
      <h1>Weather App</h1>
      <TemperatureToggle unit={unit} onUnitToggle={handleUnitToggle} />
      <Weather
        data={weatherData}
        loading={loading}
        error={error}
        unit={unit}
        onCityChange={handleCityChange}
      />
      <Forecast data={forecastData} loading={loading} error={error} unit={unit} />
    </div>
  );
};

export default App;
