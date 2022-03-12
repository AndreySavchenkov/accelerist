import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {HashRouter} from "react-router-dom";

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
        <HashRouter>
            <App/>
        </HashRouter>
        <GlobalStyle/>
    </Provider>,
    document.getElementById('root')
);


reportWebVitals();
