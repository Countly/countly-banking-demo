import React from 'react';

const WhiteButton = ({ title, onClick, className }) => (
  <button
    onClick={onClick}
    type="button"
    className={'bg-white hover:bg-gray-300 text-countly-800 font-bold py-2 px-4 rounded m-2 ' + className}
  >
    { title }
  </button>
);


export default WhiteButton;
