import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import { toast } from 'react-toastify';
import countlyLogo from './images/countly.png';
import Card from './components/Card';
import savingImage from './images/saving.svg';
import loanImage from './images/loan.svg';
import accountImage from './images/account.svg';
import customerImage from './images/customer.svg';
import CountlySlider from './components/CountlySlider';
import AccountSlider from './components/AccountSlider';
import SavingSlider from './components/SavingSlider';
import CustomerSlider from './components/CustomerSlider';
import LoanSlider from './components/LoanSlider';
import './index.css';


const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const cardClicked = (id, type) => {
    setActiveTab(id);
    Countly.add_event({
      key: 'cardClick',
      segmentation: { type },
    });
    toast(<div>
      {' '}
      <strong> cardClick</strong>
      {' '}
event sent with
      {' '}
      <strong>{type}</strong>
      {' '}
segmentation
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
    <div>
      <div className="row p-8">
        <div className="container mx-auto p-5">
          <div
            className="flex flex-row justify-between text-center flex-wrap"
            style={{ fontSize: '14px' }}
          >
            <Card
              photo={countlyLogo}
              title={t('Countly')}
              isActive={activeTab === 0}
              onClick={() => cardClicked(0, t('Countly'))}
            />

            <Card
              photo={customerImage}
              title={t('New Customer')}
              isActive={activeTab === 1}
              onClick={() => cardClicked(1, t('New Customer'))}
            />

            <Card
              photo={accountImage}
              title={t('Account')}
              isActive={activeTab === 2}
              onClick={() => cardClicked(2, t('Account'))}
            />

            <Card
              photo={loanImage}
              title={t('Loan')}
              isActive={activeTab === 3}
              onClick={() => cardClicked(3, t('Loan'))}
            />

            <Card
              photo={savingImage}
              title={t('Saving')}
              isActive={activeTab === 4}
              onClick={() => cardClicked(4, t('Saving'))}
            />
          </div>
        </div>
      </div>

      { activeTab === 0 && <CountlySlider /> }
      { activeTab === 1 && <CustomerSlider /> }
      { activeTab === 2 && <AccountSlider /> }
      { activeTab === 3 && <LoanSlider /> }
      { activeTab === 4 && <SavingSlider /> }


    </div>
  );
};


export default Home;
