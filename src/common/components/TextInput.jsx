import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  type, placeholder, value, onChange, className,
}) => (
  <input
    className={`bg-white text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/5 appearance-none leading-normal mt-2 ${className}`}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);


TextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  className: 'bg-white text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/5 appearance-none leading-normal mt-2',
  placeholder: '',
};

export default TextInput;
