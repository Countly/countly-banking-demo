import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WhiteButton from '../../../common/components/WhiteButton';
import TextInput from '../../../common/components/TextInput';

const CustomerSlider = () => {
  const [logs, setLogs] = useState([]);
  const [logDisplay, setLogDisplay] = useState(false);
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const showModal = () => {
    setLogDisplay(!logDisplay);
    fetch('https://try.count.ly/o?api_key=4ea73d2c722951b73e9ed1dc77bc6b47&app_id=5e39515c9169262b0bcb6175&method=user_details&uid=ba86c8a446a7338e942e44bb7a26762fced2a673&period=30days&display_loader=false')
      .then((response) => response.json())
      .then((response) => {
        const { events } = response;
        const arr = [];
        events.forEach((event) => {
          if (event.key === '[CLY]_view') {
            arr.push(`Event = View , Page = ${event.sg.name} , Duration = ${event.dur}`);
          } else {
            arr.push(`Event = ${event.key} ${event.dur !== 0 ? `, Duration = ${event.dur}` : ''}`);
          }
        });
        setLogs(arr);
      });
  };


  return (
    <div
      className="slider text-white px-10 flex flex-row"
    >
      <div className="my-auto w-1/2 p-4">
        <h1 className="text-5xl">{t('Be a Customer in Countly Bank')}</h1>
        <p>
          {t('To become a Countly Bank customer, all you have to do is fill out the form below! Apply now, quickly and easily, without the need to go to the branch.')}
        </p>
        <TextInput
          type="email"
          placeholder="jane@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <WhiteButton onClick={() => { showModal(); }} title={t('Send')} />
      </div>
      <div className={`my-auto w-1/2 overflow-y-auto h-64 bg-white text-darkcountly ${logDisplay ? '' : 'hidden'}`}>
        {logs.map((log) => <div className="m-1">{log}</div>) }
      </div>

    </div>

  );
};


export default CustomerSlider;
