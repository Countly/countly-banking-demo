import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GreenButton from './GreenButton';
import { withTranslation } from 'react-i18next';

class Header extends React.Component {
  render() {
    const { pageLocation } = this.props.dataReducer;
    const { t } = this.props;

    return (
      <header>
        <div className="w-full">
          <nav className="p-1 shadow">
            <ul>
              <li className="inline-block mx-4">
                <Link to="/">{t("common.headerLinkText1")}</Link>
              </li>
              <span className="text-gray-500 mx-2">|</span>
              <li className="inline-block mx-4">
                <Link to="/">{t("common.headerLinkText2")}</Link>
              </li>
              <span className="text-gray-500 mx-2">|</span>
              <li className="inline-block mx-4">
                <Link to="/">{t("common.headerLinkText3")}</Link>
              </li>
              <li className="hidden md:inline-block mr-4 float-right">
                <Link to="/">{t("common.headerLinkText4")}</Link>
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
            { pageLocation === 'internet-banking'
              ? (
                <Link to="/countly-banking-demo">
                  <GreenButton title={ t('common.headerHomeButtonText') } />

                </Link>
              )
              : (
                <Link to="/internet-banking/login">

              <GreenButton title={ t('common.headerInternetBankingButtonText') } />

                </Link>
              )}


          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Header));
