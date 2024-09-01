import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './Contexts/BudgetsContext';

ReactDOM.root(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

















/*import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './Contexts/BudgetsContext';

ReactDOM.root(
  <React.StrictMode>
    <BudgetsProvider>
      <App/>
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);*/