import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthorQuiz from './components/AuthorQuiz/AuthorQuiz';


const root = ReactDOM.render(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthorQuiz />
  </React.StrictMode>
);


if(module.hot){
  module.hot.start();
}
reportWebVitals();
