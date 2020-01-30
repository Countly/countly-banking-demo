import React from 'react';
import countlyOverview from '../images/countly-overview.png';
import { useTranslation } from 'react-i18next';

const CountlySlider = () => { 
  const { t } = useTranslation();
  
  return(
  <div
    className="slider text-white px-10 flex flex-col md:flex-row"
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
) } ;


export default CountlySlider;
