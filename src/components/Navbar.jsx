import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ setSearchQuery }) {
  const [localQuery, setLocalQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchQuery(localQuery);
    navigate('/');
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Weather App
        </Link>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search cities..."
            className="px-4 py-2 rounded text-gray-800 w-48"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
