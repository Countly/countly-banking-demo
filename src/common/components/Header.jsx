import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GreenButton from './GreenButton';

const Header = () => {
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
            <li className="hidden md:inline-block mr-4 float-right">
              <Link to="/fees">{t('common.headerLinkText4')}</Link>
            </li>
          </ul>
        </nav>

        <div className="p-3 flex justify-between shadow items-center">
          <Link to="/countly-banking-demo">
            <img
              width="200"
              alt="countly logo"
              src="https://count.ly/images/logos/countly-logo.svg"
            />
          </Link>

          <Link to="/internet-banking/login">

            <GreenButton title={t('common.headerInternetBankingButtonText')} />

          </Link>


        </div>
      </div>
    </header>
  );
};


export default Header;
