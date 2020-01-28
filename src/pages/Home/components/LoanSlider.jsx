import React from 'react';
import PropTypes from 'prop-types';
import { SECOND_COLOR, THIRD_COLOR } from '../../../constants';

class LoanSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: 5000,
      term: 12,
      monthlyInstallmentAmount: 416,
    };
  }

  inputOnChange(e) {
    const { state } = this;
    state[e.target.name] = e.target.value;
    state.monthlyInstallmentAmount = parseInt(
      state.loanAmount / state.term,
      10,
    );
    this.setState(state);
  }

  render() {
    const { isActive } = this.props;
    const { loanAmount, term, monthlyInstallmentAmount } = this.state;
    return (
      <div
        className="text-white p-10 flex flex-col md:flex-row"
        style={{
          background: `linear-gradient(to right,${THIRD_COLOR},${SECOND_COLOR})`,
          minHeight: '460px',
          display: isActive ? 'flex' : 'none',
        }}
      >
        <div className="w-full md:w-4/6 my-auto">
          <h1 className="text-5xl">Advantageous Loans for All Your Needs</h1>
          <p className="text-xl">
            With advantageous interest rates and payment terms in your cash
            needs, it is in your most suitable loan account!
          </p>

          <div className="flex flex-row mt-3">
            <div className="w-1/2 flex flex-col mr-4">
              <strong>Loan Amount (€) </strong>
              <input
                min="5000"
                max="100000"
                step="100"
                className="mt-3"
                value={loanAmount}
                name="loanAmount"
                onChange={(e) => this.inputOnChange(e)}
                type="range"
              />
              <input
                className="text-gray-800 bg-white mt-3 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
                type="number"
                value={loanAmount}
                placeholder="Loan Amount"
                name="loanAmount"
                onChange={(e) => this.inputOnChange(e)}
              />
            </div>
            <div className="w-1/2 flex flex-col">
              <strong>Term ( Month )</strong>
              <input
                min="1"
                max="36"
                className="mt-3"
                value={term}
                name="term"
                onChange={(e) => this.inputOnChange(e)}
                type="range"
              />
              <input
                className="text-gray-800 bg-white mt-3 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
                type="number"
                value={term}
                name="term"
                min="1"
                placeholder="Term ( Month )"
                onChange={(e) => this.inputOnChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/6 my-auto flex flex-col">
          <span className="text-xl text-center">
            Monthly Installment Amount
          </span>
          <span className="text-5xl font-bold text-center">
            { monthlyInstallmentAmount }
        €
            {' '}
            <span className="text-3xl">/ </span>
            <span className="text-lg">per month</span>
          </span>

          <button
            type="button"
            className="bg-white hover:bg-gray-300 text-countly-800 w-1/2 font-bold py-2 px-4 rounded mt-2 mx-auto"
          >
            Apply Now
          </button>
        </div>
      </div>
    );
  }
}

LoanSlider.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default LoanSlider;
