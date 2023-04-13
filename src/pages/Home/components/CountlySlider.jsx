import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import countlyOverview from '../images/countly-overview.png';

const CountlySlider = () => {
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

  return (
    <div
      className="section"
      style={{
        background: `linear-gradient(to left, ${primaryColor}, ${gradientColor})`,
      }}
    >
      <div className="w-full md:w-4/6 my-auto">
        <h1 className="text-5xl">
          {t('home.countlySliderTitle')}
        </h1>
        <p className="text-2xl">
          {t('home.countlySliderContent')}
        </p>
      </div>
      <div className="mx-auto my-auto p-4">
        <img
          className="rounded-lg"
          alt="countly"
          width="400"
          src={countlyOverview}
        />
      </div>

    </div>
  );
};


export default CountlySlider;
