import React from 'react';
import { useTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import WhiteButton from '../../../common/components/WhiteButton';


const AccountSlider = () => {
  const { t } = useTranslation();
  const crash = () => {
    try {
      this.bind();
    } catch (err) {
      Countly.log_error(err);
    }
  };
  return (
    <div
      className="slider text-white p-20 flex flex-col"
    >
      <div className="my-auto">
        <h1 className="text-5xl">{ t('High Interest Rates In Countly Bank') }</h1>
        <p className="text-xl">
          { t('11.50% in TL, 2.25% in USD, 0.60% in EUR and 0.75% in Gold Opportunity to Evaluate Your Money with Interest is in Countly Account!') }
        </p>
        <WhiteButton onClick={() => { crash(); }} title={t('More Info')} />
        <WhiteButton onClick={() => { crash(); }} title={t('More Info2')} />

      </div>

    </div>
  );
};


export default AccountSlider;
