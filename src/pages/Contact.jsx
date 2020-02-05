import React from 'react';
import TextInput from '../common/components/TextInput';
import GreenButton from '../common/components/GreenButton';


const Contact = () => {

  return (
    <div className="w-1/2 m-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <TextInput id="name" className="w-full" type="text" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tel">
            Telephone Number
          </label>
          <TextInput id="tel" type="text" className="w-full" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iban">
        Message
          </label>
          <textarea id="text" className="w-full bg-white text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-2/5 appearance-none leading-normal mt-2" />
        </div>

        <div className="flex items-center justify-between">
          <GreenButton title="Send" />

        </div>
      </form>
    </div>
  );
};


export default Contact;
