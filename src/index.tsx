import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { persistor, store } from './redux/store';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
  }

  body,div,p,span,a,header,main,footer,li,ul {
    font-family: 'Rubik', sans-serif;
  }
`;

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container!);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
      <GlobalStyle />
    </PersistGate>
  </Provider>,
);

reportWebVitals();
