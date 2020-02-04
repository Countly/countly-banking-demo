import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import Countly from '../../helpers/countly';


Countly.sharedInstance().track_pageview('Home');

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();


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
              onClick={() => setActiveTab(0)}
            />

            <Card
              photo={customerImage}
              title={t('home.customerCard')}
              isActive={activeTab === 1}
              onClick={() => setActiveTab(1)}
            />

            <Card
              photo={accountImage}
              title={t('home.accountCard')}
              isActive={activeTab === 2}
              onClick={() => setActiveTab(2)}
            />

            <Card
              photo={loanImage}
              title={t('home.loanCard')}
              isActive={activeTab === 3}
              onClick={() => setActiveTab(3)}
            />

            <Card
              photo={savingImage}
              title={t('home.savingCard')}
              isActive={activeTab === 4}
              onClick={() => setActiveTab(4)}
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
