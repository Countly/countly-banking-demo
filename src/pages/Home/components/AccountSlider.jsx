import React from 'react';
import PropTypes from 'prop-types';
import { SECOND_COLOR, THIRD_COLOR } from '../../../constants';

const AccountSlider = ({ isActive }) => (
  <div
    className="text-white p-20 flex flex-row"
    style={{
      background: `linear-gradient(to right,${THIRD_COLOR},${SECOND_COLOR})`,
      height: '460px',
      display: isActive ? 'block' : 'none',
    }}
  >
    <div className="my-auto">
      <h1 className="text-5xl">High Interest Rates In Countly Bank</h1>
      <p className="text-xl">
        11.50% in TL, 2.25% in USD, 0.60% in EUR and 0.75% in Gold Opportunity
        to Evaluate Your Money with Interest is in Countly Account!
      </p>
    </div>
    <div className="flex flex-row mt-3">
      <button
        type="button"
        className="bg-white hover:bg-gray-300 text-countly-800 font-bold py-2 px-4 rounded mr-2"
      >
        Take Information
      </button>
      <button
        type="button"
        className="bg-white hover:bg-gray-300 text-countly-800 font-bold py-2 px-4 rounded ml-2"
      >
        Apply Now
      </button>
    </div>
  </div>
);

AccountSlider.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default AccountSlider;
