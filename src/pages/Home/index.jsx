import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
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
import { updatePageLocation } from '../../actions/generalActions';
import './index.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  componentDidMount() {
    this.props.updatePageLocation('home');
  }

  render() {
    const { t } = this.props;
    const { activeTab } = this.state;
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
                onClick={() => this.setState({ activeTab: 0 })}
              />

              <Card
                photo={customerImage}
                title={t('home.customerCard')}
                isActive={activeTab === 1}
                onClick={() => this.setState({ activeTab: 1 })}
              />

              <Card
                photo={accountImage}
                title={t('home.accountCard')}
                isActive={activeTab === 2}
                onClick={() => this.setState({ activeTab: 2 })}
              />

              <Card
                photo={loanImage}
                title={t('home.loanCard')}
                isActive={activeTab === 3}
                onClick={() => this.setState({ activeTab: 3 })}
              />

              <Card
                photo={savingImage}
                title={t('home.savingCard')}
                isActive={activeTab === 4}
                onClick={() => this.setState({ activeTab: 4 })}
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
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  updatePageLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Home));
