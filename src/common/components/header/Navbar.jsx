import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="w-full">
    <nav className="p-1 shadow">
      <ul>
        <li className="inline-block mx-4">
          <Link to="/">About Count Bank</Link>
        </li>
        <span className="text-gray-500 mx-2">|</span>
        <li className="inline-block mx-4">
          <Link to="/">Contact US</Link>
        </li>
        <span className="text-gray-500 mx-2">|</span>
        <li className="inline-block mx-4">
          <Link to="/">ATM & Branches</Link>
        </li>
        <li className="inline-block mr-4 float-right">
          <Link to="/">Product and Service Fees</Link>
        </li>
      </ul>
    </nav>

    <div className="p-3 flex justify-between shadow">
      <img
        width="200"
        alt="countly logo"
        src="https://count.ly/images/logos/countly-logo.svg"
      />
      <button
        type="button"
        className="bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4 rounded"
      >
        Internet Banking
      </button>
    </div>
  </div>
);

export default Navbar;
