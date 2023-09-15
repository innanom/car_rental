import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './styles/reset.scss';
import './styles/styles.scss';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/car_rental'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
