import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux'
// import { configureStore } from '@reduxjs/toolkit'

import './index.css';
import App from './components/App';
import movies from './reducers';

const store=createStore(movies);
console.log('store',store);
console.log('STATE',store.getState());
// console.log('STATE',store.get)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
