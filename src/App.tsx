import React from 'react';
import './App.css';
import {LoginPage} from "./components/Login/LoginPage";
import {Route, Router, Routes} from "react-router-dom";
import {SearchPage} from "./components/Search/SearchPage";


function App() {
    return (
        <>

                {/*<Routes>*/}
                {/*    <Route path="*" element={<LoginPage/>}/>*/}
                {/*    <Route path={"accelerist/*"}  element={<LoginPage/>}/>*/}
                {/*    /!*<Route path="expenses" element={<Expenses />} />*!/*/}
                {/*    /!*<Route path="invoices" element={<Invoices />} />*!/*/}
                {/*</Routes>*/}
                {/*<LoginPage/>*/}
                <SearchPage/>
        </>
    );
}


export default App;
