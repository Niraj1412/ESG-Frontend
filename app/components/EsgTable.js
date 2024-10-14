"use client";

import React, { useState } from "react";
import { getRealTimeESGScores } from "../services/esgService";
import EsgChart from "./EsgChart";
import ESGMetricsSelector from "./ESGMetricsSelector";
import LoadingSpinner from "./LoadingSpinner";

const EsgTable = () => {
  const [companyName, setCompanyName] = useState("");
  const [esgData, setEsgData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false); // New state for "Not Found"
  const [selectedMetrics, setSelectedMetrics] = useState({
    environmental: true,
    social: true,
    governance: true,
    overall: true,
  });

  const fetchData = async () => {
    setIsLoading(true);
    setNotFound(false); // Reset "Not Found" state when starting a new search
    try {
      const data = await getRealTimeESGScores(companyName);
      if (!data) {
        setNotFound(true); // Set "Not Found" if data is empty or null
      } else {
        setEsgData(data);
      }
    } catch (error) {
      console.error("Failed to fetch ESG data:", error);
      setNotFound(true); // Show "Not Found" if there's an error
    } finally {
      setIsLoading(false);
    }
  };

  const getFilteredData = () => {
    if (!esgData) return null;

    const filteredData = {};

    if (selectedMetrics.environmental) {
      filteredData["Environmental Pillar Score"] =
        esgData["Environmental Pillar Score"];
    }
    if (selectedMetrics.social) {
      filteredData["Social Pillar Score"] = esgData["Social Pillar Score"];
    }
    if (selectedMetrics.governance) {
      filteredData["Governance Pillar Score"] =
        esgData["Governance Pillar Score"];
    }
    if (selectedMetrics.overall) {
      filteredData["Overall Score"] = esgData["Overall Score"];
    }

    return filteredData;
  };

  return (
    <div className="m-4">
      <div className="relative w-full">
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
                  aria-label="humburger"
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
                      <a
                        href="/"
                        className="block md:px-4 transition hover:text-blue-700"
                      >
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/nlp-query"
                        className="block md:px-4 transition hover:text-blue-700"
                      >
                        <span>NLP Query</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/import"
                        className="block md:px-4 transition hover:text-blue-700"
                      >
                        <span>Import Data</span>
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="/export"
                        className="block md:px-4 transition hover:text-blue-700"
                      >
                        <span>Export Data</span>
                      </a>
                    </li> */}
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

        <div className="relative bg-blue-50">
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[50px] lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl text-blue-900 md:text-5xl lg:w-12/12">
                  Find ESG Scores for Companies in Real-Time
                </h1>
                <form
                  action=""
                  className="w-full mt-12"
                  onSubmit={(e) => {
                    e.preventDefault(); // Prevents the page from reloading
                    fetchData(); // Calls your fetchData function
                  }}
                >
                  <div className="relative flex p-1 rounded-full bg-white border border-blue-200 shadow-md md:p-2">
                    <select
                      className="hidden p-3 rounded-full bg-transparent md:block md:p-4"
                      name="domain"
                      id="domain"
                    >
                      <option value="design">Tech</option>
                      <option value="energy">Energy</option>
                      <option value="finance">Finance</option>
                    </select>
                    <input
                      placeholder="Enter company name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full p-4 rounded-full border-transparent focus:border-blue-300 "
                      type="text"
                    />
                    <button
                      type="submit"
                      className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-blue-200 to-blue-300 hover:from-blue-200 hover:to-blue-400 active:from-blue-400 active:to-blue-500 focus:from-blue-200 focus:to-blue-300  md:px-12"
                    >
                      <span className="hidden text-blue-900 font-semibold md:block">
                        Search
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 mx-auto text-blue-900 md:hidden"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </form>

                <p className="mt-8 text-gray-700 lg:w-10/12">
                  Search for ESG metrics by entering a company name. Our tool
                  provides real-time ESG scores and insights to help you make
                  informed decisions.
                </p>
              </div>
              <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                <img
                  src="/assets/communication-flat-icon.png"
                  className="relative"
                  alt="ESG metrics"
                  loading="lazy"
                  width="4500"
                  height="4500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show loading spinner if data is being fetched */}
      {isLoading && (
        <div className="flex justify-center items-center mt-4">
          <LoadingSpinner />
        </div>
      )}

      {/* Show 'not found' message if company data is not found */}
      {!isLoading && notFound && (
        <div className="flex justify-center items-center mt-4">
          <h2 className=" text-red-700 text-center focus:ring-blue-300 mb-4 text-3xl font-extrabold tracking-tight leading-none  md:text-4xl lg:text-5xl shadow-current">Company not found. Please try another search.</h2>
        </div>
      )}

      {/* Show data only after loading is complete */}
      {!isLoading && esgData && (
        <div className="bg-blue-50">
          {/* Company Overview Section */}
          <h2 className="  text-blue-800 text-center focus:ring-blue-300 mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl shadow-current">
            Result
          </h2>
          <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-blue-900 ">
            <div className="relative">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Company Overview
              </h3>
              <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Name:</strong> {esgData.companyname}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Industry:</strong> {esgData.industry}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Country:</strong> {esgData.country}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Exchange:</strong> {esgData.exchangename} (
                  {esgData.tickersymbol})
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Year:</strong> {esgData.Year}
                </p>
              </div>
            </div>
          </div>

          <ESGMetricsSelector onMetricChange={setSelectedMetrics} />
          <EsgChart data={getFilteredData()} />

          {/* Render the ESG table with filtered data */}
          <table className="min-w-full bg-white rounded shadow mb-16">
            <thead>
              <tr>
                {selectedMetrics.environmental && (
                  <th className="border px-4 py-2">Environmental Score</th>
                )}
                {selectedMetrics.social && (
                  <th className="border px-4 py-2">Social Score</th>
                )}
                {selectedMetrics.governance && (
                  <th className="border px-4 py-2">Governance Score</th>
                )}
                {selectedMetrics.overall && (
                  <th className="border px-4 py-2">Overall ESG Score</th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                {selectedMetrics.environmental && (
                  <td className="border px-4 py-2">
                    {esgData["Environmental Pillar Score"] ?? "Data not available"}
                  </td>
                )}
                {selectedMetrics.social && (
                  <td className="border px-4 py-2">
                    {esgData["Social Pillar Score"] ?? "Data not available"}
                  </td>
                )}
                {selectedMetrics.governance && (
                  <td className="border px-4 py-2">
                    {esgData["Governance Pillar Score"] ?? "Data not available"}
                  </td>
                )}
                {selectedMetrics.overall && (
                  <td className="border px-4 py-2">
                    {esgData["Overall Score"] ?? "Data not available"}
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EsgTable;