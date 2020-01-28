import React from 'react';
import PropTypes from 'prop-types';
import { SECOND_COLOR, THIRD_COLOR } from '../../../constants';

const SavingSlider = ({ isActive }) => (
  <div
    className="text-white p-20 flex flex-col"
    style={{
      background: `linear-gradient(to right,${THIRD_COLOR},${SECOND_COLOR})`,
      minHeight: '460px',
      display: isActive ? 'flex' : 'none',
    }}
  >
    <div className="my-auto">
      <h1 className="text-4xl">Making Savings Has Never Been This Easy!</h1>
      <div className="flex flex-row p-3">
        <div className="max-w-sm rounded bg-white  overflow-hidden shadow-lg mr-2">
          <div className="px-6 py-4">
            <div className="font-bold text-gray-800 text-xl mb-2">
              Deposit Account
            </div>
            <p className="text-gray-700 text-base">
              Start saving immediately with deposit rates specific to you.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded bg-white  overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-gray-800 mb-2">
              Private Pension System
            </div>
            <p className="text-gray-700 text-base">
              Start saving now for your future dreams.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SavingSlider.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default SavingSlider;
