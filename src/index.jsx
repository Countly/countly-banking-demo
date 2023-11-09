import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import Countly from 'countly-sdk-web';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import userReducer from './reducers/userReducer.js';

window.Countly = Countly;

Countly.init({
  debug: true,
  require_consent: false,
  app_key: '49b500e501862aaabd078fdffccd097d8fcb3d86',
  url: 'https://demo-ui.count.ly',
  remote_config: true,
});
Countly.track_sessions();
Countly.track_clicks();
Countly.track_scrolls();
Countly.track_forms();
Countly.track_errors();
Countly.track_links();

const allEnhancers = compose(
  applyMiddleware(thunk),
);

const rootReducer = combineReducers({
  userReducer,
});

const store = createStore(rootReducer, { }, allEnhancers);


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
