import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ setSearchQuery }) {
  const [localQuery, setLocalQuery] = useState('');
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
    <nav className="backdrop-blur-lg bg-gradient-to-r from-white/30 to-white/10 shadow-lg sticky top-0 z-50 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-blue-500/40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <span
          onClick={handleLogoClick}
          className="cursor-pointer text-3xl font-bold text-black transition-transform duration-300 transform hover:scale-110 hover:text-white-300"
        >
          Weather App
        </span>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search cities..."
            className="px-4 py-2 rounded bg-white/30 text-gray-800 w-48 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-shadow duration-300 placeholder-gray-400"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSearch}
            className="bg-purple-500/80 hover:bg-purple-600/80 text-white px-4 py-2 rounded shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-purple-500/50"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
