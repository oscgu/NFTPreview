import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Preview from './Preview';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reactDom.render(
  <React.StrictMode>
    <Preview />
  </React.StrictMode>,
  document.getElementById('preview')
)

reportWebVitals();
