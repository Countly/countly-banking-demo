import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './css/tailwind.css';
import InternetBanking from './pages/InternetBanking';
import Login from './pages/Login';
import Header from './common/components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCookieText: true,
    };
  }

  render() {
    const { showCookieText } = this.state;
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
          <div style={{ display: showCookieText ? 'flex' : 'none' }} className="w-full bg-white border border-gray-300 fixed bottom-0 flex flex-col items-center text-lg px-2">
            <h3 className="text-2xl">This website uses cookies.</h3>
            
<p>We use cookies to personalise content and ads, to provide social media features, and to analyse our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. You consent to our cookies if you continue to use our website.</p>


<div className="flex flex-row">
<label className="m-2 select-none cursor-pointer" ><input type="checkbox" name="preferences" value="Preferences"/> Preferences</label>
<label className="m-2 select-none cursor-pointer" ><input type="checkbox" name="statistics" value="Statistics" /> Statistics</label>
<label className="m-2 select-none cursor-pointer" ><input type="checkbox" name="marketing" value="Marketing" /> Marketing</label>
</div>

            <button type="button" onClick={() => this.setState({ showCookieText: false })} className="bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4">OK</button>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
