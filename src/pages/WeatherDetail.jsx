import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function WeatherDetail() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather details:', error);
      }
    };

    fetchWeatherDetail();
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{city} Weather Forecast</h1>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {weatherData.list.slice(0, 5).map((forecast, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 text-center"
          >
            <p className="font-semibold">
              {new Date(forecast.dt * 1000).toLocaleDateString()}
            </p>
            <img
              src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
              className="mx-auto"
            />
            <p className="text-2xl font-bold">
              {Math.round(forecast.main.temp)}°C
            </p>
            <p className="text-gray-600">
              {forecast.weather[0].description}
            </p>
            <div className="mt-2 text-sm">
              <p>Humidity: {forecast.main.humidity}%</p>
              <p>Wind: {forecast.wind.speed} m/s</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDetail;