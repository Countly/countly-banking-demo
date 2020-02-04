import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    isActive, title, photo, onClick,
  } = props;

  return (
    <div
      className="select-none rounded overflow-hidden shadow-lg bg-gray-300 p-4 m-2 bg-white w-1/3 lg:w-1/4 xl:w-1/6 cursor-pointer"
      style={{
        backgroundColor: isActive ? '#e2e8f0' : 'white',
        border: isActive ? `1px #13b94d solid` : '1px #E2E8F0 solid',
      }}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <img width="60" className="mx-auto mb-1" alt={title} src={photo} />
      <span className="mt-2 text-lg">{title}</span>
    </div>
  );
};


Card.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
