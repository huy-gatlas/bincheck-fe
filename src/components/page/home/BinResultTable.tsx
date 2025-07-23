"use client";

import React from 'react';

export interface BinResult {
  bin: string;
  bank: string;
  type: string;
  level: string;
  country: string;
  countryCode: string;
  brand: string;
  prepaid: boolean;
}

interface BinResultTableProps {
  results: BinResult[];
  isLoading: boolean;
}

const BinResultTable: React.FC<BinResultTableProps> = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center space-x-3">
            <svg className="animate-spin h-8 w-8 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium text-white">Loading BIN information...</span>
          </div>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  const getCardTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'credit':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'debit':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'prepaid':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'classic':
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
      case 'gold':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'platinum':
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
      case 'signature':
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
      case 'infinite':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          BIN Check Results
        </h3>
        <p className="text-white/70">
          Found information for {results.length} BIN number{results.length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-4 px-4 font-semibold text-white/90">BIN</th>
              <th className="text-left py-4 px-4 font-semibold text-white/90">Bank</th>
              <th className="text-left py-4 px-4 font-semibold text-white/90">Type</th>
              <th className="text-left py-4 px-4 font-semibold text-white/90">Level</th>
              <th className="text-left py-4 px-4 font-semibold text-white/90">Brand</th>
              <th className="text-left py-4 px-4 font-semibold text-white/90">Country</th>
              <th className="text-left py-4 px-4 font-semibold text-white/90">Prepaid</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4">
                  <span className="font-mono font-semibold text-white">{result.bin}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-white/90">{result.bank}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getCardTypeColor(result.type)}`}>
                    {result.type}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${getLevelColor(result.level)}`}>
                    {result.level}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-white/90 font-medium">{result.brand}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-white/60 text-sm">{result.countryCode}</span>
                    <span className="text-white/90">{result.country}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${
                    result.prepaid ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' : 'bg-gray-500/20 text-gray-300 border-gray-500/30'
                  }`}>
                    {result.prepaid ? 'Yes' : 'No'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BinResultTable; 