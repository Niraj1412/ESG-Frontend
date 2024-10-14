// components/ESGMetricsSelector.js
import React, { useState } from "react";

const ESGMetricsSelector = ({ onMetricChange }) => {
  const [selectedMetrics, setSelectedMetrics] = useState({
    environmental: true,
    social: true,
    governance: true,
    overall: true,
  });

  const handleMetricChange = (metric) => {
    const updatedMetrics = {
      ...selectedMetrics,
      [metric]: !selectedMetrics[metric],
    };
    setSelectedMetrics(updatedMetrics);
    onMetricChange(updatedMetrics); // Notify parent of changes
  };

  return (
    <div className="bg-blue-50 p-4 rounded shadow-md ">
      <h3 className="text-lg font-semibold mb-4"></h3>
      <div className="flex space-x-4">
        {Object.keys(selectedMetrics).map((metric) => (
          <label key={metric} className="relative cursor-pointer">
            <input
              type="checkbox"
              checked={selectedMetrics[metric]}
              onChange={() => handleMetricChange(metric)}
              className="absolute opacity-0 w-0 h-0"
            />
            <div
              className={`flex select-none items-center gap-3 rounded-lg border-2 p-3 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all
    ${
      selectedMetrics[metric]
        ? "border-blue-400 bg-blue-100"
        : "border-gray-300"
    }
    hover:bg-blue-200 hover:border-blue-500 hover:shadow-lg focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50`}
              data-ripple-dark="true"
            >
              <span className="block font-sans text-s font-medium text-gray-800">
                {metric.replace(/([A-Z])/g, " $1").trim()}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ESGMetricsSelector;
