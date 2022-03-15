import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";

const GlobalStyle = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
  }

  body {
    font-family: 'Rubik', sans-serif;
  }
`

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <App/>
            </HashRouter>
            <GlobalStyle/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);


reportWebVitals();
