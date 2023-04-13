import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import WhiteButton from '../../../common/components/WhiteButton';


const AccountSlider = () => {
  const { t } = useTranslation();

  const [primaryColor, setPrimaryColor] = useState('#18A050');
  const [gradientColor, setGradientColor] = useState('#11813F');
  useEffect(() => {
    const remoteConfigs = Countly.get_remote_config();
    if (remoteConfigs.home_theme) {
      setPrimaryColor(remoteConfigs.home_theme.primary);
      setGradientColor(remoteConfigs.home_theme.gradient);
    }
  }, []);
  const crash = () => {
    try {
      this.bind();
    } catch (err) {
      Countly.log_error(err);
    }
  };
  return (
    <div
      className="section"
      style={{
        background: `linear-gradient(to right, ${primaryColor}, ${gradientColor})`,
      }}
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
