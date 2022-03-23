import React, {FC} from "react";
import styled from "styled-components";
import headerLogo from "assets/img/headerLogo.png"



export const LoginHeader: FC = () => {

    return (
        <Container>
            <img src={headerLogo} alt="logo"/>
        </Container>
    )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #122434;
`