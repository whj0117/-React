/*
 * @Author: whj0117
 * @Date: 2022-05-05 21:03:35
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './03-hooks/05-useEffect2-案例';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // <React.StrictMode>
    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
