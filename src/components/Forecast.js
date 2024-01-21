import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

const Forecast = ({ data, loading, error, unit }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const dailyForecast = data.list.filter((item) => item.dt_txt.includes('12:00:00'));
  const temperatureUnit = unit === 'metric' ? 'C' : 'F';

  return (
    <div className="container">
      <h2>5-Day Forecast</h2>
      <ul>
        {dailyForecast.map((item) => (
          <li key={item.dt}>{item.dt_txt}: {item.main.temp} °{temperatureUnit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
