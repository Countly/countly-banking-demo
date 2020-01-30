import React, { useState } from 'react';
import WhiteButton from '../../../common/components/WhiteButton';
import TextInput from '../../../common/components/TextInput';

const LoanSlider = () => {

  const [loanAmount, setLoanAmount] = useState(5000);
  const [term, setTerm] = useState(12);

  return (
      <div
        className="slider text-white p-10 flex flex-col md:flex-row"
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
                onChange={(e) => setLoanAmount(e.target.value)}
                type="range"
              />
              <TextInput
                type="number"
                value={loanAmount}
                min="5000"
                className="w-full"
                max="100000"
                placeholder="Loan Amount"
                name="loanAmount"
                onChange={(e) => setLoanAmount(e.target.value)}
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
                onChange={(e) => setTerm(e.target.value)}
                type="range"
              />
              <TextInput 
              type="number"
              className="w-full"
                value={term}
                name="term"
                placeholder="Term ( Month )"
                onChange={(e) => setTerm(e.target.value)}
                />
           
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/6 my-auto flex flex-col  text-center">
          <span className="text-xl">
            Monthly Installment Amount
          </span>
          <span className="text-5xl font-bold">
            { parseInt(loanAmount / term, 10) }
        €
            {' '}
            <span className="text-3xl">/ </span>
            <span className="text-lg">per month</span>
          </span>
            <WhiteButton className="w-1/2 m-auto" title="Apply Now" />
        </div>
      </div>
    );
  }

export default LoanSlider;
