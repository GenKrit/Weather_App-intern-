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
  }, [city, API_KEY]);

  if (!weatherData) {
    return <div className="text-center text-white text-2xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-blue-900 to-blue-600">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          {city} Weather Forecast
        </h1>
        <Link
          to="/"
          className="bg-white/10 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-blue-500/50"
        >
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {weatherData.list.slice(0, 5).map((forecast, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-blue-500/50 p-6 text-center"
          >
            <p className="text-xl font-semibold text-white">
              {new Date(forecast.dt * 1000).toLocaleDateString()}
            </p>
            <img
              src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
              className="mx-auto animate-pulse"
            />
            <p className="text-4xl font-extrabold text-white drop-shadow-lg">
              {Math.round(forecast.main.temp)}°C
            </p>
            <p className="text-gray-200 capitalize">
              {forecast.weather[0].description}
            </p>
            <div className="mt-4 text-sm text-gray-300">
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
