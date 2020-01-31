import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { updatePageLocation } from '../../actions/generalActions';
import GreenButton from '../../common/components/GreenButton';
import TextInput from '../../common/components/TextInput';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }


  componentDidMount() {
    const { updatePageLocation } = this.props;
    updatePageLocation('internet-banking');
  }

  render() {
    const { t } = this.props;

    const { step } = this.state;

    const firstStep = () => (
      <div className="w-3/6">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerId">
              { t('login.customerId') }
            </label>
            <TextInput id="customerId" className="w-full" type="text" placeholder="customer Id" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              { t('login.password') }

            </label>
            <TextInput id="password" type="password" className="w-full" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <GreenButton onClick={() => this.setState({ step: 2 })} title={t('login.nextButtonText')} />

          </div>
        </form>
      </div>
    );


    const secondStep = () => (
      <div className="w-3/6 bg-white shadow-md rounded px-8 pt-6 pb-10 m-4 border border-gray-300">
        { t('login.verificationText') }
        <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 my-3 leading-tight focus:outline-none focus:shadow-outline" id="verificationCode" type="text" placeholder="*******" />
        <Link to="/internet-banking">
          <GreenButton title={t('login.signInButtonText')} />
        </Link>
        <GreenButton title={t('login.resendVerificationCodeButtonText')} />

      </div>
    );


    return (
      <div className="flex p-10 justify-center items-center bg-darkcountly h-screen">
        { step === 1 ? firstStep() : secondStep() }
      </div>
    );
  }
}


const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  updatePageLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Login));
