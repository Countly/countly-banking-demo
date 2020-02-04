import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WhiteButton from '../../../common/components/WhiteButton';
import TextInput from '../../../common/components/TextInput';

const LoanSlider = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [term, setTerm] = useState(12);
  const { t } = useTranslation();

  return (
    <div
      className="slider text-white p-10 flex flex-col md:flex-row"
    >
      <div className="w-full md:w-4/6 my-auto">
        <h1 className="text-5xl">{t('home.loanSliderTitle')}</h1>
        <p className="text-xl">
          {t('home.loanSliderContent')}
        </p>

        <div className="flex flex-row mt-3">
          <div className="w-1/2 flex flex-col mr-4">
            <strong>
              {t('home.loanSliderLabel')}
              {' '}
            </strong>
            <input
              min="5000"
              max="100000"
              step="100"
              className="mt-3"
              value={loanAmount}
              name={t('home.loanSliderLabel')}
              onChange={(e) => setLoanAmount(e.target.value)}
              type="range"
            />
            <TextInput
              type="number"
              value={loanAmount}
              min="5000"
              className="w-full"
              max="100000"
              placeholder={t('home.loanSliderLabel2')}
              name="loan amount"
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <strong>{t('home.loanSliderLabel2')}</strong>
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
          {t('home.loanSliderContent2')}
        </span>
        <span className="text-5xl font-bold">
          { parseInt(loanAmount / term, 10) }
        €
          {' '}
          <span className="text-3xl">/ </span>
          <span className="text-lg">{t('home.loanSliderPerMonth')}</span>
        </span>
        <WhiteButton className="w-1/2 m-auto" title={t('home.loanSliderButtonText')} />
      </div>
    </div>
  );
};

export default LoanSlider;
