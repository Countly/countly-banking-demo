import React from 'react';
import WhiteButton from '../../../common/components/WhiteButton';



const AccountSlider = () => (
  <div
    className="slider text-white p-20 flex flex-col"
  >
    <div className="my-auto">
      <h1 className="text-5xl">High Interest Rates In Countly Bank</h1>
      <p className="text-xl">
        11.50% in TL, 2.25% in USD, 0.60% in EUR and 0.75% in Gold Opportunity
        to Evaluate Your Money with Interest is in Countly Account!
      </p>
      <WhiteButton title="More Info" />
      <WhiteButton title="Apply Now" />

    </div>

  </div>
);


export default AccountSlider;
