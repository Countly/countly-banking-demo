import React from 'react';

const GreenButton = ({ title, onClick, className }) => (
  <button
    onClick={onClick}
    className={'bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2 ' + className}
    type="button"
  >
    { title }
  </button>
);


export default GreenButton;
