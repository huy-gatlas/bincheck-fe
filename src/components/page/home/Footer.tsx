"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              BINCHECKER
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional BIN checking service providing instant verification of bank identification numbers with detailed card information.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Features</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Instant BIN verification</li>
              <li>• Multiple BIN checking</li>
              <li>• Detailed card information</li>
              <li>• Bank and country data</li>
              <li>• Card type identification</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• API Documentation</li>
              <li>• Rate Limits</li>
              <li>• Data Accuracy</li>
              <li>• Privacy Policy</li>
              <li>• Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 BINCHECKER. All rights reserved. | 
            <span className="ml-2">Powered by advanced card verification technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 