import React from 'react';
import {
  Switch, Route, withRouter,
} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Countly from 'countly-sdk-web';
import Home from './pages/Home';
import './css/tailwind.css';
import InternetBanking from './pages/InternetBanking';
import Login from './pages/Login';
import Header from './common/components/Header';
import './helpers/countly';
import About from './pages/About';
import Contact from './pages/Contact';
import ATM from './pages/ATM';
import Fees from './pages/Fees';

class App extends React.Component {
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      Countly.track_pageview(location.pathname);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  state = {
    showCookieText: true,
  }




  render() {
    const { showCookieText } = this.state;
    const { t } = this.props;

    return (
      <div>
        <Header />

        <Switch>
          <Route path="/countly-banking-demo" component={Home} exact />

          <Route path="/about" component={About} exact />

          <Route path="/contact" component={Contact} exact />

          <Route path="/atm" component={ATM} exact />

          <Route path="/fees" component={Fees} exact />

          <Route path="/internet-banking/login" component={Login} exact />

          <Route path="/internet-banking" component={InternetBanking} />

        </Switch>
        <div style={{ display: showCookieText ? 'flex' : 'none' }} className="w-full bg-white border border-gray-300 fixed bottom-0 flex flex-col items-center text-lg p-2">
          <h3 className="text-2xl">{ t('common.cookieAreaTitle') }</h3>

          <p>{ t('common.cookieAreaContent') }</p>

          <div className="flex flex-row">
            <label htmlFor="preferences" className="m-2 select-none cursor-pointer">
              <input type="checkbox" name="preferences" id="preferences" value="Preferences" />
              {' '}
              { t('common.cookieAreaText1') }
            </label>
            <label htmlFor="statistics" className="m-2 select-none cursor-pointer">
              <input type="checkbox" name="statistics" id="statistics" value="Statistics" />
              {' '}
              { t('common.cookieAreaText2') }
            </label>
            <label htmlFor="marketing" className="m-2 select-none cursor-pointer">
              <input type="checkbox" name="marketing" id="marketing" value="Marketing" />
              {' '}
              { t('common.cookieAreaText3') }
            </label>
          </div>

          <button type="button" onClick={() => this.setState({ showCookieText: false })} className="bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4">{t('common.cookieAreaButtonText')}</button>
        </div>
      </div>
    );
  }
}

export default withTranslation()(withRouter(App));
