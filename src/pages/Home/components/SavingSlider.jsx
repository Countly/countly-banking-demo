import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';

const SavingSlider = () => {
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
      <div className="my-auto">
        <h1 className="text-4xl">{t('Making Savings Has Never Been This Easy!')}</h1>
        <div className="flex flex-row p-3">
          <div className="max-w-sm rounded bg-white  overflow-hidden shadow-lg mr-2">
            <div className="px-6 py-4">
              <div className="font-bold text-gray-800 text-xl mb-2">
                {t('Private Pension System')}
              </div>
              <p className="text-gray-700 text-base">
                {t('Start saving immediately with deposit rates specific to you.')}
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded bg-white  overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-800 mb-2">
                {t('Private Pension System2')}
              </div>
              <p className="text-gray-700 text-base">
                {t('Start saving immediately with deposit rates specific to you.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SavingSlider;
