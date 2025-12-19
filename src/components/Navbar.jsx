import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Simple inline SVG icons to add visual flair without extra dependencies
const SunIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

function Navbar({ setSearchQuery }) {
  const [localQuery, setLocalQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false); // State for search focus animation
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchQuery(localQuery);
    navigate('/');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogoClick = () => {
    setSearchQuery(''); // Clear any previous search
    navigate('/'); // Navigate to main dashboard
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg hover:bg-white/40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo Section with Hover Animation */}
        <div 
          onClick={handleLogoClick}
          className="group flex items-center gap-2 cursor-pointer select-none"
        >
          <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-md transform group-hover:rotate-12 transition-transform duration-300">
            <SunIcon className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-slate-800 tracking-tight group-hover:text-purple-600 transition-colors duration-300">
            Weather App
          </span>
        </div>

        {/* Search Section */}
        <div className="flex items-center gap-3">
          <div className={`relative flex items-center transition-all duration-300 ${isFocused ? 'scale-105' : 'scale-100'}`}>
            <SearchIcon className={`absolute left-3 w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-purple-500' : 'text-slate-500'}`} />
            <input
              type="text"
              placeholder="Search cities..."
              className={`
                pl-10 pr-4 py-2 rounded-full
                bg-white/50 text-slate-800 placeholder-slate-500
                border border-white/30 shadow-inner
                focus:outline-none focus:bg-white/80 focus:ring-2 focus:ring-purple-400/50
                transition-all duration-300 ease-in-out
                ${isFocused ? 'w-64' : 'w-48'}
              `}
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          <button
            onClick={handleSearch}
            className="
              px-6 py-2 rounded-full font-medium text-white
              bg-gradient-to-r from-purple-600 to-blue-500
              hover:from-purple-500 hover:to-blue-400
              shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50
              transform hover:-translate-y-0.5 active:translate-y-0
              transition-all duration-300
            "
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
