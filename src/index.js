import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux'

import './index.css';
import App from './components/App';
import movies from './reducers';

const store=createStore(movies);
console.log('store',store);
// console.log('BEFORE STATE',store.getState());
// store.dispatch({type:'ADD_MOVIES',movies:[{name:'Superman'}]});
// console.log('AFTER STATE',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
