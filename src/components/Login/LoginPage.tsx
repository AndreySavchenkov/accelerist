import React from "react";
import {LoginHeader} from "./LoginHeader";
import styled from "styled-components";
import backgroundLogin from "assets/img/loginBackground.jpg"
import {PasswordNew} from "./containers/password/PasswordNew";
import {PasswordResend} from "./containers/password/PasswordResend";
import {PasswordReset} from "./containers/password/PasswordReset";
import {MainForm} from "./containers/main/MainForm";
import {Route, Routes} from "react-router-dom";


export const LoginPage = () => {
    return (
        <>
            <LoginHeader/>
            <Container>
                <Routes>
                    <Route path="/" element={<MainForm/>}/>
                    <Route path="/reset" element={<PasswordReset/>}/>
                    <Route path="/resend" element={<PasswordResend/>}/>
                    <Route path="/new" element={<PasswordNew/>}/>
                </Routes>
            </Container>
        </>
    )
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 72px;
  width: 100%;
  min-height: 100vh;
  background: center / cover no-repeat url(${backgroundLogin});
`