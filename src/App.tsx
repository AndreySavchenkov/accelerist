import React from 'react';
import './App.css';
import {LoginPage} from "./components/Login/LoginPage";
import {Route, Routes} from "react-router-dom";
import {SearchPage} from "./components/Search/SearchPage";
import {MainForm} from "./components/Login/containers/main/MainForm";
import {PasswordReset} from "./components/Login/containers/password/PasswordReset";
import {PasswordResend} from "./components/Login/containers/password/PasswordResend";
import {PasswordNew} from "./components/Login/containers/password/PasswordNew";
import {SearchFoundPanel} from "./components/Search/find/SearchFoundPanel";
import {Filter} from "./components/Search/filter/Filter";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";


function App() {

    let accessToken = useSelector((state: RootState) => state.login.accessToken)

    return (
        <>
            {accessToken ?
                (
                    <Routes>
                        <Route path={"/"} element={<SearchPage/>}>
                            <Route index element={<SearchFoundPanel/>}/>
                            <Route path="filter" element={<Filter/>}/>
                        </Route>
                    </Routes>
                )
                :
                (
                    <Routes>
                        <Route path="/" element={<LoginPage/>}>
                            <Route index element={<MainForm/>}/>
                            <Route path="reset" element={<PasswordReset/>}/>
                            <Route path="resend" element={<PasswordResend/>}/>
                            <Route path="change_password" element={<PasswordNew/>}/>
                        </Route>
                    </Routes>
                )
            }
        </>
    );
}


export default App;
