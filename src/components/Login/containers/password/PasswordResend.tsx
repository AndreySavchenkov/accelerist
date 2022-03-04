import React from "react";
import styled from "styled-components";
import {Button} from "../../../general/Button";
import {LinkToLogin} from "../../../general/LinkToLogin";
import {LinkToSupport} from "../../../general/LinkToSapport";
import {ButtonTimer} from "../../../general/ButtonTimer";

export const PasswordResend = () => {


    return (
        <>
            <MainContainer>
                <Container>
                    <Title>Password Reset</Title>
                    <Text>Enter your email to receive instructions on how to reset your password.</Text>
                    <ButtonTimer text={"00:36"}/>
                </Container>
                <LinkToSupport/>
            </MainContainer>
            <LinkToLogin/>
        </>

    )
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  padding: 40px;
  background: #FFFFFF;
  border-radius: 6px;
  @media (max-width: 600px) {
    width: 263px;
  }
`
const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`
const Text = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 155%;
  color: #122434;
`
