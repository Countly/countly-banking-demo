import React from 'react';
import countlyOverview from '../images/countly-overview.png';

const CountlySlider = () => (
  <div
    className="slider text-white px-10 flex flex-col md:flex-row"
  >
    <div className="w-full md:w-4/6 my-auto">
      <h1 className="text-5xl">
          We Renewed Our Personal Mobile and Internet Banking Channels!
      </h1>
      <p className="text-2xl">
          With our renewed channels, you can now perform your banking
          transactions anytime and anywhere, more quickly and easily.
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


export default CountlySlider;
