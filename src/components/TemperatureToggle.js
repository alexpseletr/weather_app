import React from 'react';
import '../styles.css'; // Certifique-se de importar o arquivo styles.css

const TemperatureToggle = ({ unit, onUnitToggle }) => {
  return (
    <div className="toggle-container">
      <p>Toggle Temperature Unit:</p>
      <span>ºC</span>
      <label className="switch-label">
        <input
          type="checkbox"
          checked={unit === 'imperial'}
          onChange={onUnitToggle}
          className="switch-input"
        />
        <span className="switch-slider"></span>
      </label>
      <span>ºF</span>
    </div>
  );
};

export default TemperatureToggle;
