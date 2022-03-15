import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {LinkToLogin} from "../../../general/LinkToLogin";
import {LinkToSupport} from "../../../general/LinkToSapport";
import {ButtonTimer} from "../../../general/ButtonTimer";
import {Button} from "../../../general/Button";

export const PasswordResend = () => {
    const [timer, setTimer] = useState(59);

    useEffect(() => {
        if (timer >= 1) {
            setTimeout(() => setTimer(timer - 1), 1000)
        }
    })

    return (
        <>
            <MainContainer>
                <Container>
                    <Title>Password Reset</Title>
                    <Text>Enter your email to receive instructions on how to reset your password.</Text>
                    {
                        (timer === 0) ? <Button text={'Resend'}/> : <ButtonTimer text={`00:${timer}`}/>
                    }
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
