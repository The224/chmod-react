import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Navbar from './components/layout/Navbar';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="layout">
      <Navbar />
      <App />
      {/* <Footer /> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
