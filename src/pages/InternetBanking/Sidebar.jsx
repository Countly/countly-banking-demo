import React from 'react';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import { useTranslation } from 'react-i18next';
import './index.css';
import 'rc-menu/assets/index.css';
import { useHistory } from 'react-router-dom';
import Countly from 'countly-sdk-web';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const { t } = useTranslation();
  const history = useHistory();


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


  function handleClick(e) {
    const selectedURL = e.item.props.to;
    if (selectedURL === '/internet-banking/applications/loan') {
      startLoanApplicationOperation();
    } else if (selectedURL === '/internet-banking/transfers/wire-transfer') {
      startWireTransferOperation();
    }
    history.push(e.item.props.to);
  }


  return (
    <div className="sidebar w-1/6 text-white">
      <Menu
        className="h-screen"
        onClick={handleClick}
      >
        <SubMenu title={<span>{t('Money Transfer')}</span>} key="1">
          <MenuItem className="p-3 pl-6" to="/internet-banking/transfers/wire-transfer" key="1-1">
            {t('To Countly Bank')}
          </MenuItem>
          <MenuItem className="p-3 pl-6" to="/internet-banking/transfers/eft" key="1-2">{t('To Another Bank')}</MenuItem>
          <MenuItem className="p-3 pl-6" to="/internet-banking/transfers/swift" key="1-3">{t('SWIFT')}</MenuItem>
        </SubMenu>

        <SubMenu title={<span>{t('Payments')}</span>} key="2">
          <SubMenu
            key="2-1"
            title={<span>Utilities</span>}
          >
            <MenuItem className="p-3 pl-6" to="/internet-banking/payments/utilities/electric" key="2-1-1">Electric</MenuItem>
            <MenuItem className="p-3 pl-6" to="/internet-banking/payments/utilities/gas" key="2-1-2">Gas</MenuItem>
            <MenuItem className="p-3 pl-6" to="/internet-banking/payments/utilities/water" key="2-1-3">Water</MenuItem>

          </SubMenu>


          <MenuItem className="p-3 pl-6" to="/internet-banking/payments/credit-card" key="2-2">Credit Card</MenuItem>
          <MenuItem className="p-3 pl-6" to="/internet-banking/payments/tax" key="2-3">Tax</MenuItem>
          <MenuItem className="p-3 pl-6" to="/internet-banking/payments/organization" key="2-4">Organization</MenuItem>
          <MenuItem className="p-3 pl-6" to="/internet-banking/payments/betting" key="2-5">Betting</MenuItem>


        </SubMenu>

        <MenuItem className="p-3 pl-6" to="/internet-banking/products" key="3">{t('Products')}</MenuItem>
        <MenuItem className="p-3 pl-6" to="/internet-banking/investments" key="4">{t('Investments')}</MenuItem>


        <SubMenu title={<span>{t('Applications')}</span>} key="5">

          <MenuItem className="p-3 pl-6" to="/internet-banking/applications/credit-card" key="5-1">
            {t('Credit Card')}
          </MenuItem>
          <MenuItem className="p-3 pl-6" to="/internet-banking/applications/loan" key="5-2">{t('Loan')}</MenuItem>
          <MenuItem className="p-3 pl-6" to="/internet-banking/applications/insurance" key="5-3">{t('Insurance')}</MenuItem>
        </SubMenu>


        <MenuItem to="/internet-banking/settings" className="p-3 pl-6" key="6">{t('Settings')}</MenuItem>

      </Menu>


    </div>
  );
};


export default Sidebar;
