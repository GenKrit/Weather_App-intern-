import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WeatherDetail from './pages/WeatherDetail';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/weather/:city" element={<WeatherDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
