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
