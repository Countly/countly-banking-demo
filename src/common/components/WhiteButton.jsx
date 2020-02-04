import React from 'react';
import PropTypes from 'prop-types';

const WhiteButton = ({ title, onClick, className }) => (
  <button
    onClick={onClick}
    type="button"
    className={`bg-white hover:bg-gray-300 text-countly-800 font-bold py-2 px-4 rounded m-2 ${className}`}
  >
    { title }
  </button>
);

WhiteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};


WhiteButton.defaultProps = {
  className: 'bg-white hover:bg-gray-300 text-countly-800 font-bold py-2 px-4 rounded m-2',
};

export default WhiteButton;
