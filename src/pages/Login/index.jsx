import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import { toast } from 'react-toastify';
import axios from 'axios';
import GreenButton from '../../common/components/GreenButton';
import TextInput from '../../common/components/TextInput';
import { connect } from "react-redux";
import { setUser } from "../../actions/userActions";
import { useSelector,useDispatch } from 'react-redux'

const Login = (props) => {
  const [customerID, setCustomerID] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState(1);
  const { t } = useTranslation();

  const { user } = useSelector(state => ({
    user: state.userReducer.user,
  }));

  const dispatch = useDispatch()


  const goSecondStep = () => {
    axios({
      url: 'https://api.banking-demo.tools.count.ly/user/login',
      method: 'POST',
      data: { customerID, password },
      headers: {
        'Content-Type': 'application/json',
      },
      crossDomain: true,
    })
      .then((response) => {
        if (response.data?.customerID) {
          dispatch(setUser(response.data));
          setStep(2);
        } else {
          window.alert('Wrong customerID or password');
          Countly.add_event({
            key: 'wrongAuthData',
            count: 1,
            segmentation: { customerID },
          });
          Countly.q.push(['userData.increment', 'WrongLoginCount']);
          Countly.q.push(['userData.save']); // send userData to server
          toast(<div>
            {' '}
            <strong>wrongAuthData</strong>
            {' '}
    event sent with
            {' '}
            <strong>{customerID}</strong>
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
        }
      });
  };

  const signInClicked = () => {
    if (verificationCode === '346578') {
      Countly.end_event('LoginOperation');
      toast(<div>
        {' '}
        <strong>LoginOperation</strong>
        {' '}
event ended to calculate
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

      Countly.user_details({
        name: user.name,
        email: user.email,
        phone: user.phone,
        picture: user.picture,
        gender: user.gender,
        byear: user.byear,
      });


      Countly.change_id(user.customerID, true);
      Countly.q.push(['userData.increment', 'SuccessfulLoginCount']);
      Countly.q.push(['userData.set', 'Has Loan', user.hasLoan]);
      Countly.q.push(['userData.set', 'Has Credit Card', user.hasCreditCard]);
      Countly.q.push(['userData.set', 'Has Investment', user.hasInvestment]);
      Countly.q.push(['userData.set', 'Has Active Mobile Banking', user.hasActiveMobileBanking]);
      Countly.q.push(['userData.set', 'QRCashWithdrawSuccess', user.wrCashWithdrawSuccess]);
      Countly.q.push(['userData.set', 'QRCashWithdrawUnsuccessful', user.wrCashWithdrawUnsuccessful]);
      Countly.q.push(['userData.set', 'QRCashWithdrawAttempt', user.wrCashWithdrawAttempt]);
      Countly.q.push(['userData.set', 'QR', user.QR]);
      Countly.q.push(['userData.save']);
      props.history.push('/internet-banking');
    } else {
      window.alert('Wrong verification code');
      Countly.add_event({
        key: 'wrongVerificationCode',
        count: 1,
      });
      Countly.q.push(['userData.increment', 'WrongVerificationCount']);
      Countly.q.push(['userData.save']); // send userData to server
      toast(<div>
        <strong>wrongVerificationCode</strong>
        {' '}
event sent
      </div>, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const firstStep = () => (
    <div className="w-3/6">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerId">
            { t('login.customerId') }
          </label>
          <TextInput id="customerId" onChange={(e) => setCustomerID(e.target.value)} value={customerID} className="w-full" type="text" placeholder="customer Id" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            { t('login.password') }
          </label>
          <TextInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full" placeholder="******************" />
        </div>
        <div className="flex items-center justify-between">
          <GreenButton onClick={() => goSecondStep()} title={t('login.nextButtonText')} />
        </div>
      </form>
    </div>
  );


  const secondStep = () => (
    <div className="w-3/6 bg-white shadow-md rounded px-8 pt-6 pb-10 m-4 border border-gray-300">
      { t('login.verificationText') }
      {' '}
(346578)
      <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 my-3 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setVerificationCode(e.target.value)} id="verificationCode" type="text" placeholder="*******" />

      <GreenButton onClick={() => signInClicked()} title={t('login.signInButtonText')} />

    </div>
  );


  return (
    <div className="flex p-10 justify-center items-center bg-darkcountly h-screen">
      { step === 1 ? firstStep() : secondStep() }
    </div>
  );
};


const mapStateToProps = (state) => {
  return state;
};



export default connect(mapStateToProps)(Login);