import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import GreenButton from '../../common/components/GreenButton';
import TextInput from '../../common/components/TextInput';


const Login = (props) => {
  Countly.start_event('LoginOperation');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState(1);
  const { t } = useTranslation();


  const goSecondStep = () => {
    if (username === '123987' && password === '123456') {
      setStep(2);
    } else {
      window.alert('Wrong username or password');
      Countly.add_event({
        key: 'wrongAuthData',
        count: 1,
        segmentation: { username },
      });
    }
  };

  const signInClicked = () => {
    if (verificationCode === '346578') {
      Countly.end_event('LoginOperation');
      fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then(({ results }) => {
          const data = results[0];
          Countly.user_details({
            name: `${data.name.first} ${data.name.last}`,
            username: data.login.username,
            email: data.email,
            organization: 'Countly',
            phone: '+37112345678',
            picture: data.picture.large,
            gender: data.male,
            byear: 1987,
          });
        });

      Countly.change_id('myNewId');
      props.history.push('/internet-banking');
    } else {
      window.alert('Wrong verification code');
      Countly.add_event({
        key: 'wrongVerificationCode',
        count: 1,
      });
    }
  };

  const firstStep = () => (
    <div className="w-3/6">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerId">
            { t('login.customerId') }
(123987)
          </label>
          <TextInput id="customerId" onChange={(e) => setUsername(e.target.value)} value={username} className="w-full" type="text" placeholder="customer Id" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            { t('login.password') }
(123456)

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


export default Login;
