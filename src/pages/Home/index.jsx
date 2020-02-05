import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
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
              title={t('home.countlyCard')}
              isActive={activeTab === 0}
              onClick={() => cardClicked(0, t('home.countlyCard'))}
            />

            <Card
              photo={customerImage}
              title={t('home.customerCard')}
              isActive={activeTab === 1}
              onClick={() => cardClicked(1, t('home.customerCard'))}
            />

            <Card
              photo={accountImage}
              title={t('home.accountCard')}
              isActive={activeTab === 2}
              onClick={() => cardClicked(2, t('home.accountCard'))}
            />

            <Card
              photo={loanImage}
              title={t('home.loanCard')}
              isActive={activeTab === 3}
              onClick={() => cardClicked(3, t('home.loanCard'))}
            />

            <Card
              photo={savingImage}
              title={t('home.savingCard')}
              isActive={activeTab === 4}
              onClick={() => cardClicked(4, t('home.savingCard'))}
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
