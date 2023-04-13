import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Countly from 'countly-sdk-web';

const Card = (props) => {
  const {
    isActive, title, photo, onClick,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchRemoteConfig = async () => {
      await Countly.init(); // make sure Countly is initialized, add your configuration here
      const remoteConfig = Countly.get_remote_config();
      let isEnabled = false;
      if (remoteConfig && remoteConfig.home_cards && remoteConfig.home_cards.length > 0) {
        if (remoteConfig.home_cards.indexOf(title) > -1) {
          isEnabled = true;
        }
      } else {
        isEnabled = true;
      }
      setIsVisible(isEnabled);
    };

    fetchRemoteConfig();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="card"
      style={{
        backgroundColor: isActive ? '#e2e8f0' : 'white',
        border: isActive ? '1px #13b94d solid' : '1px #E2E8F0 solid',
      }}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <img width="60" className="mx-auto mb-1" alt={title} src={photo} />
      <span className="mt-2 text-lg">{title}</span>
    </div>
  );
};


Card.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
