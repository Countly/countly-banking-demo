import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WhiteButton from '../../../common/components/WhiteButton';
import TextInput from '../../../common/components/TextInput';

const CustomerSlider = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  return (
    <div
      className="slider text-white px-10 flex flex-col"
    >
      <div className="my-auto">
        <h1 className="text-5xl">{t('home.customerSliderTitle')}</h1>
        <p>
          {t('home.customerSliderContent')}
        </p>
        <TextInput
          type="email"
          placeholder="jane@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <WhiteButton onClick={() => {}} title={t('home.customerSliderButtonText')} />
      </div>

    </div>

  );
};


export default CustomerSlider;
