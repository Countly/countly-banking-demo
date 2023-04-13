import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Countly from 'countly-sdk-web';
import { useSelector, useDispatch } from 'react-redux';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import GreenButton from './GreenButton';
import { setUser } from '../../actions/userActions';


const Header = () => {
  const [selectedBanner, setBanner] = useState('Your Bank');
  const [primaryColor, setPrimaryColor] = useState('#18A050');
  const [gradientColor, setGradientColor] = useState('#11813F');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({
    user: state.userReducer.user,
  }));

  const logout = () => {
    dispatch(setUser(null));
  };

  useEffect(() => {
    const remoteConfigs = Countly.get_remote_config();
    if (remoteConfigs.home_theme) {
      setPrimaryColor(remoteConfigs.home_theme.primary);
      setGradientColor(remoteConfigs.home_theme.gradient);
      setTextColor(remoteConfigs.home_theme.text);
    }
    if (remoteConfigs.home_banner) { setBanner(remoteConfigs.home_banner); }
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
              <Link to="/about">{t('About Countly Bank')}</Link>
            </li>
            <span className="text-gray-500 mx-2">|</span>
            <li className="inline-block mx-4">
              <Link to="/contact">Contact US</Link>
            </li>
            <span className="text-gray-500 mx-2">|</span>
            <li className="inline-block mx-4">
              <Link to="/atm">ATM & Branches</Link>
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
              <Link to="/fees">{t('Product and Service Fees')}</Link>
            </li>
          </ul>
        </nav>

        <div className="p-3 flex justify-between shadow items-center">
          <Link to="/countly-banking-demo/">
            <img
              width="200"
              alt="countly logo"
              src="https://uploads-ssl.webflow.com/61c1b7c3e2f3805325be4594/63cc3bf3763a9e448d44ed83_Logo%20-%20Light%20background.svg"
            />
          </Link>
          <div>
            { user
              ? (
                <div>
                  <Menu mode="horizontal" selectable="false">
                    <SubMenu title={`${user.name}`}>
                      <MenuItem style={{ padding: '10px' }}>
Customer ID :
                        { user.customerID}
                        {' '}
                        <hr />
                        Gender :
                        { user.gender}
                        {' '}
                        <hr />

hasActiveMobileBanking :
                        { user.hasActiveMobileBanking ? 'true' : 'false'}
                        {' '}
                        <hr />

hasCreditCard :
                        { user.hasCreditCard ? 'true' : 'false'}
                        {' '}
                        <hr />

hasInvestment :
                        { user.hasInvestment ? 'true' : 'false'}
                        {' '}
                        <hr />

hasLoan :
                        { user.hasLoan ? 'true' : 'false'}
                        <hr />
                        <Link onClick={() => logout()} to="/">
                          <GreenButton
                            onClick={() => {}}
                            className="font-bold rounded focus:outline-none focus:shadow-outline shadow m-2 mx-auto w-full"
                            title="Logout"
                          />
                        </Link>
                      </MenuItem>
                    </SubMenu>
                  </Menu>
                </div>
              )
              : (
                <Link onClick={() => internetBankingClicked()} to="/internet-banking/login">
                  <button
                    className="green-button"
                    style={{ backgroundColor: primaryColor, color: textColor }}
                    type="button"
                  >
                    Internet Banking
                  </button>
                </Link>
              )}

          </div>
        </div>
      </div>
      <div
        className="banner"
        style={{
          background: `linear-gradient(90deg, ${gradientColor}, ${primaryColor},  ${gradientColor})`,
        }}
      >
        <div className="banner-content">
          <h1>{selectedBanner}</h1>
          <p>Banking made easy</p>
        </div>
      </div>

      {/* <img src={selectedBanner === 1 ? banner : banner2} className="img-fluid" alt="" /> */}
    </header>
  );
};


export default Header;
