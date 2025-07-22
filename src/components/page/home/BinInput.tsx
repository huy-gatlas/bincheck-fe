"use client";

import React, { useState } from 'react';

interface BinInputProps {
  onCheckBins: (bins: string[]) => void;
  isLoading?: boolean;
}

const BinInput: React.FC<BinInputProps> = ({ onCheckBins, isLoading = false }) => {
  const [binInput, setBinInput] = useState('');

  const formatBinInput = (value: string): string => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    
    // Add comma after every 6 digits
    const formatted = digitsOnly.replace(/(.{6})/g, '$1,').replace(/,$/, '');
    
    return formatted;
  };

  const validateBins = (input: string): string[] => {
    // Split by comma and clean up
    const bins = input
      .split(',')
      .map(bin => bin.trim())
      .filter(bin => bin.length === 6); // Only accept exactly 6 digits
    
    return bins;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!binInput.trim()) return;

    const bins = validateBins(binInput);
    
    if (bins.length > 0) {
      onCheckBins(bins);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const formattedValue = formatBinInput(value);
    setBinInput(formattedValue);
  };

  const isValidInput = (): boolean => {
    const bins = validateBins(binInput);
    return bins.length > 0;
  };

  const getValidationMessage = (): string => {
    if (!binInput.trim()) return '';
    
    const bins = validateBins(binInput);
    const totalDigits = binInput.replace(/\D/g, '').length;
    
    if (bins.length === 0) {
      return 'Please enter valid BIN numbers (6 digits each)';
    }
    
    if (totalDigits % 6 !== 0) {
      return 'Each BIN must be exactly 6 digits';
    }
    
    return `Valid BINs: ${bins.length}`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Check Multiple BIN Numbers
        </h2>
        <p className="text-white/70">
          Enter BIN numbers (6 digits each). Commas will be added automatically.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="binInput" className="block text-sm font-medium text-white/90 mb-2">
            BIN Numbers
          </label>
          <textarea
            id="binInput"
            value={binInput}
            onChange={handleInputChange}
            placeholder="Enter BIN numbers (e.g., 411111555555400000)"
            className="w-full h-32 px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-lg font-mono text-white placeholder-white/50 backdrop-blur-sm"
            disabled={isLoading}
          />
          <div className="mt-2">
            <p className="text-sm text-white/60">
              {getValidationMessage()}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading || !isValidInput()}
            className="bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2 cursor-pointer"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Checking...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Check BIN Numbers</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BinInput; 