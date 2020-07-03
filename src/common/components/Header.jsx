import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Countly from 'countly-sdk-web';
import { useSelector } from 'react-redux';
import banner from '../../banner.png';
import banner2 from '../../banner2.png';

const Header = () => {
  const [selectedBanner, setBanner] = useState({});
  const [internetBankingButtonBackgroundColor, setInternetBankingButtonBackgroundColor] = useState('#3F8D42');
  const [internetBankingButtonTextColor, setInternetBankingButtonTextColor] = useState('#FFFFFF');

  const { user } = useSelector((state) => ({
    user: state.userReducer.user,
  }));


  useEffect(() => {
    Countly.fetch_remote_config((err, remoteConfigs) => {
      if (!err) {
        setInternetBankingButtonBackgroundColor(remoteConfigs.internet_banking_button_background_color);
        setInternetBankingButtonTextColor(remoteConfigs.internet_banking_button_text_color);
        setBanner(remoteConfigs.banner);
      }
    });
  }, []);


  const internetBankingClicked = () => {
    Countly.start_event('LoginOperation');
    toast(<div>
      {' '}
      <strong>LoginOperation</strong>
      {' '}
event started to calculate
      {' '}
      <strong>duration</strong>
    </div>, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const { t } = useTranslation();

  return (
    <header>
      <div className="w-full">
        <nav className="p-1 shadow">
          <ul>
            <li className="inline-block mx-4">
              <Link to="/about">{t('common.headerLinkText1')}</Link>
            </li>
            <span className="text-gray-500 mx-2">|</span>
            <li className="inline-block mx-4">
              <Link to="/contact">{t('common.headerLinkText2')}</Link>
            </li>
            <span className="text-gray-500 mx-2">|</span>
            <li className="inline-block mx-4">
              <Link to="/atm">{t('common.headerLinkText3')}</Link>
            </li>
            <span className="text-gray-500 mx-4">|</span>

            <span className="text-countly-800 font-bold">
            $
              {' '}
              1.12274
            </span>
            <span className="text-gray-500 mx-4">|</span>

            <span className="text-red-800 font-bold m-auto">
            ₺
              {' '}
              7.03376
            </span>

            <li className="hidden md:inline-block mr-4 float-right">
              <Link to="/fees">{t('common.headerLinkText4')}</Link>
            </li>
          </ul>
        </nav>

        <div className="p-3 flex justify-between shadow items-center">
          <Link to="/">
            <img
              width="200"
              alt="countly logo"
              src="https://count.ly/images/logos/countly-logo.svg"
            />
          </Link>
          <div>
            <Link onClick={() => internetBankingClicked()} to="/internet-banking/login">
              <button
                className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2 shadow"
                style={{ backgroundColor: internetBankingButtonBackgroundColor, color: internetBankingButtonTextColor }}
                type="button"
              >
                {t('common.headerInternetBankingButtonText')}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img src={selectedBanner === 1 ? banner : banner2} className="img-fluid" alt="" />
    </header>
  );
};


export default Header;
