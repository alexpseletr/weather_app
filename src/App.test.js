import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './components/Weather';

test('renders weather data', () => {
  const mockData = {
    name: 'City',
    main: {
      temp: 20,
      humidity: 50,
    },
    weather: [{ description: 'Sunny' }],
    wind: { speed: 10 },
  };

  render(<Weather data={mockData} loading={false} error={null} />);

  expect(screen.getByText(/City/i)).toBeInTheDocument();
  expect(screen.getByText(/Temperature: 20°F/i)).toBeInTheDocument();
  expect(screen.getByText(/Weather: Sunny/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity: 50%/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed: 10m\/s/i)).toBeInTheDocument();
});

test('renders loading spinner when loading', () => {
  render(<Weather data={null} loading={true} error={null} />);

  expect(screen.getByTestId('Loading...')).toBeInTheDocument();
});

test('renders error message when there is an error', () => {
  render(<Weather data={null} loading={false} error="Error message" />);

  expect(screen.getByText(/Temperature: ERROR°F/i)).toBeInTheDocument();
  expect(screen.getByText(/Weather: ERROR/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity: ERROR%/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind Speed: ERRORm\/s/i)).toBeInTheDocument();
});