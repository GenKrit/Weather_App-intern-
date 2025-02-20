import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WeatherDetail from './pages/WeatherDetail';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/weather/:city" element={<WeatherDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;