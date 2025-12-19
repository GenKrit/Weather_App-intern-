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
  // ------------------------------------------------

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white selection:bg-purple-500/30">
      
      {/* Container with max-width */}
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Search Results Section */}
        {searchQuery && (
          <div className="animate-fade-in-down">
            {searchError && (
              <div className="text-center p-4 bg-red-500/10 backdrop-blur-md rounded-xl border border-red-500/20 max-w-lg mx-auto">
                <h2 className="text-lg text-red-200 font-medium">
                  {searchError}
                </h2>
              </div>
            )}
            
            {searchWeather && (
              <Link
                to={`/weather/${searchWeather.name}`}
                className="group relative block overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-blue-500/20 hover:border-white/20 hover:scale-[1.01]"
              >
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl group-hover:bg-purple-500/40 transition-all duration-700"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-all duration-700"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
                  <div className="space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      <span className="text-xs font-medium tracking-wider uppercase text-white/80">Current Match</span>
                    </div>
                    <div>
                      <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
                        {searchWeather.name}
                      </h2>
                      <p className="text-xl md:text-2xl text-blue-100/80 capitalize font-light">
                        {searchWeather.weather[0].description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8 bg-white/5 rounded-3xl p-6 border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                    <img
                      src={`https://openweathermap.org/img/w/${searchWeather.weather[0].icon}.png`}
                      alt={searchWeather.weather[0].description}
                      className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                    <div className="text-right">
                      <p className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
                        {Math.round(searchWeather.main.temp)}°
                      </p>
                      <div className="flex justify-end gap-3 text-sm font-medium text-white/60 mt-1">
                         <span>H: {Math.round(searchWeather.main.temp_max)}°</span>
                         <span>L: {Math.round(searchWeather.main.temp_min)}°</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        )}

        {/* Global Forecast Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Popular Cities
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDefaultCities.map((city, index) => (
              <div 
                key={city}
                className="opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  to={`/weather/${city}`}
                  className="group relative flex flex-col h-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 backdrop-blur-md overflow-hidden"
                >
                  {defaultWeather[city] ? (
                    <>
                      {/* Card Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shine"></div>

                      <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                          <h2 className="text-xl font-bold text-white mb-1 tracking-wide group-hover:text-blue-200 transition-colors">
                            {city}
                          </h2>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-white/10 text-white/70 capitalize">
                              {defaultWeather[city].weather[0].description}
                            </span>
                          </div>
                        </div>
                        <span className="text-4xl font-bold text-white/90 tracking-tighter">
                          {Math.round(defaultWeather[city].main.temp)}°
                        </span>
                      </div>

                      <div className="mt-auto relative z-10">
                        <div className="flex items-end justify-between border-t border-white/10 pt-4 mt-2">
                          <div className="text-xs text-white/50 font-medium space-y-1">
                            <p>Feels like {Math.round(defaultWeather[city].main.feels_like)}°</p>
                            <p>Humidity {defaultWeather[city].main.humidity}%</p>
                          </div>
                          <img
                            src={`https://openweathermap.org/img/w/${defaultWeather[city].weather[0].icon}.png`}
                            alt={defaultWeather[city].weather[0].description}
                            className="w-16 h-16 -mb-2 -mr-2 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    // Refined Skeleton Loader
                    <div className="animate-pulse flex flex-col h-full justify-between">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="h-6 bg-white/10 rounded w-24"></div>
                          <div className="h-4 bg-white/5 rounded w-16"></div>
                        </div>
                        <div className="h-10 bg-white/10 rounded w-12"></div>
                      </div>
                      <div className="mt-6 border-t border-white/5 pt-4 flex justify-between items-end">
                        <div className="space-y-1">
                          <div className="h-3 bg-white/5 rounded w-16"></div>
                          <div className="h-3 bg-white/5 rounded w-12"></div>
                        </div>
                        <div className="h-12 w-12 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* custom keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shine {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
