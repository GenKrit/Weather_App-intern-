import React from 'react';


const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.21-.43-2-1.52-2A1.6 1.6 0 0012.9 14v5h-3v-9h3v1.27a3 3 0 012.7-1.4c2 0 3.4 1.3 3.4 4.09z" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative mt-auto w-full pt-20 pb-10 overflow-hidden">
      
      
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="absolute inset-0 bg-[#0b1121]/90 backdrop-blur-3xl -z-20"></div>
      
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-6">
        
       
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative z-10">
          
          
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 inline-block">
              Weather App
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-md text-sm md:text-base">
              Bringing you precise, real-time climate data through a modern and immersive interface. Designed for clarity, accuracy, and aesthetics.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-medium border border-blue-500/20">v2.0.0</span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-xs font-medium border border-green-500/20">Live Status</span>
            </div>
          </div>

           
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-lg">Platform</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <a href="/" className="group flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Global Map
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Hourly Forecast
                </a>
              </li>
            </ul>
          </div>

          
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-lg">Connect</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <a href="https://github.com/GenKrit/Weather_App-intern-" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  LinkedIn Network
                </a>
              </li>
              <li>
                <a href="mailto:shashwatp.20@gmail.com" className="group flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          
          <div className="order-3 md:order-1 text-center md:text-left">
            <p className="text-slate-500 text-sm">
              © 2025 Weather App. All rights reserved.
            </p>
          </div>

          
          <div className="order-2 md:order-2">
            <a 
              href="#My-Portfolio-Link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <span className="text-slate-400 text-sm font-light">Created by</span>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 group-hover:from-green-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
                Shashwat Pandey
              </span>
            </a>
          </div>

          
          <div className="order-1 md:order-3">
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">
              
              <a
                href="mailto:shashwatp.20@gmail.com"
                className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300 group"
                aria-label="Email"
              >
                <MailIcon className="w-5 h-5 text-slate-400 group-hover:text-yellow-400 transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/shashwat-pandey-13b682251/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href="https://github.com/Genkrit"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300 group"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
              </a>
              
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
