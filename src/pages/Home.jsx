import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home({ searchQuery }) {
  const [cities, setCities] = useState([
    'London', 'New York', 'Tokyo', 'Paris', 'Sydney',
    'Berlin', 'Rome', 'Moscow', 'Dubai', 'Singapore'
  ]);
  const [weather, setWeather] = useState({});
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = {};
      for (const city of cities) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
          weatherData[city] = response.data;
        } catch (error) {
          console.error(`Error fetching weather for ${city}:`, error);
        }
      }
      setWeather(weatherData);
    };

    fetchWeather();
  }, [cities]);

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCities.map(city => (
        <Link
          to={`/weather/${city}`}
          key={city}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          {weather[city] && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{city}</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">
                    {Math.round(weather[city].main.temp)}°C
                  </p>
                  <p className="text-gray-600">
                    {weather[city].weather[0].description}
                  </p>
                </div>
                <img
                  src={`https://openweathermap.org/img/w/${weather[city].weather[0].icon}.png`}
                  alt={weather[city].weather[0].description}
                  className="w-16 h-16"
                />
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Home;