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

  // --- CORE LOGIC PRESERVED EXACTLY AS REQUESTED ---
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
  // ------------------------------------------------

  return (
    // Updated Background: Radial gradient for depth
    <div className="min-h-screen pt-28 pb-12 px-4 sm:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black text-white">
      
      {/* Search Results Section */}
      {searchQuery && (
        <div className="mb-12 container mx-auto">
          {searchError && (
            <div className="text-center p-4 bg-red-500/20 backdrop-blur-md rounded-lg border border-red-500/30 max-w-md mx-auto animate-bounce">
              <h2 className="text-xl text-red-200 font-semibold tracking-wide">
                {searchError}
              </h2>
            </div>
          )}
          
          {searchWeather && (
            <div className="transform transition-all duration-500 hover:scale-105">
              <Link
                to={`/weather/${searchWeather.name}`}
                className="group block relative overflow-hidden bg-white/10 rounded-3xl shadow-2xl hover:shadow-blue-500/20 border border-white/20 mx-auto max-w-2xl p-8 backdrop-blur-xl"
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-700"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase text-blue-200 bg-blue-500/20 rounded-full">
                      Search Result
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-2 drop-shadow-md">
                      {searchWeather.name}
                    </h2>
                    <p className="text-xl text-blue-100 capitalize font-medium flex items-center justify-center md:justify-start gap-2">
                      {searchWeather.weather[0].description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-lg">
                        {Math.round(searchWeather.main.temp)}°
                      </p>
                    </div>
                    <img
                      src={`https://openweathermap.org/img/w/${searchWeather.weather[0].icon}.png`}
                      alt={searchWeather.weather[0].description}
                      className="w-32 h-32 drop-shadow-2xl filter brightness-110"
                    />
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Grid Section */}
      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold text-white/80 mb-6 pl-2 border-l-4 border-blue-500">
          Popular Cities
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDefaultCities.map((city, index) => (
            <Link
              to={`/weather/${city}`}
              key={city}
              // Added staggered delay effect logic would require index, but simple CSS transition works great too
              className="group relative bg-slate-800/40 hover:bg-slate-700/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 border border-white/5 hover:border-white/20 backdrop-blur-md overflow-hidden"
            >
              {defaultWeather[city] ? (
                <>
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                        {city}
                      </h2>
                      <p className="text-sm text-gray-300 font-medium capitalize">
                        {defaultWeather[city].weather[0].description}
                      </p>
                    </div>
                    <span className="text-4xl font-bold text-white/90">
                      {Math.round(defaultWeather[city].main.temp)}°
                    </span>
                  </div>

                  <div className="relative z-10 flex justify-end mt-4">
                    <img
                      src={`https://openweathermap.org/img/w/${defaultWeather[city].weather[0].icon}.png`}
                      alt={defaultWeather[city].weather[0].description}
                      className="w-16 h-16 transform transition-transform duration-500 group-hover:scale-125 drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Bottom details strip */}
                  <div className="relative z-10 mt-2 pt-3 border-t border-white/10 flex justify-between text-xs text-gray-400">
                     <span>H: {Math.round(defaultWeather[city].main.temp_max)}°</span>
                     <span>L: {Math.round(defaultWeather[city].main.temp_min)}°</span>
                  </div>
                </>
              ) : (
                // Loading Skeleton for individual cards
                <div className="animate-pulse space-y-4">
                  <div className="h-8 bg-white/10 rounded w-1/2"></div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-white/10 rounded w-1/3"></div>
                    <div className="h-10 bg-white/10 rounded w-10"></div>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
