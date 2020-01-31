import React from 'react';
import { useTranslation } from 'react-i18next';
import WhiteButton from '../../../common/components/WhiteButton';


const AccountSlider = () => {
  const { t } = useTranslation();

  return (
    <div
      className="slider text-white p-20 flex flex-col"
    >
      <div className="my-auto">
        <h1 className="text-5xl">{ t('home.accountSliderTitle') }</h1>
        <p className="text-xl">
          { t('home.accountSliderContent') }
        </p>
        <WhiteButton title={t('home.accountSliderButtonText')} />
        <WhiteButton title={t('home.accountSliderButtonText2')} />

      </div>

    </div>
  );
};


export default AccountSlider;
