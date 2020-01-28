import React from 'react';
import PropTypes from 'prop-types';
import countlyOverview from '../images/countly-overview.png';
import { SECOND_COLOR, THIRD_COLOR } from '../../../constants';

const CountlySlider = ({ isActive }) => (
  <div
    className="text-white p-20 flex flex-row"
    style={{
      background: `linear-gradient(to right,${THIRD_COLOR},${SECOND_COLOR})`,
      height: '460px',
      display: isActive ? 'flex' : 'none',
    }}
  >
    <div className="w-4/6 my-auto">
      <h1 className="text-5xl">
          We Renewed Our Personal Mobile and Internet Banking Channels!
      </h1>
      <p className="text-2xl">
          With our renewed channels, you can now perform your banking
          transactions anytime and anywhere, more quickly and easily.
      </p>
    </div>
    <img
      className="absolute"
      style={{ right: '12px', top: '400px' }}
      width="459"
      alt="countly"
      height="406"
      src={countlyOverview}
    />
  </div>
);

CountlySlider.propTypes = {
  isActive: PropTypes.bool.isRequired,
};


export default CountlySlider;
