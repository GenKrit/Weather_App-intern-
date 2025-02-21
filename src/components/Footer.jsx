import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">© 2025 Weather App. All rights reserved.</p>
        <p className="mt-2">
          Created by{' '}
          <a 
            href="#My-Portfolio-Link"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-move transition-transform hover:scale-110"
          >
            Shashwat Pandey
          </a>
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="mailto:shashwatp.20@gmail.com"
            className="text-white hover:text-gray-300 transition-transform transform hover:scale-110 relative group"
          >
            <FaEnvelope size={24} className="group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.7)] transition-all duration-300" />
            <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse bg-yellow-400"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/shashwat-pandey-13b682251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-transform transform hover:scale-110 relative group"
          >
            <FaLinkedin size={24} className="group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(0,112,243,0.7)] transition-all duration-300" />
            <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse bg-blue-400"></span>
          </a>
          <a
            href="https://github.com/Genkrit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-transform transform hover:scale-110 relative group"
          >
            <FaGithub size={24} className="group-hover:text-purple-400 group-hover:drop-shadow-[0_0_10px_rgba(128,90,213,0.7)] transition-all duration-300" />
            <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:animate-pulse bg-purple-400"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
