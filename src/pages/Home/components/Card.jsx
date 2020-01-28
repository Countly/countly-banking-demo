import React from 'react';
import PropTypes from 'prop-types';
import { FIRST_COLOR } from '../../../constants';

const Card = (props) => {
  const {
    isActive, title, photo, onClick,
  } = props;

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300 p-4 mx-1 bg-white w-2/12 cursor-pointer"
      style={{
        backgroundColor: isActive ? '#e2e8f0' : 'white',
        border: isActive ? `1px ${FIRST_COLOR} solid` : '1px #E2E8F0 solid',
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
  photo: PropTypes.element.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
