import React from 'react';
import { useTranslation } from 'react-i18next';

const SavingSlider = () => {
  const { t } = useTranslation();

  return (
    <div
      className="slider text-white p-20 flex flex-col"
    >
      <div className="my-auto">
        <h1 className="text-4xl">{t('home.savingSliderTitle')}</h1>
        <div className="flex flex-row p-3">
          <div className="max-w-sm rounded bg-white  overflow-hidden shadow-lg mr-2">
            <div className="px-6 py-4">
              <div className="font-bold text-gray-800 text-xl mb-2">
                {t('home.savingSliderCardTitle')}
              </div>
              <p className="text-gray-700 text-base">
                {t('home.savingSliderCardContent')}
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded bg-white  overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-800 mb-2">
                {t('home.savingSliderCardTitle2')}
              </div>
              <p className="text-gray-700 text-base">
                {t('home.savingSliderCardContent')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SavingSlider;
