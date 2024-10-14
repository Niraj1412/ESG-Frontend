'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/logo.jpeg';

const Header = () => {
  return (
    <div className="relative w-full bg-blue-50" >
        <nav className="fixed z-10 w-full bg-blue-50 md:absolute md:bg-transparent">
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

              <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-blue-50 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
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
      </div> 
  );
};

export default Header;
