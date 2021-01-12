import React from 'react';
import ReactDOM from 'react-dom';
import './settings/index.css';
import BandPage from './pages/BandPage.js';
import reportWebVitals from './atoms/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BandPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
