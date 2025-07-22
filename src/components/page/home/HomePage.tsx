"use client";

import React, { useState } from 'react';
import Header from './Header';
import BinInput from './BinInput';
import BinResultTable, { BinResult } from './BinResultTable';
import Footer from './Footer';

const HomePage: React.FC = () => {
  const [results, setResults] = useState<BinResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock function to simulate BIN checking API
  const checkBins = async (bins: string[]) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock data - in real app, this would be an API call
    const mockResults: BinResult[] = bins.map((bin, index) => ({
      bin,
      bank: getMockBank(bin),
      type: getMockType(bin),
      level: getMockLevel(bin),
      country: getMockCountry(bin),
      countryCode: getMockCountryCode(bin),
      brand: getMockBrand(bin),
      prepaid: Math.random() > 0.7
    }));
    
    setResults(mockResults);
    setIsLoading(false);
  };

  // Mock helper functions
  const getMockBank = (bin: string): string => {
    const banks = ['Chase Bank', 'Bank of America', 'Wells Fargo', 'Citibank', 'Capital One'];
    return banks[parseInt(bin) % banks.length];
  };

  const getMockType = (bin: string): string => {
    const types = ['Credit', 'Debit', 'Prepaid'];
    return types[parseInt(bin) % types.length];
  };

  const getMockLevel = (bin: string): string => {
    const levels = ['Classic', 'Gold', 'Platinum', 'Signature', 'Infinite'];
    return levels[parseInt(bin) % levels.length];
  };

  const getMockCountry = (bin: string): string => {
    const countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France'];
    return countries[parseInt(bin) % countries.length];
  };

  const getMockCountryCode = (bin: string): string => {
    const codes = ['US', 'CA', 'GB', 'DE', 'FR'];
    return codes[parseInt(bin) % codes.length];
  };

  const getMockBrand = (bin: string): string => {
    const brands = ['Visa', 'Mastercard', 'American Express', 'Discover'];
    return brands[parseInt(bin) % brands.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      {/* Hero Section with integrated Header */}
      <section className="min-h-screen flex flex-col">
        {/* Header integrated into Hero */}
        <Header />
        
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
                  Identify card data by number (BIN)
                </h1>
                <button 
                  onClick={() => document.getElementById('binInput')?.focus()}
                  className="bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl cursor-pointer"
                >
                  Get info
                </button>
              </div>

              {/* Right Content - Card Illustrations */}
              <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                {/* Background Card */}
                <div className="absolute top-4 right-4 w-80 h-52 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-xl border border-white/20 backdrop-blur-sm transform rotate-12">
                  <div className="p-6">
                    <div className="text-white/80 text-sm font-medium">debit card</div>
                    <div className="mt-12 flex space-x-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-white/60 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Foreground Card */}
                <div className="relative w-80 h-52 bg-gradient-to-br from-pink-500/40 to-red-500/40 rounded-xl border border-white/30 backdrop-blur-sm transform -rotate-6">
                  <div className="p-6">
                    <div className="text-white/90 text-sm font-medium">credit card</div>
                    <div className="mt-6">
                      <div className="text-pink-400 font-bold text-xl">BIN</div>
                      <div className="mt-6 flex space-x-3">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                        ))}
                        <div className="text-white/60 text-sm">••••••••••</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Systems */}
            <div className="mt-16 flex flex-col items-center lg:items-start">
              <div className="text-white/80 text-lg mb-6">
                Working with all systems
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-white/60 text-2xl font-bold">Mastercard</div>
                <div className="text-white/60 text-3xl font-bold">VISA</div>
                <div className="text-white/60 text-lg font-bold">AMERICAN EXPRESS</div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-white/60 text-sm">
                BIN the first 6 digits in the card number
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-12 space-y-8">
        <BinInput onCheckBins={checkBins} isLoading={isLoading} />
        <BinResultTable results={results} isLoading={isLoading} />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage; 