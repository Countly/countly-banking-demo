import React from 'react';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import { useTranslation } from 'react-i18next';
import './index.css';
import 'rc-menu/assets/index.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="sidebar w-1/6 text-white">
      <Menu
        className="h-screen"
        defaultActiveFirst
      >
        <SubMenu title={<span>{t('internetbanking.transfers')}</span>} key="1">

          <MenuItem className="p-3" key="1-1">
            <Link to="/internet-banking/transfers/wire-transfer">
              {t('internetbanking.wireTransfer')}
            </Link>
          </MenuItem>

          <MenuItem key="1-2"><Link to="/internet-banking/transfers/eft">{t('internetbanking.eft')}</Link></MenuItem>
          <MenuItem key="1-3"><Link to="/internet-banking/transfers/swift">{t('internetbanking.swift')}</Link></MenuItem>
        </SubMenu>

        <SubMenu title={<span>{t('internetbanking.payments')}</span>} key="2">
          <SubMenu
            key="2-1"
            title={<span>Utilities</span>}
          >
            <MenuItem key="2-1-1"><Link to="/internet-banking/payments/utilities/electric">Electric</Link></MenuItem>
            <MenuItem key="2-1-2"><Link to="/internet-banking/payments/utilities/gas">Gas</Link></MenuItem>
            <MenuItem key="2-1-3"><Link to="/internet-banking/payments/utilities/water">Water</Link></MenuItem>

          </SubMenu>


          <MenuItem key="2-2"><Link to="/internet-banking/payments/credit-card">Credit Card</Link></MenuItem>
          <MenuItem key="2-3"><Link to="/internet-banking/payments/tax">Tax</Link></MenuItem>
          <MenuItem key="2-4"><Link to="/internet-banking/payments/organization">Organization</Link></MenuItem>
          <MenuItem key="2-5"><Link to="/internet-banking/payments/betting">Betting</Link></MenuItem>


        </SubMenu>


        <MenuItem key="3"><Link to="/internet-banking/products">{t('internetbanking.products')}</Link></MenuItem>

        <MenuItem key="4"><Link to="/internet-banking/investments">{t('internetbanking.investments')}</Link></MenuItem>


        <SubMenu title={<span>{t('internetbanking.applications')}</span>} key="5">
          <MenuItem key="5-1">
            <Link to="/internet-banking/applications/credit-card">
              {t('internetbanking.creditCard')}
            </Link>
          </MenuItem>
          <MenuItem key="5-2"><Link to="/internet-banking/applications/loan">{t('internetbanking.loan')}</Link></MenuItem>
          <MenuItem key="5-3"><Link to="/internet-banking/applications/insurance">{t('internetbanking.insurance')}</Link></MenuItem>
        </SubMenu>


        <MenuItem key="6"><Link to="/internet-banking/settings">{t('internetbanking.settings')}</Link></MenuItem>

      </Menu>


    </div>
  );
};


export default Sidebar;
