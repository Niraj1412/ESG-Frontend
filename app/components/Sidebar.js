'use client';

import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gradient-to-br from-gray-900 to-gray-800 text-white w-64 p-6 min-h-screen shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-white tracking-wide">ESG Dashboard</h2>
      
      <ul className="space-y-4">
        <li>
          <a href="/" className="block p-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all rounded-lg shadow-md">
            <span className="text-sm font-semibold">Dashboard</span>
          </a>
        </li>
        
        <li>
          <a href="/nlp-query" className="block p-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition-all rounded-lg shadow-md">
            <span className="text-sm font-semibold">NLP Query</span>
          </a>
        </li>
        
        <li>
          <a href="/import" className="block p-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all rounded-lg shadow-md">
            <span className="text-sm font-semibold">Import Data</span>
          </a>
        </li>
        
        <li>
          <a href="/export" className="block p-3 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 transition-all rounded-lg shadow-md">
            <span className="text-sm font-semibold">Export Data</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
