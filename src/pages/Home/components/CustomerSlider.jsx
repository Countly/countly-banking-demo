import React, { useState } from 'react';
import WhiteButton from '../../../common/components/WhiteButton';
import TextInput from '../../../common/components/TextInput';

const CustomerSlider = () => {
  const [email, setEmail] = useState('');
  return (
    <div
      className="slider text-white px-10 flex flex-col"
    >
      <div className="my-auto">
        <h1 className="text-5xl">Be a Customer in Countly Bank</h1>
        <p>
            To become a Countly Bank customer, all you have to do is fill out
            the form below! Apply now, quickly and easily, without the need to
            go to the branch.
        </p>
        <TextInput
          type="email"
          placeholder="jane@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <WhiteButton title="Send" />
      </div>

    </div>

  );
};


export default CustomerSlider;
