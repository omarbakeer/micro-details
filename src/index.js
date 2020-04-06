import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './fonts/Qanelas-Regular.ttf';
// import './fonts/icofont.woff2';
import MainContainer from 'components/MainContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
