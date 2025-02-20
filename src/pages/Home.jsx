import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home({ searchQuery }) {
  const [defaultCities] = useState([
    'London', 'New York', 'Tokyo', 'Paris', 'Sydney',
    'Berlin', 'Rome', 'Moscow', 'Dubai', 'Singapore'
  ]);
  const [defaultWeather, setDefaultWeather] = useState({});
  const [searchWeather, setSearchWeather] = useState(null);
  const [searchError, setSearchError] = useState(null);
  
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      const weatherData = {};
      for (const city of defaultCities) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
          weatherData[city] = response.data;
        } catch (error) {
          console.error(`Error fetching weather for ${city}:`, error);
        }
      }
      setDefaultWeather(weatherData);
    };

    fetchDefaultWeather();
  }, [defaultCities, API_KEY]);

  useEffect(() => {
    if (!searchQuery) {
      setSearchWeather(null);
      setSearchError(null);
      return;
    }
    
    const fetchSearchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}&units=metric`
        );
        setSearchWeather(response.data);
        setSearchError(null);
      } catch (error) {
        console.error('Error fetching search weather:', error);
        setSearchWeather(null);
        setSearchError('No data found for the searched city.');
      }
    };

    fetchSearchWeather();
  }, [searchQuery, API_KEY]);

  const filteredDefaultCities = defaultCities.filter(city =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-8 p-4 bg-gradient-to-b from-blue-900 to-blue-600 min-h-screen">
      {searchQuery && (
        <div className="mb-8">
          {searchError && (
            <h2 className="text-center text-2xl text-red-500 font-semibold">
              {searchError}
            </h2>
          )}
          {searchWeather && (
            <Link
              to={`/weather/${searchWeather.name}`}
              className="block bg-white/10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mx-auto max-w-md p-6 text-center backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-blue-500/50"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">
                {searchWeather.name}
              </h2>
              <div className="flex items-center justify-center">
                <div>
                  <p className="text-7xl font-extrabold text-white drop-shadow-lg">
                    {Math.round(searchWeather.main.temp)}°C
                  </p>
                  <p className="text-gray-200 capitalize">
                    {searchWeather.weather[0].description}
                  </p>
                </div>
                <img
                  src={`https://openweathermap.org/img/w/${searchWeather.weather[0].icon}.png`}
                  alt={searchWeather.weather[0].description}
                  className="w-28 h-28 animate-pulse"
                />
              </div>
            </Link>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDefaultCities.map(city => (
          <Link
            to={`/weather/${city}`}
            key={city}
            className="bg-white/10 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-500/50 hover:to-blue-500/50"
          >
            {defaultWeather[city] && (
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  {city}
                </h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-5xl font-extrabold text-white">
                      {Math.round(defaultWeather[city].main.temp)}°C
                    </p>
                    <p className="text-gray-200 capitalize">
                      {defaultWeather[city].weather[0].description}
                    </p>
                  </div>
                  <img
                    src={`https://openweathermap.org/img/w/${defaultWeather[city].weather[0].icon}.png`}
                    alt={defaultWeather[city].weather[0].description}
                    className="w-20 h-20 transition-transform duration-500 transform hover:scale-125"
                  />
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
