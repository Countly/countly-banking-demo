/* eslint-disable camelcase */
import React from 'react';
import Countly from 'countly-sdk-web';
import './index.css';

const IframeComponent = () => {
  const id = Countly.get_device_id();
  const id_type = Countly.get_device_id_type();
  const url = `https://test-deniz.count.ly?device_id=${id}&device_id_type=${id_type}`;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <iframe
        src={url}
        title="Dynamic Iframe"
        className="hidden-iframe"
        style={{ style: 'none' }}
      />
    </div>
  );
};

export default IframeComponent;
