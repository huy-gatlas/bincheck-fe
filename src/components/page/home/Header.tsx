"use client";

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">
              Bins.
            </h1>
            <span className="text-pink-400 font-semibold">SU</span>
          </div>

          {/* Navigation Section */}
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-pink-300 transition-colors duration-200 font-medium cursor-pointer">
              Login
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer">
              Registration
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 