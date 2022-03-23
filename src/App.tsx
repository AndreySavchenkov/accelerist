import React from 'react';
import './App.css';
import {
    LoginPage,
    SearchPage,
    MainForm,
    PasswordReset,
    PasswordResend,
    PasswordNew,
    Filter,
    CompanyPage,
    DashboardPage,
    FavoritesPage,
    ProspectsPage,
    ProspectsListPage,
    SearchFoundPanel
} from "components";
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStateT} from "./redux/store";


function App() {

    let accessToken = useSelector((state: RootStateT) => state.login.accessToken)

    return (
        <>
            {accessToken ?
                (
                    <Routes>
                        <Route path={"/"} element={<SearchPage/>}>
                            <Route index element={<SearchFoundPanel/>}/>
                            <Route path="filter" element={<Filter/>}/>
                        </Route>
                        <Route path="/dashboard" element={<DashboardPage/>}/>
                        <Route path="/favorites" element={<FavoritesPage/>}/>
                        <Route path="/prospects" element={<ProspectsPage/>}/>
                        <Route path="/prospects/prospects-list" element={<ProspectsListPage/>}/>
                        <Route path=":id" element={<CompanyPage/>}/>
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
