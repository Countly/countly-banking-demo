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
        <h1 className="text-5xl">{ t('home.accountSliderTitle') }</h1>
        <p className="text-xl">
          { t('home.accountSliderContent') }
        </p>
        <WhiteButton onClick={() => { crash(); }} title={t('home.accountSliderButtonText')} />
        <WhiteButton onClick={() => { crash(); }} title={t('home.accountSliderButtonText2')} />

      </div>

    </div>
  );
};


export default AccountSlider;
