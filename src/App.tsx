import React, {useEffect, useState} from 'react';
import './App.css';
import {LoginPage} from "./components/Login/LoginPage";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {SearchPage} from "./components/Search/SearchPage";
import {MainForm} from "./components/Login/containers/main/MainForm";
import {PasswordReset} from "./components/Login/containers/password/PasswordReset";
import {PasswordResend} from "./components/Login/containers/password/PasswordResend";
import {PasswordNew} from "./components/Login/containers/password/PasswordNew";
import {SearchFoundPanel} from "./components/Search/find/SearchFoundPanel";
import {Filter} from "./components/Search/filter/Filter";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";


// const accessToken = localStorage.getItem('accessToken')

function App() {

    let accessToken = useSelector((state:RootState)=>state.login.accessToken)

    // let navigate = useNavigate();
    // if(!accessToken){
    //     navigate("/", { replace: true })
    // }
    // console.log(accessToken)


    // const[accessToken, setAccessToken] = useState<string | null>(null);
    //

    // let accessToken;





    // const accessToken = localStorage.getItem('accessToken');
    // console.log(accessToken)


    return (
        <>
            {/*{accessToken ? <Navigate to="/" replace={true} /> : ''}*/}
            {accessToken ? (

                <Routes>
                    {/*<Route path="/" element={<LoginPage/>}>*/}
                    {/*    <Route index element={<MainForm/>}/>*/}
                    {/*    <Route path="reset" element={<PasswordReset/>}/>*/}
                    {/*    <Route path="resend" element={<PasswordResend/>}/>*/}
                    {/*    <Route path="new" element={<PasswordNew/>}/>*/}
                    {/*</Route>*/}
                    <Route path={"/search"}  element={<SearchPage/>}>
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
                            <Route path="new" element={<PasswordNew/>}/>
                        </Route>
                        {/*<Route path={"/search"}  element={<SearchPage/>}>*/}
                        {/*    <Route index element={<SearchFoundPanel/>}/>*/}
                        {/*    <Route path="filter" element={<Filter/>}/>*/}
                        {/*</Route>*/}
                    </Routes>
                )}



        </>
    );
}


export default App;
