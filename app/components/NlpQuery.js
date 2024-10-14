'use client';

import React, { useState } from 'react';
import { processNlpQuery } from '../services/esgService';

const NlpQuery = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async () => {
    try {
      const result = await processNlpQuery(query);
      setResponse(result.response);
    } catch (error) {
      console.error('Error processing NLP query:', error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Ask a question about ESG..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      <button onClick={handleQuery} className="bg-blue-600 text-white px-4 py-2 rounded">Ask</button>
      {response && <div className="mt-4 p-4 bg-white rounded shadow">{response}</div>}
    </div>
  );
};

export default NlpQuery;
