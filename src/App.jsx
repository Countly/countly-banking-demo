import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './css/tailwind.css';
import InternetBanking from './pages/InternetBanking';
import Login from './pages/Login';
import Header from './common/components/Header';
import { withTranslation } from 'react-i18next';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCookieText: true,
    };
  }

  render() {
    const { showCookieText } = this.state;
    const { t } = this.props;
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/countly-banking-demo" exact>
              <Home />
            </Route>
            <Route path="/internet-banking/login">
              <Login />
            </Route>
            <Route path="/internet-banking" exact>
              <InternetBanking />
            </Route>
          </Switch>
          <div style={{ display: showCookieText ? 'flex' : 'none' }} className="w-full bg-white border border-gray-300 fixed bottom-0 flex flex-col items-center text-lg p-2">
            <h3 className="text-2xl">{ t('common.cookieAreaTitle') }</h3>

            <p>{ t('common.cookieAreaContent') }</p>


            <div className="flex flex-row">
              <label htmlFor="preferences" className="m-2 select-none cursor-pointer">
                <input type="checkbox" name="preferences" id="preferences" value="Preferences" />
                {' '}
Preferences
              </label>
              <label htmlFor="statistics" className="m-2 select-none cursor-pointer">
                <input type="checkbox" name="statistics" id="statistics" value="Statistics" />
                {' '}
Statistics
              </label>
              <label htmlFor="marketing" className="m-2 select-none cursor-pointer">
                <input type="checkbox" name="marketing" id="marketing" value="Marketing" />
                {' '}
Marketing
              </label>
            </div>

            <button type="button" onClick={() => this.setState({ showCookieText: false })} className="bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4">OK</button>
          </div>
        </div>
      </Router>
    );
  }
}

export default withTranslation()(App);
