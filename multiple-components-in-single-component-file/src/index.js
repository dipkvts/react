import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyDefaultComponent from './MyComponent';
import {My2ndComponent,My3rdComponent} from './MyComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyDefaultComponent />
    <My2ndComponent />
    <My3rdComponent />
  </React.StrictMode>
);

reportWebVitals();
