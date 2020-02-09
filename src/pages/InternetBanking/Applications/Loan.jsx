import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Steps from 'rc-steps';
import 'rc-steps/assets/index.css';
import Countly from 'countly-sdk-web';
import { toast } from 'react-toastify';
import GreenButton from '../../../common/components/GreenButton';
import TextInput from '../../../common/components/TextInput';

const Loan = () => {
  const [current, setCurrent] = useState(0);

  document.title = 'Loan';

  const { Step } = Steps;


  const apply = () => {
    setCurrent(3);
    Countly.add_event({
      key: 'Application',
      segmentation: { type: 'Loan' },
    });
    toast(<div>
      {' '}
      <strong> Application</strong>
      {' '}
event sent with
      {' '}
      <strong>Loan</strong>
      {' '}
segmentation
    </div>, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    Countly.end_event('LoanApplicationOperation');
    toast(<div>
      {' '}
      <strong>LoanApplicationOperation</strong>
      {' '}
event ended to calculate
      {' '}
      <strong>duration</strong>
          </div>, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  const firstStep = () => (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
      <div className="mb-4">
        <label htmlFor="customerId" className="block text-gray-700 text-sm font-bold mb-2">
        Loan Amount
        </label>
        <TextInput id="customerId" className="w-full" type="text" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
    Term
        </label>
        <TextInput id="iban" type="text" className="w-full" />
      </div>
      <div className="flex items-center justify-between">
        <GreenButton onClick={() => setCurrent(1)} title="next" />

      </div>
    </form>
  );

  const secondStep = () => (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
      <div className="mb-4">
        <label htmlFor="customerId" className="block text-gray-700 text-sm font-bold mb-2">
      Name
        </label>
        <TextInput id="customerId" className="w-full" type="text" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
        Education
        </label>
        <TextInput id="iban" type="text" className="w-full" />
      </div>
      <div className="flex items-center justify-between">
        <GreenButton onClick={() => setCurrent(2)} title="next" />

      </div>
    </form>
  );


  const thirdStep = () => (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
      <div className="relative">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
          Loan Type
        </label>
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-6 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Type X</option>
          <option>Type Y</option>
          <option>Type Z</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <GreenButton onClick={() => apply()} title="next" />
      </div>
    </form>
  );


  const lastStep = () => (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300 flex flex-col">

      Your application sent.

    </div>
  );

  return (
    <div className="w-full">

      <Steps progressDot className="border border-gray-300" type="navigation" current={current} onChange={() => setCurrent(current)}>
        <Step title="Loan" />
        <Step title="Information" />
        <Step title="Type" />
        <Step title="Completed" />
      </Steps>
      <div className="p-10 border border-gray-300">
        {current === 0 && firstStep()}
        {current === 1 && secondStep()}
        {current === 2 && thirdStep()}
        {current === 3 && lastStep()}

      </div>

    </div>
  );
};


export default withTranslation()(Loan);
