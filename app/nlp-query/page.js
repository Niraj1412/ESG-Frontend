'use client';

import React, { useState } from 'react';
import { processNlpQuery } from '../services/esgService';
import LoadingSpinner from '../components/LoadingSpinner';

const NlpQueryPage = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = async () => {
    setIsLoading(true); // Set loading state to true when processing starts
    try {
      const result = await processNlpQuery(query);
      
      // If the result is an object, extract the scores to display them properly
      if (typeof result.response === 'object') {
        setResponse(`Environmental Score: ${result.response.environmentalScore}, 
                     Social Score: ${result.response.socialScore}, 
                     Governance Score: ${result.response.governanceScore}, 
                     Overall Score: ${result.response.overallScore}`);
      } else {
        setResponse(result.response); // Assume it's a direct message string
      }
    } catch (error) {
      console.error('Error processing NLP query:', error);
      setResponse('Error processing query, please try again.'); // Display error message
    } finally {
      setIsLoading(false); // Set loading state to false when processing completes
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleQuery();
    }
  };

  return (
    <div className="m-4 h-[300px]">
      {/* Navigation Bar */}
      <nav className="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a href="/" className="flex space-x-2 items-center">
                <img
                  src="/assets/logo.jpeg"
                  className="w-12 rounded-full"
                  alt="ESG Dashboard Logo"
                />
                <span className="text-2xl font-bold text-blue-900">
                  ESG <span className="text-blue-700">Dashboard</span>
                </span>
              </a>
              <button
                aria-label="hamburger"
                id="hamburger"
                className="relative w-10 h-10 -mr-2 lg:hidden"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="inset-0 w-6 h-0.5 m-auto rounded bg-blue-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-blue-900 transition duration-300"
                ></div>
              </button>
            </div>
            <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div className="text-gray-600 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                  <li>
                    <a href="/" className="block md:px-4 transition hover:text-blue-700">
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="/nlp-query" className="block md:px-4 transition hover:text-blue-700">
                      <span>NLP Query</span>
                    </a>
                  </li>
                  <li>
                    <a href="/import" className="block md:px-4 transition hover:text-blue-700">
                      <span>Import Data</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full space-y-2 border-blue-200 lg:space-y-0 md:w-max lg:border-l">
                <button
                  type="button"
                  className="w-full py-3 px-6 text-center rounded-full transition active:bg-blue-200 focus:bg-blue-100 sm:w-max"
                >
                  <span className="block text-blue-800 font-semibold text-sm">
                    Sign up
                  </span>
                </button>
                <button
                  type="button"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-blue-300 hover:bg-blue-100 active:bg-blue-400 focus:bg-blue-300 sm:w-max"
                >
                  <span className="block text-blue-900 font-semibold text-sm">
                    Login
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative bg-blue-50 pt-32 md:pt-[300px] min-h-screen flex flex-col">
        <div className="container m-auto px-6 lg:px-7 flex-grow">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">
              Ask Your ESG Question
            </h1>

            {/* Response Section */}
            {response && (
              <div className="mb-4 p-4 rounded-lg bg-white shadow-md border border-zinc-200">
                <h3 className="text-xl font-semibold text-gray-800">Response:</h3>
                <p className="mt-2 text-gray-700">{response}</p>
              </div>
            )}

            {/* Loading Spinner */}
            {isLoading && (
              <div className="flex justify-center items-center mt-4">
                <LoadingSpinner />
              </div>
            )}
          </div>
        </div>

        {/* Input Section at the Bottom */}
        <div className="flex w-full max-w-md pb-10 mx-auto">
          <input
            type="text"
            placeholder="Ask a question about ESG..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress} // Added event handler for Enter key
            className="flex-grow rounded-lg border border-zinc-200 p-4 text-sm font-medium placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleQuery}
            className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-600 transition"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
};

export default NlpQueryPage;
