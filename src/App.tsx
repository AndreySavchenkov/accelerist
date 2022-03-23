import React from 'react';
import './App.css';
import {LoginPage} from "./components/Login/LoginPage";
import {Route, Routes} from "react-router-dom";
import {SearchPage} from "./components/Search/SearchPage";
import {MainForm} from "./components/Login/containers/main/MainForm";
import {PasswordReset} from "./components/Login/containers/password/PasswordReset";
import {PasswordResend} from "./components/Login/containers/password/PasswordResend";
import {PasswordNew} from "./components/Login/containers/password/PasswordNew";
import {SearchFoundPanel} from "./components/Search/containers/find/SearchFoundPanel";
import {Filter} from "./components/Search/containers/filter/Filter";
import {useSelector} from "react-redux";
import {RootStateT} from "./redux/store";
import {CompanyPage} from "./components/Company/CompanyPage";
import {DashboardPage} from "./components/Dashboard/DashboardPage";
import {FavoritesPage} from "./components/Favorites/FavoritesPage";
import {ProspectsPage} from "./components/Prospects/ProspectsPage";
import {ProspectsListPage} from "./components/ProspectsList/ProspectsListPage";



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
                        <Route path=":id" element={<CompanyPage/>} />
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
