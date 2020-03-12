import React from 'react';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import { useTranslation } from 'react-i18next';
import './index.css';
import 'rc-menu/assets/index.css';
import { Link } from 'react-router-dom';
import Countly from 'countly-sdk-web';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const { t } = useTranslation();

  const startWireTransferOperation = () => {
    Countly.start_event('WireTransferOperation');
    toast(<div>
      {' '}
      <strong>WireTransfer Operation</strong>
      {' '}
event start to calculate
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


  const startLoanApplicationOperation = () => {
    Countly.start_event('startLoanApplicationOperation');
    toast(<div>
      {' '}
      <strong>startLoanApplicationOperation</strong>
      {' '}
event start to calculate
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

  return (
    <div className="sidebar w-1/6 text-white">
      <Menu
        className="h-screen"
        defaultActiveFirst
      >
        <SubMenu title={<span>{t('internetbanking.transfers')}</span>} key="1">
          <Link onClick={() => startWireTransferOperation()} to="/internet-banking/transfers/wire-transfer">

            <MenuItem className="p-3 pl-6" key="1-1">
              {t('internetbanking.wireTransfer')}
            </MenuItem>
          </Link>

          <Link to="/internet-banking/transfers/eft"><MenuItem className="p-3 pl-6" key="1-2">{t('internetbanking.eft')}</MenuItem></Link>
          <Link to="/internet-banking/transfers/swift"><MenuItem className="p-3 pl-6" key="1-3">{t('internetbanking.swift')}</MenuItem></Link>
        </SubMenu>

        <SubMenu title={<span>{t('internetbanking.payments')}</span>} key="2">
          <SubMenu
            key="2-1"
            title={<span>Utilities</span>}
          >
            <Link to="/internet-banking/payments/utilities/electric"><MenuItem className="p-3 pl-6" key="2-1-1">Electric</MenuItem></Link>
            <Link to="/internet-banking/payments/utilities/gas"><MenuItem className="p-3 pl-6" key="2-1-2">Gas</MenuItem></Link>
            <Link to="/internet-banking/payments/utilities/water"><MenuItem className="p-3 pl-6" key="2-1-3">Water</MenuItem></Link>

          </SubMenu>


          <Link to="/internet-banking/payments/credit-card"><MenuItem className="p-3 pl-6" key="2-2">Credit Card</MenuItem></Link>
          <Link to="/internet-banking/payments/tax"><MenuItem className="p-3 pl-6" key="2-3">Tax</MenuItem></Link>
          <Link to="/internet-banking/payments/organization"><MenuItem className="p-3 pl-6" key="2-4">Organization</MenuItem></Link>
          <Link to="/internet-banking/payments/betting"><MenuItem className="p-3 pl-6" key="2-5">Betting</MenuItem></Link>


        </SubMenu>


        <Link to="/internet-banking/products"><MenuItem className="p-3 pl-6" key="3">{t('internetbanking.products')}</MenuItem></Link>

        <Link to="/internet-banking/investments"><MenuItem className="p-3 pl-6" key="4">{t('internetbanking.investments')}</MenuItem></Link>


        <SubMenu title={<span>{t('internetbanking.applications')}</span>} key="5">
          <Link to="/internet-banking/applications/credit-card">

            <MenuItem className="p-3 pl-6" key="5-1">
              {t('internetbanking.creditCard')}
            </MenuItem>
          </Link>

          <Link onClick={() => startLoanApplicationOperation()} to="/internet-banking/applications/loan">
            <MenuItem className="p-3 pl-6" key="5-2">{t('internetbanking.loan')}</MenuItem>
          </Link>
          <Link to="/internet-banking/applications/insurance">
            <MenuItem className="p-3 pl-6" key="5-3">{t('internetbanking.insurance')}</MenuItem>
          </Link>
        </SubMenu>


        <Link to="/internet-banking/settings"><MenuItem className="p-3 pl-6" key="6">{t('internetbanking.settings')}</MenuItem></Link>

      </Menu>


    </div>
  );
};


export default Sidebar;
