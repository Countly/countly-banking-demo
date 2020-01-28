import React from 'react';
import Header from '../../common/components/header/Header';
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <Header />

        <div>
          <div className="row p-8">
            <div className="container mx-auto p-5">
              <div
                className="flex flex-row justify-between text-center flex-wrap"
                style={{ fontSize: '14px' }}
              >
                <Card
                  photo={countlyLogo}
                  title="Countly"
                  isActive={activeTab === 0}
                  onClick={() => this.setState({ activeTab: 0 })}
                />

                <Card
                  photo={customerImage}
                  title="Be a Customer"
                  isActive={activeTab === 1}
                  onClick={() => this.setState({ activeTab: 1 })}
                />

                <Card
                  photo={accountImage}
                  title="Account"
                  isActive={activeTab === 2}
                  onClick={() => this.setState({ activeTab: 2 })}
                />

                <Card
                  photo={loanImage}
                  title="Loan"
                  isActive={activeTab === 3}
                  onClick={() => this.setState({ activeTab: 3 })}
                />

                <Card
                  photo={savingImage}
                  title="Saving"
                  isActive={activeTab === 4}
                  onClick={() => this.setState({ activeTab: 4 })}
                />
              </div>
            </div>
          </div>

          <CountlySlider isActive={activeTab === 0} />
          <CustomerSlider isActive={activeTab === 1} />
          <AccountSlider isActive={activeTab === 2} />
          <LoanSlider isActive={activeTab === 3} />
          <SavingSlider isActive={activeTab === 4} />
        </div>
      </div>
    );
  }
}

export default Home;
