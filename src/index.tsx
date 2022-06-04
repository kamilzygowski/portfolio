import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import MobileVersion from './MobileVersion/MobileVersion';

ReactDOM.render(
  //<React.StrictMode>
  <div>
  {window.innerWidth > 800 ? <App /> : <MobileVersion/>}
  </div>

  //</React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
