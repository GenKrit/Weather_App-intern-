import { Link } from 'react-router-dom';

function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="text-2xl font-bold mb-4 md:mb-0">
          Weather App
        </Link>
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search cities..."
            className="w-full px-4 py-2 rounded text-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;