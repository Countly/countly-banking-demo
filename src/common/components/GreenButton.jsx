import React from 'react';
import PropTypes from 'prop-types';

const GreenButton = ({ title, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2 ${className}`}
    type="button"
  >
    { title }
  </button>
);

GreenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};


GreenButton.defaultProps = {
  className: 'bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2',
};

export default GreenButton;
