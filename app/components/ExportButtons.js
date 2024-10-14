'use client';

import React from 'react';
import { exportData } from '../services/esgService';

const ExportButtons = ({ data }) => {
  const handleExport = (type) => {
    exportData(type, data)
      .then((response) => {
        console.log(`Data exported to ${type}:`, response);
      })
      .catch((error) => {
        console.error(`Error exporting data to ${type}:`, error);
      });
  };

  return (
    <div className="p-4">
      <button onClick={() => handleExport('csv')} className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Export to CSV</button>
      <button onClick={() => handleExport('pdf')} className="bg-blue-600 text-white px-4 py-2 rounded">Export to PDF</button>
    </div>
  );
};

export default ExportButtons;
