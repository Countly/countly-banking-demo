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
            <Link to="/internet-banking/wire-transfer">
              {t('internetbanking.wireTransfer')}
            </Link>
          </MenuItem>

          <MenuItem key="1-2">{t('internetbanking.eft')}</MenuItem>
          <MenuItem key="1-3">{t('internetbanking.swift')}</MenuItem>
        </SubMenu>

        <SubMenu title={<span>{t('internetbanking.payments')}</span>} key="2">
          <SubMenu
            key="2-1"
            title={<span>Utilities</span>}
          >
            <MenuItem key="2-1-1">Electric</MenuItem>
            <MenuItem key="2-1-2">Gas</MenuItem>
            <MenuItem key="2-1-3">Water</MenuItem>

          </SubMenu>


          <MenuItem key="2-2">Credit Card</MenuItem>
          <MenuItem key="2-3">Tax</MenuItem>
          <MenuItem key="2-4">Organization</MenuItem>
          <MenuItem key="2-5">Betting</MenuItem>


        </SubMenu>


        <MenuItem key="3">{t('internetbanking.products')}</MenuItem>

        <MenuItem key="4">{t('internetbanking.investments')}</MenuItem>


        <SubMenu title={<span>{t('internetbanking.applications')}</span>} key="5">
          <MenuItem key="5-1">
            {t('internetbanking.creditCard')}
          </MenuItem>
          <MenuItem key="5-2"><Link to="/internet-banking/loan">{t('internetbanking.loan')}</Link></MenuItem>
          <MenuItem key="5-3">{t('internetbanking.insurance')}</MenuItem>
        </SubMenu>


        <MenuItem key="6">{t('internetbanking.settings')}</MenuItem>

      </Menu>


    </div>
  );
};


export default Sidebar;
