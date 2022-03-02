import React from "react";
import {LoginHeader} from "./LoginHeader";
import styled from "styled-components";
import backgroundLogin from "assets/img/loginBackground.jpg"
import {MainForm} from "./MainForm";

export const LoginPage = () => {
    return (
        <>
            <LoginHeader/>
            <Container>
                <MainForm/>
            </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 72px;
  width: 100%;
  height: 90vh;
  background: center / cover no-repeat url(${backgroundLogin});
`