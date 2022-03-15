import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {LinkToLogin} from "components/general/LinkToLogin";
import {LinkToSupport} from "components/general/LinkToSapport";
import {ButtonTimer} from "components/general/ButtonTimer";
import {Button} from "components/general/Button";
import {useDispatch} from "react-redux";
import {sendEmailAction} from "redux/login/loginSaga";

export const PasswordResend = () => {
    const [timer, setTimer] = useState(59);
    const dispatch = useDispatch()

    useEffect(() => {
        if (timer >= 1) {
            setTimeout(() => setTimer(timer - 1), 1000)
        }
    })

    const clickHandler = () => {
        const email = localStorage.getItem('emailReset')
        if(email) {
            dispatch(sendEmailAction(email));
            setTimer(59)
        }
    }

    return (
        <>
            <MainContainer>
                <Container>
                    <Title>Password Reset</Title>
                    <Text>A link was sent to your email to confirm password reset and create a new one</Text>
                    {
                        (timer === 0) ?
                            <Button clickHandler={clickHandler} text={'Resend'}/> : <ButtonTimer text={`00:${timer}`}/>
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
