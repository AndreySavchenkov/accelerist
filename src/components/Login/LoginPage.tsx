import React, {FC} from "react";
import {LoginHeader} from "./LoginHeader";
import styled from "styled-components";
import backgroundLogin from "assets/img/loginBackground.jpg"
import {Outlet} from "react-router-dom";


export const LoginPage: FC = () => {

    return (
        <>
            <LoginHeader/>
            <Container>
                <Outlet/>
            </Container>
        </>
    )
}

const Container = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 72px;
  width: 100%;
  min-height: 100vh;
  background: center / cover no-repeat url(${backgroundLogin});
`