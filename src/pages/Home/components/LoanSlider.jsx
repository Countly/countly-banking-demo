import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import { toast } from 'react-toastify';
import WhiteButton from '../../../common/components/WhiteButton';
import TextInput from '../../../common/components/TextInput';

const LoanSlider = () => {
  const [loanAmount, setLoanAmount] = useState('5000');
  const [term, setTerm] = useState('12');
  const [monthlyAmount, setMonthlyAmount] = useState('416');
  const { t } = useTranslation();


  const calculateDate = () => {
    Number.prototype.padding = function (base, chr) {
      const len = (String(base || 10).length
                  - String(this).length) + 1;

      return len > 0 ? new Array(len).join(chr || '0')
              + this : this;
    };

    const d = new Date();

    const str = `${[(d.getMonth() + 1).padding(),
      d.getDate().padding(),
      d.getFullYear()].join('/')
    } ${[d.getHours().padding(),
      d.getMinutes().padding(),
      d.getSeconds().padding()].join(':')}`;
    return str;
  };

  const calculateButtonClicked = () => {
    calculateDate();
    setMonthlyAmount(parseInt(loanAmount / term, 10));
    Countly.add_event({
      key: 'loanCalculate',
      segmentation: { loanAmount, term },
    });
    Countly.q.push(['userData.push', 'loanCalculate', `Loan : ${loanAmount}  Term : ${term}  Date : ${calculateDate()}`]);
    Countly.q.push(['userData.save']); // send userData to server
    toast(<div>
      <strong>loanCalculate</strong>
      {' '}
event sent with
      {' '}
      <strong>
        {loanAmount}
        {' '}
      </strong>
,
      {' '}
      <strong>
        {term}
        {' '}
      </strong>
segmentation
    </div>, {
      position: 'top-right',
      autoClose: 50000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  return (
    <div
      className="slider text-white p-10 flex flex-col md:flex-row"
    >
      <div className="w-full md:w-4/6 my-auto">
        <h1 className="text-5xl">{t('Advantageous loans for all your needs')}</h1>
        <p className="text-xl">
          {t('With advantageous interest rates and payment terms in your cash needs, it is in your most suitable loan account!')}
        </p>

        <div className="flex flex-row mt-3">
          <div className="w-1/2 flex flex-col mr-4">
            <strong>
              {t('Loan Amount (€)')}
              {' '}
            </strong>
            <input
              min="5000"
              max="100000"
              step="100"
              className="mt-3"
              value={loanAmount}
              name={t('Loan Amount (€)')}
              onChange={(e) => setLoanAmount(e.target.value)}
              type="range"
            />
            <TextInput
              type="number"
              value={loanAmount}
              min="5000"
              className="w-full"
              max="100000"
              placeholder={t('Loan Amount (€)2')}
              name="loan amount"
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <strong>{t('Loan Amount (€)2')}</strong>
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
          {t('With advantageous interest rates and payment terms in your cash needs, it is in your most suitable loan account!2')}
        </span>
        <span className="text-5xl font-bold">
          { monthlyAmount }
        €
          {' '}
          <span className="text-3xl">/ </span>
          <span className="text-lg">{t('per month')}</span>
        </span>
        <WhiteButton onClick={() => calculateButtonClicked()} className="w-1/2 m-auto mb-3" title="Calculate" />

        <WhiteButton onClick={() => {}} className="w-1/2 m-auto" title={t('Apply Now')} />
      </div>
    </div>
  );
};

export default LoanSlider;
