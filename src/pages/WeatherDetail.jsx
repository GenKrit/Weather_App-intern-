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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-xl font-medium tracking-wide">Loading Forecast...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-12 px-4 sm:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 animate-[fadeInUp_0.5s_ease-out]">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 drop-shadow-sm">
              {city}
            </h1>
            <p className="text-blue-200/80 text-lg mt-2 font-light tracking-wide">
              5-Interval Forecast
            </p>
          </div>
          
          <Link
            to="/"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="transform group-hover:-translate-x-1 transition-transform duration-300"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <span className="font-medium">Back to Dashboard</span>
          </Link>
        </div>

        {/* Forecast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {weatherData.list.slice(0, 5).map((forecast, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-white/10 overflow-hidden opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shine"></div>

              <div className="relative z-10 flex flex-col items-center text-center h-full justify-between gap-4">
                
                {/* Date & Time */}
                <div className="w-full border-b border-white/10 pb-3">
                  <p className="text-sm font-bold text-blue-200 tracking-wider uppercase">
                    {new Date(forecast.dt * 1000).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                  </p>
                  <p className="text-xs text-white/50 mt-1">
                    {new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {/* Icon */}
                <img
                  src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                  className="w-24 h-24 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transform group-hover:scale-110 transition-transform duration-300"
                />

                {/* Temperature */}
                <div>
                  <p className="text-5xl font-bold text-white tracking-tighter">
                    {Math.round(forecast.main.temp)}°
                  </p>
                  <p className="text-sm text-blue-100/70 font-medium capitalize mt-1">
                    {forecast.weather[0].description}
                  </p>
                </div>

                {/* Details Footer */}
                <div className="w-full grid grid-cols-2 gap-2 mt-2 pt-4 border-t border-white/10 text-xs text-gray-300">
                  <div className="flex flex-col items-center bg-white/5 rounded-lg py-2">
                    <span className="text-white/50 mb-1">Humidity</span>
                    <span className="font-semibold">{forecast.main.humidity}%</span>
                  </div>
                  <div className="flex flex-col items-center bg-white/5 rounded-lg py-2">
                    <span className="text-white/50 mb-1">Wind</span>
                    <span className="font-semibold">{forecast.wind.speed} m/s</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles for Animations */}
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

export default WeatherDetail;
