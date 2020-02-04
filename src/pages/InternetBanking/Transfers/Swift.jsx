import React from 'react';
import { withTranslation } from 'react-i18next';
import GreenButton from '../../../common/components/GreenButton';

const Swift = () => {
  document.title = 'Swift';

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">

      <GreenButton title="Send Swift Event" />
    </div>
  );
};


export default withTranslation()(Swift);
