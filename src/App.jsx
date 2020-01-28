import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './css/tailwind.css';

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
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <div style={{ display: showCookieText ? 'flex' : 'none' }} className="w-full bg-white border border-gray-300 fixed bottom-0 flex justify-between items-center text-lg px-2">
This site uses cookies to analyse traffic, remember your preferences, and optimise your experience.
            <button type="button" onClick={() => this.setState({ showCookieText: false })} className="bg-countly-700 hover:bg-countly-800 text-white font-bold py-2 px-4">Close</button>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
