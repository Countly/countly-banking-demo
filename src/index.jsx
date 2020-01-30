import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import dataReducer from './reducers/DataReducer';
import './i18n';

const allEnhancers = compose(
  applyMiddleware(thunk),
);

const rootReducer = combineReducers({
  dataReducer,
});


const store = createStore(rootReducer, {}, allEnhancers);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();