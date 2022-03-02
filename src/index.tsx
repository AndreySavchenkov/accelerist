import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";

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
    <React.StrictMode>
        <App/>
        <GlobalStyle/>
    </React.StrictMode>,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
