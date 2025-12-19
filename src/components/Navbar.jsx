import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


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
  const [isFocused, setIsFocused] = useState(false);
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
    setSearchQuery(''); 
    navigate('/'); 
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      <div className="absolute inset-0 bg-[#0b1121]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"></div>
      
      
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="container mx-auto px-6 py-4 relative z-10 flex items-center justify-between">
        
        
        <div 
          onClick={handleLogoClick}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="relative p-2 rounded-xl bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 border border-yellow-500/20 group-hover:border-yellow-500/40 transition-all duration-300">
            <SunIcon className="w-6 h-6 text-yellow-400 transform group-hover:rotate-90 transition-transform duration-700 ease-in-out" />
            <div className="absolute inset-0 rounded-xl bg-yellow-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:to-white transition-all duration-300">
            Weather App
          </span>
        </div>

        
        <div className="flex items-center gap-2">
          <div className={`
            relative flex items-center transition-all duration-300 ease-out
            ${isFocused ? 'w-64 md:w-80' : 'w-48 md:w-64'}
          `}>
            
            <input
              type="text"
              placeholder="Search cities..."
              className={`
                w-full pl-10 pr-4 py-2.5 rounded-full text-sm font-medium
                bg-white/5 text-white placeholder-slate-400
                border border-white/10
                focus:outline-none focus:bg-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20
                transition-all duration-300
                shadow-inner shadow-black/20
              `}
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            
            
            <SearchIcon className={`
              absolute left-3.5 w-4 h-4 transition-colors duration-300 pointer-events-none
              ${isFocused ? 'text-blue-400' : 'text-slate-500'}
            `} />
          </div>

          
          <button
            onClick={handleSearch}
            className="
              hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-500 hover:to-purple-500
              text-white text-sm font-semibold tracking-wide
              shadow-lg shadow-purple-900/20 hover:shadow-purple-500/30
              border border-white/10
              transform active:scale-95 transition-all duration-200
            "
          >
            Search
          </button>

          
          <button
            onClick={handleSearch}
            className="md:hidden p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
